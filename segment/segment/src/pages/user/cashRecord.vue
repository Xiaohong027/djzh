<template>
		<ul class="cr-list">
		  	<li class="title-wrapper" >
		  		<div class="title" >{{title}}</div>
		  	</li>
		    <li >
		        <ul class="records">
		            <li class="record-item" v-for="(record,index) in recordList" :key='index'>
		               <div class="money">
		                   <span>+ {{record.money}}<br> {{record.currency}}</span>
		               </div>
		               <!-- 问题 -->
		               <div class="time">
		                    <span>{{record.create_time}}</span>
		                </div>
		                <div class="record-content">
		                    <span >{{record.type}}</span> 
		                </div>
		           </li>
		        </ul>
		    </li>
	    </ul>
</template>

<script>
import { GET_CASH_RECORD } from '@/api/api';

export default {
	data(){
		return {
			recordList:[],
			title:'交易记录',
		}
	},

	methods:{
		getRecordList(){
            GET_CASH_RECORD().then(res=>{
            	this.recordList = res.data.data;
            	console.log(this.recordList);
            })
        }
     },
    created(){
        this.getRecordList()
    }
}
</script>

<style lang="less" scoped>
@import url(../../assets/css/mixin.less);
.cr-list {
	padding-top:20px;
	margin-top:10px;
	background-color:#f5f5f5;
	border-radius: 10px;
	border-bottom: 2px solid #ccc;
	width:350px;
    text-align: left;
    .title-wrapper{
    	border-bottom: 2px solid #ccc;
    	text-align:center;
	    .title {
	        font-size: 20px;
	        height:40px;
	        line-height:40px;
	    }
   	}

    .records {
	    height:660px;
	    overflow:scroll;
	    .record-item {
	    	font-size: 14px;
	        border-bottom:1px solid #ddd;
	        padding-top: 10px;
	        vertical-align: top;
	        color: @gray-l;
	        position:relative;
	       	height:55px;
	          	// 回答
	          	.money {
	          		margin-left:10px;
	                display: inline-block;
	                width:100px;
	                height: 40px;
	                border-radius: 3px;
	                background-color: @green;
	                color: #fff;
	                font-size: 14px;
	                text-align: center;
	                box-sizing: border-box;
	                line-height: 20px;
	                margin-right: 10px;

	            }
	            .time{
					position:absolute;
					top:5px;
					right:10px;
	          	}
	            // 问题
	            .record-content {
	                vertical-align: center;
	                position: relative;
	                display: inline-block;
	            }
	        }
	    }
	} 



</style>


