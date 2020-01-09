<template>
    <ul class="returnvisit-list">
        <li class="title">
            {{returnvisitList.length}}个回访
        </li>
        <li class="returnvisit-wrapper" v-for="(item,index) in returnvisitList" :key='index'>
            <!-- 答案详情 -->
            <div class="ql-editor" v-html="item.returnvisit"></div>
            <div class="author">
                <img v-bind:src="item.img_url" alt="">
                <span>{{item.username}}</span>
                <span>{{item.createTime | formatTime}}前回答</span>
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
        </li>
    </ul>
</template>
<script>
import { VOTE } from '@/api/api'

export default {
    props: ['returnvisitList'],
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
    methods:{
        // 投票赞成
        likeAnswer(returnvisitId){
            let param = {
               type: 2,     // 0:question, 1: answer ,2:returnvisit
               vote: 1,     // 1:赞成
               r_id: returnvisitId
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
        disLikeAnswer(returnvisitId){
            let param = {
               type: 2,     // 0:question, 1: answer ,2:returnvisit
               vote: -1,     // 1:赞成
               r_id: returnvisitId
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
        },

    }
}
</script>

<style lang="less" scoped>
    @import url(../../../assets/css/mixin.less);

    // 列表
    .returnvisit-list {
        width: 827px;
        margin-bottom:20px; 
        
        // title
        .title {
            font-size: 20px;
            padding: 36px 0 15px;
            border-bottom: 2px solid #ccc;
        }

        // text
        .returnvisit-wrapper{
            padding:10px 0 10px;
            border-bottom: 1px solid #ccc;
            position: relative;
            .votes-wrapper{
                position: absolute;
                right: 10px;
                bottom: 5px;
                width:150px;
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
                width: 720px;
                margin:0;
                padding-left: 30px;
            }

            .author {
                color: @gray-l;
                margin-top: 30px;
                img {
                    width: 58px;
                    height: 58px;
                }
            }
        }


    }
</style>

