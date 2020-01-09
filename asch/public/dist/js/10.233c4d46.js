(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"66BH":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",[r("q-card",{class:e.proposalLaunchClass,attrs:{color:"white","text-color":"black"}},[r("q-card-title",{staticClass:"col-12 font-22 padding-l-0"},[r("q-icon",{attrs:{size:"18px",name:"border color"}}),e._v(" "+e._s(e.$t("proposal.LAUNCH"))+"\n      "),r("q-btn",{staticClass:"row items-center",attrs:{slot:"right",color:"secondary"},on:{click:e.hideModal},slot:"right"},[r("q-icon",{attrs:{name:"reply"}})],1)],1),r("q-card-separator",{staticClass:"col-12 q-my-lg bg-999 no-border-top"}),r("div",{staticClass:"row col-md-12"},[r("q-field",{staticClass:"col-md-8 col-xs-12 font-16 text-four",attrs:{"error-label":e.$t("ERR.ERR_10_100_TITLE"),"label-width":2,label:e.$t("proposal.SELECT_P_TITLE")}},[r("q-input",{attrs:{error:e.$v.p_title.$error},on:{focus:function(t){e.$v.p_title.$reset()},blur:function(t){e.$v.p_title.$touch()}},model:{value:e.p_title,callback:function(t){e.p_title=t},expression:"p_title"}})],1)],1),r("div",{staticClass:"row col-md-12"},[r("q-field",{staticClass:"col-md-8 col-xs-12 font-16 text-four",attrs:{"label-width":2,"error-label":e.$t("ERR.ERR_REQUIRE_TYPE"),label:e.$t("proposal.SELECT_P_TYPE")}},[r("q-select",{attrs:{color:"white",options:e.proposalType,error:e.$v.first_type.$error},on:{change:e.detectChange,blur:function(t){e.$v.first_type.$touch()}},model:{value:e.first_type,callback:function(t){e.first_type=t},expression:"first_type"}})],1),r("q-field",{directives:[{name:"show",rawName:"v-show",value:"change"===this.first_type||"period"===this.first_type,expression:"this.first_type === 'change' || this.first_type === 'period' "}],staticClass:"col-md-8 col-xs-12 font-16 text-four",attrs:{"label-width":2,label:e.$t("proposal.SELECT_P_COUNCIL"),"error-label":e.$t("ERR.ERR_REQUIRE_CONTENT")}},[r("q-select",{attrs:{options:e.councilList,error:e.$v.p_selected.$error,placeholder:e.$t("proposal.SELECT_P_COUNCIL")},on:{blur:function(t){e.$v.p_selected.$touch()}},model:{value:e.p_selected,callback:function(t){e.p_selected=t},expression:"p_selected"}})],1),r("q-field",{directives:[{name:"show",rawName:"v-show",value:"init"===this.first_type||"member_n"===this.first_type&&"new"!==this.first_type&&null!==this.first_type,expression:"this.first_type === 'init' || this.first_type === 'member_n' && this.first_type !== 'new' && this.first_type !== null"}],staticClass:"col-md-8 col-xs-12 font-16 text-four",attrs:{label:e.$t("proposal.SELECT_P_NET"),"label-width":2,"error-label":e.$t("ERR.ERR_REQUIRE_CONTENT")}},[r("q-select",{attrs:{options:e.netList,error:e.$v.p_selected.isSelected,placeholder:e.$t("proposal.SELECT_P_NET")},on:{change:function(t){e.console.log(t)},blur:function(t){e.$v.p_selected.$touch()}},model:{value:e.p_selected,callback:function(t){e.p_selected=t},expression:"p_selected"}})],1)],1),r("div",{staticClass:"row col-md-12"},[r("q-field",{staticClass:"col-md-8 col-xs-12 font-16 text-four",attrs:{helper:e.$t("AT_LEAST_7DAY"),"label-width":2,label:e.$t("proposal.SELECT_P_PERIOD")}},[r("q-datetime",{attrs:{min:e.tomorrow,error:e.$v.p_time_end.$error},on:{blur:function(t){e.$v.p_time_end.$touch()}},model:{value:e.p_time_end,callback:function(t){e.p_time_end=t},expression:"p_time_end"}})],1)],1)],1),r("q-card",{directives:[{name:"show",rawName:"v-show",value:null!==this.first_type,expression:"this.first_type !== null"}],class:e.proposalLaunchClass,attrs:{color:"white","text-color":"black"}},[r("q-card-title",{staticClass:"col-12 font-22 padding-l-0"},[r("q-icon",{attrs:{size:"18px",name:"border color"}}),e._v(" "+e._s(e.$t("proposal.CONTENT"))+"\n    ")],1),r("q-card-separator",{staticClass:"col-12 q-my-lg bg-999 no-border-top"}),r("transition-group",{staticClass:"col-12",attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[r("q-card-main",{key:"content",staticClass:"row col-12"},[r("div",{directives:[{name:"show",rawName:"v-show",value:"new"===this.first_type,expression:"this.first_type === 'new'"}],staticClass:"col-md-8 col-xs-12",attrs:{id:"new"}},[r("div",{staticClass:"row col-12"},[r("q-field",{staticClass:"block col-md-6 col-xs-12",attrs:{"label-width":"4","error-label":e.$t("ERR.ERR_REQUIRE_NUMBER"),label:e.$t("LAUNCH_MODAL.MEMBER_NUMBER")}},[r("q-input",{attrs:{min:"7",max:"33",type:"number",error:e.$v.NEW.memberNumber.$error,suffix:e.$t("LAUNCH_MODAL.PERSON")},on:{blur:function(t){e.$v.NEW.memberNumber.$touch()}},model:{value:e.NEW.memberNumber,callback:function(t){e.$set(e.NEW,"memberNumber",t)},expression:"NEW.memberNumber"}})],1)],1),r("div",{staticClass:"row col-12"},[r("q-field",{staticClass:"col-md-6 col-xs-12",attrs:{"label-width":"4","error-label":e.$t("ERR.ERR_REQUIRE_MEMBER"),label:e.$t("LAUNCH_MODAL.MEMBER_MEMBER")}},[r("q-select",{attrs:{chips:"",multiple:"",filter:"",error:e.$v.NEW.selected.ifEnough,options:e.NEW.memberList},on:{blur:function(t){e.$v.NEW.selected.$touch()}},model:{value:e.NEW.selected,callback:function(t){e.$set(e.NEW,"selected",t)},expression:"NEW.selected"}})],1)],1),r("div",{staticClass:"row col-12"},[r("q-field",{staticClass:"col-md-6 col-xs-12",attrs:{"label-width":"4","error-label":e.$t("ERR.ERR_1_30"),label:e.$t("LAUNCH_MODAL.PERIOD")}},[r("q-input",{attrs:{type:"number",error:e.$v.NEW.period.$error,suffix:e.$t("LAUNCH_MODAL.DAY")},on:{blur:function(t){e.$v.NEW.period.$touch()}},model:{value:e.NEW.period,callback:function(t){e.$set(e.NEW,"period",t)},expression:"NEW.period"}})],1)],1),r("div",{},[r("q-field",{staticClass:"col-8",attrs:{"label-width":"2","error-label":e.$t("ERR.ERR_50_1000"),label:e.$t("LAUNCH_MODAL.BRIEF")}},[r("q-input",{attrs:{type:"textarea",error:e.$v.brief.$error,placeholder:e.$t("LAUNCH_MODAL.BRIEF_TIP"),"max-height":100,maxlength:1e3},on:{blur:function(t){e.$v.brief.$touch()}},model:{value:e.brief,callback:function(t){e.brief=t},expression:"brief"}})],1)],1)]),r("div",{directives:[{name:"show",rawName:"v-show",value:"new_n"===this.first_type,expression:"this.first_type === 'new_n'"}],staticClass:"col-md-12",attrs:{id:"new"}},[r("div",{staticClass:"row col-md-12"},[r("q-field",{staticClass:"block col-md-6 col-xs-12 font-16 text-four",attrs:{"label-width":"3","error-label":e.$t("ERR.ERR_3_16"),label:e.$t("LAUNCH_MODAL.NET_NAME")}},[r("q-input",{attrs:{type:"text",error:e.$v.NEW.name.$error},on:{blur:function(t){e.$v.NEW.name.$touch()}},model:{value:e.NEW.name,callback:function(t){e.$set(e.NEW,"name",t)},expression:"NEW.name"}})],1)],1),r("div",{staticClass:"row col-12"},[r("q-field",{staticClass:"block col-md-6 col-xs-12 font-16 text-four",attrs:{"label-width":"3","error-label":e.$t("LAUNCH_MODAL.NET_CURRENCY_TIP"),label:e.$t("LAUNCH_MODAL.NET_CURRENCY")}},[r("q-input",{attrs:{type:"text",error:e.$v.NEW.currency.$error},on:{blur:function(t){e.$v.NEW.currency.$touch()}},model:{value:e.NEW.currency,callback:function(t){e.$set(e.NEW,"currency",t)},expression:"NEW.currency"}})],1)],1),r("div",{staticClass:"row col-12"},[r("q-field",{staticClass:"block col-md-6 col-xs-12 font-16 text-four",attrs:{"label-width":"3","error-label":e.$t("LAUNCH_MODAL.PRECISION_TIP"),label:e.$t("PRECISION")}},[r("q-input",{attrs:{"upper-case":"",type:"number",error:e.$v.NEW.currencyPrecision.$error},on:{blur:function(t){e.$v.NEW.currencyPrecision.$touch()}},model:{value:e.NEW.currencyPrecision,callback:function(t){e.$set(e.NEW,"currencyPrecision",t)},expression:"NEW.currencyPrecision"}})],1)],1),r("div",{staticClass:"row col-12"},[r("q-field",{staticClass:"block col-md-6 col-xs-12 font-16 text-four",attrs:{"label-width":"3","error-label":e.$t("LAUNCH_MODAL.CURRENCY_BRIEF_TIP"),label:e.$t("LAUNCH_MODAL.CURRENCY_BRIEF")}},[r("q-input",{attrs:{type:"text",error:e.$v.NEW.currencyBrief.$error},on:{blur:function(t){e.$v.NEW.currencyBrief.$touch()}},model:{value:e.NEW.currencyBrief,callback:function(t){e.$set(e.NEW,"currencyBrief",t)},expression:"NEW.currencyBrief"}})],1)],1),r("div",{staticClass:"row col-12"},[r("q-field",{staticClass:"block col-md-6 col-xs-12 font-16 text-four",attrs:{"label-width":"3","error-label":e.$t("ERR.ERR_3_33"),label:e.$t("LAUNCH_MODAL.MEMBER_NUMBER")}},[r("q-input",{attrs:{type:"number",error:e.$v.NEW.memberNumber.$error,placeholder:e.$t("LAUNCH_MODAL.PERSON")},on:{blur:function(t){e.$v.NEW.memberNumber.$touch()}},model:{value:e.NEW.memberNumber,callback:function(t){e.$set(e.NEW,"memberNumber",t)},expression:"NEW.memberNumber"}})],1)],1),r("div",{staticClass:"row col-12"},[r("q-field",{staticClass:"col-md-6 col-xs-12 font-16 text-four",attrs:{"label-width":"3","error-label":e.$t("ERR.ERR_1_30"),label:e.$t("LAUNCH_MODAL.PERIOD_NET")}},[r("q-input",{attrs:{type:"number",error:e.$v.NEW.period.$error,placeholder:e.$t("LAUNCH_MODAL.DAY")},on:{blur:function(t){e.$v.NEW.period.$touch()}},model:{value:e.NEW.period,callback:function(t){e.$set(e.NEW,"period",t)},expression:"NEW.period"}})],1)],1),r("div",{staticClass:"row col-12"},[r("q-field",{staticClass:"col-md-6 col-xs-12 font-16 text-four",attrs:{"label-width":"3","error-label":e.$t("ERR.ERR_50_1000"),label:e.$t("LAUNCH_MODAL.BRIEF")}},[r("q-input",{attrs:{type:"textarea",error:e.$v.brief.$error,placeholder:e.$t("LAUNCH_MODAL.BRIEF_TIP"),"max-height":100,maxlength:1e3},on:{blur:function(t){e.$v.brief.$touch()}},model:{value:e.brief,callback:function(t){e.brief=t},expression:"brief"}})],1)],1)]),r("div",{directives:[{name:"show",rawName:"v-show",value:"init"===this.first_type&&this.initFalse,expression:"this.first_type === 'init' && this.initFalse"}],staticClass:"col-12",attrs:{id:"init"}},[r("div",{staticClass:"row"},[r("q-field",{staticClass:"col-md-8 col-xs-12 font-16 text-four",attrs:{"label-width":"2","error-label":e.$t("ERR.ERR_REQUIRE_MEMBER"),label:e.$t("LAUNCH_MODAL.MEMBER_SUGGEST_PRE")}},[r("q-select",{attrs:{"chips-color":"secondary",chips:"",multiple:"",filter:"",suffix:e.$t("LAUNCH_MODAL.MEMBER_SUGGEST_POST",{number:e.gatewayMember}),error:!e.$v.INIT.selected.inNeed,options:e.delegateList},on:{input:e.detectChange,blur:function(t){e.$v.INIT.selected.$touch()}},model:{value:e.INIT.selected,callback:function(t){e.$set(e.INIT,"selected",t)},expression:"INIT.selected"}})],1)],1),r("div",{staticClass:"row col-12"},[r("q-field",{staticClass:"col-md-8 col-xs-12 font-16 text-four",attrs:{"label-width":"2","error-label":e.$t("ERR.ERR_50_1000"),label:e.$t("LAUNCH_MODAL.INIT_REASON")}},[r("q-input",{attrs:{type:"textarea",error:e.$v.brief.$error,placeholder:e.$t("LAUNCH_MODAL.BRIEF_TIP"),"max-height":100,maxlength:1e3},on:{blur:function(t){e.$v.brief.$touch()}},model:{value:e.brief,callback:function(t){e.brief=t},expression:"brief"}})],1)],1)]),r("div",{directives:[{name:"show",rawName:"v-show",value:"init"===this.first_type&&!this.initFalse,expression:"this.first_type === 'init' && !this.initFalse"}],staticClass:"col-12"},[r("div",{staticClass:"row"},[e._v(e._s(e.$t("ALREADY_INIT")))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:"period_n"===this.first_type,expression:"this.first_type === 'period_n'"}],staticClass:"col-12",attrs:{id:"remove"}},[r("div",{staticClass:"row"},[r("q-field",{staticClass:"col-3 font-16 text-four",attrs:{"label-width":4,label:e.$t("LAUNCH_MODAL.NET_PERIOD")}},[r("q-input",{attrs:{suffix:e.$t("LAUNCH_MODAL.DAY"),type:"number",disabled:"",readonly:""},model:{value:e.PERIOD.pre,callback:function(t){e.$set(e.PERIOD,"pre",t)},expression:"PERIOD.pre"}})],1),r("span",{staticClass:"self-center q-ml-lg"},[e._v(e._s(e.$t("LAUNCH_MODAL.INSTEAD_POST")))]),r("q-field",{staticClass:"col-3 q-ml-xl font-16 text-four",attrs:{"error-label":e.$t("ERR.ERR_1_30")}},[r("q-input",{attrs:{suffix:e.$t("LAUNCH_MODAL.DAY"),type:"number",error:e.$v.PERIOD.post.$error},on:{blur:function(t){e.$v.PERIOD.post.$touch()}},model:{value:e.PERIOD.post,callback:function(t){e.$set(e.PERIOD,"post",t)},expression:"PERIOD.post"}})],1)],1),r("div",{staticClass:"row"},[r("q-field",{staticClass:"col-9 font-16 text-four",attrs:{"label-width":"2","error-label":e.$t("ERR.ERR_50_1000"),label:e.$t("LAUNCH_MODAL.PERIOD_REASON")}},[r("q-input",{attrs:{type:"textarea",error:e.$v.brief.$error,placeholder:e.$t("LAUNCH_MODAL.BRIEF_TIP"),"max-height":100,maxlength:1e3},on:{blur:function(t){e.$v.brief.$touch()}},model:{value:e.brief,callback:function(t){e.brief=t},expression:"brief"}})],1)],1)]),r("div",{directives:[{name:"show",rawName:"v-show",value:"member_n"===this.first_type,expression:"this.first_type === 'member_n'"}],staticClass:"col-12 q-field-label-inner-center",attrs:{id:"remove"}},[r("div",{staticClass:"row"},[r("q-field",{staticClass:"col-md-5 col-xs-12 font-16 text-four",attrs:{align:"left","label-width":"3",label:e.$t("LAUNCH_MODAL.REMOVE_COUNCIL_TIP1")}},[r("q-select",{attrs:{align:"center",chips:"",filter:"",options:e.MEMBER.electedList},model:{value:e.MEMBER.removed,callback:function(t){e.$set(e.MEMBER,"removed",t)},expression:"MEMBER.removed"}})],1),r("q-field",{staticClass:"col-md-4 col-xs-12 font-16 text-four",attrs:{"label-width":"3",label:e.$t("LAUNCH_MODAL.REMOVE_COUNCIL_TIP2")}},[r("q-select",{attrs:{align:"center",color:"secondary",chips:"",filter:"",options:e.MEMBER.unelectedList},model:{value:e.MEMBER.added,callback:function(t){e.$set(e.MEMBER,"added",t)},expression:"MEMBER.added"}})],1),r("q-field",{staticClass:"col-md-3 col-xs-12 font-16 text-four",attrs:{"label-width":"8",label:e.$t("LAUNCH_MODAL.REMOVE_COUNCIL_TIP3")}})],1),r("div",{staticClass:"row col-12"},[r("q-field",{staticClass:"col-md-8 col-xs-12 font-16 text-four",attrs:{"label-width":"2","error-label":e.$t("ERR.ERR_50_1000"),label:e.$t("LAUNCH_MODAL.MEMBER_REASON")}},[r("q-input",{attrs:{type:"textarea",error:e.$v.brief.$error,placeholder:e.$t("LAUNCH_MODAL.BRIEF_TIP"),"max-height":100,maxlength:1e3},on:{blur:function(t){e.$v.brief.$touch()}},model:{value:e.brief,callback:function(t){e.brief=t},expression:"brief"}})],1)],1)]),r("div",{directives:[{name:"show",rawName:"v-show",value:"remove"===this.first_type,expression:"this.first_type === 'remove'"}],staticClass:"col-12",attrs:{id:"remove"}},[r("div",{},[r("q-field",{staticClass:"font-16 text-four",attrs:{"label-width":"1","error-label":e.$t("ERR.ERR_50_1000"),label:e.$t("LAUNCH_MODAL.REMOVE_OBJECT")}},[r("q-select",{attrs:{align:"center",color:"secondary",chips:"",filter:"",options:e.councilList},model:{value:e.p_selected,callback:function(t){e.p_selected=t},expression:"p_selected"}})],1),r("q-field",{staticClass:"font-16 text-four",attrs:{"label-width":"1","error-label":e.$t("ERR.ERR_50_1000"),label:e.$t("LAUNCH_MODAL.REMOVE_REASON")}},[r("q-input",{attrs:{type:"textarea",error:e.$v.brief.$error,placeholder:e.$t("LAUNCH_MODAL.BRIEF_TIP"),"max-height":100,maxlength:1e3},on:{blur:function(t){e.$v.brief.$touch()}},model:{value:e.brief,callback:function(t){e.brief=t},expression:"brief"}})],1)],1)]),r("div",{directives:[{name:"show",rawName:"v-show",value:"period"===this.first_type,expression:"this.first_type === 'period'"}],staticClass:"col-12",attrs:{id:"remove"}},[r("div",{staticClass:"row"},[r("q-field",{staticClass:"col-9 font-16 text-four",attrs:{"label-width":"8","error-label":e.$t("ERR.ERR_1_30"),label:e.$t("LAUNCH_MODAL.PERIOD_SHIFT",{pre:e.PERIOD.pre})}},[r("q-input",{attrs:{suffix:e.$t("LAUNCH_MODAL.DAY"),type:"number",error:e.$v.PERIOD.post.$error},on:{blur:function(t){e.$v.PERIOD.post.$touch()}},model:{value:e.PERIOD.post,callback:function(t){e.$set(e.PERIOD,"post",t)},expression:"PERIOD.post"}})],1)],1),r("div",{staticClass:"row"},[r("q-field",{staticClass:"col-9 font-16 text-four",attrs:{"label-width":"2","error-label":e.$t("ERR.ERR_50_1000"),label:e.$t("LAUNCH_MODAL.PERIOD_REASON")}},[r("q-input",{attrs:{type:"textarea",error:e.$v.PERIOD.post.$error,placeholder:e.$t("LAUNCH_MODAL.BRIEF_TIP"),"max-height":100,maxlength:1e3},on:{blur:function(t){e.$v.PERIOD.post.$touch()}},model:{value:e.brief,callback:function(t){e.brief=t},expression:"brief"}})],1)],1)]),r("div",{directives:[{name:"show",rawName:"v-show",value:"change"===this.first_type,expression:"this.first_type === 'change'"}],staticClass:"col-12",attrs:{id:"remove"}},[r("div",{staticClass:"row"},[r("q-field",{staticClass:"col-3 font-16 text-four",attrs:{"label-width":4,"error-label":e.$t("ERR.ERR_REQUIRE_TYPE"),label:e.$t("proposal.SELECT_MEMBER_ACTION")}},[r("q-select",{attrs:{error:e.$v.MEMBER.instead_post.$error,options:e.MEMBER.type},on:{blur:function(t){e.$v.MEMBER.instead_post.$touch()}},model:{value:e.MEMBER.type_selected,callback:function(t){e.$set(e.MEMBER,"type_selected",t)},expression:"MEMBER.type_selected"}})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:"add"===this.MEMBER.type_selected,expression:"this.MEMBER.type_selected === 'add'"}],staticClass:"row"},[r("q-field",{staticClass:"col-8 font-16 text-four",attrs:{"label-width":"2",label:e.$t("LAUNCH_MODAL.MEMBER_MEMBER")}},[r("q-select",{attrs:{chips:"",multiple:"",filter:"",options:e.MEMBER.memberList},model:{value:e.MEMBER.add_selected,callback:function(t){e.$set(e.MEMBER,"add_selected",t)},expression:"MEMBER.add_selected"}})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:"delete"===this.MEMBER.type_selected,expression:"this.MEMBER.type_selected === 'delete'"}],staticClass:"row"},[r("q-field",{staticClass:"col-8 font-16 text-four",attrs:{"label-width":"2",label:e.$t("LAUNCH_MODAL.MEMBER_MEMBER")}},[r("q-select",{attrs:{chips:"",multiple:"",filter:"",options:e.MEMBER.memberList},model:{value:e.MEMBER.delete_selected,callback:function(t){e.$set(e.MEMBER,"delete_selected",t)},expression:"MEMBER.delete_selected"}})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:"instead"===this.MEMBER.type_selected,expression:"this.MEMBER.type_selected === 'instead'"}],staticClass:"row"},[r("q-field",{staticClass:"col-4 font-16 text-four",attrs:{"label-width":"2",label:e.$t("LAUNCH_MODAL.INSTEAD_PRE")}},[r("q-select",{attrs:{chips:"",multiple:"",filter:"",options:e.MEMBER.memberList},model:{value:e.MEMBER.instead_pre,callback:function(t){e.$set(e.MEMBER,"instead_pre",t)},expression:"MEMBER.instead_pre"}})],1),r("q-field",{staticClass:"col-4 font-16 text-four",attrs:{"label-width":"2",label:e.$t("LAUNCH_MODAL.INSTEAD_POST")}},[r("q-select",{attrs:{chips:"",multiple:"",filter:"",options:e.delegateList},model:{value:e.MEMBER.instead_post,callback:function(t){e.$set(e.MEMBER,"instead_post",t)},expression:"MEMBER.instead_post"}})],1)],1),r("member-indicator",{attrs:{type:e.countedType}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:null!==this.first_type,expression:"this.first_type !== null"}],staticClass:"row col-12"},[e.secondSignature?r("q-field",{staticClass:"col-6 font-16 text-four",attrs:{label:e.$t("TRS_TYPE_SECOND_PASSWORD")+":","label-width":3}},[r("q-input",{attrs:{type:"password","error-label":e.$t("ERR_TOAST_SECONDKEY_WRONG"),error:e.$v.secondPwd.$error},on:{blur:e.$v.secondPwd.$touch},model:{value:e.secondPwd,callback:function(t){e.secondPwd=t},expression:"secondPwd"}})],1):e._e()],1)]),r("q-card-main",{directives:[{name:"show",rawName:"v-show",value:null!==this.first_type,expression:"this.first_type !== null"}],key:"agreement"},[r("q-checkbox",{attrs:{color:"secondary",val:"one",readonly:""},model:{value:e.agreeOptions,callback:function(t){e.agreeOptions=t},expression:"agreeOptions"}},[r("a",{staticClass:"agreeBtn text-secondary",on:{click:e.showAgreement}},[e._v(e._s(e.$t("LAUNCH_MODAL.READ_TIP1")))])]),r("br"),r("br"),r("q-checkbox",{attrs:{color:"secondary",val:"two",label:e.$t("LAUNCH_MODAL.READ_TIP2")},model:{value:e.agreeOptions,callback:function(t){e.agreeOptions=t},expression:"agreeOptions"}}),r("div",{staticClass:"row justify-center margin-top-20"},[r("q-btn",{staticClass:"col-4",attrs:{color:"secondary",size:"md",label:e.$t("proposal.BTN_LAUNCH"),disabled:this.disableLaunch},on:{click:e.launchProposal}})],1)],1)],1)],1),r("user-agreement-modal",{attrs:{show:e.userAgreementShow,title:e.$t("ERR_READ_ALL"),tips:"",content:e.$t("AGREEMENT_ASSET_CONTENT")},on:{confirm:e.confirm,cancel:function(t){e.userAgreementShow=!1}}})],1)},i=[];s._withStripped=!0;r("xfY5"),r("rGqo"),r("ls82");var a=r("yXPU"),l=r.n(a),n=(r("f3/d"),r("MVZn")),o=r.n(n),c=r("ta7f"),u=r("L2JU"),d=r("oAqo"),p=r("ygAv"),h=r("sXxm"),m=r("I9Qk"),E=r("4IOb"),f=E["Ga"].addToDate(new Date,{days:1}),_={name:"ProposalLaunch",components:{QField:E["t"],QModal:E["G"],QInput:E["v"],QCard:E["h"],QCardMain:E["j"],QCardTitle:E["m"],QCardSeparator:E["l"],QSelect:E["R"],QCheckbox:E["n"],QDatetime:E["q"],QChipsInput:E["p"],QIcon:E["u"],QPage:E["I"],QBtn:E["e"],MemberIndicator:h["a"],UserAgreementModal:m["a"]},props:["show"],data:function(){return{secondPwd:"",userAgreementShow:!1,p_title:null,first_type:null,p_time_start:null,p_time_end:null,p_selected:{name:""},second_type:null,initFalse:!0,agreeOptions:[],proposalType:[{label:this.$t("proposal.SELECT_NEWNET"),value:"new_n"},{label:this.$t("proposal.SELECT_INITNET"),value:"init"},{label:this.$t("proposal.SELECT_CHANGEMEMBER"),value:"member_n"}],proposalType_sec:[{label:this.$t("proposal.SELECT_REMOVECOUNCIL"),value:"remove"},{label:this.$t("proposal.SELECT_CHANGEPERIOD"),value:"period"},{label:this.$t("proposal.SELECT_CHANGEMEMBER"),value:"member"}],proposalType_sec_n:[{label:this.$t("proposal.SELECT_INITNET"),value:"init"},{label:this.$t("proposal.SELECT_NETMEMBER"),value:"member_n"}],councilList:[],netList:[],delegateList:[],brief:null,NEW:{memberList:[],memberNumber:null,selected:[],period:null,agreement:[],name:null,currency:null,currencyBrief:null,currencyPrecision:null},INIT:{selected:[]},REMOVE:{},PERIOD:{pre:0,post:0},MEMBER:{type:[{label:this.$t("proposal.SELECT_MEMBER_ADD"),value:"add"},{label:this.$t("proposal.SELECT_MEMBER_DELETE"),value:"delete"},{label:this.$t("proposal.SELECT_MEMBER_INSTEAD"),value:"instead"}],type_selected:null,added:[],removed:[],electedList:[],unelectedList:[],add_selected:[],delete_selected:[],instead_pre:[],instead_post:[],memberList:[],show_pre:[],show_post:[]},typeMap:{new_n:"gateway_register",init:"gateway_init",period_n:"gateway_period",member_n:"gateway_update_member",new:"council_register",change:"council_update_mumber",period:"council_update",remove:"council_revoke"},tomorrow:f}},validations:{secondPwd:{secondPwd:Object(d["i"])()},p_title:{required:c["required"],isTested:function(e){return d["g"].test(e)}},first_type:{required:c["required"]},p_selected:{required:c["required"],isSelected:function(){return("init"===this.first_type||"member_n"===this.first_type)&&!1===this.$v.p_selected.$dirty}},p_time_start:{required:c["required"]},p_time_end:{required:c["required"]},brief:{required:c["required"],minLength:Object(c["minLength"])(50),maxLength:Object(c["maxLength"])(1e3)},second_type:{test:function(e){return"new"!==this.first_type&&"new_n"!==this.first_type&&null!==this.first_type&&!1!==this.$v.second_type.$dirty&&null===e}},NEW:{memberNumber:{required:c["required"],minValue:Object(c["minValue"])(3),maxValue:Object(c["maxValue"])(33)},selected:{required:c["required"],ifEnough:function(e){return this.NEW.memberNumber!==e.length&&!1!==this.$v.NEW.selected.$dirty}},period:{required:c["required"],minValue:Object(c["minValue"])(1),maxValue:Object(c["maxValue"])(30)},name:{required:c["required"],reg:function(e){return d["e"].test(e)}},currency:{required:c["required"],reg:function(e){return d["c"].test(e)}},currencyPrecision:{required:c["required"],minValue:Object(c["minValue"])(0),maxValue:Object(c["maxValue"])(16)},currencyBrief:{required:c["required"],minLength:Object(c["minLength"])(1),maxLength:Object(c["maxLength"])(256)}},INIT:{selected:{required:c["required"],inNeed:function(e){return this.gatewayMember===e.length}}},PERIOD:{post:{required:c["required"],minValue:Object(c["minValue"])(1),maxValue:Object(c["maxValue"])(30)}},MEMBER:{instead_post:{required:c["required"]},added:{required:c["required"],isEqual:function(e){return e.length===this.MEMBER.removed.length}},removed:{required:c["required"],isEqual:function(e){return e.length===this.MEMBER.added.length}}},REMOVE:{}},mounted:function(){},methods:o()({},Object(u["b"])(["postProposal","getGateways","getGatewayDelegates"]),{hideModal:function(){this.resetHeader(),this.resetDetail(),this.$v.$reset(),this.$router.back()},initInfo:function(){},compileContent:function(){var e={};return"new_n"===this.first_type?(this.p_desc=this.brief,e={name:this.NEW.name,desc:this.NEW.currencyBrief,updateInterval:this.countedInterval,minimumMembers:this.NEW.memberNumber,currency:{symbol:this.NEW.currency,desc:this.NEW.currencyBrief,precision:this.NEW.currencyPrecision}}):"init"===this.first_type?(this.p_desc="",e={gateway:this.p_selected.name,members:this.INIT.selected,desc:this.brief}):"member_n"===this.first_type?(this.p_desc=this.brief,e={gateway:this.p_selected.name,from:this.MEMBER.removed.address,to:this.MEMBER.added.address}):"init"===this.first_type?(this.p_desc="",e={gateway:this.p_selected.name,members:this.INIT.selected,desc:this.brief}):"member_n"===this.first_type&&(this.p_desc=this.brief,e={gateway:this.p_selected.name,from:this.beforeAddress,to:this.afterAddress}),e},launchProposal:function(){var e=l()(regeneratorRuntime.mark(function e(){var t,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.checkValidate(this.first_type),t){e.next=4;break}return Object(p["n"])(this.$t("LAUNCH_MODAL.ERR_INVALID_FORM")),e.abrupt("return");case 4:return r={},r.content=this.compileContent(),r.title=this.p_title,r.desc=this.brief,r.topic=this.countedType,r.endHeight=this.endHeight,r.secondPwd=this.secondPwd,e.next=13,this.postProposal(r);case 13:s=e.sent,s.success?(Object(p["m"])(this.$t("LAUNCH_MODAL.LAUNCH_SUCCESS")),this.hideModal()):Object(p["n"])(s.error);case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),detectChange:function(){},getAllGate:function(){var e=l()(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getGateways();case 2:t=e.sent,r=[],"member_n"===this.first_type?t.gateways.forEach(function(e){if(e.validatorNumber>0)return r.push({label:e.name,value:e})}):t.gateways.forEach(function(e){return r.push({label:e.name,value:e})}),this.netList=r;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getAllDelegates:function(){var e=l()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getGatewayDelegates({name:this.p_selected.name});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),formInitList:function(){var e=l()(regeneratorRuntime.mark(function e(){var t,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this,e.next=3,this.getGatewayDelegates({name:this.p_selected.name});case 3:r=e.sent,s=[],this.initFalse=!0,r.validators.forEach(function(e){if(1!==e.elected)return s.push({label:e.name,value:e.address});t.initFalse=!1}),this.delegateList=s;case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),formMemberList:function(){var e=l()(regeneratorRuntime.mark(function e(){var t,r,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getGatewayDelegates({name:this.p_selected.name});case 2:t=e.sent,r=[],s=[],i=[],t.validators.forEach(function(e){if(1===e.elected)return s.push({label:e.name,value:e})}),t.validators.forEach(function(e){if(0===e.elected)return i.push({label:e.name,value:e})}),t.validators.forEach(function(e){return r.push({label:e.name,value:e})}),this.MEMBER.electedList=s,this.MEMBER.unelectedList=i,this.delegateList=r;case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),checkValidate:function(e){if(!this.$v.p_title.$invalid&&!this.$v.first_type.$invalid&&!this.$v.p_time_end.$invalid)switch(e){case"init":return!(this.$v.p_selected.isSelected||this.$v.INIT.selected.$invalid||!this.$v.INIT.selected.inNeed||this.$v.brief.$invalid);case"member_n":return!(this.$v.p_selected.isSelected||this.$v.brief.$invalid||!this.$v.MEMBER.added.isEqual||!this.$v.MEMBER.removed.isEqual);case"new_n":return!(this.$v.NEW.name.$invalid||this.$v.NEW.currency.$invalid||this.$v.NEW.currencyPrecision.$invalid||this.$v.NEW.currencyBrief.$invalid||this.$v.NEW.memberNumber.$invalid||this.$v.NEW.period.$invalid||this.$v.brief.$invalid)}return!1},resetHeader:function(){this.p_title=null,this.first_type=null,this.p_time_start=null,this.p_time_end=null,this.p_selected={name:""},this.secondPwd=""},resetDetail:function(){this.initFalse=!1,this.councilList=[],this.netList=[],this.delegateList=[],this.brief=null,this.NEW={memberList:[],memberNumber:null,selected:[],period:null,agreement:[],name:null,currency:null,currencyBrief:null,currencyPrecision:null},this.INIT={selected:[]},this.PERIOD={pre:null,post:null},this.MEMBER={type:[{label:this.$t("proposal.SELECT_MEMBER_ADD"),value:"add"},{label:this.$t("proposal.SELECT_MEMBER_DELETE"),value:"delete"},{label:this.$t("proposal.SELECT_MEMBER_INSTEAD"),value:"instead"}],type_selected:null,added:[],removed:[],electedList:[],unelectedList:[],add_selected:[],delete_selected:[],instead_pre:[],instead_post:[],memberList:[],show_pre:[],show_post:[]}},showAgreement:function(){this.userAgreementShow=!0},confirm:function(){this.userAgreementShow=!1,this.agreeOptions.indexOf("one")<0&&this.agreeOptions.push("one")}}),computed:o()({},Object(u["c"])(["userInfo"]),{proposalLaunchClass:function(){return this.isDesk?"padding-siut q-mx-xl q-my-xl":"row col-12 padding-siut margin-top-20"},secondSignature:function(){return this.userInfo?this.userInfo.account.secondPublicKey:null},countedType:function(){return this.typeMap[this.first_type]},endHeight:function(){var e=this.userInfo.latestBlock.height,t=(new Date).getTime(),r=new Date(this.p_time_end).getTime(),s=(r-t)/1e4;return Math.round(e+s)},countedInterval:function(){return 8640*Number(this.NEW.period)},disableLaunch:function(){return 2!==this.agreeOptions.length},totalName:function(){var e=[];return this.delegateList&&this.delegateList.length>0&&this.MEMBER.electedList.forEach(function(t){return e.push(t.label)}),e},afterList:function(){var e=this,t=[],r=[];return this.MEMBER.electedList.length>0&&this.MEMBER.removed.length>0&&(this.MEMBER.removed.forEach(function(e){return r.push(e.name)}),this.MEMBER.electedList.forEach(function(s){if(e._.indexOf(r,s.label)<0)return t.push(s)})),this.MEMBER.electedList.length>0&&this.MEMBER.added.length>0&&this.MEMBER.added.forEach(function(e){t.push({label:e.name,value:e})}),t},afterName:function(){var e=[];return this.afterList.length>0&&this.afterList.forEach(function(t){return e.push(t.label)}),e},beforeAddress:function(){var e=[];return this.MEMBER.electedList.forEach(function(t){return e.push(t.value.address)}),e.join(",")},afterAddress:function(){var e=[];return this.afterList.length>0&&this.afterList.forEach(function(t){return e.push(t.value.address)}),e.join(",")},gatewayMember:function(){return this.p_selected&&this.p_selected.minimumMembers?this.p_selected.minimumMembers:0},upperTargetSelect:function(){switch(this.first_type){case"new":return this.$t("proposal.SELECT_P_COUNCIL");case"new_n":return this.$t("proposal.SELECT_P_NET")}}}),watch:{first_type:function(e){"init"!==e&&"member_n"!==e||this.getAllGate()},p_selected:function(e){"init"===this.first_type?this.formInitList():"member_n"===this.first_type&&this.formMemberList()}}},b=_,v=(r("Q1jh"),r("KHd+")),$=Object(v["a"])(b,s,i,!1,null,"029ec518",null);t["default"]=$.exports},E2RR:function(e,t,r){},I9Qk:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-modal",{class:e.userAgreementClass,attrs:{"content-class":"modal-content-limit"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[r("q-card",{staticClass:"col-12 no-shadow"},[r("div",{staticClass:"bg-secondary height-62 padding-l-20"},[r("span",{staticClass:"text-white font-18 font-weight"},[e._v(e._s(e.title))])]),r("q-card-separator"),r("q-card-main",{staticClass:"q-px-lg margin-t-20"},[r("q-scroll-area",{staticClass:"shadow-1 q-px-sm q-py-lg",staticStyle:{height:"300px"}},[r("vue-markdown",{attrs:{source:e.content}})],1),r("div",{staticClass:"row justify-between user-agree-content"},[r("q-checkbox",{attrs:{label:e.$t("I_AGREE")},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),r("span",{staticClass:"text-right text-secondary"},[e._v("\n       "+e._s(e.tips)+"\n      ")])],1)],1),r("q-card-main",[r("div",{staticClass:"justify-between row padding-40"},[r("q-btn",{staticClass:"col-3",attrs:{big:"",outline:"",color:"secondary",size:"md",label:e.$t("label.cancel")},on:{click:e.cancel}}),r("q-btn",{staticClass:"bg-secondary text-white col-3",attrs:{big:"",disable:!e.checked,label:e.$t("label.ok")},on:{click:e.confirm}})],1)])],1)],1)},i=[];s._withStripped=!0;var a=r("nOak"),l=r.n(a),n=r("4IOb"),o={data:function(){return{checked:!1}},props:["show","title","content","tips"],components:{VueMarkdown:l.a,QModal:n["G"],QCard:n["h"],QCardTitle:n["m"],QCardMain:n["j"],QCardSeparator:n["l"],QScrollArea:n["P"],QBtn:n["e"],QCheckbox:n["n"]},methods:{confirm:function(){this.$emit("confirm")},cancel:function(){this.$emit("cancel")}},computed:{userAgreementClass:function(){return this.isDesk?"minimized user-agreement-desktop-container":"maximized user-agreement-mobile-container"}}},c=o,u=(r("irZP"),r("KHd+")),d=Object(u["a"])(c,s,i,!1,null,"73a901f1",null);t["a"]=d.exports},Q1jh:function(e,t,r){"use strict";var s=r("E2RR"),i=r.n(s);i.a},hMJF:function(e,t,r){},irZP:function(e,t,r){"use strict";var s=r("hMJF"),i=r.n(s);i.a},o8Y3:function(e,t,r){},oAqo:function(e,t,r){"use strict";r.d(t,"j",function(){return l}),r.d(t,"f",function(){return o}),r.d(t,"g",function(){return c}),r.d(t,"e",function(){return u}),r.d(t,"c",function(){return d}),r.d(t,"a",function(){return p}),r.d(t,"d",function(){return m}),r.d(t,"b",function(){return E}),r.d(t,"i",function(){return f}),r.d(t,"h",function(){return _});var s=r("eO9T"),i=r("AKX1"),a=r.n(i),l=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,n=/^[A-Z]{3,6}$/,o=/^[a-z0-9_]{2,20}$/,c=/^[A-Za-z0-9_\-+!@$% ]{10,100}$/,u=/^[A-Za-z0-9]{3,16}$/,d=/^[A-Z]{3,6}$/,p=/^\d+(\.\d+)?$/,h=/\s/g,m=function(){return Object(s["withParams"])({},function(e){return a.a.validateMnemonic(e)})},E=function(){return Object(s["withParams"])({},function(e){return n.test(e)})},f=function(){return Object(s["withParams"])({},function(e){return l.test(e)})},_=function(){return Object(s["withParams"])({},function(e){return e.length<=40&&!h.test(e)})}},sXxm:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-around q-my-lg member-container"},[r("div",{staticClass:"partLeft col-md-5 col-xs-12 align-center"},[r("div",{staticClass:"part-title"},[e._v(e._s(e.$t(e.title_pre)))]),e._l(e.contentPre,function(t,s){return r("q-chip",{key:s,staticClass:"chip",attrs:{square:"",color:"white","text-color":"secondary"}},[e._v(e._s(t))])})],2),r("q-icon",{staticClass:"mobile-hide padding-t-40",attrs:{size:"33px",name:"keyboard arrow right"}}),r("q-icon",{staticClass:"desktop-hide padding-t-40",attrs:{size:"33px",name:"keyboard arrow down"}}),r("div",{staticClass:"partRight col-md-5 col-xs-12 align-center"},[r("div",{staticClass:"part-title"},[e._v(e._s(e.$t(e.title_post)))]),e._l(e.contentPost,function(t,s){return r("q-chip",{key:s,staticClass:"chip",attrs:{square:"",color:"white","text-color":"secondary"}},[e._v(e._s(t))])})],2)],1)},i=[];s._withStripped=!0;var a=r("4IOb"),l={name:"MemberIndicator",props:["memberPre","memberPost","showCounter","type"],data:function(){return{preMsg:"",postMsg:""}},components:{QChipsInput:a["p"],QField:a["t"],QIcon:a["u"],QChip:a["o"]},computed:{title_pre:function(){switch(this.type){case"gateway_init":return this.$t("DETAIL_MODAL.INIT_TIP_PRE",{number:this.memberPre?this.memberPre.length:""});case"gateway_update_member":return this.$t("DETAIL_MODAL.MEMBER_TIP_PRE");case"council_change":return this.$t("LAUNCH_MODAL.INSTEAD_PRE")}},title_post:function(){switch(this.type){case"gateway_init":return this.$t("DETAIL_MODAL.INIT_TIP_POST",{number:this.memberPost?this.memberPost.length:""});case"gateway_update_member":return this.$t("DETAIL_MODAL.MEMBER_TIP_POST");case"council_change":return this.$t("LAUNCH_MODAL.INSTEAD_POST")}},contentPre:function(){if(Array.isArray(this.memberPre))return this.memberPre;var e=[];return e.push(this.memberPre),e},contentPost:function(){if(Array.isArray(this.memberPost))return this.memberPost;var e=[];return e.push(this.memberPost),e}}},n=l,o=(r("sj40"),r("KHd+")),c=Object(o["a"])(n,s,i,!1,null,"2e6a9eef",null);t["a"]=c.exports},sj40:function(e,t,r){"use strict";var s=r("o8Y3"),i=r.n(s);i.a}}]);