<template>
<ul class="ul-list">
	<li  class="behavior-list" >
		<ul class="record-list">
		  	<li class="title-wrapper" >
		  		<div class="title">{{title}}</div>
		  		<div class="subtitle" v-for="(title,i) in titles" :key='i' :class="{active:curIndex == i}" @click="changeShow(i)" >{{title}}</div>
		  		
		  	</li>
		    <li class="question">
		        <ul class="question-list">
		            <li class="question-item" v-for="(question,index) in questionList[curIndex]" :key='index'>
		               <div class="answer">
		                   <span class="num">{{question.answer}}</span><br>
		                   <span class="desc">回答</span>
		               </div>
		               <div class="view">
		                   <span class="num">{{question.views}}</span><br>
		                   <span class="desc">浏览</span>
		               </div>
		               <!-- 问题 -->
		               <div class="question-wrapper">
		                   <div class="respondents">
		                       <a href="javascript:;">{{question.lastRespondent | formatResp}}</a>
		                       <a href="javascript:;">{{question.time}}</a>
		                   </div>
		                   <div class="question-title">
		                       <span class="q-title">
		                           <a href="javascript:;" @click='goDetail(question.q_id)'>{{question.questionTitle}}</a>
		                            <ul class="type" >
		                                <li class="type-item pointer" v-for=" (type,index) in question.tagName " :key="index">{{type}}</li>
		                            </ul>
		                       </span>
		                   </div>
		               </div>
		               <div class="time" v-if="curIndex==2">
		                   	<span class="num">{{[question.least_rv_time,question.join_time] | formatTime}}</span>
		               </div>
		           </li>
		        </ul>
		    </li>
	    </ul>
    </li>
</ul>
</template>

<script>
import { GET_HISTORY } from '@/api/api';

export default {
	data(){
		return {
			curIndex:0,
			questionList:[[],[],[]], //最新问答列表
			titles:['我的问题','已回访','待回访'],
			title:'历史记录'
		}
	},
	filters:{
		formatTime(arr){
			let now = new Date();
			let join_time = new Date(arr[1]);
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
		changeShow(i){
			this.curIndex=i;		
		},
		getQueList(){
            GET_HISTORY().then(res=>{
            	let q_list = res.data.data.questions;
            	let rv_list = res.data.data.returnvisits;
            	this.questionList[0]=q_list;
            	for( let item of rv_list){
            		if(item.has_joined=='true'){
            			this.questionList[1].push(item);
            		}
            		else{
            			this.questionList[2].push(item);
            		}
            	}
            })
        },
        // 跳转问题详情页
        goDetail(val){
            let path = `/q/${val}`
            this.$router.push({path})
        }
	},
    created(){
        this.getQueList()
    }
}
</script>

<style lang="less" scoped>
@import url(../../assets/css/mixin.less);
.ul-list{
	text-align:left;
	.behavior-list{
		margin-top:10px;
		width:740px;
		display:inline-block;
	}

}

.record-list {
	padding-top:20px;
	background-color:#f5f5f5;
	border-radius: 10px;
	border-bottom: 2px solid #ccc;
    text-align: left;
    .title-wrapper{
    	border-bottom: 1px solid #ddd;
    	.title{
    		font-size: 20px;
	        height:40px;
	        line-height:40px;
	        text-align:center;
	        border-bottom: 2px solid #ccc;
    	}
	    .subtitle {
	    	display:inline-block;
	    	margin:0px 10px;
	        font-size: 18px;
	        height:40px;
	        width:80px;
	        line-height:50px;
	        text-align:center;
	        color: @gray-l;
	         &.active {
	            border-bottom: 1px solid black;
	            color:black;
	            &:hover {
	                background-color:#fff;
	                }
	            }
	    }
   	}

    .question-list {
	    text-align: left;
	    height:400px;
	    overflow:scroll;
	    .question-item {
	    	font-size: 14px;
	        border-bottom:1px solid #ddd;
	        padding-top: 8px;
	        vertical-align: top;
	        color: @gray-l;
	        position:relative;
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
	          		margin-left:10px;
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
	            .time{
					position:absolute;
					top:5px;
					right:10px;
	          	}
	            // 问题
	            .question-wrapper {
	                vertical-align: top;
	                position: relative;
	                display: inline-block;
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
	                    .q-title {
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
}



</style>


