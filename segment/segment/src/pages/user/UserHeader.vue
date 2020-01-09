<template>
<div>
 	<div class="user-header">
	  	<div class="content">
		  <div class="avator-wrapper">
			<div class="avator pointer" @mouseover="showUpdAvator = true" @mouseleave="showUpdAvator = false">
				<img :src="userimg" alt="" >
				<label  for="inputId"  class="upd-avator" v-show="showUpdAvator">上传头像</label>
				<input style="display:none" id="inputId" ref="input" type="file" accept="image/gif, image/jpeg, image/jpg, image/png, image/svg" @change="upload">
			</div>
		  </div>
		  <!-- 用户信息 -->
		  <div class="user-info">
			<h2>{{userInfo.username}}</h2>
			<p class="info-item">手机号: {{userInfo.mobile}}</p>
			<p class='info-item'>邮箱: {{userInfo.email}}</p>
			<div class="badge">
				<button class="btn-cash" @click='getCash'>提现</button>
				<button class="btn-info" @click='changeInfo'>修改</button>
			</div>
			<getcash v-if="showGetcash"></getcash>

			<changeinfo v-if="showChangeInfo"></changeinfo>
		  </div>
	  	</div>
	  	<div class="history-wrapper">
	  		<history></history>
	  	</div>
	  	<div class="cr-wrapper">
  			<cashrecord></cashrecord>
  		</div>
  	</div>

  	
  	
</div>
</template>

<script>
import { GET_USER_INFO,GET_HISTORY,UPLOAD_USER_IMG } from '@/api/api';
import getcash from './cashAndInfo/GetCash';
import changeinfo from './cashAndInfo/ChangeInfo';
import history from './History';
import cashrecord from './cashRecord';
import lrz from 'lrz' 

export default {
	components:{
        getcash,
        changeinfo,
        history,
        cashrecord
    },
	data(){
		return {
			avator:require('@/assets/images/user.png'),
			userimg: '',
			userName: '',
			reputation: 1,
			showUpdAvator: false,
			userInfo:{
				username: '',
				mobile: '',
				email: '',
			},
		}
	},
	computed:{   
        // 显示登录
        showGetcash(){
            return this.$store.state.showGetcash;
        },
        showChangeInfo(){
        	return this.$store.state.showChangeInfo;
        }
    },


	methods:{
		// 获取用户信息
		getUserInfo(){
			GET_USER_INFO().then(res=>{
				let data = res.data
				console.log(data)
				if(data.code == 200){
					this.userInfo.username = data.data.username;
					this.userInfo.mobile = data.data.mobile == null ? '未填写' : data.data.mobile
					this.userInfo.email = data.data.email == null ?  '未填写' : data.data.email
					this.userimg = data.data.img_url == null? this.avator :data.data.img_url
				}
			})
		},

		// 更新一级导航状态
		updateWriteTypeCode(){
			this.$store.commit('updateWriteTypeCode',-1)
		},
		getCash(){
            this.$store.commit('showGetcash',true);
        },
        changeInfo(){
        	 this.$store.commit('showChangeInfo',true);
        },
        upload(e){	
		    let file = e.target.files[0];
		    if (!file) {
		       return;
		    }
		    // 使用神奇插件, lrz就是它提供的方法
		    lrz(file, {width: 200, height: 200, quality: 0.5, filedName: 'file'}).then((rst) => {
		        // 判断大小 (base64编码urlencode后大小不超过4M)
		        let size = rst.fileLen / 1024 / 1024;
		        if (size > 4) {
			        alert(`图片太大，请上传小于4M的图片`);
			       	e.target.value = "";
			       	return;
		    	}
		    	let para = {
                	imgsrc: rst.base64
	            }
				UPLOAD_USER_IMG(para).then(res=>{
					let data = res.data
					if(data.code == 200){
						this.userimg=data.data;
					}
					else{
						alert(data.msg);
					}
				})
			});
			
		},

	},

	mounted(){
		this.getUserInfo();
		this.updateWriteTypeCode();
	}
}
</script>

<style lang="less" scoped>
@import url(../../assets/css/mixin.less);
.user-header {
	width: 1116px;
	background-color:white;
	padding-top:20px;
	position:relative;
	margin:0px auto;
	
	// 内容区
	.content {
		display:inline-box;
		width: 700px;
		background-color:#f5f5f5;
		border-bottom: 2px solid #ccc;
		border-radius:20px;
		padding:20px  20px;
		text-align: left;

		// 头像区
		.avator-wrapper {
			width: 160px;
			display: inline-block;
			margin-right: 30px;

			.avator {
				position: relative;
				width: 158px;
				height: 158px;
		/*		border-radius: 50%;*/
				overflow: hidden;
				img {
					width: 158px;
					height: 158px;
					/*border-radius: 50%;*/
				}
				
				// 上传头像
				.upd-avator {
					position: absolute;
					bottom:0;
					left: 0;
					display: inline-block;
					width: 160px;
					height: 38px;
					line-height: 38px;
					background-color:rgba(0,0,0,0.7);
					color:#fff;
					text-align: center;
				}
	
			}
		}

		// 用户信息
		.user-info {
			padding:50px 0 0 50px;
			width: 200px;
			display: inline-block;
			vertical-align: top;

			h2 {
				text-align: left;
				font-weight: 500;
				font-size: 30px;
				margin-bottom: 10px;
				display: inline-block;
			}
			
			.info-item {
				display: inline-block;
				font-size: 12px;
				color:#666;
				padding:5px;
			}
			
			// 徽章
			.badge {
				.btn-cash,.btn-info{
					width:70px;
					height:40px;
					display: inline-block;
                    line-height: 30px;
                    font-size:14px;
                    font-weight: 500;
                    border-radius: 5px;
                    margin: 0 5px;
                	color:#fff;
                    background-color:@green;
                    &:hover {
                        background-color:#777;
                    }

				}
			}
		}

	}
	.cr-wrapper{
		position:absolute;
		right:0px;
		top:10px;
	}
	.history-wrapper{

	}
}

</style>


