(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"4Hv0":function(t,e,n){},uCej:function(t,e,n){"use strict";var a=n("4Hv0"),s=n.n(a);s.a},"uL+i":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{class:t.agentDetailClass},[t.userAccount?n("div",{class:t.agentDetailContentClass},[n("div",{class:t.agentDetailTitleClass},[n("div",[n("i",{staticClass:"material-icons vertical-align-middle font-24 text-secondary"},[t._v("perm_identity")]),n("span",{staticClass:"font-24 vertical-align-middle font-weight"},[t._v(t._s(t.$t("AGENT_DETAIL")))])]),n("q-btn",{staticClass:"row items-center",attrs:{slot:"right",color:"secondary"},on:{click:t.back},slot:"right"},[n("q-icon",{attrs:{name:"reply"}})],1)],1),t.userAccount?n("q-card",{staticClass:"desktop-hide col-md-3 padding-20 col-xs-12 margin-t-15 no-shadow"},[n("div",{staticClass:"shadow-2 bg-white"},[n("q-card-title",{staticClass:"bg-nine text-black font-22 height-62"},[t._v("\n          "+t._s(t.$t("AGENT_DETAIL"))+"\n        ")]),n("q-card-main",{staticClass:"padding-20",attrs:{align:"center"}},[n("div",{staticClass:"text-secondary font-30 margin-t-20 break-word"},[t._v("\n            "+t._s(t.user.account.agent||t.user.account.name)+"\n          ")]),n("div",[n("span",{staticClass:"font-16 text-black vertical-align-middle"},[t._v(t._s(t.$t("AGENT_WEIGHT")+":"))]),n("span",{staticClass:"font-30 text-secondary vertical-align-middle"},[t._v(t._s(t.agentWeight))])])])],1)]):t._e(),n("q-card",{staticClass:"col-md-9 col-xs-12 no-shadow"},[t.userInfo?n("q-card-main",[n("q-tabs",{staticClass:"tab-container shadow-1 col-9 ",attrs:{"no-pane-border":"",inverted:"",align:"right"},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[n("q-tab",{attrs:{slot:"title",default:"",name:"supporters",color:"secondary",icon:"people",label:t.$t("AGENT_VOTE_DETAIL")},slot:"title"}),n("q-tab",{attrs:{slot:"title",name:"records",icon:"face",color:"secondary",label:t.$t("AGENT_VOTE_RECORDS")},slot:"title"}),n("div",[n("q-table",{attrs:{"no-data-label":t.$t("table.noData"),data:t.datas,filter:t.filter,color:"secondary",columns:t.dynamicCol,"row-key":"id",loading:t.loading,"rows-per-page-options":[10]},scopedSlots:t._u([{key:"top-right",fn:function(e){return[n("q-btn",{attrs:{flat:"",round:"",icon:"refresh",color:"secondary"},on:{click:t.refresh}})]}},{key:"body-cell-address",fn:function(e){return n("q-td",{attrs:{props:e}},[n("div",{staticClass:"text-secondary",on:{click:function(n){t.viewAccountInfo(e.row)}}},[t._v("\n            "+t._s(e.value)+"\n          ")])])}},{key:"body-cell-username",fn:function(e){return n("q-td",{attrs:{props:e}},[n("div",[t._v("\n            "+t._s(e.value)+" "),e.row.voted?n("q-icon",{attrs:{name:"check circle",color:"positive"}}):t._e()],1)])}},{key:"body-cell-approval",fn:function(e){return n("q-td",{attrs:{props:e}},[t._v("\n            "+t._s(t._f("approval")(e.value))+"\n        ")])}},{key:"body-cell-productivity",fn:function(e){return n("q-td",{attrs:{props:e}},[t._v("\n            "+t._s(e.value+"%")+"\n        ")])}},{key:"body-cell-name",fn:function(e){return n("q-td",{attrs:{props:e}},[n("div",{staticClass:"text-secondary",on:{click:function(n){t.viewAccountInfo(e.row)}}},[t._v("\n            "+t._s(t.showName(e.row))+"\n          ")])])}},{key:"body-cell-lockHeight",fn:function(e){return n("q-td",{attrs:{props:e}},[t._v("\n          "+t._s(t.showEndTime(e.row))+"\n          ")])}},{key:"body-cell-xas",fn:function(e){return n("q-td",{attrs:{props:e}},[t._v("\n          "+t._s(t._f("fee")(t.showContent(e.row,"weight"),8))+"\n        ")])}},{key:"body-cell-agent",fn:function(e){return n("q-td",{attrs:{props:e}},[t._v("\n          "+t._s(t._f("time")(t.showTime(e.row)))+"\n        ")])}},{key:"body-cell-delegate",fn:function(e){return n("q-td",{attrs:{props:e}},[n("div",{staticClass:"text-secondary",on:{click:function(n){t.viewAccountInfo(e.row,!0)}}},[t._v("\n            "+t._s(t.showName(e.row,!0))+"\n          ")])])}},{key:"body-cell-voteTime",fn:function(e){return n("q-td",{attrs:{props:e}},[t._v("\n          "+t._s(t._f("time")(t.showTime(e.row)))+"\n        ")])}}])})],1)],1)],1):t._e()],1),t.userAccount?n("q-card",{staticClass:"mobile-hide col-md-3 col-xs-12 margin-t-15 no-shadow"},[n("div",{staticClass:"shadow-2 bg-white"},[n("q-card-title",{staticClass:"bg-nine text-black font-22 height-62"},[t._v("\n      "+t._s(t.$t("VOTE_DELEGATE_DETAIL"))+"\n    ")]),n("q-card-main",{staticClass:"padding-20",attrs:{align:"center"}},[n("div",{staticClass:"text-secondary font-30 margin-t-20 break-word"},[t._v("\n        "+t._s(t.user.account.agent||t.user.account.name)+"\n      ")]),n("div",[n("span",{staticClass:"font-16 text-black vertical-align-middle"},[t._v(t._s(t.$t("AGENT_WEIGHT")+":"))]),n("span",{staticClass:"font-30 text-secondary vertical-align-middle"},[t._v(t._s(t.agentWeight))])])])],1)]):t._e()],1):t._e()])},s=[];a._withStripped=!0;n("f3/d"),n("ls82");var i=n("yXPU"),r=n.n(i),o=n("MVZn"),c=n.n(o),l=n("4IOb"),u=n("L2JU"),d=n("ygAv"),g=n("dGEQ"),h={props:[],components:{QPage:l["I"],QModal:l["G"],QTabs:l["W"],QTab:l["S"],QTable:l["U"],QBtn:l["e"],QTd:l["X"],QCard:l["h"],QCardTitle:l["m"],QCardMain:l["j"],QTabPane:l["T"],QModalLayout:l["H"],QToolbar:l["Ba"],QToolbarTitle:l["Ca"],QIcon:l["u"]},data:function(){return{selectedTab:"supporters",datas:[],pagination:{page:1,rowsNumber:0,rowsPerPage:10},filter:"",loading:!1,columns:this.dynamicCol,dialogShow:!1,dialog:{title:"",message:""},secondPwd:"",supports:[],user:{},agentWeight:0}},methods:c()({},Object(u["b"])(["getAgentSupporters","getAgentVotes","getAccountsInfo"]),{refresh:function(){this.pagination=this.paginationDeafult,this.getDatas()},back:function(){this.$router.back()},viewAccountInfo:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&this.$root.$emit("openAccountModal",t.address),this.$root.$emit("openAccountModal",t.account.address)},request:function(){var t=r()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.userInfo){t.next=3;break}return t.next=3,this.getDatas(e.pagination,e.filter);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getDatas:function(){var t=r()(regeneratorRuntime.mark(function t(){var e,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n.length>0&&void 0!==n[0]?n[0]:{},n.length>1&&void 0!==n[1]?n[1]:"",this.loading=!0,e={},"records"!==this.selectedTab){t.next=11;break}return t.next=7,this.getAgentVotes({name:this.user.account.agent||this.user.account.name});case 7:e=t.sent,e.success&&(this.datas=e.delegates),t.next=15;break;case 11:return t.next=13,this.getAgentSupporters({name:this.user.account.agent||this.user.account.name});case 13:e=t.sent,e.success&&(this.datas=e.clienteles);case 15:return this.loading=!1,t.abrupt("return",e);case 17:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),showContent:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n?t[e]:t.account[e]},showEndTime:function(t){return Object(d["f"])({endHeight:t.account.lockHeight,currentHeight:this.latestBlock.height})},showTime:function(t){return t.timestamp},showName:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?t.name||t.address:t.account.name||t.account.address},getAgentInfo:function(){var t=r()(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this,!this.userInfo.account.agent){t.next=6;break}return t.next=4,this.getAccountsInfo({address:e.userInfo.account.agent});case 4:n=t.sent,this.agentWeight=Object(g["b"])(n.account.agentWeight,8);case 6:1===this.userInfo.account.isAgent&&(this.agentWeight=Object(g["b"])(this.userInfo.account.agentWeight,8));case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),mounted:function(){var t=this.$route.params.user;if(!t||!t.account)return this.$router.push("/vote"),null;this.user=t,t&&t.account&&t.account.agent&&this.getDatas(),this.getAgentInfo()},computed:c()({},Object(u["c"])(["userInfo","latestBlock"]),{agentDetailClass:function(){return this.isDesk?"padding-20 border-r-6":"border-r-6"},agentDetailContentClass:function(){return this.isDesk?"row padding-10 bg-white":"row bg-white"},agentDetailTitleClass:function(){return this.isDesk?"row justify-between col-12 padding-l-15 margin-top-20":"row justify-between col-12 padding-l-15 padding-right-20 margin-top-20"},dynamicCol:function(){return"records"===this.selectedTab?[{name:"delegate",label:this.$t("VOTED_DELEGATE"),field:"address",align:"center"},{name:"address",label:this.$t("ADDRESS"),field:"address"},{name:"productivity",label:this.$t("PRODUCTIVITY"),field:"productivity"},{name:"producedblocks",label:this.$t("PRODUCED_BLOCKS"),field:"producedblocks",align:"center",type:"number"},{name:"approval",label:this.$t("APPROVAL"),field:"approval"}]:[{name:"name",label:this.$t("AUTHORIZOR"),field:"name",align:"center"},{name:"xas",label:this.$t("AUTHORIZED_AMOUNT"),field:"xas",type:"string"},{name:"lockHeight",label:this.$t("LOCK_TIME"),field:"lockHeight"}]},btnInfo:function(){return this.isSetAgent?"VOTE_CANCEL":"VOTE_SET"},paginationDeafult:function(){return{page:1,rowsNumber:0,rowsPerPage:10}},userAccount:function(){if(this.user&&this.user.account)return this.user.account}}),watch:{selectedTab:function(t){this.datas=[],this.getDatas()},userInfo:function(){this.userAccount&&this.getDatas(),this.userInfo&&this.userInfo.account&&this.userInfo.account.agent&&this.getAgentInfo(),this.userInfo&&this.userInfo.account&&1===this.userInfo.account.isAgent&&this.getAgentInfo()}}},f=h,p=(n("uCej"),n("KHd+")),b=Object(p["a"])(f,a,s,!1,null,"a8a64786",null);e["default"]=b.exports}}]);