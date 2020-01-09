<template>
    <div class="question" @click='showChoseTags = false'>
       <ul class="nav-header">
           <li class="header-item" :class="{active:activeNav == index}" v-for='(item,index) in headerItems' :key='index' @click="choseItem(item.type,index)" >{{item.item}}</li>
           <li class="tag-item" @click.stop="showChoseTags = !showChoseTags">热门标签 +</li>
           <div class="tag-select-wrapper" v-show="showChoseTags" @click.stop="showChoseTags = true">
                <ul class="tag-classify">
                    <li class="classify-item pointer" v-for="(item,index) in tagClassification" :class="{ active: index==classifyActive }" :key="index" @click.stop="choseClassify(item,index)">{{item.classify}}</li>
                </ul>
                <ul class="tag-list">
                    <li class="list-item pointer"  v-for="(item,index) in curTagList" :key="index" :class="{ active: item.active }" @click.stop="choseTagItem(item,index)">{{item.item}}</li>
                </ul>
                <div class="tag-clear" @click="clearTagItem">清空</div>
            </div>

       </ul>
       <!-- 问题列表 -->
       <ul class="question-list">
           <li class="question-item" v-for="(question,index) in questionList" :key='index' >
               <div class="votes">
                   <span class="num">{{question.up_votes}}</span>
                   <br>
                   <span class="desc">得票</span>
               </div>
               <div class="answer">
                   <span class="num">{{question.answer}}</span>
                   <br>
                   <span class="desc">回答</span>
               </div>
               <div class="view">
                   <span class="num">{{question.views}}</span>
                   <br>
                   <span class="desc">浏览</span>
               </div>
               <!-- 问题 -->
               <div class="question-wrapper">
                   <div class="respondents">
                       <a href="javascript:;">{{question.lastRespondent | formatResp}}</a>
                       <a href="javascript:;">{{question.time}}</a>
                   </div>
                   <div class="question-title">
                       <span class="title">
                           <a href="javascript:;" @click='goDetail(question.q_id)'>{{question.questionTitle}}</a>
                            <ul class="type" >
                                <li class="type-item pointer" v-for=" (type,index) in question.tagName " :key="index">{{type}}</li>
                            </ul>
                       </span>
                   </div>
               </div>
           </li>
       </ul>
       <!-- 页码 -->
       <ul class="page">
           <li class="page-item pre-page"><input type="button" value="上一页" v-show='currentPage > 1' @click="prePage"></li>
           <li class="page-item more-page-l"><input type="button" value="..." v-show='currentPage > 3 ' disabled></li>
           <li class="page-item" :class="{active:currentPage == item, br:currentPage == 1, bl: currentPage== lastPage }" v-for="(item,index) in pages" :key="item" v-show="(item < currentPage+4) && (item > currentPage-3)"><input type="button" :value="item" @click="getCurrentPage(item)"></li>
           <li class="page-item more-page-r"><input type="button" value="..." v-show='lastPage > 5 && (currentPage < lastPage)' disabled></li>
           <li class="page-item next-page"><input type="button" value="下一页" v-show='currentPage < lastPage' @click="nextPage"></li>
       </ul>

    <Advertisement></Advertisement>
    </div>
    
</template>

<script>
import { QUESTION_LIST } from '@/api/api'
import Utils from '../../vuex/util.js';
import Vue from 'vue';
import Advertisement from '../advertisement/Advertisement';

