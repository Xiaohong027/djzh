<template>
    <!-- 答案列表 -->
  <div class="answer">
        <h3 class="title">撰写答案</h3>
        <div class="rich-text-wrapper clearfix">
            <quill-editor v-model="content" 
                ref="myQuillEditor"
                :options="editorOption"
                @focus="onEditorFocus($event)"
                >
            </quill-editor>
        </div>
        <div class="btn-wrapper">
            <input type="button" value="提交回答" @click="submitAnswer" class="btn-submit">
        </div>
        <div class="btn-wrapper">
            <input type="button" value="提交回访" @click="submitRetrunvisit" class="btn-submit">
        </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import { ANSWER,RETURNVISIT } from '@/api/api'
export default {
    data(){
        return {
            action:'./node/question/upload',  // 图片存储地址
            editorOption: {
                // some quill options
                modules: {
                    toolbar: {
                        container:[
                            [{ 'size': ['small', false, 'large'] }],
                            ['bold', 'italic'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            ['link', 'image']
                        ],
                        handlers: {
                        }
                    },
                    history: {
                        delay: 1000,
                        maxStack: 50,
                        userOnly: false
                    }
                },
                placeholder:' '
            },
            content:'',  // 答案
            uniqueId: '',
            file:'',
            text:''
        }
    },

    methods:{
        // 提交答案
        submitAnswer(){
            let para = {
                content: this.content,
                q_id: parseInt(this.$route.params.q_id)
            }
            ANSWER(para).then(res=>{
                if(res.data.code == 200){
                    //refresh page
                    this.$router.go(0)
                }
                else{
                    alert(res.data.msg);
                }
            })
        },
        // 提交回访
        submitRetrunvisit(){
            let para = {
                content: this.content,
                q_id: parseInt(this.$route.params.q_id)
            }
            RETURNVISIT(para).then(res=>{
                console.log(res)
                if(res.data.code == 200){
                    this.$router.go(0)
                }
                else{
                    alert(res.data.msg);
                }
            })
        },

        // 编辑器获取焦点;验证是否登录
        onEditorFocus(event){
            if(this.$store.state.hasLogin == false){
                // 如果未登录 弹出登录框
                this.$store.commit('showLogin',true)
            }
        },
        
    },
    mounted(){
    }

}
</script>

<style lang="less" scoped>
    @import url(../../../assets/css/mixin.less);
    
    .answer {
        width: 762px;
        margin-left: 65px;
        margin-bottom:20px;   

        // 标题 
        .title {
            font-size: 18px;
            margin:20px 0 18px;
            font-weight: 500;
        }


        .rich-text-wrapper{
            height: 350px;
            // 富文本编辑器
            .quill-editor {
                height: 300px;
            }
        }

        // 提交按钮
        .btn-wrapper {
            display:inline-block;
            height: 45px;
            line-height: 45px;
            .btn-submit {
                display: inline-block;
                width:106px;
                height: 45px;
                background-color: @green;
                border:none;
                color:#fff;
                border-radius: 4px;
                text-align: center;
                font-size: 20px;
                letter-spacing: 1px;
            }
        }
    }
</style>


