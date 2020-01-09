<template>
    <ul class="answer-list">
        <li class="title">
            {{answerList.length}}个回答
        </li>
        <li class="answer-wrapper" v-for="(item,index) in answerList" :key='index'>
            <!-- 答案详情 -->
            <div class="ql-editor" v-html="item.answer"></div>
            <div class="author">
                <img v-bind:src="item.img_url" alt="">
                <span>{{item.username}}</span>
                <span>{{item.createTime | formatTime}}前回答</span>
                <span v-if='getShow(index)' class="reply"  @click='showReply(index)'>收起回复</span>
                <span v-else class="reply"  @click='showReply(index)'>查看回复</span>
            </div>
            <div class="votes-wrapper">
                <div class="votes">
                    <span class="num">{{item.up_votes}}</span>
                    <br>
                    <span class="up" @click='likeAnswer(item.answerId)'></span>
                </div>
                <div class="votes">
                    <span class="num">{{item.down_votes}}</span>
                    <br>
                    <span class="down" @click='disLikeAnswer(item.answerId)'></span>
                </div>
            </div>
            <replyList v-if='getShow(index)' :replyList = 'replyList[index]'></replyList>
            <reply v-if='getShow(index)' :a_id = 'answerList[index].answerId'></reply>
        </li>
    </ul>
</template>
<script>
import { VOTE,REPLY_LIST } from '@/api/api'
import replyList from './reply/ReplyList'
import reply from './reply/Reply'
export default {
    components:{
        replyList,
        reply
    },
    props: ['answerList'],
    data(){
        return {
            replyList:[],
            replyShow:[],
            replyQueryed:[]
        }
    },
    filters:{
        formatTime(val){
            let create_time = new Date(val);
            let now = new Date();
            let sec = (now - create_time)/1000;    // 转换为s
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
        }
    },
    computed:{
        getShow(){
            return function(index){
                return this.replyShow[index];
            }
        }
    },
    methods:{
        async showReply(index){
            let para = {
                a_id: this.answerList[index].answerId
            }
            if(!this.replyQueryed[index]){
                await REPLY_LIST(para).then(res=>{
                    let data  = res.data
                    if(data.code === 200){
                        this.replyList[index] = data.data ? data.data : null;
                        this.replyQueryed[index] = true;
                    }
                })
            }  
           
            this.replyShow[index]=!this.replyShow[index];
            this.replyShow.push('');
            this.replyShow.pop();
            
        },
        // 投票赞成
        likeAnswer(answerId){
            let param = {
               type: 1,     // 0:question, 1: answer
               vote: 1,     // 1:赞成
               a_id: answerId
           }
           VOTE(param).then(res=>{
               if(res.data.code == 200){
                   this.$emit('refreshVotes')
               }
               else{
                    alert(res.data.msg);
               }
           })
        },
        
        // 投票反对
        disLikeAnswer(answerId){
            let param = {
               type: 1,     // 0:question, 1: answer
               vote: -1,     // 1:赞成
               a_id: answerId
           }
           VOTE(param).then(res=>{
               if(res.data.code == 200){
                   // 成功后更新votes
                   this.$emit('refreshVotes')
               }
               else{
                    alert(res.data.msg);
               }
           })
        }
    },
    created(){
        for(let i=0;i<this.answerList.length;i++){
            this.replyShow[i]=false;
        }
    }
}
</script>

<style lang="less" scoped>
    @import url(../../../assets/css/mixin.less);

    // 答案列表
    .answer-list {
        width: 827px;
        margin-bottom:20px; 
        
        // title
        .title {
            font-size: 20px;
            padding: 36px 0 15px;
            border-bottom: 2px solid #ccc;
        }

        // 答案
        .answer-wrapper{
            padding:10px 0 10px;
            border-bottom: 1px solid #ccc;
            position: relative;
            .votes-wrapper{
                width:150px;
                position: absolute;
                top:5px;
                right:25px;
                text-align: right;
            // 投票
                .votes{
                    display: inline-block;
                    width:60px;
                    height: 34px;
                    background-color: #f3f3f3;
                    text-align: center;
                    font-size: 0;
                    border-radius: 3px;
                    box-sizing: border-box;
                    padding:3px;
                    vertical-align: top;

                    &:hover {
                        background-color: #fff7e2;
                    }


                    .num {
                        font-size: 12px;
                        line-height: 12px;
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
                width: 650px;
                margin:0;
                padding-left: 30px;
            }

            .author {
                text-align:right; 
                color: @gray-l;
                margin-top: 20px;
                .reply{
                    font-weight:bold;
                }
                img {
                    width: 58px;
                    height: 58px;
                }
            }
        }


    }
</style>