export default {
    components:{
        Advertisement
    },
    data(){
        return {
            activeNav: 0, //导航激活状态
            headerItems:[
                { item:'最新问答', type:1},
                { item:'热门问答', type:2},
                { item:'等待回答', type:3},
                { item:'最新动态', type:4},
                { item:'付费问答', type:5},
            ],
            tagClassification: [
                {id:1, classify:'中医'},
                {id:2, classify:'经验'},
                {id:4, classify:'其他'}
            ],
            tagList:[
                [   
                    { id:1,item:'养生' },
                    { id:2,item:'茶叶' },
                    { id:3,item:'山药' },
                    { id:4,item:'养发' },
                    { id:5,item:'枸杞' },
                    { id:6,item:'视力' },
                    { id:7,item:'中药' },
                    { id:8,item:'生物钟' }
                ],
                [     
                    { id:1, item: '就医' },
                    { id:2, item: '运动' },
                    { id:3, item: '保养' },
                ],
                [   // 其他
                    { id:1, item: '定制' },
                    { id:2, item: '定制' },
                    { id:3, item: '定制' },
                    { id:4, item: '定制' }
                ]
            ],
            curTagList:[],
            showChoseTags:false,
            questionList:[], //最新问答列表
            currentPage: 1,    // 当前页
            pageSize: 10,
            total: 0,
            classifyActive: 0,
            tags:[],
            pages:[],
            order_type:1,
            s_content:'',
            lastPage: 0, // 尾页
            midPage: 0, // 中间页
        }
    },
    filters:{
        formateType(val){
            let type = ''
            switch(val){
                case 1:
                type = 'javascript'
                break
                case 2:
                type = 'php'
                break;
                deafault:
                break
            }
            return type
        },
        formatResp(val){
            let res;
            if(val == undefined){
                res =  '暂无回答'
            }else {
                res = val
            }
            return res;
            
        }
    },
    methods:{
        // 获取问题列表
        getQueList(){
            let para = {
                page: this.currentPage,
                pageSize: this.pageSize,
                s_content:this.s_content,
                order_type:this.order_type,
                tags:this.tags.join(',')
            }
            this.pages = []
            QUESTION_LIST(para).then(res=>{
                this.questionList = res.data.data
                let total = res.data.total
                this.total = total
                let pageNum = Math.ceil(total/this.pageSize)
                this.lastPage = pageNum
                this.midPage = Math.floor(pageNum/2)
                
                if(total>0){
                    for(let i=1;i<=pageNum;i++){
                        this.pages.push(i)
                    }
                }
            })
        },
        
        // 当前页
        getCurrentPage(val){
            this.currentPage = val
            this.getQueList();
        },

        // 上一页
        prePage(){
            if(this.currentPage>1){
                this.currentPage--
                this.getQueList();
            }
        },

        // 下一页
        nextPage(){
            if(this.currentPage<this.lastPage){
                this.currentPage++
                this.getQueList();
            }
        },


        // 跳转问题详情页
        goDetail(val){
            let path = `/q/${val}`
            this.$router.push({path})
        },
        // 
        choseItem(type,index){
            this.order_type=type;
            this.activeNav=index;
            this.currentPage=1;
            this.getQueList();     
        },
        clearTagItem(){
            this.tags = [];
            for(let list of this.tagList){
                for(let item of list){
                    Vue.set(item,'active',false);
                }
            }
            this.getQueList();
        },
        // 选择标签分类
        choseClassify(item,index){
            this.classifyActive = index;
            this.curTagList = this.tagList[index];
        },
        // 选择标签
        choseTagItem(item,index){
            let tags = this.tags;
            if(item.active){           
                Vue.set(item,'active',false);
                for(let i=0;i<tags.length;i++){
                    if(item.item == tags[i]){
                        tags.splice(i,1);
                        break;
                    }
                } 
            }else{          
                Vue.set(item,'active',true); 
                tags.push(item.item);
            }
            this.getQueList();    
        }
    },

    mounted() {
        var that =this;
        Utils.$on('search', function(content) {
            that.s_content=content;
            that.currentPage=1;
            that.getQueList();      
            
        })
    },
    created(){
        this.curTagList = this.tagList[0];
        this.getQueList()
    }
}
</script>

