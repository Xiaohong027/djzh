(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"+jAB":function(t,e,s){"use strict";var n=s("B4KL"),a=s.n(n);a.a},"834e":function(t,e,s){"use strict";var n=s("SuDJ"),a=s.n(n);a.a},B4KL:function(t,e,s){},H3EW:function(t,e,s){"use strict";var n=s("m1hC"),a=s.n(n);a.a},HnMl:function(t,e,s){"use strict";var n=s("gkyf"),a=s.n(n);a.a},Ke9t:function(t,e,s){"use strict";var n=s("Y41/"),a=s.n(n);a.a},LphY:function(t,e,s){var n={"./":["EstQ"],"./de":["2SE3"],"./de/":["2SE3"],"./de/index":["2SE3"],"./de/index.js":["2SE3"],"./en":["gRoS"],"./en/":["gRoS"],"./en/index":["gRoS"],"./en/index.js":["gRoS"],"./index":["EstQ"],"./index.js":["EstQ"],"./zh":["KDNX"],"./zh/":["KDNX"],"./zh/index":["KDNX"],"./zh/index.js":["KDNX"]};function a(t){var e=n[t];return e?Promise.all(e.slice(1).map(s.e)).then(function(){var t=s(e[0]);return t}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}a.keys=function(){return Object.keys(n)},a.id="LphY",t.exports=a},Q4oC:function(t,e,s){"use strict";var n=s("YzLq"),a=s.n(n);a.a},SPhN:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("canvas",{attrs:{width:t.iconSize,height:t.iconSize,"data-jdenticon-value":t.address}})},a=[];n._withStripped=!0;var o=s("WTRC"),r=s.n(o),i={name:"Jdenticon",props:["address","size"],data:function(){return{}},mounted:function(){r()()},computed:{iconSize:function(){return this.size?this.size:30}},watch:{address:function(t){this.$nextTick(function(){r()()})}}},c=i,l=(s("WT8y"),s("KHd+")),u=Object(l["a"])(c,n,a,!1,null,"3759ae24",null);e["a"]=u.exports},SuDJ:function(t,e,s){},WT8y:function(t,e,s){"use strict";var n=s("kp9R"),a=s.n(n);a.a},"Y41/":function(t,e,s){},YzLq:function(t,e,s){},ajQy:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{ref:"layout",attrs:{view:"lHh Lpr lFf"}},[s("q-layout-header",{staticClass:"no-shadow"},[s("q-toolbar",{staticClass:"head-mobile-top row justify-between bg-white"},[s("div",{staticClass:"head-top-left"},[s("q-btn",{attrs:{flat:""},on:{click:function(e){t.showLeft=!t.showLeft}}},[s("q-icon",{staticClass:"text-faded",attrs:{name:"menu"}})],1),s("div",{staticClass:"mobile-hide head-top-left-container"},[s("span",{staticClass:"font-18 text-black font-weight"},[t._v("\n            "+t._s(t.$t(" LATEST_BLOCK_HEIGHT"))+"\n          ")]),t._l(3,function(e){return s("i",{key:e,staticClass:"height-icon material-icons vertical-align-middle text-secondary font-22"},[t._v("equalizer")])}),s("span",{staticClass:"font-30 text-secondary margin-left-10 font-weight vertical-align-sub"},[t._v(t._s(t.latestBlock.height))])],2),s("span",{staticClass:"mobile-hide head-top-left-line vertical-align-middle"}),s("div",{staticClass:"mobile-hide head-top-left-container  vertical-align-middle"},[s("span",{staticClass:"font-18 text-black font-weight vertical-align-middle"},[t._v("\n            "+t._s(t.$t(" TIME_LAST"))+"\n          ")]),s("span",{staticClass:"font-22 text-secondary font-weight vertical-align-middle"},[t._v(t._s(t._f("time")(t.latestBlock.timestamp)))])])],1),s("div",{staticClass:"desktop-hide text-black"},[t._v("\n       "+t._s(t.clientPathName)+"\n     ")]),s("q-btn",{attrs:{flat:""},on:{click:t.logout}},[s("q-tooltip",[t._v("\n          "+t._s(t.$t("EXIT"))+"\n        ")]),s("q-icon",{staticClass:"text-faded",attrs:{name:"power settings new"}})],1)],1)],1),s("q-layout-drawer",{staticClass:"bg-seven main-left-list-container",attrs:{side:"left"},model:{value:t.showLeft,callback:function(e){t.showLeft=e},expression:"showLeft"}},[s("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[s("q-list-header",{staticClass:"header-container row justify-left"},[s("div",{staticClass:"header-left row justify-center items-center",on:{click:t.toHome}},[s("span",{staticClass:"menu-logo"})]),s("div",{staticClass:"header-right margin-left-10",on:{click:t.toHome}},[s("span",{staticClass:"header-right-top"},[t._v(t._s(t.$t("ASCH")))]),s("span",{staticClass:"header-right-bottom font-12"},[t._v("Asch Client "+t._s(t.version.version)+"-"+t._s(t.version.net))])])]),s("q-item",{staticClass:"list-item-container",attrs:{item:"",to:t.getRouterConf("home")}},[s("q-item-side",{attrs:{icon:"home"}}),s("q-item-main",{attrs:{label:t.$t("HOME")}})],1),s("q-item",{staticClass:"list-item-container",attrs:{item:"",to:t.getRouterConf("assets")}},[s("q-item-side",{attrs:{icon:"attach money"}}),s("q-item-main",{attrs:{label:t.$t("ASSET")}})],1),s("q-item",{staticClass:"list-item-container",attrs:{item:"",to:t.getRouterConf("transfer")}},[s("q-item-side",{attrs:{icon:"compare arrows"}}),s("q-item-main",{attrs:{label:t.$t("TRANSFER")}})],1),s("q-item",{staticClass:"list-item-container",attrs:{item:"",to:t.getRouterConf("proposal")}},[s("q-item-side",{attrs:{icon:"gavel"}}),s("q-item-main",{attrs:{label:t.$t("PROPOSAL")}})],1),s("q-item",{staticClass:"list-item-container",attrs:{item:"",to:t.getRouterConf("gateway")}},[s("q-item-side",{attrs:{icon:"apps"}}),s("q-item-main",{attrs:{label:t.$t("GATEWAY")}})],1),s("q-item",{staticClass:"list-item-container",attrs:{item:"",to:t.getRouterConf("councilDetail")}},[s("q-item-side",{attrs:{icon:"group"}}),s("q-item-main",{attrs:{label:t.$t("COUNCIL")}})],1),s("q-item",{staticClass:"list-item-container",attrs:{item:"",to:t.getRouterConf("delegates")}},[s("q-item-side",{attrs:{icon:"format list numbered"}}),s("q-item-main",{attrs:{label:t.$t("VOTE")}})],1),s("q-item",{staticClass:"list-item-container",attrs:{item:"",to:t.getRouterConf("blocks")}},[s("q-item-side",{attrs:{icon:"public"}}),s("q-item-main",{attrs:{label:t.$t("BLOCKS")}})],1),s("q-item",{staticClass:"list-item-container",attrs:{item:"",to:t.getRouterConf("applications")}},[s("q-item-side",{attrs:{icon:"apps"}}),s("q-item-main",{attrs:{label:t.$t("APPLICATIONS")}})],1),s("q-item",{staticClass:"list-item-container",attrs:{item:"",to:t.getRouterConf("personal")}},[s("q-item-side",{attrs:{icon:"person"}}),s("q-item-main",{attrs:{label:t.$t("PERSONAL")}})],1),s("q-item",{staticClass:"list-item-container",attrs:{item:"",to:t.getRouterConf("issuer")}},[s("q-item-side",{attrs:{icon:"send"}}),s("q-item-main",{attrs:{label:t.$t("TRS_TYPE_UIA_ISSUE")}})],1)],1)],1),s("q-page-container",{staticClass:"all-page-container"},[s("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in",duration:500}},[s("router-view",{attrs:{userObj:t.user}})],1),s("account-info",{attrs:{show:t.accountShow,account:t.accountInfo},on:{close:function(e){t.accountShow=!1}}}),s("q-modal",{staticClass:"transfer-modal-container",attrs:{"content-class":"modal-content-limit","no-backdrop-dismiss":""},model:{value:t.transShow,callback:function(e){t.transShow=e},expression:"transShow"}},[s("div",{staticClass:"col-8"},[s("trans-panel",{attrs:{showTitle:!0,assets:t.assets,asset:t.asset,user:t.userInfo},scopedSlots:t._u([{key:"btns",fn:function(e){return s("div",{staticClass:"row col-12 justify-between"},[s("q-btn",{staticClass:"col-auto",attrs:{big:"",outline:"",color:"secondary",label:t.$t("label.close")},on:{click:function(s){t.transShow=!1,e.cancel()}}}),s("q-btn",{staticClass:"col-auto",attrs:{big:"",color:"secondary",disable:t.btnDisable,label:t.$t("SEND")},on:{click:function(s){t.sendTrans(e.send)}}})],1)}}])})],1)]),s("code-modal",{attrs:{show:t.QRCodeShow,text:t.QRCodeText},on:{close:function(e){t.QRCodeShow=!1}}}),s("trans-info-modal",{staticClass:"code-modal-container",attrs:{show:t.transInfoModalShow,row:t.trans},on:{close:function(e){t.transInfoModalShow=!1}}})],1),s("q-ajax-bar",{ref:"bar",attrs:{position:"top",color:"orange"}}),s("q-layout-footer",{staticClass:"no-shadow footer-container "},[s("div",{staticClass:"desktop-hide row justify-left height-28 footer-introduce"},[s("span",{staticClass:"font-14 text-black font-weight height-36"},[t._v("\n            "+t._s(t.$t(" LATEST_BLOCK_HEIGHT"))+"\n      ")]),t._l(3,function(e){return s("i",{key:e,staticClass:"material-icons text-secondary font-18 margin-right-minus-5 height-36"},[t._v("equalizer")])}),s("span",{staticClass:"text-secondary font-24 margin-left-10 font-weight height-36"},[t._v(t._s(t.latestBlock.height))])],2),s("div",{staticClass:"desktop-hide row justify-left height-28 footer-introduce"},[s("span",{staticClass:"font-14 text-black font-weight vertical-align-middle"},[t._v("\n            "+t._s(t.$t(" TIME_LAST"))+"\n        ")]),s("span",{staticClass:"font-18 text-secondary font-weight vertical-align-middle"},[t._v(t._s(t._f("time")(t.latestBlock.timestamp)))])]),s("div",{staticClass:"row justify-between height-36"},[s("span",{staticClass:"footer-introduce font-12"},[t._v("©2018 copyright")]),s("span",{staticClass:"footer-introduce font-12"},[t._v(t._s(t.version.version)+" "+t._s(t.version.net)+" "+t._s(t.version.build))])])])],1)},a=[];n._withStripped=!0;s("f3/d"),s("ls82");var o=s("yXPU"),r=s.n(o),i=s("MVZn"),c=s.n(i),l=s("ygAv"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[s("q-fab",{attrs:{icon:"format list bulleted",direction:"up",color:"primary"}},[s("q-fab-action",{staticClass:"white",attrs:{color:"orange",icon:"chat"},on:{click:function(e){t.channelShow=!t.channelShow}}}),s("q-fab-action",{staticClass:"white",attrs:{color:"blue",icon:"compare arrows"},on:{click:t.openTrans}}),s("q-fab-action",{staticClass:"white",attrs:{color:"blue",icon:"attach money"},on:{click:function(e){t.router.push({name:"account",params:{user:t.user}})}}}),s("q-fab-action",{staticClass:"white",attrs:{color:"blue",icon:"home"},on:{click:function(e){t.router.push({name:"home",params:{user:t.user}})}}})],1)],1)},d=[];u._withStripped=!0;var f=s("4IOb"),h={name:"FloatMenu",props:["router","userObj"],components:{QPageSticky:f["K"]},data:function(){return{channelShow:!1}},methods:{openTrans:function(){this.$root.$emit("openTransactionDialog")}},computed:{user:function(){return this.userObj}},watch:{channelShow:function(t){window.CHPlugin.show()}}},m=h,p=(s("834e"),s("KHd+")),b=Object(p["a"])(m,u,d,!1,null,"0693bc02",null),v=b.exports,w=s("oWBu"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-modal",{attrs:{minimized:"","no-backdrop-dismiss":"","content-css":"padding: 20px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("big",[t._v(t._s(t.$t("DAPP_DETAIL")))]),s("table",{staticClass:"q-table horizontal-separator highlight loose accountinfo-table margin-t-20"},[s("tbody",{staticClass:"info-tbody"},[s("tr",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.account.address||"no data",expression:"account.address || 'no data'"}],attrs:{disable:""},on:{success:function(e){t.info(t.$t("COPY_SUCCESS"))}}},[s("td",[t._v(t._s(t.$t("ADDRESS")))]),s("td",{staticClass:"text-secondary cursor-pointer"},[t._v(t._s(t.account.address))])]),t.account.name?s("tr",[s("td",[t._v(t._s(t.$t("NICKNAME")))]),s("td",[t._v(t._s(t.account.name))])]):t._e(),s("tr",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.account.xas||"no data",expression:"account.xas || 'no data'"}],on:{success:function(e){t.info(t.$t("COPY_SUCCESS"))}}},[s("td",[t._v(t._s(t.$t("BALANCE")))]),s("td",[t._v(t._s(t._f("fee")(t.account.xas))+"  XAS")])]),t.account.isLocked?s("tr",[s("td",[t._v(t._s(t.$t("LOCK_POSITION"))+t._s(t.$t("HEIGHT")))]),s("td",[t._v(t._s(t.account.lockHeight))])]):t._e()])]),s("br"),s("div",{staticClass:"align-center"},[s("q-btn",{attrs:{color:"secondary",label:t.$t("label.close")},on:{click:t.close}})],1)],1)},g=[];_._withStripped=!0;var C={props:["show","account"],components:{QModal:f["G"],QBtn:f["e"]},data:function(){return{isDisable:!1}},methods:{close:function(){this.$emit("close")},info:function(t){var e=this;!0!==this.isDisable&&(this.isDisable=!0,setTimeout(function(){e.isDisable=!1},2e3),Object(l["m"])(t))}},computed:{},mounted:function(){}},$=C,S=(s("Ke9t"),Object(p["a"])($,_,g,!1,null,"50a620c0",null)),A=S.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{attrs:{"prevent-close":""},scopedSlots:t._u([{key:"buttons",fn:function(e){return[s("div",{staticClass:"row justify-center width-100"},[s("q-btn",{attrs:{color:"secondary",label:t.$t("label.close")},on:{click:t.close}})],1)]}}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.title?s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.title))]):t._e(),t.message?s("span",{attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.message))]):t._e(),s("div",{attrs:{slot:"body"},slot:"body"},[s("div",{staticClass:"row justify-center no-scroll"},[s("vue-qr",{attrs:{text:t.text||""}})],1)])])},R=[];E._withStripped=!0;var x=s("4omz"),y={props:["show","text","title","message"],components:{VueQr:x["a"],QDialog:f["r"],QBtn:f["e"]},data:function(){return{}},methods:{close:function(t){this.$emit("close")},onCancel:function(){}}},T=y,k=(s("HnMl"),Object(p["a"])(T,E,R,!1,null,"677ccbf1",null)),I=k.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-modal",{attrs:{minimized:"","content-class":"modal-content-limit","no-backdrop-dismiss":"","content-css":"padding: 20px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("big",[t._v(t._s(t.$t("DAPP_DETAIL")))]),t.row?s("table",{staticClass:"q-table horizontal-separator highlight loose "},[s("tbody",{staticClass:"info-tbody"},[s("tr",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.row.senderId||"no data",expression:"row.senderId || 'no data'"}],on:{success:function(e){t.info(t.$t("COPY_SUCCESS"))}}},[s("td",[t._v(t._s(t.$t("SENDER")))]),s("td",[t._v(t._s(t.row.senderId))])]),s("tr",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.row.recipientId||"no data",expression:"row.recipientId || 'no data'"}],on:{success:function(e){t.info(t.$t("COPY_SUCCESS"))}}},[s("td",[t._v(t._s(t.$t("RECIPIENT")))]),s("td",[t._v(t._s(t.row.recipientId))])]),s("tr",{directives:[{name:"clipboard",rawName:"v-clipboard",value:this.formatTimestamp(t.row.timestamp)||"no data",expression:"this.formatTimestamp(row.timestamp) || 'no data'"}],on:{success:function(e){t.info(t.$t("COPY_SUCCESS"))}}},[s("td",[t._v(t._s(t.$t("DATE")))]),s("td",[t._v(t._s(this.formatTimestamp(t.row.timestamp)))])]),s("tr",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.getAmountNFee(t.row)||"no data",expression:"getAmountNFee(row) || 'no data'"}],on:{success:function(e){t.info(t.$t("COPY_SUCCESS"))}}},[s("td",[t._v(t._s(this.$t("AMOUNTS")))]),s("td",[t._v(t._s(t.getAmountNFee(t.row)))])]),s("tr",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.row.message||"no data",expression:"row.message || 'no data'"}],on:{success:function(e){t.info(t.$t("COPY_SUCCESS"))}}},[s("td",[t._v(t._s(t.$t("REMARK")))]),s("td",[t._v(t._s(t.row.message))])])])]):t._e(),s("br"),s("q-btn",{attrs:{color:"primary",label:"Close"},on:{click:function(e){t.$emit("close")}}})],1)},O=[];q._withStripped=!0;var P=s("ydnR"),j=s("dGEQ"),L={name:"TransInfoModal",components:{QModal:f["G"],QBtn:f["e"]},props:["show","row"],data:function(){return{}},methods:{getAmountNFee:function(t){var e=t.amount;return Object(j["b"])(e)},getTransType:function(t){return this.$t(P["d"][t])},formatTimestamp:function(t){return Object(j["l"])(t)}}},N=L,M=(s("H3EW"),Object(p["a"])(N,q,O,!1,null,"63fd86d6",null)),D=M.exports,Q=s("L2JU"),B=s("zwU1"),U=s.n(B),z=function(){},K={name:"Home",components:{FloatMenu:v,TransPanel:w["a"],AccountInfo:A,CodeModal:I,QLayout:f["A"],QPageContainer:f["J"],QPage:f["I"],QLayoutHeader:f["D"],QLayoutFooter:f["C"],QLayoutDrawer:f["B"],QModal:f["G"],QBtn:f["e"],QList:f["E"],QItem:f["w"],QItemMain:f["x"],QItemSide:f["y"],QItemTile:f["z"],QToolbar:f["Ba"],QToolbarTitle:f["Ca"],TransInfoModal:D,QIcon:f["u"],QListHeader:f["F"],QAjaxBar:f["d"],QTooltip:f["Da"]},data:function(){return{user:null,showLeft:!0,logo:U.a,accountShow:!1,accountInfo:{},asset:null,transShow:!1,showFloatBtns:!0,address:"",QRCodeShow:!1,QRCodeText:"",intervalNum:-1,trans:null,transInfoModalShow:!1,btnDisable:!1}},methods:c()({},Object(Q["b"])(["refreshAccounts","getAccountsInfo","getBalances","getIssuer","registGateway"]),Object(Q["d"])(["updateUserInfo","setUserInfo","setVersion","setLatestBlock","setUserIsLogin","setBalances"]),{toHome:function(){this.$router.push("home")},logout:function(){Object(l["k"])("user"),this.setUserIsLogin(!1),this.$router.push("/login")},getRouterConf:function(t){var e={name:t,params:{user:this.user}};return e},openTransactionDialog:function(){var t=r()(regeneratorRuntime.mark(function t(){var e,s=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=s.length>0&&void 0!==s[0]?s[0]:null,this.asset=e?this._.merge({},e):{currency:"XAS",precision:8,balance:this.userInfo.account.xas},this.transShow=!0;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),openAccountModal:function(){var t=r()(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getAccountsInfo({address:e});case 2:s=t.sent,s.success&&s.unconfirmedAccount?(this.accountInfo=s.account,this.accountShow=!0):Object(l["o"])(this.$t("table.noData"));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getAssetsList:function(){var t=r()(regeneratorRuntime.mark(function t(){var e,s,n,a,o=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:z,s=o.length>1&&void 0!==o[1]?o[1]:z,t.next=4,this.uiaAssetListApi({});case 4:n=t.sent,n.success?(a=this._.merge({},this.userInfo,n),this.user=a,Object(l["d"])("user")&&Object(l["l"])("user",a),e(n)):s();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),openTransInfoModal:function(){var t=r()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.trans=e,this.transInfoModalShow=!0;case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),showAjaxBar:function(){var t=this.$refs.bar;t.start(),this._.delay(function(){return t.stop()},1e4)},changeFloatBtn:function(){this.showFloatBtns=!this.showFloatBtns},showQRCodeModal:function(t){this.QRCodeShow=!0,this.QRCodeText=t},sendTrans:function(){var t=r()(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:s=t.sent,s?this.transShow=!1:this.disableBtn("btnDisable");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),disableBtn:function(t){var e=this;this[t]=!0,this._.delay(function(){e[t]=!1},3e3)}}),beforeMount:function(){var t=this,e=this.$i18n.locale=Object(l["d"])("locale");if(s("LphY")("./".concat(e)).then(function(e){t.$q.i18n.set(e.default)}),window&&window.location){var n=window.location,a=n.protocol+"//"+n.hostname+":"+n.port||80;Object(l["l"])("currentServer",a)}},mounted:function(){var t=r()(regeneratorRuntime.mark(function t(){var e,s,n,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.userInfo||Object(l["d"])("user")||null,e){t.next=5;break}this.$router.push("/login"),t.next=10;break;case 5:return t.next=7,this.getAccountsInfo({address:e.account.address});case 7:s=t.sent,s.success&&(n=this._.merge({},e,s),n.address=e.account.address,n.account||(n.account={address:e.account.address,xas:0,isLocked:0,isAgent:0,lockHeight:0,agent:0,isDelegate:0,weight:0,agentWeight:0}),this.setUserInfo(n),this.setLatestBlock(s.latestBlock),this.setVersion(s.version),this.intervalNum=setInterval(function(){return a.refreshAccounts()},1e4)),this.getIssuer();case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),computed:c()({},Object(Q["c"])(["latestBlock","version","userInfo","balances"]),{secondSignature:function(){return this.userInfo?this.userInfo.account.secondPublicKey:null},clientPathName:function(){var t={home:"HOME",assets:"ASSET",assetDetail:"ASSET",transfer:"TRANSFER",proposal:"PROPOSAL",launchProposal:"PROPOSAL",proposalDetail:"PROPOSAL",gateway:"GATEWAY",gatewayDetail:"GATEWAY",delegates:"TRS_TYPE_VOTE",blocks:"BLOCKS",applications:"APPLICATIONS",personal:"PERSONAL",issuer:"TRS_TYPE_UIA_ISSUE"};for(var e in t)if(this.$route.name===e)return this.$t(t[e])},assets:function(){if(this.userInfo){var t=this.balances,e=this.userInfo.account,s={currency:"XAS",precision:8,balance:e.xas},n=[s].concat(t);return n}return[]}}),created:function(){this.$root.$on("showTransInfoModal",this.openTransInfoModal),this.$root.$on("openAccountModal",this.openAccountModal),this.$root.$on("openTransactionDialog",this.openTransactionDialog),this.$root.$on("showAjaxBar",this.showAjaxBar),this.$root.$on("showQRCodeModal",this.showQRCodeModal)},beforeDestroy:function(){clearInterval(this.intervalNum),this.$root.$off("openAccountModal",this.openAccountModal),this.$root.$off("openTransactionDialog",this.openTransactionDialog),this.$root.$off("showAjaxBar",this.showAjaxBar),this.$root.$off("showQRCodeModal",this.showQRCodeModal),this.$root.$off("showTransInfoModal",this.openTransInfoModal)}},H=K,F=(s("+jAB"),Object(p["a"])(H,n,a,!1,null,null,null));e["default"]=F.exports},gkyf:function(t,e,s){},kp9R:function(t,e,s){},m1hC:function(t,e,s){},oAqo:function(t,e,s){"use strict";s.d(e,"j",function(){return r}),s.d(e,"f",function(){return c}),s.d(e,"g",function(){return l}),s.d(e,"e",function(){return u}),s.d(e,"c",function(){return d}),s.d(e,"a",function(){return f}),s.d(e,"d",function(){return m}),s.d(e,"b",function(){return p}),s.d(e,"i",function(){return b}),s.d(e,"h",function(){return v});var n=s("eO9T"),a=s("AKX1"),o=s.n(a),r=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,i=/^[A-Z]{3,6}$/,c=/^[a-z0-9_]{2,20}$/,l=/^[A-Za-z0-9_\-+!@$% ]{10,100}$/,u=/^[A-Za-z0-9]{3,16}$/,d=/^[A-Z]{3,6}$/,f=/^\d+(\.\d+)?$/,h=/\s/g,m=function(){return Object(n["withParams"])({},function(t){return o.a.validateMnemonic(t)})},p=function(){return Object(n["withParams"])({},function(t){return i.test(t)})},b=function(){return Object(n["withParams"])({},function(t){return r.test(t)})},v=function(){return Object(n["withParams"])({},function(t){return t.length<=40&&!h.test(t)})}},oWBu:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.asset?s("div",{staticClass:"col-10 transPanel-container"},[t.showTitle?s("div",{staticClass:"bg-secondary transfer-top-container"},[t._m(0),s("span",{staticClass:"text-white font-18"},[t._v("\n          "+t._s(t.$t("TRS_TYPE_TRANSFER"))+"\n    ")]),t.isDesk?s("span",{staticClass:"text-white font-12"},[t._v("\n       "+t._s(t.$t("PAY_TIP"))+"\n    ")]):t._e()]):t._e(),t.showTitle?s("div",{staticClass:"transfer-top-Portraits row justify-center"},[s("jdenticon",{staticClass:"transfer-jdenticon",attrs:{address:t.form.receiver,size:60}})],1):t._e(),t.user&&t.user.account?s("div",{staticClass:"transfer-bottom-container"},[s("q-field",{staticClass:"col-8 text-four",attrs:{label:t.$t("RECIPIENT")+":","label-width":3,"error-label":t.$t("ERR_RECIPIENT_ADDRESS_FORMAT")}},[s("q-input",{staticClass:"col-8 font-12",attrs:{error:t.$v.form.receiver.$error,placeholder:t.$t("RECIPIENT_NAME_ADDRESS")},on:{blur:t.$v.form.receiver.$touch},model:{value:t.form.receiver,callback:function(e){t.$set(t.form,"receiver",e)},expression:"form.receiver"}})],1),s("q-field",{staticClass:"col-12",attrs:{label:t.$t("DAPP_CATEGORY")+":","label-width":3}},[s("q-select",{attrs:{options:t.assetsOpt},model:{value:t.form.currency,callback:function(e){t.$set(t.form,"currency",e)},expression:"form.currency"}}),t.form.currency?s("p",{staticClass:"text-secondary font-12"},[t._v(t._s(t.$t("AVAILABLE_BALANCE"))+t._s(t._f("fee")(t.balance,t.precision)))]):t._e()],1),s("q-field",{staticClass:"col-12",attrs:{label:t.$t("AMOUNTS")+":","label-width":3,"error-label":t.$t("ERR_AMOUNT_INVALID")}},[s("q-input",{staticClass:"font-12",attrs:{error:t.$v.form.amount.$error},on:{blur:t.$v.form.amount.$touch},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}})],1),t.secondSignature?s("q-field",{staticClass:"col-12",attrs:{label:t.$t("TRS_TYPE_SECOND_PASSWORD")+":","label-width":3}},[s("q-input",{attrs:{type:"password","error-label":t.$t("ERR_TOAST_SECONDKEY_WRONG"),error:t.$v.secondPwd.$error},on:{blur:t.$v.secondPwd.$touch},model:{value:t.secondPwd,callback:function(e){t.secondPwd=e},expression:"secondPwd"}})],1):t._e(),s("q-field",{staticClass:"col-12",attrs:{label:t.$t("FEES")+":","label-width":3}},[s("q-input",{attrs:{disable:""},model:{value:t.form.fee,callback:function(e){t.$set(t.form,"fee",e)},expression:"form.fee"}})],1),s("q-field",{staticClass:"col-12",attrs:{label:t.$t("REMARK")+":","label-width":3,"error-label":t.$t("ERR_INVALID_REMARK")}},[s("q-input",{ref:"remark",attrs:{helper:t.$t("REMARK_TIP")+"0 ~ 255",error:t.$v.form.remark.$error},on:{blur:t.$v.form.remark.$touch},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),s("div",{staticClass:"panelBtn col-6"},[t._t("btns",null,{send:t.send,cancel:t.cancel})],2)],1):t._e()]):t._e()},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-white font-18"},[s("i",{staticClass:"material-icons"},[t._v("border_color")])])}];n._withStripped=!0;s("rGqo"),s("a1Th"),s("f3/d"),s("ls82");var o=s("yXPU"),r=s.n(o),i=s("MVZn"),c=s.n(i),l=(s("KKXr"),s("ygAv")),u=s("dGEQ"),d=s("oAqo"),f=s("ta7f"),h=s("L2JU"),m=s("SPhN"),p=s("4IOb"),b=s("kB5k"),v={props:["user","asset","showTitle"],components:{Jdenticon:m["a"],QField:p["t"],QInput:p["v"],QSelect:p["R"]},data:function(){return{form:{from:"",receiver:"",amount:"",fee:"0.1 XAS",remark:"",currency:""},secondPwd:"",balance:"",precision:0}},validations:{form:{amount:{required:f["required"],gtZero:function(t){return d["a"].test(t)},getPrecision:function(t){var e=t.split(".");return 1===e.length||e[1].length<=this.precision}},receiver:{required:f["required"],address:Object(d["h"])()},remark:{maxLength:Object(f["maxLength"])(255)}},secondPwd:{secondPwd:Object(d["i"])()}},methods:c()({},Object(h["b"])(["broadcastTransaction","getBalances"]),Object(h["d"])(["setBalances"]),{send:function(){var t=r()(regeneratorRuntime.mark(function t(){var e,s,n,a,o,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$v.form.$touch(),e=!1,s=this.form,n=s.amount,a=s.receiver,o=s.remark,a=a.trim(),this.secondSignature&&(this.$v.secondPwd.$touch(),e=this.$v.secondPwd.$error),!e&&!this.$v.form.$error){t.next=7;break}return t.abrupt("return",!1);case 7:if(a!==this.user.account.address){t.next=10;break}return Object(l["p"])(this.$t("ERR_RECIPIENT_EQUAL_SENDER")),t.abrupt("return",!1);case 10:if(!this.user.account.name||a!==this.user.account.name){t.next=13;break}return Object(l["p"])(this.$t("ERR_RECIPIENT_EQUAL_SENDER")),t.abrupt("return",!1);case 13:return n=Object(b["BigNumber"])(n).times(Math.pow(10,this.precision)).toString(),r={},r="XAS"===this.form.currency?u["k"].transferXAS(n,a,o,this.user.secret,this.secondPwd):u["k"].transferAsset(this.form.currency,n,a,o,this.user.secret,this.secondPwd),t.next=18,this.broadcastTransaction(r);case 18:if(i=t.sent,!0!==i.success){t.next=25;break}return Object(l["m"])(this.$t("INF_TRANSFER_SUCCESS")),this.resetForm(),t.abrupt("return",!0);case 25:return Object(l["q"])(this.$t,i.error),t.abrupt("return",!1);case 27:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),cancel:function(){this.resetForm()},resetForm:function(){var t=this;this.form={receiver:"",amount:"",secondPwd:"",fee:"0.1 XAS",remark:"",currency:""},this._.delay(function(){t.$v.form.$reset(),t.$v.secondPwd.$reset()},60)},refreshBalances:function(){var t=r()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getBalances({address:this.user.account.address});case 2:e=t.sent,e.success&&this.setBalances(e.balances);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),mounted:function(){if(this.asset){var t=this.asset,e=t.currency,s=t.precision,n=t.balance;this.form.currency=e,this.balance=n,this.precision=s}},computed:c()({},Object(h["c"])(["balances","userInfo"]),{secondSignature:function(){return this.user?this.user.account.secondPublicKey:null},assetsOpt:function(){var t=this.balances.map(function(t){return{label:t.currency,value:t.currency}});return t=[{label:"XAS",value:"XAS"}].concat(t),t},assetsMap:function(){var t={};return this.balances.forEach(function(e){t[e.currency]=e}),t["XAS"]||(t["XAS"]={name:"XAS",precision:8,balance:this.userInfo.account.xas}),t}}),watch:{"form.currency":function(t){t&&this.assetsMap[t]&&(this.balance=this.assetsMap[t].balance,this.precision=this.assetsMap[t].precision,this.assetsMap[t].asset&&(this.precision=this.assetsMap[t].asset.precision))},asset:function(t){this.form.currency||(this.form.currency=t.currency)},user:function(t){this.refreshBalances()}}},w=v,_=(s("Q4oC"),s("KHd+")),g=Object(_["a"])(w,n,a,!1,null,"a2fdca24",null);e["a"]=g.exports},zwU1:function(t,e,s){t.exports=s.p+"img/logo.451d596.png"}}]);