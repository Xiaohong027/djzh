<template>
    <div class="question-detail">
        <div class="question-title">
            <span class="icon">问</span>
            <p class="title">{{questionTitle}}</p>
            <ul class="tag">
                <li class="tag-item" v-for="(item,index) in tags" :key='index'>{{item}}</li>
            </ul>
            
            <div class="user-info">
                <img :src="userimg" alt="" >
                <span class="user">{{username}}</span>
                <span class="time">{{time}}前提问</span>
                <div v-if="joined" class="btn-wrapper">
                    <input type="button" value="已参加"  class="btn-joined">
                </div>
                <div v-else-if="joining" class="btn-wrapper">
                    <span class="time">{{[least_rv_time,join_time] | formatInterval}}</span>
                    <input type="button" value="取消回访"  class="btn_joining" @click="cancelReturnvisit">
                </div>
                <div v-else class="btn-wrapper">
                    <span class="time">回访期限：{{least_rv_time}}天</span>
                    <input type="button" value="参加回访" @click="joinReturnvisit" class="btn-submit">
                </div>     
            </div>
        </div>
        <hr>
        <!-- 问题详情外层包裹 -->
        <div class="question-wrapper">
            <div class="votes-wrapper">
                <div class="votes">
                    <span class="num">{{up_votes}}</span>
                    <br>
                    <span class="up" @click="likeQue"></span>
                </div>
                <div class="votes">
                    <span class="num">{{down_votes}}</span>
                    <br>
                    <span class="down" @click='disLikeQue'></span>
                </div>
            </div>
            <!-- 问题详情 -->
            <div class="ql-editor" v-html="questionDetail"></div>
        </div>

        <!-- 答案列表 -->
        <answer-list v-if='answerList.length > 0' :answerList = 'answerList' @refreshVotes='getQueDetail'></answer-list>

        <returnvisit-list v-if='returnvisitList.length > 0' :returnvisitList = 'returnvisitList' @refreshVotes='getQueDetail'></returnvisit-list>


        <!-- 回答问题 -->
        <answer></answer>
        <Advertisement></Advertisement>
    </div>
</template>
<script>
import answer from './answer/Answer'
import answerList from './answer/AnswerList'
import returnvisitList from './answer/ReturnvisitList'
import Advertisement from '../advertisement/Advertisement';
import Utils from '../../vuex/util.js';
import { quillEditor } from 'vue-quill-editor'
import { QUESTION_DETAIL, VOTE, JOIN_RETURNVISIT ,CANCLE_RETURNVISIT} from '@/api/api'

