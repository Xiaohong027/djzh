(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{KbpX:function(t,e,r){"use strict";var n=r("TgcV"),s=r.n(n);s.a},Q4oC:function(t,e,r){"use strict";var n=r("YzLq"),s=r.n(n);s.a},Rv5B:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-card",{staticClass:"transfer-container no-shadow q-p-lg"},[r("div",{class:t.transferContentClass},[r("q-card-title",[r("span",{staticClass:"text-tertiary font-18"},[r("i",{staticClass:"material-icons"},[t._v("border_color")])]),r("span",{staticClass:"text-tertiary font-18"},[t._v("\n          "+t._s(t.$t("TRS_TYPE_TRANSFER"))+"\n          ")]),t.isDesk?r("span",{staticClass:"text-secondary font-12"},[t._v("\n       "+t._s(t.$t("PAY_TIP"))+"\n         ")]):t._e()]),r("span",{staticClass:"transfer-title-line"}),r("q-card-main",{staticClass:"row justify-left"},[r("div",{staticClass:"row col-md-10 col-xs-12"},[r("trans-panel",{staticClass:"col-12",attrs:{asset:t.asset,user:t.user},scopedSlots:t._u([{key:"btns",fn:function(e){return r("div",{class:t.transferBtnClass},[r("q-btn",{staticClass:"col-6",attrs:{big:"",disable:t.btnDisable,color:"secondary",label:t.$t("TRS_TYPE_TRANSFER")},on:{click:function(r){t.sender(e.send)}}})],1)}}])})],1)])],1)])},s=[];n._withStripped=!0;r("ls82");var a=r("yXPU"),c=r.n(a),i=r("MVZn"),o=r.n(i),u=r("oWBu"),l=r("L2JU"),f=r("4IOb"),d={props:["userObj"],components:{QCardMain:f["j"],QCard:f["h"],QCardTitle:f["m"],QSelect:f["R"],QBtn:f["e"],TransPanel:u["a"]},data:function(){return{btnDisable:!1}},methods:o()({},Object(l["b"])(["getBalance"]),{sender:function(){var t=c()(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:r=t.sent,r?this.transShow=!1:this.disableBtn("btnDisable");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),disableBtn:function(t){var e=this;this[t]=!0,this._.delay(function(){e[t]=!1},3e3)}}),mounted:function(){var t=c()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),computed:o()({},Object(l["c"])(["userInfo","balances"]),{transferContentClass:function(){return this.isDesk?"shadow-2 transfer-content padding-20":"transfer-content shadow-2"},transferBtnClass:function(){return this.isDesk,"row justify-center col-12"},user:function(){return this.userInfo},asset:function(){return this.user?{currency:"XAS",precision:8,balance:this.user.account.xas}:null}}),watch:{}},h=d,m=(r("KbpX"),r("KHd+")),p=Object(m["a"])(h,n,s,!1,null,"eb1c62f6",null);e["default"]=p.exports},SPhN:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("canvas",{attrs:{width:t.iconSize,height:t.iconSize,"data-jdenticon-value":t.address}})},s=[];n._withStripped=!0;var a=r("WTRC"),c=r.n(a),i={name:"Jdenticon",props:["address","size"],data:function(){return{}},mounted:function(){c()()},computed:{iconSize:function(){return this.size?this.size:30}},watch:{address:function(t){this.$nextTick(function(){c()()})}}},o=i,u=(r("WT8y"),r("KHd+")),l=Object(u["a"])(o,n,s,!1,null,"3759ae24",null);e["a"]=l.exports},TgcV:function(t,e,r){},WT8y:function(t,e,r){"use strict";var n=r("kp9R"),s=r.n(n);s.a},YzLq:function(t,e,r){},kp9R:function(t,e,r){},oAqo:function(t,e,r){"use strict";r.d(e,"j",function(){return c}),r.d(e,"f",function(){return o}),r.d(e,"g",function(){return u}),r.d(e,"e",function(){return l}),r.d(e,"c",function(){return f}),r.d(e,"a",function(){return d}),r.d(e,"d",function(){return m}),r.d(e,"b",function(){return p}),r.d(e,"i",function(){return b}),r.d(e,"h",function(){return v});var n=r("eO9T"),s=r("AKX1"),a=r.n(s),c=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,i=/^[A-Z]{3,6}$/,o=/^[a-z0-9_]{2,20}$/,u=/^[A-Za-z0-9_\-+!@$% ]{10,100}$/,l=/^[A-Za-z0-9]{3,16}$/,f=/^[A-Z]{3,6}$/,d=/^\d+(\.\d+)?$/,h=/\s/g,m=function(){return Object(n["withParams"])({},function(t){return a.a.validateMnemonic(t)})},p=function(){return Object(n["withParams"])({},function(t){return i.test(t)})},b=function(){return Object(n["withParams"])({},function(t){return c.test(t)})},v=function(){return Object(n["withParams"])({},function(t){return t.length<=40&&!h.test(t)})}},oWBu:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.asset?r("div",{staticClass:"col-10 transPanel-container"},[t.showTitle?r("div",{staticClass:"bg-secondary transfer-top-container"},[t._m(0),r("span",{staticClass:"text-white font-18"},[t._v("\n          "+t._s(t.$t("TRS_TYPE_TRANSFER"))+"\n    ")]),t.isDesk?r("span",{staticClass:"text-white font-12"},[t._v("\n       "+t._s(t.$t("PAY_TIP"))+"\n    ")]):t._e()]):t._e(),t.showTitle?r("div",{staticClass:"transfer-top-Portraits row justify-center"},[r("jdenticon",{staticClass:"transfer-jdenticon",attrs:{address:t.form.receiver,size:60}})],1):t._e(),t.user&&t.user.account?r("div",{staticClass:"transfer-bottom-container"},[r("q-field",{staticClass:"col-8 text-four",attrs:{label:t.$t("RECIPIENT")+":","label-width":3,"error-label":t.$t("ERR_RECIPIENT_ADDRESS_FORMAT")}},[r("q-input",{staticClass:"col-8 font-12",attrs:{error:t.$v.form.receiver.$error,placeholder:t.$t("RECIPIENT_NAME_ADDRESS")},on:{blur:t.$v.form.receiver.$touch},model:{value:t.form.receiver,callback:function(e){t.$set(t.form,"receiver",e)},expression:"form.receiver"}})],1),r("q-field",{staticClass:"col-12",attrs:{label:t.$t("DAPP_CATEGORY")+":","label-width":3}},[r("q-select",{attrs:{options:t.assetsOpt},model:{value:t.form.currency,callback:function(e){t.$set(t.form,"currency",e)},expression:"form.currency"}}),t.form.currency?r("p",{staticClass:"text-secondary font-12"},[t._v(t._s(t.$t("AVAILABLE_BALANCE"))+t._s(t._f("fee")(t.balance,t.precision)))]):t._e()],1),r("q-field",{staticClass:"col-12",attrs:{label:t.$t("AMOUNTS")+":","label-width":3,"error-label":t.$t("ERR_AMOUNT_INVALID")}},[r("q-input",{staticClass:"font-12",attrs:{error:t.$v.form.amount.$error},on:{blur:t.$v.form.amount.$touch},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}})],1),t.secondSignature?r("q-field",{staticClass:"col-12",attrs:{label:t.$t("TRS_TYPE_SECOND_PASSWORD")+":","label-width":3}},[r("q-input",{attrs:{type:"password","error-label":t.$t("ERR_TOAST_SECONDKEY_WRONG"),error:t.$v.secondPwd.$error},on:{blur:t.$v.secondPwd.$touch},model:{value:t.secondPwd,callback:function(e){t.secondPwd=e},expression:"secondPwd"}})],1):t._e(),r("q-field",{staticClass:"col-12",attrs:{label:t.$t("FEES")+":","label-width":3}},[r("q-input",{attrs:{disable:""},model:{value:t.form.fee,callback:function(e){t.$set(t.form,"fee",e)},expression:"form.fee"}})],1),r("q-field",{staticClass:"col-12",attrs:{label:t.$t("REMARK")+":","label-width":3,"error-label":t.$t("ERR_INVALID_REMARK")}},[r("q-input",{ref:"remark",attrs:{helper:t.$t("REMARK_TIP")+"0 ~ 255",error:t.$v.form.remark.$error},on:{blur:t.$v.form.remark.$touch},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),r("div",{staticClass:"panelBtn col-6"},[t._t("btns",null,{send:t.send,cancel:t.cancel})],2)],1):t._e()]):t._e()},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"text-white font-18"},[r("i",{staticClass:"material-icons"},[t._v("border_color")])])}];n._withStripped=!0;r("rGqo"),r("a1Th"),r("f3/d"),r("ls82");var a=r("yXPU"),c=r.n(a),i=r("MVZn"),o=r.n(i),u=(r("KKXr"),r("ygAv")),l=r("dGEQ"),f=r("oAqo"),d=r("ta7f"),h=r("L2JU"),m=r("SPhN"),p=r("4IOb"),b=r("kB5k"),v={props:["user","asset","showTitle"],components:{Jdenticon:m["a"],QField:p["t"],QInput:p["v"],QSelect:p["R"]},data:function(){return{form:{from:"",receiver:"",amount:"",fee:"0.1 XAS",remark:"",currency:""},secondPwd:"",balance:"",precision:0}},validations:{form:{amount:{required:d["required"],gtZero:function(t){return f["a"].test(t)},getPrecision:function(t){var e=t.split(".");return 1===e.length||e[1].length<=this.precision}},receiver:{required:d["required"],address:Object(f["h"])()},remark:{maxLength:Object(d["maxLength"])(255)}},secondPwd:{secondPwd:Object(f["i"])()}},methods:o()({},Object(h["b"])(["broadcastTransaction","getBalances"]),Object(h["d"])(["setBalances"]),{send:function(){var t=c()(regeneratorRuntime.mark(function t(){var e,r,n,s,a,c,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$v.form.$touch(),e=!1,r=this.form,n=r.amount,s=r.receiver,a=r.remark,s=s.trim(),this.secondSignature&&(this.$v.secondPwd.$touch(),e=this.$v.secondPwd.$error),!e&&!this.$v.form.$error){t.next=7;break}return t.abrupt("return",!1);case 7:if(s!==this.user.account.address){t.next=10;break}return Object(u["p"])(this.$t("ERR_RECIPIENT_EQUAL_SENDER")),t.abrupt("return",!1);case 10:if(!this.user.account.name||s!==this.user.account.name){t.next=13;break}return Object(u["p"])(this.$t("ERR_RECIPIENT_EQUAL_SENDER")),t.abrupt("return",!1);case 13:return n=Object(b["BigNumber"])(n).times(Math.pow(10,this.precision)).toString(),c={},c="XAS"===this.form.currency?l["k"].transferXAS(n,s,a,this.user.secret,this.secondPwd):l["k"].transferAsset(this.form.currency,n,s,a,this.user.secret,this.secondPwd),t.next=18,this.broadcastTransaction(c);case 18:if(i=t.sent,!0!==i.success){t.next=25;break}return Object(u["m"])(this.$t("INF_TRANSFER_SUCCESS")),this.resetForm(),t.abrupt("return",!0);case 25:return Object(u["q"])(this.$t,i.error),t.abrupt("return",!1);case 27:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),cancel:function(){this.resetForm()},resetForm:function(){var t=this;this.form={receiver:"",amount:"",secondPwd:"",fee:"0.1 XAS",remark:"",currency:""},this._.delay(function(){t.$v.form.$reset(),t.$v.secondPwd.$reset()},60)},refreshBalances:function(){var t=c()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getBalances({address:this.user.account.address});case 2:e=t.sent,e.success&&this.setBalances(e.balances);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),mounted:function(){if(this.asset){var t=this.asset,e=t.currency,r=t.precision,n=t.balance;this.form.currency=e,this.balance=n,this.precision=r}},computed:o()({},Object(h["c"])(["balances","userInfo"]),{secondSignature:function(){return this.user?this.user.account.secondPublicKey:null},assetsOpt:function(){var t=this.balances.map(function(t){return{label:t.currency,value:t.currency}});return t=[{label:"XAS",value:"XAS"}].concat(t),t},assetsMap:function(){var t={};return this.balances.forEach(function(e){t[e.currency]=e}),t["XAS"]||(t["XAS"]={name:"XAS",precision:8,balance:this.userInfo.account.xas}),t}}),watch:{"form.currency":function(t){t&&this.assetsMap[t]&&(this.balance=this.assetsMap[t].balance,this.precision=this.assetsMap[t].precision,this.assetsMap[t].asset&&(this.precision=this.assetsMap[t].asset.precision))},asset:function(t){this.form.currency||(this.form.currency=t.currency)},user:function(t){this.refreshBalances()}}},_=v,$=(r("Q4oC"),r("KHd+")),w=Object($["a"])(_,n,s,!1,null,"a2fdca24",null);e["a"]=w.exports}}]);