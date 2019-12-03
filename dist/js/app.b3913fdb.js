(function(e){function t(t){for(var r,s,a=t[0],u=t[1],l=t[2],c=0,d=[];c<a.length;c++)s=a[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},s={app:0},o={app:0},i=[];function a(e){return u.p+"js/"+({create:"create",login:"login",results:"results",update:"update"}[e]||e)+"."+{create:"96010b2e",login:"470c6de5",results:"4c2201b5",update:"f600d1bf"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={create:1,login:1,results:1,update:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({create:"create",login:"login",results:"results",update:"update"}[e]||e)+"."+{create:"7ad78323",login:"fd077395",results:"b3d0527f",update:"464be995"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var l=i[a],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],c=l.getAttribute("data-href");if(c===r||c===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/admin/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var r=n("2dad"),s=n.n(r);s.a},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Preloader"),e.showNav?n("Nav"):e._e(),n("div",{staticClass:"container",class:{login:!e.showNav}},[n("router-view")],1),n("notifications",{attrs:{group:"msg"}})],1)},o=[],i=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[e._m(0),n("div",{staticClass:"body"},[n("ul",[n("router-link",{staticClass:"new",attrs:{to:"/create",tag:"li"}},[n("i",{staticClass:"fa fa-plus"}),e._v(" Create new")]),n("li",{staticClass:"refresh",on:{click:e.refresh}},[n("i",{staticClass:"fa fa-refresh"}),e._v(" Reload polls")]),e._l(e.getPolls,(function(t){return n("router-link",{key:t.uuid,staticClass:"item",attrs:{to:{name:"results",params:{id:t.id}},tag:"li"}},[n("span",{staticClass:"title"},[e._v(e._s((t.isDraft?"Draft: ":"")+t.name))]),n("span",{staticClass:"date"},[e._v(e._s(e.formatDate(t.created_at)))])])}))],2)])])}),a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("h1",{staticClass:"title"},[e._v("My Polls")])])}],u=(n("a4d3"),n("99af"),n("4de4"),n("4160"),n("0d03"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),l=n("2f62"),c=(n("d3b7"),n("a666")),d="6600e36b-4ecc-473b-ac50-d7795256b092",f=new c["dataOperations"],p=new c["UMSModule"],h={isAuthorized:!1,dataModule:f,login:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return new Promise((function(n,r){if(t)e.auth(t.credentials).then((function(r){return localStorage.setItem("credentials",JSON.stringify(t.credentials)),e.isAuthorized=!0,n(r)})).catch((function(t){return localStorage.removeItem("credentials"),e.isAuthorized=!1,r(t)}));else{var s=e.retrieveCredentials();if(!s)return e.isAuthorized=!1,r(new Error("No saved user"));e.auth(s).then((function(t){return e.isAuthorized=!0,n(t)})).catch((function(t){return localStorage.removeItem("credentials"),e.isAuthorized=!1,r(t)}))}}))},auth:function(e){return new Promise((function(t,n){if(!e||!e.method)return n();"apk"===e.method?Object(c["jexiaClient"])().init({projectID:d,key:e.key,secret:e.secret},f).then((function(e){return t(e)})).catch((function(e){return n(e)})):"ums"===e.method&&(Object(c["jexiaClient"])().init({projectID:d},p,f),p.signIn({email:e.email,password:e.password,default:!0}).then((function(e){return t(e)})).catch((function(e){return n(e)})))}))},retrieveCredentials:function(){var e=localStorage.getItem("credentials");return e?JSON.parse(e):void 0}};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={methods:{formatDate:function(e){var t=new Date(e),n=function(e){var t=e.getHours(),n=e.getMinutes(),r=t>=12?"pm":"am";t%=12,t=t||12,n=n<10?"0"+n:n;var s=t+":"+n+" "+r;return s};return"Created: ".concat(t.getFullYear(),"/").concat(t.getMonth(),"/").concat(t.getDay()," at ").concat(n(t))},refresh:function(){this.$store.dispatch("poll/getPolls")}},computed:w({},Object(l["b"])({getPolls:"poll/getPolls"}),{},Object(l["c"])(["authorized"])),created:function(){var e=this;h.login().then((function(){e.$store.commit("setAuthorized",!0),e.$store.dispatch("poll/getPolls").then((function(){e.$store.commit("setPreloader",!1)}))})).catch((function(){e.$notify({group:"msg",type:"error",title:"Not authorized"}),e.$store.commit("setAuthorized",!1),e.$store.commit("setPreloader",!1),"login"!==e.$router.currentRoute.name&&e.$router.push({path:"/login"})}))}},v=g,b=(n("d79f"),n("2877")),y=Object(b["a"])(v,i,a,!1,null,null,null),P=y.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.preloader?n("transition",{attrs:{name:"preloader"}},[n("div",{attrs:{id:"preloader"}},[e._v(" "+e._s(e.loading)+" ")])]):e._e()},O=[];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={data:function(){return{dots:1,loop:void 0}},computed:_({},Object(l["c"])({preloader:"preloader"}),{loading:function(){for(var e="",t=0;t<this.dots;t++)e+=".";return"Loading"+e}}),methods:{update:function(){3===this.dots?this.dots=1:this.dots++},interval:function(e){var t=this;e?this.loop=setInterval((function(){t.update()}),500):clearInterval(this.loop)}},created:function(){var e=this;this.interval(!0),this.$store.subscribe((function(t,n){"setPreloader"===t.type&&e.interval(n.preloader)}))}},A=E,x=(n("bc2b"),Object(b["a"])(A,q,O,!1,null,null,null)),I=x.exports,k={name:"app",components:{Nav:P,Preloader:I},computed:{showNav:function(){return"login"!==this.$route.name}}},C=k,M=(n("5c0b"),Object(b["a"])(C,s,o,!1,null,null,null)),Q=M.exports,S=n("8c4f"),D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{src:"/images/poll.png",alt:""}}),e._v(" No polls selected ")])}],N=(n("21bb"),{}),T=Object(b["a"])(N,D,$,!1,null,null,null),z=T.exports;r["default"].use(S["a"]);var B=[{path:"/",name:"home",component:z},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/update/:id",name:"update",component:function(){return n.e("update").then(n.bind(null,"4ae4"))},props:!0},{path:"/results/:id",name:"results",component:function(){return n.e("results").then(n.bind(null,"d65b"))},props:!0},{path:"/create",name:"create",component:function(){return n.e("create").then(n.bind(null,"a23d"))}},{path:"*",redirect:"/"}],L=new S["a"]({mode:"history",base:"/admin/",routes:B}),R=L,J=(n("7db0"),n("c740"),n("d81d"),n("4e82"),n("96cf"),n("2909")),W=n("2ef0"),F=n.n(W),H={polls:[],newPolls:[]};function U(e,t){function n(e,t){return F.a.transform(e,(function(e,r,s){F.a.isEqual(r,t[s])||(e[s]=F.a.isObject(r)&&F.a.isObject(t[s])?n(r,t[s]):r)}))}return n(e,t)}r["default"].prototype.$_=F.a;var K={validatePoll:function(){return function(e){var t=e.poll,n=!1;return null!==t.name&&t.name&&0!==t.name.length||(n=!0),null!==t.message&&t.message&&0!==t.message.length||(n=!0),t.questions.forEach((function(e){null!==e.question&&e.question&&0!==e.question.length||(n=!0),e.answers.forEach((function(e){null!==e.answer&&e.answer&&0!==e.answer.length||(n=!0)}))})),n&&r["default"].notify({group:"msg",type:"error",title:"Fill all data"}),!n}},getPolls:function(e){return[].concat(Object(J["a"])(e.polls),Object(J["a"])(e.newPolls)).sort((function(e,t){return new Date(t.created_at)-new Date(e.created_at)}))},getPollById:function(e){return function(t){return[].concat(Object(J["a"])(e.polls),Object(J["a"])(e.newPolls)).find((function(e){return e.id===t}))}},getNewPoll:function(e){return e.newPolluuid}},Y={savePolls:function(e,t){e.polls=t.polls,e.polls.forEach((function(e){e.questions=[]}))},savePoll:function(e,t){e.polls.push(t.poll)},saveQuestions:function(e,t){t.questions.forEach((function(t){t.answers=t.answers?t.answers:[];var n=e.polls.find((function(e){return e.id===t.poll_uuid}));n&&n.questions.push(t)}))},saveAnswers:function(e,t){t.answers.forEach((function(t){e.polls.forEach((function(e){var n=e.questions.find((function(e){return e.id===t.question_uuid}));n&&n.answers.push(t)}))}))},updatePoll:function(e,t){var n=e.polls.findIndex((function(e){return e.id===t.poll.id}));r["default"].set(e.polls,n,Object.assign(e.polls[n],{name:t.poll.name,message:t.poll.message}))},updateQuestions:function(e,t){t.questions.forEach((function(t){var n=e.polls.findIndex((function(e){return e.id===t.poll_uuid})),s=e.polls[n].questions.findIndex((function(e){return e.id===t.id}));r["default"].set(e.polls[n].questions,s,Object.assign(e.polls[n].questions[s],{question:t.question,order:t.order,skipped:!!t.skipped}))}))},updateAnswers:function(e,t){t.answers.forEach((function(t){var n=e.polls.findIndex((function(e){return e.id===t.poll_uuid})),s=e.polls[n].questions.findIndex((function(e){return e.id===t.question_uuid})),o=e.polls[n].questions[s].answers.findIndex((function(e){return e.id===t.id}));r["default"].set(e.polls[n].questions[s].answers,o,Object.assign(e.polls[n].questions[s].answers[o],{answer:t.answer,result:t.result}))}))},deletePoll:function(e,t){var n=e.polls.findIndex((function(e){return e.id===t.poll.id}));r["default"].delete(e.polls,n),R.push("/")},deleteQuestions:function(e,t){t.questions.forEach((function(t){var n=e.polls.findIndex((function(e){return e.id===t.poll_uuid})),s=e.polls[n].questions.findIndex((function(e){return e.id===t.id}));r["default"].delete(e.polls[n].questions,s)}))},deleteAnswers:function(e,t){t.answers.forEach((function(t){var n=e.polls.findIndex((function(e){return e.id===t.poll_uuid})),s=e.polls[n].questions.findIndex((function(e){return e.id===t.question_uuid})),o=e.polls[n].questions[s].findIndex((function(e){return e.id===t.id}));r["default"].delete(e.polls[n].questions[s].answers,o)}))}},G={getPolls:function(e){var t,n,s;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return e.commit("setBusy",!0,{root:!0}),o.next=3,regeneratorRuntime.awrap(e.dispatch("apicalls/getPolls",null,{root:!0}));case 3:return t=o.sent,o.next=6,regeneratorRuntime.awrap(e.dispatch("apicalls/getQuestions",null,{root:!0}));case 6:return n=o.sent,o.next=9,regeneratorRuntime.awrap(e.dispatch("apicalls/getAnswers",null,{root:!0}));case 9:s=o.sent,e.commit("savePolls",{polls:t}),e.commit("saveQuestions",{questions:n}),e.commit("saveAnswers",{answers:s}),r["default"].notify({group:"msg",type:"success",title:"Polls are loaded"}),e.commit("setBusy",!1,{root:!0});case 15:case"end":return o.stop()}}))},getAnswersByPollId:function(e,t){return new Promise((function(n,r){e.dispatch("apicalls/getAnswersByPollId",{poll_uuid:t.poll_uuid},{root:!0}).then((function(t){e.commit("updateAnswers",{answers:t}),n(t)})).catch((function(e){r(e)}))}))},createPoll:function(e,t){return new Promise((function(n,r){e.dispatch("apicalls/createPoll",{poll:{name:t.poll.name,message:t.poll.message}},{root:!0}).then((function(s){var o=s[0],i=t.poll.questions.map((function(e){return{poll_uuid:o.id,question:e.question,order:e.order,skipped:e.skipped,answers:e.answers}}));e.dispatch("createQuestions",{questions:i}).then((function(t){o.questions=t,e.commit("savePoll",{poll:o}),n(o)})).catch((function(e){r(e)}))})).catch((function(e){r(e)}))}))},createQuestions:function(e,t){return new Promise((function(n,r){var s=[],o=[];t.questions.forEach((function(e){s.push({poll_uuid:e.poll_uuid,question:e.question,order:e.order,skipped:!!e.skipped}),o.push(e.answers)})),e.dispatch("apicalls/createQuestions",{questions:s},{root:!0}).then((function(t){var s=t,i=[];o.forEach((function(e,t){e.forEach((function(e){i.push({question_uuid:s[t].id,poll_uuid:s[t].poll_uuid,answer:e.answer,result:0})}))})),e.dispatch("createAnswers",{answers:i}).then((function(t){s.forEach((function(e){e.answers=[]})),t.forEach((function(e){s.find((function(t){return t.id===e.question_uuid})).answers.push(e)})),e.commit("saveQuestions",{questions:s}),n(s)})).catch((function(e){r(e)}))})).catch((function(e){r(e)}))}))},createAnswers:function(e,t){return new Promise((function(n,r){e.dispatch("apicalls/createAnswers",{answers:t.answers},{root:!0}).then((function(t){e.commit("saveAnswers",{answers:t}),n(t)})).catch((function(e){r(e)}))}))},updatePoll:function(e,t){return new Promise((function(n,r){e.dispatch("apicalls/updatePoll",{poll:{id:t.poll.id,name:t.poll.name,message:t.poll.message}},{root:!0}).then((function(t){var r=t[0];r.questions=t,e.commit("updatePoll",{poll:r}),n(r)})).catch((function(e){r(e)})),e.dispatch("updateQuestions",{questions:t.poll.questions,originQuestions:t.originPoll.questions,poll:t.poll}).catch((function(e){r(e)}))}))},updateQuestions:function(e,t){return new Promise((function(n,r){var s=[],o=[];t.questions.forEach((function(e){var n=t.originQuestions.find((function(t){return t.id===e.id}));F.a.isEmpty(n)||(s.push(n),o.push(e))}));var i=[];F.a.differenceWith(o,s,F.a.isEqual).forEach((function(e){var t=s.find((function(t){return t.id===e.id})),n=U({question:e.question,order:e.order,skipped:e.skipped},{question:t.question,order:t.order,skipped:t.skipped});F.a.isEmpty(n)||(n.id=e.id,i.push(n))})),F.a.isEmpty(i)||e.dispatch("apicalls/updateQuestions",{questions:i},{root:!0}).then((function(t){var n=t.map((function(e){return e[0]}));e.commit("updateQuestions",{questions:n})})).catch((function(e){r(e)}));var a=[],u=[];o.forEach((function(e){e.answers.forEach((function(e){a.push(e)}))})),s.forEach((function(e){e.answers.forEach((function(e){u.push(e)}))})),e.dispatch("updateAnswers",{answers:a,originAnswers:u,poll_uuid:t.poll.id}).catch((function(e){r(e)}));var l=F.a.filter(t.questions,(function(e){return e.isAdded})).map((function(e){return e.poll_uuid=t.poll.id,e}));F.a.isEmpty(l)||e.dispatch("createQuestions",{questions:l}).catch((function(e){r(e)}));var c=F.a.differenceWith(t.originQuestions,t.questions,(function(e,t){return e.id===t.id}));F.a.isEmpty(c)||e.dispatch("deleteQuestions",{questions:c}).catch((function(e){r(e)}))}))},updateAnswers:function(e,t){return new Promise((function(n,r){var s=[],o=[];t.answers.forEach((function(e){var n=t.originAnswers.find((function(t){return t.id===e.id}));F.a.isEmpty(n)||(o.push(n),s.push(e))}));var i=F.a.filter(t.answers,(function(e){return e.isAdded})).map((function(e){return{poll_uuid:t.poll_uuid,question_uuid:e.question_uuid,answer:e.answer,result:0}})),a=F.a.differenceWith(t.originAnswers,t.answers,(function(e,t){return e.id===t.id})),u=[];F.a.differenceWith(t.answers,t.originAnswers,F.a.isEqual).forEach((function(e){if(!e.isAdded){var n=t.originAnswers.find((function(t){return t.id===e.id})),r=U({answer:e.answer},{answer:n.answer});F.a.isEmpty(r)||(r.id=e.id,u.push(r))}})),F.a.isEmpty(a)||e.dispatch("deleteAnswers",{answers:a}).catch((function(e){r(e)})),F.a.isEmpty(i)||e.dispatch("createAnswers",{answers:i}).catch((function(e){r(e)})),F.a.isEmpty(u)||e.dispatch("apicalls/updateAnswers",{answers:u},{root:!0}).then((function(t){var r=t.map((function(e){return e[0]}));e.commit("updateAnswers",{answers:r}),n(t)})).catch((function(e){r(e)})),n()}))},deletePoll:function(e,t){return new Promise((function(n,r){e.dispatch("apicalls/deletePoll",{poll:t.poll},{root:!0}).then((function(r){e.commit("deletePoll",{poll:t.poll}),n(r)})).catch((function(e){r(e)}))}))},deleteQuestions:function(e,t){return new Promise((function(n,r){e.dispatch("apicalls/deleteQuestions",{questions:t.questions},{root:!0}).then((function(r){e.commit("deleteQuestions",{questions:t.questions}),n(r)})).catch((function(e){r(e)}))}))},deleteAnswers:function(e,t){return new Promise((function(n,r){e.dispatch("apicalls/deleteAnswers",{answers:t.answers},{root:!0}).then((function(r){e.commit("deleteAnswers",{answers:t.answers}),n(r)})).catch((function(e){r(e)}))}))}},V={namespaced:!0,state:H,getters:K,mutations:Y,actions:G},X=(n("3ca3"),n("ddb0"),n("21ca")),Z={},ee={},te={},ne={signIn:function(e,t){e.commit("setBusy",!0,{root:!0}),h.login({credentials:t.credentials}).then((function(){r["default"].notify({group:"msg",type:"success",title:"Successfully logged in"}),R.push({path:"/"})})).catch((function(){r["default"].notify({group:"msg",type:"error",title:"Log in failed"}),"login"!==R.currentRoute.name&&R.push({path:"/login"})})).finally((function(){e.commit("setBusy",!1,{root:!0})}))},getPolls:function(){return h.dataModule.dataset("polls").select().execute()},getQuestions:function(){return h.dataModule.dataset("questions").select().execute()},getAnswers:function(){return h.dataModule.dataset("answers").select().execute()},getAnswersByPollId:function(e,t){return h.dataModule.dataset("answers").select().where(Object(X["a"])("poll_uuid").isEqualTo(t.poll_uuid)).execute()},createPoll:function(e,t){return h.dataModule.dataset("polls").insert(t.poll).execute()},createQuestions:function(e,t){return h.dataModule.dataset("questions").insert(t.questions).execute()},createAnswers:function(e,t){return h.dataModule.dataset("answers").insert(t.answers).execute()},updatePoll:function(e,t){return h.dataModule.dataset("polls").update({name:t.poll.name,message:t.poll.message}).where(Object(X["a"])("id").isEqualTo(t.poll.id)).execute()},updateQuestions:function(e,t){return Promise.all(t.questions.map((function(e){return h.dataModule.dataset("questions").update({question:e.question,order:e.order,skipped:!!e.skipped}).where(Object(X["a"])("id").isEqualTo(e.id)).execute()})))},updateAnswers:function(e,t){return Promise.all(t.answer.map((function(e){return h.dataModule.dataset("answers").update({answer:e.answer}).where(Object(X["a"])("id").isEqualTo(e.id)).execute()})))},deletePoll:function(e,t){return Promise.all([h.dataModule.dataset("polls").delete().where(Object(X["a"])("id").isEqualTo(t.poll.id)).execute(),h.dataModule.dataset("questions").delete().where(Object(X["a"])("poll_uuid").isEqualTo(t.poll.id)).execute(),h.dataModule.dataset("answers").delete().where(Object(X["a"])("poll_uuid").isEqualTo(t.poll.id)).execute()])},deleteQuestions:function(e,t){var n=t.questions.map((function(e){return h.dataModule.dataset("questions").delete().where(Object(X["a"])("id").isInArray(e.id)).execute()})),r=t.questions.map((function(e){return h.dataModule.dataset("answers").delete().where(Object(X["a"])("question_uuid").isInArray(e.id)).execute()}));return Promise.all([].concat(Object(J["a"])(n),Object(J["a"])(r)))},deleteAnswers:function(e,t){var n=t.answers.map((function(e){return e.id}));return h.dataModule.dataset("answers").delete().where(Object(X["a"])("id").isInArray(n)).execute()}},re={namespaced:!0,state:Z,getters:ee,mutations:te,actions:ne};r["default"].use(l["a"]);var se=new l["a"].Store({namespaced:!0,modules:{poll:V,apicalls:re},state:{busy:!1,authorized:!1,preloader:!0},getters:{},mutations:{setBusy:function(e,t){e.busy=t},setAuthorized:function(e,t){e.busy=t},setPreloader:function(e,t){e.preloader=t}}}),oe=n("ee98"),ie=n.n(oe);r["default"].config.productionTip=!1,r["default"].use(ie.a),new r["default"]({router:R,store:se,render:function(e){return e(Q)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),s=n.n(r);s.a},"9c0c":function(e,t,n){},a3ee:function(e,t,n){},bc2b:function(e,t,n){"use strict";var r=n("fdbe"),s=n.n(r);s.a},d79f:function(e,t,n){"use strict";var r=n("a3ee"),s=n.n(r);s.a},fdbe:function(e,t,n){}});
//# sourceMappingURL=app.b3913fdb.js.map