<style lang="less" scoped>
    @import url('../../assets/css/mixin.less');
    // 重置按钮样式
    input[type='button'] {
        border:none;
        outline: none;
        background-color: #fff;
        margin:0;
        padding:0;
        cursor: pointer;
    }

    .question {
        width: 1116px;
        margin: 50px auto 0;
        font-size: 14px;
        
        
        // 导航
        .nav-header {
            border-bottom: 1px solid #ddd;
            width:828px;
            height: 41px;
            text-align: left;
            color: @green;
            font-size: 14px;
            position:relative;

            .tag-item,
            .header-item {
                display: inline-block;
                width: 88px;
                height: 42px;
                line-height: 42px;
                box-sizing: border-box;
                border-radius: 3px 3px 0 0;
                text-align: center;
                cursor: pointer;

                &:hover {
                    background-color: #ddd;
                    border-radius: 3px;    
                }

                &.active {
                    border:1px solid #efefef;
                    border-bottom-color: #fff;
                    color: @gray-l;
                    &:hover {
                        background-color:#fff;
                    }
                }
            }
            .tag-item{
                float:right;
            }
            .tag-select-wrapper {
                position: absolute;
                right: 0;
                top:45px;
                width: 320px;
                padding:15px;
                border:1px solid #ddd;
                background-color: #fff;
                z-index: 2;
                box-shadow: 0 0 20px rgba(100,100,100,0.3);
                font-size: 12px;
                
                
                // 标签分类
                .tag-classify {
                    .classify-item {
                        display: inline-block;
                        margin: 5px;
                        padding: 5px 10px;
                        border-radius:3px;
                        color:#666;

                        &:hover {
                            background-color: #eee;
                        }
                        &.active {
                            color:#fff;
                            background-color:@green;
                        }
                    }
                }
                .tag-clear{
                    position:absolute;
                    right:10px;
                    top:10px;
                    padding: 5px 10px;
                    cursor: pointer;
                    &:hover {
                        background-color: #eee;
                    }

                }

                // 标签列表
                .tag-list {
                    margin-top: 10px;
                    .list-item {
                        display: inline-block;
                        margin: 5px;
                        padding: 5px 10px;
                        border-radius:1px;
                        background-color: #ebf5f3;
                        color:@green;
                        &.active,
                        &:hover {
                            background-color: @green;
                            color: #fff;
                        }
                    }
                }
            }
        }

        // 问答列表
        .question-list {
            width:828px;
            text-align: left;

            .question-item {
                border-bottom:1px solid #ddd;
                padding-bottom: 11px;
                padding-top: 8px;
                vertical-align: top;
                color: @gray-l;

                // 得票 /浏览
                .votes,
                .view {
                    display: inline-block;
                    width: 40px;
                    height: 48px;
                    text-align: center;
                    margin-right: 10px;
                }

                // 回答
                .answer {
                    display: inline-block;
                    width:46px;
                    height: 40px;
                    border-radius: 3px;
                    background-color: @green;
                    color: #fff;
                    font-size: 12px;
                    text-align: center;
                    box-sizing: border-box;
                    padding-top:5px;
                    line-height: 1.2;
                    margin-right: 10px;

                }

                // 问题
                .question-wrapper {
                    vertical-align: top;
                    position: relative;
                    display: inline-block;
                    width:658px;
                    height: 45px;
                    // 答题者
                    .respondents {
                        position: absolute;
                        top:0;
                        a {
                            font-size: 12px;
                            color: @gray-l;
                            margin-right: 5px;
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }

                    // 问题标题
                    .question-title {
                        margin-top: 22px;
                        .title {
                            
                            line-height: 1;
                            a {
                                color:#333;
                                font-size: 18px;
                                &:hover {
                                    color:@green;
                                    text-decoration: underline;
                                }
                            }
                            
                        }
                        // 问题类型
                        .type {
                            display: inline-block;
                            font-size: 12px;
                            .type-item {
                                display: inline-block;
                                margin:0 3px;
                                padding: 2px 5px;
                                background-color: #ebf5f3;
                                color: @green;

                                &:hover {
                                    background-color: @green;
                                    color:#fff;
                                }
                            }
                        }
                    }
                }
            }
        }

        // 页码
        .page {
          text-align: center;
          font-size: 0;
          margin: 20px 0;

            // 页码
            .page-item {
                display: inline-block;
                font-size: 12px;

                input {
                    display: inline-block;
                    width:40px;
                    height: 32px;
                    line-height: 32px;
                    border: 1px solid #ddd;
                    color: @green;
                    border-left: none;
                }

                &.active input {
                    background-color: @green;
                    color:#fff;
                    border-color: @green;
                }
            }

            // 上一页/下一页
            .pre-page,
            .next-page{
                input {
                    width:65px;
                    height: 32px;
                    line-height: 32px;
                    border:1px solid #ddd;

                }
            }
            
            // 上一页
            .pre-page input{
                border-radius: 3px 0 0 3px;
            }
            // 下一页
            .next-page input{
                border-radius: 0 3px 3px 0;
            }
            
            // 省略页码(左/右)
            .more-page-l input,
            .more-page-r input{
                cursor: not-allowed;
             
            }
            .more-page-r input {
                border-right: none;
            }

            // 首页圆角
            .br input {
                border-radius: 3px 0 0 3px;
            }

            // 尾页圆角
            .bl input {
                border-radius: 0 3px 3px 0;
            }
        }
    }
</style>