export default {
    components:{
        answer,
        answerList,
        returnvisitList,
        Advertisement
    },

    data(){
        return {
            questionTitle:'',
            username:'',
            avator:require('@/assets/images/user.png'),
            userimg: '',
            time: '',
            tags:[],
            userId:'',
            questionDetail:"", 
            q_id:0,
            content:"",
            up_votes:0,
            join_time:null,
            least_rv_time:'',
            joined: false,
            joining: false,
            down_votes:0,
            answerList:[],
            returnvisitList:[],
            editorOption: {
                modules: {
                    toolbar: [
                        [{ 'size': ['small', false, 'large'] }],
                        ['bold', 'italic'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        ['link', 'image']
                    ],
                    history: {
                        delay: 1000,
                        maxStack: 50,
                        userOnly: false
                    }
                },
                placeholder:' '
            }
        }
    },
    methods:{
        // 获取问题详情/回答列表
        getQueDetail(){
            let para = {
                q_id: this.q_id
            }
            QUESTION_DETAIL(para).then(res=>{
                let data  = res.data
                if(data.code === 200){
                    this.answerList = data.data.answerList
                    this.returnvisitList = data.data.returnvisitList
                    this.questionTitle = data.data.questionDetail.title
                    this.questionDetail = data.data.questionDetail.content
                    this.least_rv_time = data.data.questionDetail.least_rv_time
                    this.username = data.data.questionDetail.username
                    this.tags = data.data.questionDetail.tags.split(',')
                    this.up_votes = data.data.questionDetail.up_votes
                    this.down_votes = data.data.questionDetail.down_votes
                    this.join_time = data.data.join_time
                    this.userimg = data.data.questionDetail.img_url == null? this.avator : data.data.questionDetail.img_url
                    this.joined = (this.join_time=='joined')?true:false;
                    this.joining = this.join_time?true:false;
                    let time = data.data.questionDetail.create_time
                    // 格式化提问时间
                    let createTime = new Date(time);
                    this.time = this.formatTime(createTime)
                }
            })    
        },
        joinReturnvisit(){
            let para = {
                q_id: this.q_id
            }
            JOIN_RETURNVISIT(para).then(res=>{
                if(res.data.code == 200){
                    this.joining = true;
                }
                else{
                    alert(res.data.msg);
                }
            })
        },
        cancelReturnvisit(){
            let para = {
                q_id: this.q_id
            }
            CANCLE_RETURNVISIT(para).then(res=>{
                if(res.data.code == 200){
                    this.joining=false;
                }
                else{
                    alert(res.data.msg);
                }
            })
        },
        // 格式化时间
        formatTime(createTime){
            let now = new Date();
            let sec = (now - createTime)/1000;
            let min = sec/60;
            let hour = min/60;
            let day = hour/24
            let mounth = day/30 
            let year = mounth/12

            let time;
            if(Math.round(min) < 1){
                time = Math.round(sec)+'秒'
            }
            else if(Math.round(hour) < 1){
                time = Math.round(min) + '分钟'
            }
            else if(Math.round(day)< 1){
                time = Math.round(hour) + '小时'
            }
            else if(Math.round(mounth)<1){
                time = Math.round(day) + '天'
            }
            else if (Math.round(year)<1){
                time = Math.round(mounth) + '月'
            }else {
                time = Math.round(year) + '年'
            }
            return time
        },

        // 投票赞成
        likeQue(){
           let param = {
               type: 0,     // 0:question, 1: answer, 2:returnvisit
               vote: 1,     // 1:赞成
               q_id: this.q_id
           }
           VOTE(param).then(res=>{
               if(res.data.code == 200){
                   this.getQueDetail()
               }
               else{
                    alert(res.data.msg);
               }
           })

        },

        // 投票反对
        disLikeQue(){
            let param = {
                type: 0,     // 0:question, 1: answer
                vote: -1,    // -1: 反对
                q_id: this.q_id
            }
            VOTE(param).then(res=>{
                if(res.data.code == 200){
                    this.getQueDetail()
                }
                else{
                    alert(res.data.msg);
               }
            })
        }
    },
    filters:{
        formatInterval(arr){
            let now = new Date();
            let join_time = arr[1]?new Date(arr[1]):new Date();
            let least_rv_time = arr[0];
            let sec = least_rv_time*86400 - (now -join_time)/1000;
            let min = sec/60;
            let hour = min/60;
            let day = hour/24
            let mounth = day/30 
            let year = mounth/12

            let time ='剩余';
            if(Math.round(sec)<=0){
                return '可回访';
            }
            else if(Math.round(min) < 1){
                time += Math.round(sec)+'秒'
            }
            else if(Math.round(hour) < 1){
                time += Math.round(min) + '分钟'
            }
            else if(Math.round(day)< 1){
                time += Math.round(hour) + '小时'
            }
            else if(Math.round(mounth)<1){
                time += Math.round(day) + '天'
            }
            else if (Math.round(year)<1){
                time += Math.round(mounth) + '月'
            }else {
                time += Math.round(year) + '年'
            }
            return time
        }

    },
    mounted(){      
        var that =this;
        Utils.$on('refresh', function(msg) {
            //也可以用 getQueDetail
            that.$router.go(0);
        })
    },
    created(){
        this.q_id = this.$route.params.q_id;
        this.getQueDetail();
    }
}
</script>
<style lang="less" scoped>
    @import url(../../assets/css/mixin.less);
    .question-detail {
        width: 1116px;
        margin:29px auto 0;
        font-size: 14px;
        text-align: left;

        // 问题标题
        .question-title {
            // 图标
            .icon {
                display: inline-block;
                width:30px;
                height: 30px;
                line-height: 30px;
                font-size:14px;
                text-align: center;
                background-color:#fff;
                color: @green;
                border:1px solid @green;
                box-sizing: border-box;
                border-radius: 50%;
            }

            // 问题标题
            .title {
                display: inline-block;
                font-size: 20px;
                font-weight: 500;
                color: #333;
                margin-left: 10px;
            }
            .tag {
                display: inline-block;
                .tag-item {
                    display: inline-block;
                    padding: 3px 5px;
                    background-color: #ebf5f3;
                    color:@green;
                    margin-left: 5px;
                }
            }

            // 用户
            .user-info {
                font-size: 12px;
                margin: 15px 0 20px;
                img {
                    width: 58px;
                    height: 58px;
                }
                .user {
                    color: @green;
                    font-weight: 600;
                    margin:0 10px;
                    font-size: 16px;
                }

                .time {
                    color:#999;
                }
                // 回访按钮
                .btn-wrapper {
                    float:right;  
                    margin-top:48px;   

                    .btn-submit,
                    .btn_joining {
                        display: inline-block;
                        width:106px;
                        height:30px;
                        line-height: 30px;
                        background-color: @green;
                        border:none;
                        color:#fff;
                        border-radius: 4px;
                        text-align: center;
                        font-size: 16px;
                        letter-spacing: 1px;
                    }
                    .btn-joined{
                        display: inline-block;
                        width:70px;
                        height:30px;
                        line-height: 30px;
                        background-color: @green;
                        border:none;
                        color:#fff;
                        border-radius: 4px;
                        text-align: center;
                        font-size: 16px;
                        letter-spacing: 1px;

                    }
                }
            }
            
        }

        .question-wrapper{
            // 投票
            .votes-wrapper{
                width:150px;
                margin-bottom: 5px;

                .votes{
                    display: inline-block;
                    width:60px;
                    height: 32px;
                    background-color: #f3f3f3;
                    text-align: center;
                    font-size: 0;
                    border-radius: 3px;
                    box-sizing: border-box;
                    vertical-align: top;

                    &:hover {
                        background-color: #fff7e2;
                    }


                    .num {
                        font-size: 12px;
                    }

                    // 箭头
                    .up,
                    .down {
                        display: inline-block;
                        border:7px solid transparent;
                        border-radius: 2px;
                        cursor: pointer;

                        
                    }
                    .up{
                        margin-top:-2px;
                        border-bottom: 10px solid #577575;

                        &:hover{
                            border-bottom-color: #f6a623;
                        }
                        
                    }
                    .down {
                        margin-top: 5px;
                        border-top: 10px solid #577575;

                        &:hover{
                            border-top-color: #f6a623;
                        }
                    }
                }
            }

            // 富文本编辑器
            .ql-editor{
                display: inline-block;
                margin-left:30px;
                width: 750px;
                padding: 0px;		   
            }
        }
    }



</style>


