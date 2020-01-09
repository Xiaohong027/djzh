(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{B9MC:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("q-page",[e("q-card",{staticClass:"no-shadow"},[e("q-card-title",[e("div",{staticClass:"row justify-between"},[e("div",[e("i",{staticClass:"material-icons vertical-align-middle text-secondary font-22"},[s._v("person")]),e("span",{staticClass:"vertical-align-middle font-22"},[s._v(s._s(s.$t("ASSET_DETAIL",{currency:s.asset.currency})))])]),e("q-btn",{staticClass:"row items-center",attrs:{color:"secondary",icon:"reply"},on:{click:s.back}})],1)]),e("q-card-main",{class:s.assetCardsContainerClass},[s.isCross?e("assets-panel",{class:s.assetDetailInnerClass,attrs:{type:"outer",asset:s.asset},on:{transfer:s.transfer,deposit:s.deposit,withdraw:s.withdraw}}):e("assets-panel",{class:s.assetDetailInnerClass,attrs:{type:"inner",asset:s.asset},on:{transfer:s.transfer}}),s.isCross&&s.address?e("q-card",{class:s.assetDetailOuterClass},[e("q-card-main",[e("p",{staticClass:"font-22 text-black margin-b-0"},[s._v(s._s(s.$t("DEPOSIT"))+s._s(s.$t("ADDRESS")))]),e("div",[e("span",{staticClass:"font-14 text-three"},[s._v(s._s(s.address))]),e("q-btn",{directives:[{name:"clipboard",rawName:"v-clipboard",value:s.address||"no data",expression:"address || 'no data'"}],attrs:{color:"secondary",size:"xs",flat:"",round:"",icon:"content copy"},on:{success:function(t){s.info(s.$t("COPY_SUCCESS"))}}})],1),e("div",{staticClass:"row justify-center",on:{click:s.showAddrQr}},[s.isCross?e("vue-qr",{attrs:{size:80,text:s.address?"bitcoin:"+s.address:"no data"}}):e("vue-qr",{attrs:{size:80,text:s.address||"no data"}})],1)])],1):s._e(),!s.isCross&&s.assetDetail?e("q-card",{class:s.assetDetailOuterClass},[e("q-card-main",[e("table",[e("tr",{staticClass:"margin-t-20"},[e("td",[s._v(s._s(s.$t("ISSUER")+":"))]),e("td",[s._v(s._s(s.issuerName))])]),e("tr",{staticClass:"margin-t-20"},[e("td",[s._v(s._s(s.$t("DAPP_COIN_TOTAL_AMOUNT")+":"))]),e("td",[s._v(s._s(s._f("fee")(s.assetDetail.maximum,s.assetDetail.precision)))])]),e("tr",{staticClass:"margin-t-20"},[e("td",[s._v(s._s(s.$t("DAPP_COIN_CURRENT_QUANTITY")+":"))]),e("td",[s._v(s._s(s._f("fee")(s.assetDetail.quantity,s.assetDetail.precision)))])])])])],1):s._e(),s.asset.asset?e("q-card",{class:s.assetDetailOuterClass,staticStyle:{"max-width":"300px","overflow-y":"scroll"}},[e("q-card-main",[e("p",{staticClass:"text-black font-22"},[s._v(s._s(s.$t("CURRENCY_INTRODUCE")))]),e("p",{staticClass:"break-word"},[s._v("\n            "+s._s(s.asset.asset.desc)+"\n          ")])])],1):s._e()],1)],1),e("div",{staticClass:"asset-detail-record-container"},[e("asset-record-container",{staticClass:"bg-white",attrs:{isCross:s.isCross,currency:s.asset.currency}})],1),e("deposit-modal",{attrs:{user:s.userInfo,asset:s.asset,show:s.depositPanelShow},on:{close:function(t){s.depositPanelShow=!1}}}),e("withdraw-modal",{attrs:{user:s.userInfo,asset:s.asset,show:s.withdrawPanelShow},on:{close:function(t){s.withdrawPanelShow=!1}}})],1)},r=[];a._withStripped=!0;e("KKXr");var i=e("MVZn"),n=e.n(i),o=(e("ls82"),e("yXPU")),c=e.n(o),d=e("L2JU"),l=e("b0tO"),u=e("oZcM"),h=e("4omz"),f=e("I1lt"),w=e("e6US"),m=e("4IOb"),p=e("oAqo"),C=e("ta7f"),v=e("ygAv"),_={name:"AssetDetailModal",props:[],components:{QPage:m["I"],QModalLayout:m["H"],QToolbar:m["Ba"],QToolbarTitle:m["Ca"],QSearch:m["Q"],QCard:m["h"],QCardTitle:m["m"],QCardMain:m["j"],QItem:m["w"],QItemSide:m["y"],QItemTile:m["z"],QCardActions:m["i"],QBtn:m["e"],AssetRecordContainer:l["a"],AssetsPanel:u["a"],VueQr:h["a"],DepositModal:f["a"],WithdrawModal:w["a"]},data:function(){return{asset:{},filter:"",address:"",depositPanelShow:!1,withdrawPanelShow:!1,isDisable:!1}},validations:{form:{address:{required:C["required"]},amount:{required:C["required"],minValue:Object(C["minValue"])(1)},receiver:{required:C["required"]},params:null},secondPwd:{secondPwd:Object(p["i"])()}},mounted:function(){var s=c()(regeneratorRuntime.mark(function s(){var t,e,a,r,i,n,o,c;return regeneratorRuntime.wrap(function(s){while(1)switch(s.prev=s.next){case 0:if(t=this.$route.params,e=t.asset,a=void 0===e?null:e,r=t.user,i=void 0===r?null:r,a&&a.currency){s.next=4;break}return this.$router.push("/assets"),s.abrupt("return",null);case 4:if(this.asset=a,this.user=i,"XAS"===a.currency&&(this.asset={currency:"XAS",balance:i.account.xas}),!a||!a.asset){s.next=14;break}return n=a.asset.gateway,o=this.userInfo.address,s.next=12,this.gateAccountAddr({name:n,address:o});case 12:c=s.sent,c.success&&c.account&&(this.address=c.account.outAddress);case 14:case"end":return s.stop()}},s,this)}));return function(){return s.apply(this,arguments)}}(),methods:n()({},Object(d["b"])(["getBalance","gateAccountAddr"]),{getData:function(){var s=c()(regeneratorRuntime.mark(function s(){var t;return regeneratorRuntime.wrap(function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,this.getMoreAssets();case 2:return t=s.sent,this.close(),s.abrupt("return",t);case 5:case"end":return s.stop()}},s,this)}));return function(){return s.apply(this,arguments)}}(),back:function(){this.$router.back()},close:function(){this.$emit("close")},info:function(s){var t=this;!0!==this.isDisable&&(this.isDisable=!0,setTimeout(function(){t.isDisable=!1},2e3),Object(v["m"])(s))},transfer:function(s){this.$root.$emit("openTransactionDialog",s)},deposit:function(s){this.asset=this._.merge({},s),this.depositPanelShow=!0},withdraw:function(s){this.asset=this._.merge({},s),this.withdrawPanelShow=!0},showAddrQr:function(){this.$root.$emit("showQRCodeModal",this.address&&this.isCross?"bitcoin:"+this.address:this.address)}}),computed:n()({},Object(d["c"])(["userInfo"]),{assetDetailInnerClass:function(){return this.isDesk?"margin-l-15 col-auto":"col-12"},assetDetailOuterClass:function(){return this.isDesk?"col-auto bg-white asset-detail-card-h margin-l-30":"col-12 bg-white asset-detail-card-h margin-top-20"},assetCardsContainerClass:function(){return this.isDesk?"row col-12 asset-cards-container":"row col-12"},isCross:function(){return"XAS"!==this.asset.currency&&!(this.asset&&this.asset.asset&&this.asset.asset.issuerId)},assetDetail:function(){return this.asset.asset},issuerName:function(){if(this.asset.currency)return this.asset.currency.split(".")[0]}}),watch:{}},b=_,D=(e("v7M5"),e("KHd+")),y=Object(D["a"])(b,a,r,!1,null,"7c38a7e1",null);t["default"]=y.exports},dmj4:function(s,t,e){},v7M5:function(s,t,e){"use strict";var a=e("dmj4"),r=e.n(a);r.a}}]);