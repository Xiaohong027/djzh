<template>
    <!-- 答案列表 -->
  <div class="reply">
        <div class="rich-text-wrapper clearfix">
            <quill-editor v-model="content" 
                ref="myQuillEditor"
                :options="editorOption"
                @focus="onEditorFocus($event)"
                >
            </quill-editor>
        </div>
        <div class="btn-wrapper">
            <input type="button" value="回复" @click="submitReply" class="btn-submit">
        </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import { REPLY } from '@/api/api'
export default {
    props: ['a_id'],
    data(){
        return {
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
        submitReply(){
            let para = {
                content: this.content,
                a_id: parseInt(this.a_id)
            }
            REPLY(para).then(res=>{
                if(res.data.code == 200){
                    //refresh page
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
        
    }

}
</script>

<style lang="less" scoped>
    @import url(../../../../assets/css/mixin.less);
    
    .reply {
        margin-left: 50px;
        margin-bottom:20px;  


        .rich-text-wrapper{
            height: 130px;
            // 富文本编辑器
            .quill-editor {
                height: 80px;
            }
        }

        // 提交按钮
        .btn-wrapper {
            display:inline-block;
            float:right;
            height: 22px;
            line-height: 22px;
            .btn-submit {
                display: inline-block;
                width:50px;
                height: 22px;
                background-color: @green;
                border:none;
                color:#fff;
                border-radius: 2px;
                text-align: center;
                font-size: 12px;
                letter-spacing: 1px;
            }
        }
    }
</style>


