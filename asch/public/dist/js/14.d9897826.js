(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"8sx+":function(e,t,n){"use strict";var r=n("kxOV"),i=n.n(r);i.a},NxAd:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"peers-container self-center"},[n("div",{staticClass:"padding-20 bg-white border-r-6"},[n("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[n("div",{staticClass:"col-12"},[n("q-table",{attrs:{data:e.peers,filter:e.filter,color:"secondary","row-key":"ip",columns:e.columns,pagination:e.pagination,loading:e.loading,title:e.$t("PEER_LIST"),"rows-per-page-options":[10]},on:{request:e.request,"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-right",fn:function(t){return[n("q-toggle",{attrs:{color:"secondary"},model:{value:e.official,callback:function(t){e.official=t},expression:"official"}})]}},{key:"body-cell-ip",fn:function(t){return n("q-td",{attrs:{props:t}},[n("div",[e._v("\n              "+e._s(t.value)+"\n            ")])])}},{key:"body-cell-address",fn:function(t){return n("q-td",{attrs:{props:t}},[n("div",{staticClass:"text-secondary",on:{click:function(n){e.viewAccountInfo(t.row)}}},[e._v("\n              "+e._s(t.value)),e.isCurrentServer(t)?n("q-icon",{attrs:{name:"check circle",color:"positive"}}):e._e()],1)])}},{key:"body-cell-username",fn:function(t){return n("q-td",{attrs:{props:t}},[n("div",[e._v("\n              "+e._s(t.value)+" "),t.row.voted?n("q-icon",{attrs:{name:"check circle",color:"positive"}}):e._e()],1)])}},{key:"body-cell-opt",fn:function(t){return n("q-td",{attrs:{props:t}},[n("q-btn",{attrs:{icon:"playlist add check",size:"sm",flat:"",color:e.isCurrentServer(t)?"positive":"secondary"},on:{click:function(n){e.changePeer(t.row)}}},[n("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle",offset:[0,10]}},[e._v(e._s(e.$t("CHANGE_TO")))])],1)],1)}},{key:"body-cell-ping",fn:function(t){return n("q-td",{attrs:{props:t}},[e._v("\n            "+e._s(t.value)+"\n          ")])}}])})],1)])],1)])},i=[];r._withStripped=!0;n("KKXr"),n("ls82");var o=n("yXPU"),a=n.n(o),s=n("fBUP"),c=n("ydnR"),u=n("ygAv"),l=n("X2Vi"),p=n("4IOb"),f={props:["userObj"],components:{QTd:p["X"],QBtn:p["e"],QTooltip:p["Da"],QIcon:p["u"],QTable:p["U"],QToggle:p["Aa"]},data:function(){return{peers:[],filter:"",loading:!1,official:!1,pagination:{page:1,rowsNumber:"",rowsPerPage:10}}},mounted:function(){var e=a()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.user&&this.getPeers();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{request:function(){var e=a()(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getPeers(t.pagination,t.filter);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getPeers:function(){var e=a()(regeneratorRuntime.mark(function e(){var t,n,r,i,o=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},o.length>1&&void 0!==o[1]?o[1]:"",this.loading=!0,t.page&&(this.pagination=t),n=this.pagination.rowsPerPage,r=this.pagination.page,e.next=8,s["a"].peer({limit:n,offset:(r-1)*n});case 8:return i=e.sent,this.peers=i.peers,this.pagination.rowsNumber=i.totalCount,this.loading=!1,e.abrupt("return",i);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),viewPeerInfo:function(){},getPing:function(){var e=this;this.peers.map(function(t,n){var r="http://"+t.ip+":"+t.port+"/api/blocks/getHeight",i=(new Date).getTime();l["a"].get(r).then(function(r){if(r.success){var o=(new Date).getTime()-i;t.ping=o,e.peers[n]=t}}).catch(function(r){t.ping="--",e.peers[n]=t,console.log(r)})})},isCurrentServer:function(e){return this.currentServer&&e.row.ip===this.currentServer.ip&&e.row.port===this.currentServer.port},changePeer:function(e){var t=this,n=e.ping;n>0&&n<1e3?(Object(u["l"])("currentServer",e),Object(u["m"])(this.$t("INF_OPERATION_SUCCEEDED")),this.$router.push({name:"home"})):this.$q.dialog({title:"Confirm",message:"Change server?",ok:"Yes",cancel:"No"}).then(function(){Object(u["l"])("currentServer",e),Object(u["m"])(t.$t("INF_OPERATION_SUCCEEDED")),t.$router.push({name:"home"})}).catch(function(e){})}},computed:{user:function(){return this.userObj},columns:function(){var e=[{name:"ip",label:"IP",field:"ip",align:"center",format:function(e){var t=e.split(".");return t[0]=t[1]="*",t.join(".")}},{name:"state",label:"state",field:"state"},{name:"version",label:this.$t("VERSION"),field:"version"},{name:"os",label:this.$t("OPERATING_SYSTEM"),field:"os"}],t=[{name:"opt",label:this.$t("OPERATION"),field:"port",align:"left"},{name:"ip",label:"IP",field:"ip",align:"center",format:function(e){var t=e.split(".");return t[0]=t[1]="*",t.join(".")}},{name:"port",label:"PORT",field:"port",align:"center"}];return this.official?t:e},currentServer:function(){var e=Object(u["d"])("currentServer");return e||null}},watch:{userObj:function(e){e&&this.getPeers()},official:function(e){e?this.peers=c["c"]:this.getPeers()}}},d=f,h=(n("8sx+"),n("KHd+")),g=Object(h["a"])(d,r,i,!1,null,"04e1067a",null);t["default"]=g.exports},kxOV:function(e,t,n){}}]);