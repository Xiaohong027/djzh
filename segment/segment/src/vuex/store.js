import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        hasLogin:false, //登录状态
        showLogin: false,   // 显示/隐藏 登录/注册框
        showSignup: false,
        showLoginBtn: true, // 显示/隐藏 header登录/注册按钮
        isOverdue: false,    // 是否登录过期
        writeTypeCode: -1,  //一级导航
        showGetcash :false,
        showChangeInfo:false,
        showAdvertisement:true
    },

    mutations:{
        // 刷新页面后还原state
        resetState(state,payload){
            state.writeTypeCode = payload.writeTypeCode;
            state.hasLogin = payload.hasLogin;
            state.showSignup = payload.showSignup;
            state.showLogin = payload.showLogin;
            state.showLoginBtn = payload.showLoginBtn;
            state.showGetcash = payload.showGetcash;
            state.showChangeInfo= payload.showChangeInfo;
            state.showAdvertisement = payload.showAdvertisement;
        },

        // 保存vuex状态
        saveState(state){
            let data = JSON.stringify(state);
            sessionStorage.setItem('segment_state',data);
        },

        // 更新一级导航
        updateWriteTypeCode(state,payload){
            state.writeTypeCode = payload;
        },
        
        // 重新登录
        reLogin(state,payload){
            state.hasLogin = payload.hasLogin;
            state.isOverdue = payload.isOverdue;
            state.showLogin = payload.showLogin;
        },

        // 更新登录状态
        loginStatus(state,payload){
            state.hasLogin = payload;
        },

        // 显示隐藏 登录
        showLogin(state,payload){
            state.showLogin = payload;
        },
        //注册框
        showSignup(state,payload){
            state.showSignup = payload;
        },
        showGetcash(state,payload){
            state.showGetcash = payload;
        },
        showChangeInfo(state,payload){
            state.showChangeInfo = payload;
        },
        showAdvertisement(state,payload){
            state.showAdvertisement = payload;
        },
        // 显示隐藏 header-注册/登录按钮
        toggleLoginBtn(state,payload){
            state.showLoginBtn = payload;
        }
    }
});


