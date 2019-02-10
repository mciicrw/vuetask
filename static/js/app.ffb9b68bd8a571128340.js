webpackJsonp([1],{186:function(t,e,a){"use strict";var n=a(187),s=a.n(n),i=a(45),r=a.n(i),o=a(46),l=a.n(o),c=a(8),u=a.n(c),d=a(251),v=a(7),f=a(0),m=a.n(f);e.a={components:{Modal:d.a},data:function(){return{ongoingTasks:[],completedTasks:[],hints:[{class:"primary white--text",icon:"fa fa-smile-o",desc:"Aman : Deadline masih diatas seminggu."},{class:"warning white--text",icon:"fa fa-meh-o",desc:"Kurang Aman : Deadline menghampirimu. Kerjakan sekarang lebih baik daripada menunda."},{class:"error white--text",icon:"fa fa-frown-o",desc:"Bahaya : Deadline sudah dekat. Silahkan kerjakan tugasmu sekarang !"}]}},computed:{mobile:function(){return this.$vuetify.breakpoint.smAndDown},date:function(){return this.$store.getters.datenow},totalTasks:function(){return this.ongoingTasks.length+this.completedTasks.length},completedPercentage:function(){return parseInt(this.completedTasks.length/this.totalTasks*100)}},methods:u()({},Object(v.c)({setModal:"setModal"}),Object(v.b)({setSnackbar:"setSnackbar"}),{diffDate:function(t){return m()(t).diff(this.date,"days")},dayleft:function(t){var e=this.diffDate(t);return e>0?"Tersisa "+e+" hari lagi.":0===e?"Deadline hari ini":"Deadline telah lewat"},formatDate:function(t){return m()(t).format("DD/MM/YYYY")},deadlineTag:function(t){var e=this.diffDate(t);return e>6?{class:"primary white--text",emot:"fa fa-smile-o"}:e<=5&&e>2?{class:"warning white--text",emot:"fa fa-meh-o"}:{class:"error white--text",emot:"fa fa-frown-o"}},setCompleted:function(t,e){var a=this;return l()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.completed){n.next=7;break}return n.next=3,db.update("tasks",{completed:a.date},{id:e.id});case 3:a.ongoingTasks.splice(t,1),a.completedTasks.push({id:e.id,name:e.name,completed:a.date,deadline:e.deadline,created:e.created}),n.next=11;break;case 7:return n.next=9,db.update("tasks",{completed:null},{id:e.id});case 9:a.completedTasks.splice(t,1),a.ongoingTasks.push({id:e.id,name:e.name,completed:null,deadline:e.deadline,created:e.created});case 11:a.sortTasks({ongoing:{key:"deadline"},completed:{key:"completed",order:"desc"}});case 12:case"end":return n.stop()}},n,a)}))()},remove:function(t,e,a){var n=this;return l()(r.a.mark(function s(){return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,db.delete("tasks",{id:e});case 2:n[a].splice(t,1),n.sortTasks({ongoing:{key:"deadline"},completed:{key:"completed",order:"desc"}}),n.setSnackbar({visible:!0,msg:"Tugas dihapus dari List"});case 5:case"end":return s.stop()}},s,n)}))()},sortValues:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(a,n){if(!a.hasOwnProperty(t)||!n.hasOwnProperty(t))return 0;var s="string"==typeof a[t]?a[t].toUpperCase():a[t],i="string"==typeof n[t]?n[t].toUpperCase():n[t],r=0;return s>i?r=1:s<i&&(r=-1),"desc"===e.toLowerCase()?-1*r:r}},sortTasks:function(t){this.ongoingTasks.sort(this.sortValues(t.ongoing.key,t.ongoing.order)),this.completedTasks.sort(this.sortValues(t.completed.key,t.completed.order))}}),mounted:function(){var t=this;db.fetch("tasks").then(function(e){var a=!0,n=!1,i=void 0;try{for(var r,o=s()(e);!(a=(r=o.next()).done);a=!0){var l=r.value;null===l.completed?t.ongoingTasks.push(l):t.completedTasks.push(l)}}catch(t){n=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}t.sortTasks({ongoing:{key:"deadline"},completed:{key:"completed",order:"desc"}})})}}},188:function(t,e,a){"use strict";var n=a(8),s=a.n(n),i=a(7);e.a={props:{width:String,height:String},computed:s()({},Object(i.d)({dialog:function(t){return t.modal}}),{modal:{get:function(){return this.dialog},set:function(t){this.setModal(t)}}}),methods:s()({},Object(i.c)({setModal:"setModal"}))}},189:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(9),s=a(192),i=a(213),r=a(254);a(255),a(261);n.default.config.productionTip=!1,new n.default({router:i.a,store:r.a,components:{App:s.a},render:function(t){return t(s.a)}}).$mount("#app")},192:function(t,e,a){"use strict";var n=a(32),s=a(212),i=a(4),r=i(n.a,s.a,!1,null,null,null);e.a=r.exports},204:function(t,e,a){"use strict";var n=a(40),s=a(205),i=a(4),r=i(n.a,s.a,!1,null,null,null);e.a=r.exports},205:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{attrs:{value:t.visibility,timeout:t.timeout,color:t.color,bottom:"bottom",left:"left"},on:{"update:value":function(e){t.visibility=e}}},[t._v("\n  "+t._s(t.message)+"\n  "),a("v-btn",{attrs:{color:t.color?"white":"pink",flat:""},on:{click:t.set}},[t._v("\n    Close\n  ")])],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},206:function(t,e,a){"use strict";var n=a(41),s=a(207),i=a(4),r=i(n.a,s.a,!1,null,null,null);e.a=r.exports},207:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{color:"cyan",dark:"",fixed:"",app:""}},[a("v-toolbar-title",[a("v-icon",[t._v("fa fa-pencil-square")]),t._v("\n     Vuetask App\n  ")],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-side-icon",{on:{click:function(e){return e.stopPropagation(),t.set(!t.sidebar)}}})],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},208:function(t,e,a){"use strict";var n=a(42),s=a(209),i=a(4),r=i(n.a,s.a,!1,null,null,null);e.a=r.exports},209:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{width:"225px",fixed:"",right:"",app:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[a("v-list",{attrs:{dense:"","two-line":""}},[t._l(t.routes,function(e,n){return[a("v-list-tile",{key:n,attrs:{to:e.link}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)]})],2)],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},210:function(t,e,a){"use strict";var n=a(43),s=a(211),i=a(4),r=i(n.a,s.a,!1,null,null,null);e.a=r.exports},211:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",height:"auto"}},[a("v-card",{staticClass:"cyan darken-2 flex text-xs-center",attrs:{flat:"",tile:""}},[a("v-card-text",{attrs:{"align-center":""}},t._l(t.contacts,function(e,n){return a("v-btn",{key:n,staticClass:"mx-3",attrs:{target:"_blank",href:e.link,dark:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.icon))])],1)}),1),t._v(" "),a("v-card-text",[t._v('\n      "Learner, Coder & Coffee Maniac"\n    ')]),t._v(" "),a("v-card-actions",{staticClass:"cyan darken-3 justify-center"},[t._v("\n      ©2019 — "),a("strong",[a("b",[t._v(" < />")]),t._v(" with 💙 by "),a("b",[t._v("Sutan Nst.")])])])],1)],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},212:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Snackbar"),t._v(" "),a("main",[a("Navbar"),t._v(" "),a("Sidebar"),t._v(" "),a("v-content",[a("v-slide-y-reverse-transition",{attrs:{mode:"out-in"}},[a("router-view")],1),t._v(" "),a("Footer")],1)],1),t._v(" "),a("Offline",{on:{"detected-condition":t.connection}})],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},213:function(t,e,a){"use strict";var n=a(9),s=a(214),i=a(215);n.default.use(s.a);var r=new s.a({routes:i.a});r.beforeEach(function(t,e,a){var n=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.title}).meta.title;n&&(document.title=n+" — Vuetask"),a()}),e.a=r},215:function(t,e,a){"use strict";var n=a(216),s=a(248);e.a=[{path:"*",redirect:"/"},{path:"/",name:"Home",component:n.a,meta:{title:"Beranda"}},{path:"/list",name:"List",component:s.a,meta:{title:"List Tugas"}}]},216:function(t,e,a){"use strict";var n=a(44),s=a(247),i=a(4),r=i(n.a,s.a,!1,null,null,null);e.a=r.exports},246:function(t,e,a){function n(t){return a(s(t))}function s(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":59,"./af.js":59,"./ar":60,"./ar-dz":61,"./ar-dz.js":61,"./ar-kw":62,"./ar-kw.js":62,"./ar-ly":63,"./ar-ly.js":63,"./ar-ma":64,"./ar-ma.js":64,"./ar-sa":65,"./ar-sa.js":65,"./ar-tn":66,"./ar-tn.js":66,"./ar.js":60,"./az":67,"./az.js":67,"./be":68,"./be.js":68,"./bg":69,"./bg.js":69,"./bm":70,"./bm.js":70,"./bn":71,"./bn.js":71,"./bo":72,"./bo.js":72,"./br":73,"./br.js":73,"./bs":74,"./bs.js":74,"./ca":75,"./ca.js":75,"./cs":76,"./cs.js":76,"./cv":77,"./cv.js":77,"./cy":78,"./cy.js":78,"./da":79,"./da.js":79,"./de":80,"./de-at":81,"./de-at.js":81,"./de-ch":82,"./de-ch.js":82,"./de.js":80,"./dv":83,"./dv.js":83,"./el":84,"./el.js":84,"./en-SG":85,"./en-SG.js":85,"./en-au":86,"./en-au.js":86,"./en-ca":87,"./en-ca.js":87,"./en-gb":88,"./en-gb.js":88,"./en-ie":89,"./en-ie.js":89,"./en-il":90,"./en-il.js":90,"./en-nz":91,"./en-nz.js":91,"./eo":92,"./eo.js":92,"./es":93,"./es-do":94,"./es-do.js":94,"./es-us":95,"./es-us.js":95,"./es.js":93,"./et":96,"./et.js":96,"./eu":97,"./eu.js":97,"./fa":98,"./fa.js":98,"./fi":99,"./fi.js":99,"./fo":100,"./fo.js":100,"./fr":101,"./fr-ca":102,"./fr-ca.js":102,"./fr-ch":103,"./fr-ch.js":103,"./fr.js":101,"./fy":104,"./fy.js":104,"./ga":105,"./ga.js":105,"./gd":106,"./gd.js":106,"./gl":107,"./gl.js":107,"./gom-latn":108,"./gom-latn.js":108,"./gu":109,"./gu.js":109,"./he":110,"./he.js":110,"./hi":111,"./hi.js":111,"./hr":112,"./hr.js":112,"./hu":113,"./hu.js":113,"./hy-am":114,"./hy-am.js":114,"./id":115,"./id.js":115,"./is":116,"./is.js":116,"./it":117,"./it-ch":118,"./it-ch.js":118,"./it.js":117,"./ja":119,"./ja.js":119,"./jv":120,"./jv.js":120,"./ka":121,"./ka.js":121,"./kk":122,"./kk.js":122,"./km":123,"./km.js":123,"./kn":124,"./kn.js":124,"./ko":125,"./ko.js":125,"./ku":126,"./ku.js":126,"./ky":127,"./ky.js":127,"./lb":128,"./lb.js":128,"./lo":129,"./lo.js":129,"./lt":130,"./lt.js":130,"./lv":131,"./lv.js":131,"./me":132,"./me.js":132,"./mi":133,"./mi.js":133,"./mk":134,"./mk.js":134,"./ml":135,"./ml.js":135,"./mn":136,"./mn.js":136,"./mr":137,"./mr.js":137,"./ms":138,"./ms-my":139,"./ms-my.js":139,"./ms.js":138,"./mt":140,"./mt.js":140,"./my":141,"./my.js":141,"./nb":142,"./nb.js":142,"./ne":143,"./ne.js":143,"./nl":144,"./nl-be":145,"./nl-be.js":145,"./nl.js":144,"./nn":146,"./nn.js":146,"./pa-in":147,"./pa-in.js":147,"./pl":148,"./pl.js":148,"./pt":149,"./pt-br":150,"./pt-br.js":150,"./pt.js":149,"./ro":151,"./ro.js":151,"./ru":152,"./ru.js":152,"./sd":153,"./sd.js":153,"./se":154,"./se.js":154,"./si":155,"./si.js":155,"./sk":156,"./sk.js":156,"./sl":157,"./sl.js":157,"./sq":158,"./sq.js":158,"./sr":159,"./sr-cyrl":160,"./sr-cyrl.js":160,"./sr.js":159,"./ss":161,"./ss.js":161,"./sv":162,"./sv.js":162,"./sw":163,"./sw.js":163,"./ta":164,"./ta.js":164,"./te":165,"./te.js":165,"./tet":166,"./tet.js":166,"./tg":167,"./tg.js":167,"./th":168,"./th.js":168,"./tl-ph":169,"./tl-ph.js":169,"./tlh":170,"./tlh.js":170,"./tr":171,"./tr.js":171,"./tzl":172,"./tzl.js":172,"./tzm":173,"./tzm-latn":174,"./tzm-latn.js":174,"./tzm.js":173,"./ug-cn":175,"./ug-cn.js":175,"./uk":176,"./uk.js":176,"./ur":177,"./ur.js":177,"./uz":178,"./uz-latn":179,"./uz-latn.js":179,"./uz.js":178,"./vi":180,"./vi.js":180,"./x-pseudo":181,"./x-pseudo.js":181,"./yo":182,"./yo.js":182,"./zh-cn":183,"./zh-cn.js":183,"./zh-hk":184,"./zh-hk.js":184,"./zh-tw":185,"./zh-tw.js":185};n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id=246},247:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-dialog",{ref:"dialog",attrs:{"return-value":t.date,persistent:"",lazy:"","full-width":"",width:"290px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-date-picker",{attrs:{color:"cyan",scrollable:""},model:{value:t.selectedTask.deadline,callback:function(e){t.$set(t.selectedTask,"deadline",e)},expression:"selectedTask.deadline"}},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:"",color:"cyan"},on:{click:function(e){t.dialog=!1}}},[t._v("OK")])],1)],1),t._v(" "),a("v-card",[a("v-toolbar",{attrs:{color:"cyan",dark:""}},[a("v-icon",{attrs:{size:"18px"}},[t._v("fa fa-edit")]),t._v(" "),a("v-toolbar-title",[t._v("Tambah Tugas Baru")])],1),t._v(" "),a("v-container",[a("v-list",{attrs:{subheader:""}},[t.tasks.length?t._e():a("v-subheader",[t._v("\n              Silahkan Tambah Tugasmu !\n            ")]),t._v(" "),a("v-slide-y-transition",{staticClass:"py-0",attrs:{"hide-on-leave":!t.tasks.length,group:"",tag:"v-list"}},t._l(t.tasks,function(e,n){return a("v-list-tile",{key:n,on:{click:function(t){}}},[a("v-list-tile-content",{on:{click:function(a){return t.selectTask(e,n)}}},[a("v-list-tile-title",[t._v(t._s(e.name))]),t._v(" "),a("v-list-tile-sub-title",[a("v-icon",[t._v("fa fa-calendar")]),t._v("\n                    Atur Deadline: "+t._s(t.formatDate(e.deadline))+"\n                  ")],1)],1),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.remove(n)}}},[a("v-icon",{attrs:{color:"red lighten-1"}},[t._v("fa fa-close")])],1)],1)}),1)],1),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{outline:"","append-icon":"fa fa-pencil",counter:t.name.length,rules:t.name.rules,label:"Nama Tugas",required:""},on:{keypress:function(e){return"keyCode"in e&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.add(e))}},model:{value:t.name.value,callback:function(e){t.$set(t.name,"value",e)},expression:"name.value"}}),t._v(" "),a("v-container",[a("v-btn",{staticClass:"cyan white--text",attrs:{block:"",disabled:!t.valid},on:{click:t.add}},[a("v-icon",[t._v("fa fa-pencil-square")]),t._v("\n                 Tambah\n              ")],1),t._v(" "),a("v-btn",{attrs:{block:"",loading:t.loading,disabled:!t.tasks.length,color:"success"},on:{click:function(e){return t.clear(!0)}}},[a("v-icon",[t._v("fa fa-list-alt")]),t._v("\n                 Simpan ke List\n              ")],1),t._v(" "),a("v-btn",{attrs:{block:"",disabled:!t.tasks.length,color:"error"},on:{click:function(e){return t.clear()}}},[a("v-icon",[t._v("fa fa-refresh")]),t._v("\n                 Clear\n              ")],1)],1)],1)],1)],1)],1)],1)],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},248:function(t,e,a){"use strict";var n=a(186),s=a(253),i=a(4),r=i(n.a,s.a,!1,null,null,null);e.a=r.exports},251:function(t,e,a){"use strict";var n=a(188),s=a(252),i=a(4),r=i(n.a,s.a,!1,null,null,null);e.a=r.exports},252:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":t.width},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-card",[a("v-card-title",[t._t("title")],2),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",{attrs:{height:t.height}},[t._t("body")],2),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[t._t("actions")],2)],1)],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},253:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"",center:""}},[a("v-flex",{attrs:{xs12:""}},[a("Modal",{attrs:{height:"300px",width:"500px"}},[a("template",{slot:"title"},[a("v-icon",{attrs:{size:"18px"}},[t._v("fa fa-question-circle")]),t._v("\n           "),a("b",[t._v("Petunjuk")])],1),t._v(" "),a("template",{slot:"body"},[a("v-list",{attrs:{"three-line":""}},t._l(t.hints,function(e,n){return a("v-list-tile",{key:n,attrs:{avatar:""}},[a("v-list-tile-avatar",[a("v-icon",{class:e.class},[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[t._v("\n                "+t._s(e.desc)+"\n              ")])],1)}),1)],1),t._v(" "),a("template",{slot:"actions"},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"cyan",flat:""},on:{click:function(e){return t.setModal(!1)}}},[t._v("Close")])],1)],2),t._v(" "),a("v-card",[a("v-toolbar",{attrs:{color:"cyan",dark:""}},[a("v-icon",{attrs:{size:"18px"}},[t._v("fa fa-list-alt")]),t._v(" "),a("v-toolbar-title",[t._v("List Tugas")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:t.setModal}},[a("v-icon",{attrs:{size:"18px"}},[t._v("fa fa-ellipsis-v")])],1)],1),t._v(" "),a("v-list",{attrs:{"three-line":""}},[t.totalTasks?a("v-subheader",[a("v-progress-linear",{attrs:{color:t.completedPercentage>69?"success":t.completedPercentage>32?"warning":"error"},model:{value:t.completedPercentage,callback:function(e){t.completedPercentage=e},expression:"completedPercentage"}}),t._v(" "),a("v-subheader",[t._v(t._s(t.completedPercentage+"%"))])],1):t._e(),t._v(" "),t.ongoingTasks.length||!t.completedTasks.length?a("v-subheader",[t._v("\n            "+t._s(t.ongoingTasks.length?"On Going. "+t.completedTasks.length+" dari "+t.totalTasks+" dikerjakan.":"List kosong. Silahkan Tambah Tugas Pertamamu !")+"\n          ")]):t._e(),t._v(" "),a("v-slide-x-reverse-transition",{attrs:{group:"",tag:"v-list"}},[t._l(t.ongoingTasks,function(e,n){return[a("v-divider"),t._v(" "),a("v-list-tile",{key:e.id,attrs:{avatar:""},on:{click:function(t){}}},[a("v-list-tile-avatar",[a("v-icon",{class:t.deadlineTag(e.deadline).class},[t._v(t._s(t.deadlineTag(e.deadline).emot))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[a("v-icon",{attrs:{color:"error"}},[t._v("fa fa-calendar-times-o")]),t._v("\n                    "+t._s("Deadline: "+t.formatDate(e.deadline))+"\n                  ")],1),t._v(" "),a("v-list-tile-sub-title",[t._v("\n                    "+t._s(e.name+" | "+t.dayleft(e.deadline))+"\n                  ")])],1),t._v(" "),a("v-list-tile-action",[a("v-btn",{attrs:{icon:t.mobile,ripple:t.mobile,small:!t.mobile},on:{click:function(a){return t.setCompleted(n,e)}}},[a("v-icon",{attrs:{color:"green lighten-1"}},[t._v("fa fa-check")]),t._v("\n                    "+t._s(t.mobile?"":" Tandai sudah dikerjakan")+"\n                  ")],1),t._v(" "),a("v-btn",{attrs:{icon:t.mobile,ripple:t.mobile,small:!t.mobile},on:{click:function(a){return t.remove(n,e.id,"ongoingTasks")}}},[a("v-icon",{attrs:{color:"red lighten-1"}},[t._v("fa fa-trash")]),t._v("\n                    "+t._s(t.mobile?"":" Hapus")+"\n                  ")],1)],1)],1)]})],2)],1),t._v(" "),a("v-list",{attrs:{"three-line":""}},[t.ongoingTasks.length+t.completedTasks.length?a("v-subheader",[t._v("\n            "+t._s(t.completedTasks.length?"Sudah dikerjakan":"Belum ada tugas yang sudah dikerjakan")+"\n          ")]):t._e(),t._v(" "),a("v-slide-x-transition",{attrs:{group:"",tag:"v-list"}},[t._l(t.completedTasks,function(e,n){return[a("v-divider"),t._v(" "),a("v-list-tile",{key:e.id,attrs:{avatar:""},on:{click:function(t){}}},[a("v-list-tile-avatar",[a("v-icon",{staticClass:"success white--text"},[t._v("fa fa-check")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[a("v-icon",{attrs:{color:"success"}},[t._v("fa fa-calendar-check-o")]),t._v("\n                    "+t._s("Selesai: "+t.formatDate(e.completed))+"\n                  ")],1),t._v(" "),a("v-list-tile-sub-title",[t._v("\n                    "+t._s(e.name+" | dibuat: "+e.created)+"\n                  ")])],1),t._v(" "),a("v-list-tile-action",[a("v-btn",{attrs:{icon:t.mobile,ripple:t.mobile,small:!t.mobile},on:{click:function(a){return t.setCompleted(n,e)}}},[a("v-icon",{attrs:{color:"orange lighten-1"}},[t._v("fa fa-undo")]),t._v("\n                    "+t._s(t.mobile?"":" Tandai belum dikerjakan")+"\n                  ")],1),t._v(" "),a("v-btn",{attrs:{icon:t.mobile,ripple:t.mobile,small:!t.mobile},on:{click:function(a){return t.remove(n,e.id,"completedTasks")}}},[a("v-icon",{attrs:{color:"red lighten-1"}},[t._v("fa fa-trash")]),t._v("\n                    "+t._s(t.mobile?"":" Hapus")+"\n                  ")],1)],1)],1)]})],2)],1),t._v(" "),a("v-divider",{staticStyle:{"margin-bottom":"80px"}})],1)],1)],1)],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},254:function(t,e,a){"use strict";var n=a(9),s=a(7),i=a(0),r=a.n(i);n.default.use(s.a),e.a=new s.a.Store({state:{datenow:r()().format("YYYY-MM-DD"),sidebar:null,modal:!1,snackbar:{visibility:!1,timeout:null,message:null,color:null}},mutations:{setSidebar:function(t,e){t.sidebar=e},setModal:function(t,e){t.modal=e||!t.modal},setSnackbar:function(t,e){t.snackbar.color=e.color||null,t.snackbar.message=e.msg||null,t.snackbar.timeout=e.timer,t.snackbar.visibility=e.visible||!1},closeSnackbar:function(t){t.snackbar.visibility=!1}},actions:{setSnackbar:function(t,e){var a=t.commit;e.timeout=e.timeout||3e3,a("setSnackbar",e),setTimeout(function(){a("closeSnackbar")},e.timeout)}},getters:{datenow:function(t){return t.datenow}}})},255:function(t,e,a){"use strict";var n=a(9),s=a(256),i=a.n(s),r=a(257),o=(a.n(r),a(259)),l=(a.n(o),a(260));a.n(l);n.default.use(i.a,{iconfont:"fa4"})},257:function(t,e){},259:function(t,e){},260:function(t,e){},261:function(t,e,a){"use strict";var n=a(262),s=a.n(n),i=a(187),r=a.n(i),o=a(47),l=a.n(o),c=a(266),u=a.n(c),d=a(270),v=a.n(d),f=a(271),m=a.n(f),k=a(9),h=a(275),b=a.n(h),p=function(){function t(e){v()(this,t),b.a.exec("\n      CREATE LOCALSTORAGE DATABASE IF NOT EXISTS "+e+";\n      ATTACH LOCALSTORAGE DATABASE "+e+";\n      USE "+e+";\n    ")}return m()(t,[{key:"createTable",value:function(t,e){var a="",n=0;for(var s in e)a+=n===u()(e).length-1?s+" "+e[s]:s+" "+e[s]+", ",n++;return b.a.exec("CREATE TABLE IF NOT EXISTS "+t+" ("+a+")"),this}}],[{key:"filter",value:function(t,e){var a=u()(e)[0];return b.a.promise("SELECT * FROM "+t+" WHERE "+a+" = ?",[e[a]])}},{key:"insert",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:850;return new l.a(function(n){var s=0;setTimeout(function(){var a=!0,i=!1,o=void 0;try{for(var l,c=r()(e);!(a=(l=c.next()).done);a=!0){var u=l.value;b.a.exec("INSERT INTO "+t+" VALUES ?",[u]),s++}}catch(t){i=!0,o=t}finally{try{!a&&c.return&&c.return()}finally{if(i)throw o}}n(s)},a)})}},{key:"delete",value:function(t,e){var a=u()(e)[0];return b.a.promise("DELETE FROM "+t+" WHERE "+a+" = ?",e[a])}},{key:"fetch",value:function(t){return b.a.promise("SELECT * FROM "+t)}},{key:"update",value:function(t,e,a){var n="",i=u()(a)[0],r=s()(e);r.push(a[i]);for(var o in e)n+=0==u()(e).length-1?o+" = ?":o+" = ?, ";return b.a.promise("UPDATE "+t+" SET "+n+" WHERE "+i+" = ?",r)}}]),t}();Plugin.install=function(t){t.db=p,window.db=p},k.default.use(Plugin);Plugin},32:function(t,e,a){"use strict";var n=a(8),s=a.n(n),i=a(7),r=a(203),o=a(204),l=a(206),c=a(208),u=a(210);e.a={name:"app",components:{Snackbar:o.a,Navbar:l.a,Sidebar:c.a,Footer:u.a,Offline:r.a},methods:s()({},Object(i.b)({setSnackbar:"setSnackbar"}),{connection:function(t){t||this.setSnackbar({visible:!0,msg:"Tidak ada internet !"})}}),beforeMount:function(){new db("vuetaskdb").createTable("tasks",{id:"STRING PRIMARY KEY",name:"STRING",deadline:"DATE",completed:"DATE",created:"DATE"})}}},40:function(t,e,a){"use strict";var n=a(8),s=a.n(n),i=a(7);e.a={computed:s()({},Object(i.d)({visibility:function(t){return t.snackbar.visibility},message:function(t){return t.snackbar.message},timeout:function(t){return t.snackbar.timeout},color:function(t){return t.snackbar.color}})),methods:s()({},Object(i.c)({set:"setSnackbar"}))}},41:function(t,e,a){"use strict";var n=a(8),s=a.n(n),i=a(7);e.a={computed:s()({},Object(i.d)({sidebar:function(t){return t.sidebar}})),methods:s()({},Object(i.c)({set:"setSidebar"}))}},42:function(t,e,a){"use strict";var n=a(8),s=a.n(n),i=a(7);e.a={data:function(){return{routes:[{link:"/",title:"Beranda",icon:"fa fa-home"},{link:"/list",title:"List Tugas",icon:"fa fa-book"}]}},methods:s()({},Object(i.c)({setSidebar:"setSidebar"})),computed:s()({},Object(i.d)({drawer:function(t){return t.sidebar}}),{sidebar:{get:function(){return this.drawer},set:function(t){this.setSidebar(t)}}})}},43:function(t,e,a){"use strict";e.a={data:function(){return{contacts:[{icon:"fa fa-envelope",link:"mailto:sutan.gnst@gmail.com"},{icon:"fa fa-github",link:"https://github.com/sutanlab"},{icon:"fa fa-facebook",link:"https://facebook.com/sgnzst"},{icon:"fa fa-instagram",link:"https://www.instagram.com/sutan_gnst"}]}}}},44:function(t,e,a){"use strict";var n=a(45),s=a.n(n),i=a(46),r=a.n(i),o=a(8),l=a.n(o),c=a(7),u=a(243),d=a.n(u),v=a(0),f=a.n(v);e.a={data:function(){return{dialog:!1,valid:!0,loading:!1,selectedTask:{},tasks:[]}},computed:{name:function(){var t=this;return{value:"",length:50,rules:[function(t){return!!t||"Nama Tugas harus di isi !"},function(e){return e&&e.length<=t.name.length||"Nama Tugas tidak boleh lebih dari "+t.name.length+" karakter"}]}},date:function(){return this.$store.getters.datenow}},methods:l()({},Object(c.b)({setSnackbar:"setSnackbar"}),{formatDate:function(t){return f()(t).format("DD/MM/YYYY")},add:function(){this.$refs.form.validate()&&(this.tasks.push({id:d()(),name:this.name.value,completed:null,deadline:this.$store.getters.datenow,created:this.$store.getters.datenow}),this.name.value="")},remove:function(t){this.tasks.splice(t,1)},selectTask:function(t){this.dialog=!0,this.selectedTask=t},clear:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return r()(s.a.mark(function a(){var n;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=7;break}return t.loading=!0,a.next=4,db.insert("tasks",t.tasks);case 4:n=a.sent,t.setSnackbar({visible:!0,msg:n+" Tugas disimpan ke List",color:"success"}),t.loading=!1;case 7:t.tasks=[];case 8:case"end":return a.stop()}},a,t)}))()}})}}},[189]);
//# sourceMappingURL=app.ffb9b68bd8a571128340.js.map