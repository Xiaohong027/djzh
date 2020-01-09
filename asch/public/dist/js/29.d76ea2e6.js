(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"1IGm":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("q-page",{staticClass:"tab-panel-container row"},[r("q-card",{staticClass:"col-12 shadow-0"},[r("div",{staticClass:"geteway-top justify-between"},[r("i",{staticClass:"material-icons vertical-align-middle font-30 text-secondary"},[e._v("person")]),r("span",{staticClass:"font-20 text-black vertical-align-middle"},[e._v(e._s(e.$t("APPLICATIONS")))]),r("div",{staticClass:"float-right row items-center inline",attrs:{slot:"right"},slot:"right"},[r("q-btn",{staticClass:"inverted",attrs:{color:"secondary","form-inverted":"",label:e.$t("CREATE_MY_DAPP")},on:{click:e.createMyDapp}})],1)]),r("q-card-title",[e._v("\n      "+e._s(e.$t("DAPP_LIST"))+"\n      "),r("q-toggle",{attrs:{label:e.$t("DAPP_INSTALL_LIST"),color:"secondary"},model:{value:e.installed,callback:function(t){e.installed=t},expression:"installed"}})],1),r("q-card-main",{staticClass:"row"},[r("div",{staticClass:"row"},e._l(e.dapps,function(t,n){return r("q-card",{key:n,staticClass:"col-lg-3 col-md-10 col-xs-12 assets-panel-content padding-b-20 border-r-6",attrs:{inline:"",color:"white","text-color":"black"}},[r("q-card-media",{staticClass:"dapp-top-img"},[r("div",{staticClass:"dapp-img-container"},[r("img",{ref:"img"+n,refInFor:!0,attrs:{src:t.icon},on:{error:function(t){e.onError(n)}}})])]),r("q-card-title",{attrs:{align:"center"}},[e._v("\n            "+e._s(t.name)+"\n            "),r("div",{staticClass:"row items-center",attrs:{slot:"center"},slot:"center"})]),r("q-card-main",[r("p",{staticClass:"text-faded margin-b-0"},[e._v(e._s(t.desc))])]),r("q-card-separator"),r("q-card-actions",{staticClass:"justify-around"},[r("q-btn",{staticClass:"btn shadow-0",attrs:{outline:"","text-color":"secondary",label:e.$t("CHAINS_OVERVIEW"),rounded:""},on:{click:function(n){e.balance(t)}}}),r("q-btn",{staticClass:"btn shadow-0",attrs:{outline:"","text-color":"secondary",label:e.$t("DEPOSIT"),rounded:""},on:{click:function(n){e.depositFunc(t)}}}),r("q-btn",{staticClass:"btn shadow-0",attrs:{outline:"","text-color":"secondary",label:e.$t("CHECK"),rounded:""},on:{click:function(n){e.check(t)}}})],1)],1)})),e.dapps.length<e.pagination.rowsNumber?r("q-btn",{attrs:{label:e.$t("LOAD_MORE")},on:{click:e.loadMore}}):e._e()],1)],1),r("q-modal",{attrs:{minimized:"","no-backdrop-dismiss":"","content-css":"padding: 20px"},model:{value:e.modalInfoShow,callback:function(t){e.modalInfoShow=t},expression:"modalInfoShow"}},[r("big",[e._v(e._s(e.$t("DAPP_DETAIL")))]),r("table",{staticClass:"q-table horizontal-separator highlight loose "},[r("thead",[0==e.balanceType?r("tr",[r("th",[e._v(e._s(e.$t("DAPP_SUPPORT_COIN")))]),r("th",[e._v(e._s("DAPP"+e.$t("BALANCE")))])]):e._e(),1==e.balanceType?r("tr",[r("th",[e._v(e._s(e.$t("DAPP_SUPPORT_COIN")))]),r("th",[e._v(e._s("DAPP"+e.$t("BALANCE")))])]):e._e()]),0==e.balanceType?r("tbody",{staticClass:"info-tbody"},e._l(e.dappBalances,function(t){return r("tr",{key:t.currency},[r("td",[e._v(e._s(t.currency))]),r("td",[e._v(e._s(e._f("fee")(t.balance,t.asset.precision)))])])})):e._e(),1==e.balanceType?r("tbody",{staticClass:"info-tbody"},e._l(e.dappBalances,function(t){return r("tr",{key:t.currency},[r("td",[e._v(e._s(t.currency))]),r("td",[e._v(e._s(e._f("fee")(t.balance,t.precision)))])])})):e._e()]),r("br"),r("div",{staticClass:"align-center"},[r("q-btn",{attrs:{color:"secondary",label:e.$t("label.close")},on:{click:function(){t.modalInfoShow=!1,t.dappBalances={}}}})],1)],1),r("q-dialog",{attrs:{"prevent-close":""},on:{ok:e.onOk,cancel:e.onCancel},scopedSlots:e._u([{key:"buttons",fn:function(t){return[r("q-btn",{attrs:{flat:"",color:"primary",label:e.$t("label.cancel")},on:{click:t.cancel}}),r("q-btn",{attrs:{flat:"",color:"primary",label:e.$t("label.ok")},on:{click:t.ok}})]}}]),model:{value:e.dialogShow,callback:function(t){e.dialogShow=t},expression:"dialogShow"}},[r("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.dialog.title))]),r("span",{attrs:{slot:"message"},slot:"message"},[e._v(e._s(e.dialog.message))]),r("div",{staticClass:"row",attrs:{slot:"body"},slot:"body"},[r("q-field",{staticClass:"col-12",attrs:{"label-width":4}},[r("q-select",{attrs:{placeholder:e.$t("ASSET"),filter:"",options:e.assetsOpt,error:e.$v.form.depositName.$error,"error-label":"error"},model:{value:e.form.depositName,callback:function(t){e.$set(e.form,"depositName",t)},expression:"form.depositName"}})],1),r("q-field",{staticClass:"col-12",attrs:{"label-width":4,"error-label":e.$t("ERR_ASSET_PRECISION_NOT_CORRECT")}},[r("q-input",{attrs:{placeholder:e.$t("AMOUNTS"),type:"number",error:e.$v.form.amount.$error,"error-label":"error"},on:{blur:e.$v.form.amount.$touch,keyup:function(t){return"button"in t||!e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete"])?e.delSearch(t):null}},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1),3==e.dialog.form?r("q-field",{staticClass:"col-12",attrs:{"label-width":4}},[r("q-input",{attrs:{placeholder:e.$t("ADDRESS"),error:this.addressError,"error-label":e.$t("ERR_TOAST_ACCOUNT_INVALID_RECIPIENT")},on:{blur:e.validateAddr},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1):e._e(),e.secondSignature?r("q-field",{staticClass:"col-12",attrs:{"error-label":e.$t("ERR_TOAST_SECONDKEY_WRONG"),error:e.secondPwdError,"label-width":2}},[r("q-input",{attrs:{placeholder:e.$t("ACCOUNT_TYPE2_HINT"),type:"password"},on:{blur:e.validateSecondPwd},model:{value:e.form.secondPwd,callback:function(t){e.$set(e.form,"secondPwd",t)},expression:"form.secondPwd"}})],1):e._e()],1)])],1)},a=[];r._withStripped=!0;n("rGqo"),n("f3/d"),n("tUrg"),n("ls82");var s=n("yXPU"),i=n.n(s),o=n("MVZn"),c=n.n(o),l=(n("a1Th"),n("ygAv")),u=n("dGEQ"),d=n("ta7f"),p=n("oAqo"),h=n("L2JU"),f=n("kB5k"),m=n("EirO"),b=n.n(m),g=n("4IOb"),w={props:["userObj"],components:{QPage:g["I"],QModal:g["G"],QDialog:g["r"],QField:g["t"],QInput:g["v"],QBtn:g["e"],QToggle:g["Aa"],QCard:g["h"],QCardMain:g["j"],QCardTitle:g["m"],QCardActions:g["i"],QCardMedia:g["k"],QCardSeparator:g["l"],QSelect:g["R"]},data:function(){return{defaultIcon:b.a,dapps:[],pagination:{page:1,rowsNumber:0,rowsPerPage:10},filter:"",loading:!1,modalInfoShow:!1,row:{},dialogShow:!1,dialog:{title:"",message:"",form:1},dappBalances:[],balanceType:0,form:{depositName:"",amount:"",address:null,secondPwd:""},addressError:!1,secondPwdError:!1,installed:!1}},validations:{form:{amount:{required:d["required"],minValue:Object(d["minValue"])(0),outPrecision:function(t){if(this.selectedAssets&&""!==t){var e=Object(f["BigNumber"])(t).times(Math.pow(10,this.selectedAssets.precision)).toString();return-1===e.indexOf(".")&&-1===e.indexOf("-")}return!1}},depositName:{required:d["required"]}}},methods:c()({},Object(h["b"])(["getBalances","dappMyBalance","broadcastTransaction","appInstalled","appListApi","getAllChains","getInstalledChains","dappContract","deposit","account"]),{loadMore:function(){var t=i()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.pagination.page+=1,t.next=3,this.getDapps();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getDapps:function(){var t=i()(regeneratorRuntime.mark(function t(){var e,n,r,a,s=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=s.length>0&&void 0!==s[0]?s[0]:{},s.length>1&&void 0!==s[1]?s[1]:"",this.loading=!0,e&&e.page&&(this.pagination=e),n=this.pagination.rowsPerPage,r=this.pagination.page,a={},!this.installed){t.next=13;break}return t.next=10,this.getInstalledChains({limit:n,offset:(r-1)*n});case 10:a=t.sent,t.next=16;break;case 13:return t.next=15,this.getAllChains({limit:n,offset:(r-1)*n});case 15:a=t.sent;case 16:return this.dapps=1===r?a.chains:this.dapps.concat(a.dapps),this.pagination.rowsNumber=a.count&&a.count.count?a.count.count:0,this.loading=!1,t.abrupt("return",a);case 20:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),viewAppBanlance:function(){var t=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getBalance(e);case 2:this.modalInfoShow=!0;case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getBalance:function(){var t=i()(regeneratorRuntime.mark(function t(e){var n,r,a,s,i,o=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=o.length>1&&void 0!==o[1]&&o[1],a=[],n){t.next=12;break}return t.next=5,this.getBalances({address:e.address});case 5:return r=t.sent,t.next=8,this.account({address:e.address});case 8:s=t.sent,this.balanceType=0,t.next=16;break;case 12:return t.next=14,this.dappMyBalance({appid:e.transactionId,address:this.user.account.address});case 14:r=t.sent,this.balanceType=1;case 16:if(!0!==r.success){t.next=23;break}return i=r.balances.map(function(t){return t.precision=t.asset.precision,"XAS"===t.currency&&(t.quantityShow=1e8),t}),null!==s.account&&(a=[{asset:{precision:8},currency:"XAS",balance:s.account.balance}]),this.dappBalances=i.concat(a),t.abrupt("return",i);case 23:return Object(l["q"])(this.$t,r.error),t.abrupt("return",[]);case 25:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),balance:function(t){this.viewAppBanlance(t)},check:function(t){Object(g["Ia"])(t.link)},innerTrans:function(){var t=i()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getBalance(e);case 2:n=this.$t,this.form.depositName=name,this.modalInfoShow=!1,this.dialog={title:n("TRS_TYPE_TRANSFER"),message:n("OPERATION_REQUIRES_FEE")+"0.1 XAS",form:3},this.row=e,this.dialogShow=!0;case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),withDraw:function(){var t=i()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getBalance(e);case 2:n=this.$t,this.form.depositName=name,this.modalInfoShow=!1,this.dialog={title:n("TRS_TYPE_WITHDRAWAL"),message:n("OPERATION_REQUIRES_FEE")+"0.1 XAS",form:2},this.row=e,this.dialogShow=!0;case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),depositFunc:function(t){var e=this.$t;this.dialog={title:e("DAPP_DEPOSIT"),message:e("DAPP_COIN_FEE"),form:1},this.row=t,this.dialogShow=!0},onOk:function(){var t=i()(regeneratorRuntime.mark(function t(){var e,n,r,a,s,i,o,c,d,p;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$v.form.$touch(),!(this.$v.form.$error||this.$v.form.$invalid||this.secondSignature&&this.secondPwdError)){t.next=5;break}return Object(l["p"])(this.$t("LAUNCH_MODAL.ERR_INVALID_FORM")),this.dialogShow=!0,t.abrupt("return");case 5:if(e=this.row.name,n=this.selectedAssets,r=this.dialog.form,a=parseFloat((this.form.amount*Math.pow(10,n.precision)).toFixed(0)),1!==r){t.next=16;break}return i={name:e,currency:this.form.depositName,amount:a,secondSecret:this.form.secondPwd},t.next=13,this.deposit(i);case 13:s=t.sent,t.next=35;break;case 16:if(2!==r){t.next=25;break}return o=2,c={fee:"10000000",type:o,args:'["'.concat(this.form.depositName,'", "').concat(a,'"]')},i=Object(u["f"])(c,this.user.secret),t.next=22,this.dappContract(i,this.row.transactionId);case 22:s=t.sent,t.next=35;break;case 25:if(3!==r){t.next=35;break}if(!this.addressError){t.next=29;break}return Object(l["p"])(this.$t("ERR_RECIPIENT_ADDRESS_FORMAT")),t.abrupt("return");case 29:return d=3,p={fee:"10000000",type:d,args:'["'.concat(this.form.depositName,'", "').concat(a,'","').concat(this.form.address,'"]')},i=Object(u["f"])(p,this.user.secret),t.next=34,this.dappContract(i,this.row.transactionId);case 34:s=t.sent;case 35:!0===s.success?Object(l["m"])(this.$t("INF_OPERATION_SUCCEEDED")):Object(l["q"])(this.$t,s.error),this.resetFrom();case 37:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),onCancel:function(){this.dialogShow=!1,this.dialog=this.dialogDefault},close:function(){this.dialogShow=!1,this.row={}},validateSecondPwd:function(t){var e=this.pwdValid;return this.secondPwdError=e,e},resetFrom:function(){this.form={depositName:"",amount:null},this.$v.$reset()},validateAddr:function(){var t=Object(u["a"])(this.form.address);return this.addressError=!t,t},onError:function(t){this.$refs["img"+t]&&(this.$refs["img"+t][0].src=b.a,this.$refs["img"+t][0].classList=["imgFull"])},createMyDapp:function(){Object(g["Ia"])("https://github.com/AschPlatform/asch-docs/tree/master/dapp/api")},delSearch:function(){var t=this.form.amount+"";1===t.length&&(this.form.amount="")}}),mounted:function(){var t=i()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.user&&this.getDapps();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),computed:c()({},Object(h["c"])(["userInfo","balances"]),{user:function(){return this.userInfo},secondSignature:function(){return this.user&&this.user.account?this.user.account.secondPublicKey:null},pwdValid:function(){return!p["j"].test(this.form.secondPwd)},dialogDefault:function(){return{title:"",message:""}},paginationDeafult:function(){return{page:1,rowsNumber:0,rowsPerPage:10}},selectedAssets:function(){var t=this.form.depositName;if("XAS"===t)return{precision:8,name:t};var e=null;return this.balances.forEach(function(n){n.currency===t&&(e=n,e.precision=n.asset.precision)}),e},assetsOpt:function(){if(this.user&&this.balances){var t=[];return t=[{key:0,value:"XAS",label:"XAS"}].concat(this.balances.map(function(t,e){return{key:e+1,label:t.asset.name,value:t.asset.name}})),t}return[]}}),watch:{userInfo:function(t){t&&this.getDapps()},pageNo:function(t){this.getDapps()},installed:function(t){this.dapps=[],this.pagination=this.paginationDeafult,this.getDapps(null,null,!0)}}},_=w,v=(n("6B3k"),n("KHd+")),A=Object(v["a"])(_,r,a,!1,null,"6bd124e4",null);e["default"]=A.exports},"6B3k":function(t,e,n){"use strict";var r=n("93MZ"),a=n.n(r);a.a},"93MZ":function(t,e,n){},EirO:function(t,e,n){t.exports=n.p+"img/dapps.fad40fd.png"},oAqo:function(t,e,n){"use strict";n.d(e,"j",function(){return i}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return l}),n.d(e,"e",function(){return u}),n.d(e,"c",function(){return d}),n.d(e,"a",function(){return p}),n.d(e,"d",function(){return f}),n.d(e,"b",function(){return m}),n.d(e,"i",function(){return b}),n.d(e,"h",function(){return g});var r=n("eO9T"),a=n("AKX1"),s=n.n(a),i=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,o=/^[A-Z]{3,6}$/,c=/^[a-z0-9_]{2,20}$/,l=/^[A-Za-z0-9_\-+!@$% ]{10,100}$/,u=/^[A-Za-z0-9]{3,16}$/,d=/^[A-Z]{3,6}$/,p=/^\d+(\.\d+)?$/,h=/\s/g,f=function(){return Object(r["withParams"])({},function(t){return s.a.validateMnemonic(t)})},m=function(){return Object(r["withParams"])({},function(t){return o.test(t)})},b=function(){return Object(r["withParams"])({},function(t){return i.test(t)})},g=function(){return Object(r["withParams"])({},function(t){return t.length<=40&&!h.test(t)})}}}]);