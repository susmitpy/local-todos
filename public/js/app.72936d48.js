(function(t){function e(e){for(var r,a,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,s=1;s<o.length;s++){var l=o[s];0!==i[l]&&(r=!1)}r&&(n.splice(e--,1),t=a(a.s=o[0]))}return t}var r={},i={app:0},n=[];function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=r,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(o,r,function(e){return t[e]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"17e1":function(t,e,o){o("96cf");var r=o("c973"),i=o("1d25"),n=i.openDB,a=n("todos",1,{upgrade:function(t){t.createObjectStore("keyval",{autoIncrement:!0})}});function s(t){return l.apply(this,arguments)}function l(){return l=r(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a;case 2:return t.abrupt("return",t.sent.get("keyval",e));case 3:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function c(t){return d.apply(this,arguments)}function d(){return d=r(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a;case 2:return t.abrupt("return",t.sent.add("keyval",e));case 3:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function u(t,e){return p.apply(this,arguments)}function p(){return p=r(regeneratorRuntime.mark((function t(e,o){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a;case 2:return t.abrupt("return",t.sent.put("keyval",o,e));case 3:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function f(){return v.apply(this,arguments)}function v(){return v=r(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a;case 2:return t.abrupt("return",t.sent.getAllKeys("keyval"));case 3:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}function g(){return m.apply(this,arguments)}function m(){return m=r(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a;case 2:return t.abrupt("return",t.sent.getAll("keyval"));case 3:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function h(t){return b.apply(this,arguments)}function b(){return b=r(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a;case 2:return t.abrupt("return",t.sent.delete("keyval",e));case 3:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}t.exports={get:s,set:u,keys:f,getAll:g,add:c,del:h}},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("5363");var r=o("2b0e"),i=(o("d3b7"),o("bc3a")),n=o.n(i),a={},s=n.a.create(a);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["a"].use(Plugin);Plugin;var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("v-row",{staticClass:"text-left"},[o("v-col",{attrs:{cols:"12"}},[t._v(" Local ToDos - Stored Locally On Your Device ")])],1)],1),o("v-main",[o("router-view")],1),o("v-footer",{attrs:{absolute:""}},[o("v-layout",{attrs:{grow:"","justify-center":""}},[o("div",{staticClass:"ml-3",attrs:{align:"center"}},[t._v("Made by Susmit")]),o("a",{staticClass:"ml-4",staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.github.com/susmitpy",target:"_blank"}},[o("v-icon",[t._v("mdi-github")])],1),o("a",{staticClass:"ml-4",staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.linkedin.com/in/susmit-vengurlekar/",target:"_blank"}},[o("v-icon",[t._v("mdi-linkedin")])],1)])],1)],1)},c=[],d={name:"App",components:{},data:function(){return{}}},u=d,p=o("2877"),f=o("6544"),v=o.n(f),g=o("7496"),m=o("40dc"),h=o("62ad"),b=o("553a"),T=o("132d"),y=o("a722"),_=o("f6c4"),x=o("0fd9"),w=Object(p["a"])(u,l,c,!1,null,null,null),k=w.exports;v()(w,{VApp:g["a"],VAppBar:m["a"],VCol:h["a"],VFooter:b["a"],VIcon:T["a"],VLayout:y["a"],VMain:_["a"],VRow:x["a"]});var C=o("8c4f"),D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("TodosGrid")],1)},S=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[o("AddTodoDialog"),o("TodoDetailsDialog"),o("v-col",[o("v-row",[t.isMobile()?o("span",{attrs:{align:"left"}},[o("AddTodoBtn")],1):t._e()]),o("v-row",[t.isMobile()?o("FilterTodos",{staticClass:"mt-2",attrs:{align:"center"}}):t._e()],1)],1),t.isMobile()?t._e():o("v-row",{attrs:{align:"center",justify:"center"}},[o("span",{staticClass:"ml-3"},[o("AddTodoBtn")],1)]),o("v-container",{staticClass:"my-3"},[t.isMobile()?t._e():o("div",{attrs:{align:"right"}},[o("FilterTodos")],1),o("v-layout",{attrs:{row:"",wrap:""}},t._l(t.todosToShow,(function(t,e){return o("Todo",{key:t.id,attrs:{todo:t,index:e}})})),1)],1)],1)},P=[],V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg3:""},on:{click:t.showTodoDetails}},[o("v-card",{staticClass:"text-xs-center ma-3 pb-3"},[o("v-card-title",[o("h4",[t._v(" "+t._s(t.todo.title)+" ")]),o("v-spacer"),o("v-icon",{attrs:{color:t.getPriorityColorMapping[t.todo.priority]}},[t._v(" mdi-label ")])],1),o("v-card-text",{staticClass:"ml-2"},[t.todo.description.length>50?o("div",{staticClass:"text--primary text-wrap"},[t._v(" "+t._s(t.todo.description.substring(0,50)+" ..")+" ")]):o("div",{staticClass:"text--primary text-wrap"},[t._v(" "+t._s(t.todo.description)+" ")]),o("v-btn",{staticClass:"delete",attrs:{fab:"",small:"",text:"",color:"red"},on:{click:function(e){return e.stopPropagation(),t.deleteTodo(e)}}},[o("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)},$=[],M=o("5530"),A=o("2f62"),j={name:"Todo",props:["todo","index"],computed:Object(A["b"])(["getPriorityColorMapping"]),methods:{showTodoDetails:function(){this.$store.commit("setCurrentTodo",Object(M["a"])({},this.todo)),this.$store.commit("setCurrentTodoIndex",this.index),this.$store.commit("setTodoDetailsDialogStatus",!0)},deleteTodo:function(){this.$store.commit("setCurrentTodo",Object(M["a"])({},this.todo)),this.$store.dispatch("deleteTodo")}}},F=j,E=(o("fd27"),o("8336")),B=o("b0af"),R=o("99d9"),I=o("0e8f"),L=o("2fa4"),H=Object(p["a"])(F,V,$,!1,null,"b01517d0",null),q=H.exports;v()(H,{VBtn:E["a"],VCard:B["a"],VCardText:R["b"],VCardTitle:R["c"],VFlex:I["a"],VIcon:T["a"],VSpacer:L["a"]});var K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-speed-dial",{attrs:{"open-on-hover":t.on_hover,direction:t.direction,transition:t.transition},scopedSlots:t._u([t.isMobile()?{key:"activator",fn:function(){return[o("v-btn",{attrs:{color:"blue darken-2",dark:"",fab:""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?o("v-icon",[t._v("mdi-close")]):o("v-icon",[t._v("mdi-plus")])],1)]},proxy:!0}:{key:"activator",fn:function(){return[o("v-btn",{attrs:{color:"blue darken-2",dark:""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t._v(" Add a Todo ")])]},proxy:!0}],null,!0),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-btn",t._g({attrs:{text:"",icon:"",dark:"",color:"red"},on:{click:t.high_priority}},r),[o("v-icon",[t._v("mdi-label")])],1)]}}])},[o("span",[t._v("Add High Priority todo")])]),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-btn",t._g({attrs:{text:"",icon:"",dark:"",color:"orange"},on:{click:t.medium_priority}},r),[o("v-icon",[t._v("mdi-label")])],1)]}}])},[o("span",[t._v("Add Medium Priority todo")])]),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-btn",t._g({attrs:{text:"",icon:"",dark:"",small:"",color:"blue"},on:{click:t.low_priority}},r),[o("v-icon",[t._v("mdi-label")])],1)]}}])},[o("span",[t._v("Add Low Priority todo")])])],1)},N=[],G={name:"AddTodoBtn",data:function(){return{fab:!1,transition:"scale-transition"}},computed:{direction:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),"right"},on_hover:function(){return!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},methods:{high_priority:function(){this.show_add_todo_dialog(1)},medium_priority:function(){this.show_add_todo_dialog(2)},low_priority:function(){this.show_add_todo_dialog(3)},show_add_todo_dialog:function(t){this.$store.commit("setCurrentTodo",{priority:t}),this.$store.commit("setAddTodoDialogStatus",!0)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}},J=G,U=o("c73b"),Y=o("3a2f"),z=Object(p["a"])(J,K,N,!1,null,"5e91b54c",null),Q=z.exports;v()(z,{VBtn:E["a"],VIcon:T["a"],VSpeedDial:U["a"],VTooltip:Y["a"]});var W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"max-width":"300",persistent:!0},model:{value:t.getAddTodoDialogStatus,callback:function(e){t.getAddTodoDialogStatus=e},expression:"getAddTodoDialogStatus"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(" Add Todo "),o("v-spacer"),o("span",{staticClass:"caption"},[t._v(" Priority : ")]),o("v-icon",{attrs:{color:t.getPriorityColorMapping[t.todo.priority]}},[t._v("mdi-label")])],1),o("v-card-text",[o("v-form",{ref:"form"},[o("v-text-field",{attrs:{id:"title",label:"Title",filled:"",rules:t.titleRules,required:"",counter:"25",hint:"Keep it Short and Simple"},on:{input:t.titleChecker},model:{value:t.todo.title,callback:function(e){t.$set(t.todo,"title",e)},expression:"todo.title"}}),o("v-textarea",{attrs:{label:"Description",filled:"",hint:"Free the clutter in your mind",counter:"150",rules:t.descRules},model:{value:t.todo.description,callback:function(e){t.$set(t.todo,"description",e)},expression:"todo.description"}})],1)],1),o("v-card-actions",[o("v-btn",{attrs:{text:"",color:"warning"},on:{click:t.closeDialog}},[t._v(" Close ")]),o("v-spacer"),o("v-btn",{staticClass:"success",attrs:{text:""},on:{click:t.addTodo}},[t._v(" Add Todo ")])],1)],1)],1)},X=[],Z=(o("a4d3"),o("e01a"),o("fb6a"),{name:"AddTodoDialog",data:function(){return{titleRules:[function(t){return!!t||"Title is required"},function(t){return t&&t.length<=25||"Keep It Short and Simple"}],descRules:[function(t){return!t||t.length<=150||"Not so long !"}]}},computed:Object(M["a"])(Object(M["a"])({},Object(A["b"])(["getAddTodoDialogStatus","getPriorityColorMapping"])),{},{todo:function(){return this.$store.getters.getCurrentTodo}}),methods:{closeDialog:function(){this.$store.commit("setAddTodoDialogStatus",!1)},addTodo:function(){null==this.$store.getters.getCurrentTodo.description&&this.$store.commit("setCurrentTodoBlankDesc"),this.$refs.form.validate()&&(this.$store.dispatch("addTodo"),this.closeDialog())},titleChecker:function(t){t.length>=25&&(this.todo.title=t.slice(0,24),this.$forceUpdate())}},updated:function(){var t=this;this.$nextTick((function(){t.$refs.form&&t.$refs.form.resetValidation()}))}}),tt=Z,et=o("169a"),ot=o("4bd4"),rt=o("8654"),it=o("a844"),nt=Object(p["a"])(tt,W,X,!1,null,"370e97e2",null),at=nt.exports;v()(nt,{VBtn:E["a"],VCard:B["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VDialog:et["a"],VForm:ot["a"],VIcon:T["a"],VSpacer:L["a"],VTextField:rt["a"],VTextarea:it["a"]});var st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"max-width":"300",persistent:!0},model:{value:t.getTodoDetailsDialogStatus,callback:function(e){t.getTodoDetailsDialogStatus=e},expression:"getTodoDetailsDialogStatus"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(" My Todo "),o("v-spacer"),o("span",{staticClass:"caption"},[t._v(" Priority : ")]),o("v-icon",{attrs:{color:t.getPriorityColorMapping[t.todo.priority]}},[t._v("mdi-label")]),o("v-dialog",{attrs:{"max-width":"250",persistent:!0},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[o("v-btn",t._g({attrs:{text:"",fab:""}},Object.assign({},i,r)),[o("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[o("span",[t._v("Edit Priority")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[t._v("Choose New Priority")]),t._l([3,2,1].filter((function(e){return e!=t.todo.priority})),(function(e){return o("v-card-text",{key:e,attrs:{align:"center"}},[o("v-btn",{attrs:{color:t.getPriorityColorMapping[e]},on:{click:function(o){return t.changePriorityTo(e)}}},[t._v(" "+t._s(t.priorityNameMapping[e])+" ")])],1)})),o("v-divider"),o("v-card-actions",{staticClass:"justify-center"},[o("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")])],1)],2)],1)],1),o("v-card-text",{staticClass:"mt-3"},[o("v-form",{ref:"form"},[o("v-text-field",{attrs:{label:"Title",filled:"",readonly:!t.getEditTodoStatus,rules:t.titleRules,hint:"Keep it Short and Simple",required:""},model:{value:t.todo.title,callback:function(e){t.$set(t.todo,"title",e)},expression:"todo.title"}}),o("v-textarea",{attrs:{label:"Description",filled:"",readonly:!t.getEditTodoStatus,hint:"Free the clutter in your mind"},model:{value:t.todo.description,callback:function(e){t.$set(t.todo,"description",e)},expression:"todo.description"}})],1)],1),o("v-card-actions",[t.getEditTodoStatus?t._e():o("v-btn",{attrs:{color:"warning"},on:{click:t.editTodo}},[t._v(" Edit ")]),o("v-spacer"),t.getEditTodoStatus?o("v-btn",{attrs:{color:"success"},on:{click:t.saveEditedTodo}},[t._v(" Save ")]):o("v-btn",{attrs:{text:"",color:"purple"},on:{click:t.closeDialog}},[t._v(" Close ")])],1)],1)],1)},lt=[],ct={name:"TodoDetailsDialog",computed:Object(M["a"])(Object(M["a"])({},Object(A["b"])(["getTodoDetailsDialogStatus","getEditTodoStatus","getPriorityColorMapping"])),{},{todo:function(){return this.$store.getters.getCurrentTodo}}),methods:{closeDialog:function(){this.$store.commit("setTodoDetailsDialogStatus",!1)},editTodo:function(){this.$store.commit("setEditTodoStatus",!0)},saveEditedTodo:function(){this.$refs.form.validate()&&(this.$store.commit("setEditTodoStatus",!1),this.$store.dispatch("changeTodoDetails"))},changePriorityTo:function(t){this.todo.priority=t,this.dialog=!1,this.$store.commit("setEditTodoStatus",!0)}},data:function(){return{priorityNameMapping:{3:"High",2:"Medium",1:"Low"},dialog:!1,titleRules:[function(t){return!!t||"Title is required"}]}}},dt=ct,ut=o("ce7e"),pt=Object(p["a"])(dt,st,lt,!1,null,"47451b11",null),ft=pt.exports;v()(pt,{VBtn:E["a"],VCard:B["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VDialog:et["a"],VDivider:ut["a"],VForm:ot["a"],VIcon:T["a"],VSpacer:L["a"],VTextField:rt["a"],VTextarea:it["a"],VTooltip:Y["a"]});var vt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.isMobile?t._e():o("span",[t._v("Filter Todos: ")]),t.isMobile?o("span",{staticClass:"legend"},[o("v-chip",{staticClass:"ma-1",attrs:{"filter-icon":"mdi-label",filter:"","input-value":t.all_filter,"text-color":"purple"},on:{click:function(e){return t.turnOnFilter(0)}}},[t._v(" All ")]),o("v-chip",{staticClass:"ma-1",attrs:{"filter-icon":"mdi-label",filter:"","input-value":t.high_filter,"text-color":"red"},on:{click:function(e){return t.turnOnFilter(1)}}},[t._v(" High ")]),o("v-chip",{staticClass:"ma-1",attrs:{"filter-icon":"mdi-label",filter:"","input-value":t.medium_filter,"text-color":"orange"},on:{click:function(e){return t.turnOnFilter(2)}}},[t._v(" Medium ")]),o("v-chip",{staticClass:"ma-1",attrs:{"filter-icon":"mdi-label",filter:"","input-value":t.low_filter,"text-color":"blue"},on:{click:function(e){return t.turnOnFilter(3)}}},[t._v(" Low ")])],1):o("span",{staticClass:"legend px-2"},[o("v-chip",{staticClass:"ma-2",attrs:{"filter-icon":"mdi-label",filter:"","input-value":t.all_filter,"text-color":"purple"},on:{click:function(e){return t.turnOnFilter(0)}}},[t._v(" All ")]),o("v-chip",{staticClass:"ma-2",attrs:{"filter-icon":"mdi-label",filter:"","input-value":t.high_filter,"text-color":"red"},on:{click:function(e){return t.turnOnFilter(1)}}},[t._v(" High ")]),o("v-chip",{staticClass:"ma-2",attrs:{"filter-icon":"mdi-label",filter:"","input-value":t.medium_filter,"text-color":"orange"},on:{click:function(e){return t.turnOnFilter(2)}}},[t._v(" Medium ")]),o("v-chip",{staticClass:"ma-2",attrs:{"filter-icon":"mdi-label",filter:"","input-value":t.low_filter,"text-color":"blue"},on:{click:function(e){return t.turnOnFilter(3)}}},[t._v(" Low ")])],1)])},gt=[],mt={name:"FilterTodos",computed:{high_filter:function(){return 1==this.$store.getters.getPriorityFilter},medium_filter:function(){return 2==this.$store.getters.getPriorityFilter},low_filter:function(){return 3==this.$store.getters.getPriorityFilter},all_filter:function(){return 0==this.$store.getters.getPriorityFilter}},methods:{turnOnFilter:function(t){this.$store.commit("setPriorityFilter",t)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}},ht=mt,bt=o("cc20"),Tt=Object(p["a"])(ht,vt,gt,!1,null,"bf61ee20",null),yt=Tt.exports;v()(Tt,{VChip:bt["a"]});var _t={name:"TodosGrid",computed:{todosToShow:function(){var t=this.$store.getters.allTodos,e=this.$store.getters.getPriorityFilter;if(0==e)return t;for(var o=t.length,r=[],i=0;i<o;i++){var n=t[i];n.priority==e&&(n["index"]=i,r.push(n))}return r}},components:{Todo:q,AddTodoBtn:Q,AddTodoDialog:at,TodoDetailsDialog:ft,FilterTodos:yt},methods:{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}},xt=_t,wt=(o("cc92"),o("a523")),kt=Object(p["a"])(xt,O,P,!1,null,"4d3cc317",null),Ct=kt.exports;v()(kt,{VCol:h["a"],VContainer:wt["a"],VLayout:y["a"],VRow:x["a"]});var Dt={name:"Home",components:{TodosGrid:Ct},created:function(){this.$store.dispatch("getTodos")}},St=Dt,Ot=Object(p["a"])(St,D,S,!1,null,null,null),Pt=Ot.exports;v()(Ot,{VContainer:wt["a"]}),r["a"].use(C["a"]);var Vt=[{path:"/",name:"Home",component:Pt}],$t=new C["a"]({routes:Vt}),Mt=$t,At=(o("4de4"),o("a434"),o("3ca3"),o("ddb0"),o("17e1"));r["a"].use(A["a"]);var jt=new A["a"].Store({state:{todoDetailsDialog:!1,addTodoDialog:!1,editTodo:!1,currentTodo:{},currentTodoIndex:null,priorityColorMapping:{1:"red",2:"orange",3:"blue"},priorityFilter:0,todos:[]},getters:{allTodos:function(t){return t.todos},getTodoDetailsDialogStatus:function(t){return t.todoDetailsDialog},getAddTodoDialogStatus:function(t){return t.addTodoDialog},getCurrentTodo:function(t){return t.currentTodo},getEditTodoStatus:function(t){return t.editTodo},getPriorityColorMapping:function(t){return t.priorityColorMapping},getPriorityFilter:function(t){return t.priorityFilter}},mutations:{setTodoDetailsDialogStatus:function(t,e){return t.todoDetailsDialog=e},setAddTodoDialogStatus:function(t,e){return t.addTodoDialog=e},setCurrentTodo:function(t,e){return t.currentTodo=e},setCurrentTodoIndex:function(t,e){return t.currentTodoIndex=e},setEditTodoStatus:function(t,e){return t.editTodo=e},setCurrentTodoBlankDesc:function(t){return t.currentTodo.description=""},commitCurrentTodoToTodoInTodos:function(t,e){Object.assign(t.todos[t.currentTodoIndex],e)},addTodo:function(t,e){t.todos.splice(0,0,e),t.currentTodo={}},setPriorityFilter:function(t,e){return t.priorityFilter=e},deleteTodo:function(t,e){return t.todos=t.todos.filter((function(t){return t.id!=e}))},setTodos:function(t,e){return t.todos=e}},actions:{getTodos:function(t){var e=t.commit;Promise.all([Object(At["keys"])(),Object(At["getAll"])()]).then((function(t){for(var o=t[0],r=t[1],i=0;i<o.length;i++)r[i].id=o[i];e("setTodos",r)}))},addTodo:function(t){var e=t.commit,o={title:this.state.currentTodo.title,description:this.state.currentTodo.description,priority:this.state.currentTodo.priority};Object(At["add"])(o).then((function(t){o.id=t,e("addTodo",o)}))},changeTodoDetails:function(t){var e=t.commit,o={title:this.state.currentTodo.title,description:this.state.currentTodo.description,priority:this.state.currentTodo.priority};Object(At["set"])(this.state.currentTodo.id,o).then((function(){e("commitCurrentTodoToTodoInTodos",o)}))},deleteTodo:function(t){var e=this,o=t.commit;Object(At["del"])(this.state.currentTodo.id).then((function(){o("deleteTodo",e.state.currentTodo.id)}))}},modules:{}}),Ft=o("f309");r["a"].use(Ft["a"]);var Et=new Ft["a"]({theme:{themes:{light:{primary:"#607d8b",secondary:"#009688",accent:"#03a9f4",error:"#ff5722",warning:"#99770f",info:"#cddc39",success:"#4caf50"}}}});r["a"].config.productionTip=!1,new r["a"]({router:Mt,store:jt,vuetify:Et,render:function(t){return t(k)}}).$mount("#app")},"5c19":function(t,e,o){},"6ce7":function(t,e,o){},cc92:function(t,e,o){"use strict";var r=o("6ce7"),i=o.n(r);i.a},fd27:function(t,e,o){"use strict";var r=o("5c19"),i=o.n(r);i.a}});
//# sourceMappingURL=app.72936d48.js.map