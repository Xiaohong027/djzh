<template>
    <div class="getcash">
        <div class="user-wrapper">
            <div class="title">
                <span>修改信息</span>
                <span class="overdue" v-if='showOverdue'>登录过期,请重新登录</span>
                <span class="close pointer" @click='hide'>×</span>
            </div>

            <!-- 登录框 -->
            <div class="getcash">
                <div class="sub-title">你好，ASCH账户</div>
                <div class="account">账户: {{ account.aschAccount }}</div>
                <div class="balance">余额:{{ account.balance }} {{ account.currency }}</div>
                <div class="rate">当前汇率:1.0</div>
                <label class="cash" for="cashInput">输入提现金额</label>
                <input id="cashInput" type="text" placeholder="金额" v-model="account.money" @keyup.enter="getCashHandler">
                <div class="notice" v-show="validate.moneyInput">{{validate.moneyMsg}}</div>
                <div class="btn-wrapper">         
                    <input type="button" value="提现" class="btn pointer" @click="getCashHandler">
                </div>
            </div>
        </div>
        <!-- mask -->
        <div class="mask" @click="hide"></div>
    </div>
</template>

<script>
import { GET_BALANCE } from '@/api/api'

export default {
    data(){
        return {
            validate:{
                moneyInput:false,
                moneyMsg: '请输入金额'
            },  
            account: {    //登录
                aschAccount: 'ABuH9VHV3cFi9UKzcHXGMPGnSC4QqT2cZ5',
                money: '',
                balance: 0,
                currency: ''
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
        getCashHandler(){
            // 验证
            if (!this.validateGetCash()) return;

            // 验证通过
            let para = {
                money: this.account.money
            }
            // LOGIN(para).then(res=>{
            //     if(res.data.code == 400){
            //         this.validate.loginMobile = true
            //         this.validate.loginPwd = true
            //         this.validate.loginMsg = res.data.msg;
            //         this.validate.loginPwdMsg = res.data.msg;
            //     }else {
            //         this.hide();
            //         this.hasLogin();
            //     }
            // })
        },

        // 表单验证
        validateGetCash(){
            // 重置状态
            this.validate = {
                moneyInput:false,
                moneyMsg: '请输入金额'
            }
            if(!this.account.money){
                this.validate.moneyInput = true
                return 
            }
            return true
        },

        // 关闭登录注册框
        hide(){
            this.$store.commit('showGetcash',false)
        },

        // 成功
        hasGetCash(){
            // 关闭登录框
            this.hide();
            
            // myindex页面刷新router重新获取数据
            if(this.$route.path == '/myindex'){
                this.$router.go(0)
                console.log(this.$route)
            }
        },           
        getBalance(){
            let para= {};
            GET_BALANCE(para).then(res=>{
                let data =res.data;
                console.log(data);
                if(data.code==200){
                    this.account.balance = data.data.balance;
                    this.account.currency = data.data.currency;
                    this.account.aschAccount = data.data.address;
                }  
            })
        }
    },

    created(){
       this.getBalance();
    }

}
</script>

<style lang="less" scoped>
    @import '../../../assets/css/mixin.less';

    .getcash {
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

            // 注册验证
            .notice {
                color:red;
            }

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

            .getcash {
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
                .balance,.rate,.cash,.account{
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