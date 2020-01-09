<template>
    <div class="changeinfo">
        <div class="user-wrapper">
            <div class="title">
                <span>提现</span>
                <span class="overdue" v-if='showOverdue'>登录过期,请重新登录</span>
                <span class="close pointer" @click='hide'>×</span>
            </div>

            <!-- 登录框 -->
            <div class="changeinfo">
                <div class="sub-title">修改信息</div>
                <label for="name" class="name">名字</label>
                <input type="text" id='name' placeholder="真实姓名或常用昵称" v-model.trim="account.name">
                <label for="mobile" class="mobile">手机</label>
                <input type="text" id='mobile' placeholder="请输入手机号码" v-model.trim="account.mobile">
                <label for="email" class="email">邮箱</label>
                <input type="text" id='email' placeholder="请输入邮箱地址" v-model.trim="account.email">
                <div class="btn-wrapper">         
                    <input type="button" value="提交" class="btn pointer" @click="changeInfoHandler">
                </div>
            </div>
        </div>
        <!-- mask -->
        <div class="mask" @click="hide"></div>
    </div>
</template>

<script>
import { CHANGE_INFO } from '@/api/api'

export default {
    data(){
        return {
            account: {    
                name: '',
                email: '',
                mobile:''
            }       
        }
    },
    computed:{
        showOverdue(){
            return this.$store.state.isOverdue;
        }
    },
    methods:{

        // 登录
        changeInfoHandler(){
            // 验证
            if (!this.validateInfo()) return;
            alert(21);
            // 验证通过
            let para = {
                name: this.account.name,
                email: this.account.email,
                mobile: this.account.mobile
            }
            CHANGE_INFO(para).then(res=>{
                if(res.data.code == 400){
                    alert(res.data.msg);
                }else {
                    this.hide();
                    this.hasChangeInfo();
                }
            })

        },

        // 表单验证
        validateInfo(){  
            if(!this.account.name||!this.account.email||!this.account.mobile){
                return false;
            }
            return true
        },

        // 关闭登录注册框
        hide(){
            this.$store.commit('showChangeInfo',false)
        },

        // 成功
        hasChangeInfo(){
            // 关闭登录框
            this.hide();
            
            // myindex页面刷新router重新获取数据
            if(this.$route.path == '/myindex'){
                this.$router.go(0)
                console.log(this.$route)
            }
        }
    },

    created(){
    }

}
</script>

<style lang="less" scoped>
    @import '../../../assets/css/mixin.less';

    .changeinfo {
        // 登录注册
        .user-wrapper {
            position: absolute;
            top:50px;
            left: 50%;
            z-index: 10;
            margin-left: -200px;
            width:400px;
            height: 550px;
            box-sizing: border-box;
            background-color: #fff;

            border-radius: 5px;
            font-size: 0;

            .title {
                height: 58px;
                line-height: 58px;
                font-size: 18px;
                text-align: left;
                text-indent: 16px;
                border-bottom: 1px solid #e5e5e5;
                background-color: #f3f3f3;
                border-radius: 5px 5px 0 0;

                // 过期
                .overdue {
                    color:red;
                    font-size: 12px;
                }

                // 关闭按钮
                .close {
                    float: right;
                    font-size: 25px;
                    font-weight: 500;
                    margin-right: 20px;
                    color:#c2c2c2;

                    &:hover {
                        color:#999;
                    }
                }
            }

            .changeinfo {
                display: inline-block;
                width:450px;
                box-sizing: border-box;
                font-size: 14px;
                margin-top:60px;
                text-align: left;
                vertical-align: top;
                padding-right: 82px;
                padding-left: 68px;

                .sub-title {
                    font-size: 20px;
                    margin-bottom: 30px;
                }

                input {
                    display: block;
                    width:288px;
                    height: 30px;
                    box-sizing: border-box;
                    border:1px solid #ccc;
                    border-radius: 4px;
                    text-indent: 10px;
                    margin:10px 0;
                }


                // 
                .name,.email,.mobile{
                    text-align: left;
                    color:#222;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                
                 // 登录按钮
                .btn-wrapper  {
                    box-sizing: border-box;
                    padding-right: 10px;

                    // 按钮
                    .btn {
                        float: right;
                        width: 70px;
                        background-color: @green;
                        color:#fff;
                        font-weight: 500;
                        text-indent: 0;
                        margin:0;
                    }
                }
            }
           
        }
    }
</style>