<template>
    <ul class="reply-list">
        <li class="reply-wrapper" v-for="(item,index) in replyList" :key='index'>
            <!-- 答案详情 -->
            <div class="author">
                <img src="" alt="">
                <span>{{item.username}}</span>
                <span>{{item.createTime | formatTime}}前回复：</span>
            </div>
            <div class="ql-editor" v-html="item.content"></div>
            
        </li>
    </ul>
</template>
<script>

export default {
    props: ['replyList'],
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
        
    }
}
</script>

<style lang="less" scoped>
    @import url(../../../../assets/css/mixin.less);

    // 答案列表
    .reply-list {
        margin:0px 0px 5px 50px;
        /*background:#FAF0E6;*/
        // 答案
        .reply-wrapper{
            
            padding:10px 0 10px;
            border: 1px solid #ccc;
            position: relative;
            // 富文本编辑器
            .ql-editor{
                padding-left: 60px;
                display: inline-block;
                margin:0;
            }
            .author {   
                font-weight:bold;
                color: @gray-l;
            }
            margin-bottom:5px;
        }


    }
</style>

