(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},i=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("19b3"),n=r.n(a);n.a},"19b3":function(e,t,r){},"1c82":function(e,t,r){},"3a60":function(e,t,r){"use strict";var a=r("1c82"),n=r.n(a);n.a},"4bdc":function(e,t,r){e.exports=r.p+"img/langtool.23505751.png"},"569a":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{fixed:"",app:""}},[r("v-btn",{attrs:{icon:""},on:{click:e.toggleDarkness}},[r("v-icon",[e._v(e._s(e.dark?"mdi-moon-waxing-crescent":"mdi-weather-sunny"))])],1),r("v-toolbar-title",{staticClass:"pl-0"},[r("v-btn",{staticClass:"display-1 text-none text-left px-1",attrs:{text:"",large:"",color:"primary"},on:{click:function(t){return e.goto("/")}}},[e._v("Jo C.H.")])],1),r("v-spacer")],1),r("v-content",[r("div",{staticClass:"scroller"},[r("v-fade-transition",{attrs:{mode:"out-in"}},[r("router-view")],1)],1)]),r("v-footer",{attrs:{fixed:"",padless:"",app:""}},[r("v-card",{staticClass:"text-center",attrs:{flat:"",tile:"",width:"100%"}},[r("v-card-text",{staticClass:"py-1"},[r("v-btn",{staticClass:"mx-4",attrs:{color:"primary",icon:"",href:"https://twitter.com/jo_devs"}},[r("v-icon",{attrs:{size:"24px"}},[e._v("mdi-twitter")])],1),r("v-btn",{staticClass:"mx-4",attrs:{color:"primary",icon:"",href:"https://github.com/JoeCharlesH"}},[r("v-icon",{attrs:{size:"24px"}},[e._v("mdi-github-circle")])],1),r("v-btn",{staticClass:"mx-4",attrs:{color:"primary",icon:"",href:"https://www.youtube.com/channel/UCXw73k80B-8GOenIZspkPSA"}},[r("v-icon",{attrs:{size:"24px"}},[e._v("mdi-youtube")])],1)],1),r("v-divider"),r("v-card-text",{staticClass:"py-1"},[e._v(" "+e._s((new Date).getFullYear())+" — "),r("strong",[e._v("Joseph Charles Hooker")]),r("br"),r("strong",[e._v("joe.ch.dev@gmail.com")])])],1)],1)],1)},i=[],o={name:"App",data:()=>({}),computed:{dark(){return this.$vuetify.theme.dark}},methods:{goto(e){this.$router.push(e)},toggleDarkness(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},s=o,l=(r("034f"),r("2877")),c=r("6544"),p=r.n(c),u=r("7496"),d=r("40dc"),f=r("8336"),h=r("b0af"),m=r("99d9"),v=r("a75b"),g=r("ce7e"),y=r("0789"),x=r("553a"),b=r("132d"),k=r("2fa4"),w=r("2a7f"),C=Object(l["a"])(s,n,i,!1,null,null,null),_=C.exports;p()(C,{VApp:u["a"],VAppBar:d["a"],VBtn:f["a"],VCard:h["a"],VCardText:m["b"],VContent:v["a"],VDivider:g["a"],VFadeTransition:y["c"],VFooter:x["a"],VIcon:b["a"],VSpacer:k["a"],VToolbarTitle:w["a"]});var V=r("9483");Object(V["a"])("".concat("/","service-worker.js"),{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var L=r("8c4f"),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"portfolio",staticStyle:{height:"100%"}},[r("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[r("v-row",{staticStyle:{height:"100%"},attrs:{align:"center",justify:"center"}},e._l(e.pages,(function(t,a){return r("v-hover",{key:a,scopedSlots:e._u([{key:"default",fn:function(a){var n=a.hover;return[r("transition",[r("v-card",{staticClass:"d-flex flex-column align-center justify-center pa-5 ma-5 page-tile",staticStyle:{"border-width":"5px"},attrs:{outlined:"",flat:"",width:n?260:225,height:n?275:240},on:{click:function(r){return e.goto(t.url)}}},[r("div",{staticClass:"ma-3"},[r("v-icon",{attrs:{color:"primary",size:"90"}},[e._v(e._s(t.icon))])],1),r("p",{staticClass:"display-1"},[e._v(e._s(t.text))])])],1)]}}],null,!0)})})),1)],1)],1)},j=[],O={name:"home",data:()=>({pages:[{icon:"mdi-file-code-outline",text:"portfolio",url:"/portfolio"},{icon:"mdi-account-details",text:"skills",url:"/skills"}]}),methods:{goto(e){this.$router.push(e)}}},T=O,P=(r("80c4"),r("a523")),A=r("ce87"),E=r("0fd9"),G=Object(l["a"])(T,S,j,!1,null,"1609da0c",null),$=G.exports;p()(G,{VCard:h["a"],VContainer:P["a"],VHover:A["a"],VIcon:b["a"],VRow:E["a"],VSlideXReverseTransition:y["d"]});var F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"portfolio"},[r("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[r("v-row",{attrs:{align:"start",justify:"center"}},e._l(e.portfolio,(function(e,t){return r("v-col",{key:t,staticClass:"pa-3",attrs:{xl:"4",lg:"6",md:"8",sm:"12",cols:"12"}},[r("portfolio-card",{attrs:{name:e.name,img:e.img,info:e.info,links:e.links}})],1)})),1)],1)],1)},I=[],M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline primary--text text--darken-1"},[e._v(e._s(e.name))])],1)],1),r("v-img",{attrs:{src:e.img,"aspect-ratio":"1.7"}}),r("v-card-text",[e._v(" "+e._s(e.info)+" ")]),r("v-card-actions",e._l(e.links,(function(t,a){return r("v-btn",{key:a,attrs:{text:"",color:t.color,href:t.url}},[e._v(" "+e._s(t.text)+" ")])})),1)],1)},R=[],J={props:["name","img","info","links"]},H=J,D=r("adda"),z=r("da13"),B=r("5d23"),X=Object(l["a"])(H,M,R,!1,null,null,null),N=X.exports;p()(X,{VBtn:f["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["b"],VImg:D["a"],VListItem:z["a"],VListItemContent:B["a"],VListItemTitle:B["b"]});var U={name:"portfolio",components:{PortfolioCard:N},data:()=>({portfolio:[{name:"TRI-GER",img:r("849e"),info:"A bullet hell mixed with a color matching game that incorporates an 80’s inspired aesthetic arcade console experience that challenges the player to decide: turn back now or dive headfirst into an unhealthy relationship with failure in the pursuit of something as arbitrary as a high score.",links:[{color:"blue",url:"https://www.youtube.com/watch?v=hA9XOWfxQcQ",text:"Video"},{color:"blue",url:"https://joech.itch.io/tri-ger",text:"Download"}]},{name:"Crypt Of En",img:r("f551"),info:"An Idle-Clicker Monster Fighting Game",links:[{color:"blue",url:"https://cryptofengame.github.io/",text:"Website"}]},{name:"LangTool",img:r("4bdc"),info:"A tool that allows you to use Google Spreadsheets as localization files.",links:[{color:"blue",url:"https://github.com/JoeCharlesH/LangTool",text:"Github"}]}]})},Q=U,W=r("62ad"),q=Object(l["a"])(Q,F,I,!1,null,null,null),Y=q.exports;p()(q,{VCol:W["a"],VContainer:P["a"],VRow:E["a"],VSlideXReverseTransition:y["d"]});var Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[r("v-card",[r("v-card-title",[e._v(" Skills "),r("v-spacer"),r("v-text-field",{attrs:{"append-icon":"mdi-search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.skills,"items-per-page":100,search:e.search}})],1)],1)],1)},K=[],ee={name:"home",data:()=>({search:"",headers:[{text:"Skill",value:"skill"},{text:"Type",value:"type"},{text:"Experience (years)",value:"experience"}],skills:[{skill:"C",type:"Programming Language",experience:5},{skill:"C++",type:"Programming Language",experience:5},{skill:"C#",type:"Programming Language",experience:3.5},{skill:"GLSL / HLSL",type:"Programming Language",experience:3.5},{skill:"Python",type:"Programming Language",experience:3.5},{skill:"Java",type:"Programming Language",experience:4},{skill:"Javascript",type:"Programming Language",experience:4},{skill:"Rust",type:"Programming Language",experience:3},{skill:"Unity",type:"Game Engine",experience:3.5},{skill:"Unreal Engine",type:"GameEngine",experience:3.5},{skill:"Game AI",type:"Architecture",experience:3},{skill:"Vulkan",type:"Graphics Library",experience:2.5},{skill:"OpenGL",type:"Graphics Library",experience:3},{skill:"HTML / CSS",type:"Markup Language",experience:4},{skill:"React / React Native",type:"Front-End Framework",experience:2.5},{skill:"Vue",type:"Front-End Framework",experience:1},{skill:"Machine Learning",type:"Architecture",experience:3},{skill:"Pytorch",type:"Machine Learning Library",experience:2},{skill:"Tensorflow",type:"Machine Learning Library",experience:2}]}),methods:{goto(e){this.$router.push(e)}}},te=ee,re=(r("3a60"),r("8fea")),ae=r("8654"),ne=Object(l["a"])(te,Z,K,!1,null,"41e2b688",null),ie=ne.exports;p()(ne,{VCard:h["a"],VCardTitle:m["c"],VContainer:P["a"],VDataTable:re["a"],VSlideXReverseTransition:y["d"],VSpacer:k["a"],VTextField:ae["a"]}),a["a"].use(L["a"]);var oe=[{path:"/",name:"home",component:$},{path:"/portfolio",name:"portfolio",component:Y},{path:"/skills",name:"skills",component:ie}],se=new L["a"]({routes:oe}),le=se,ce=r("2f62");a["a"].use(ce["a"]);var pe=new ce["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ue=r("f309"),de=r("fcf4");a["a"].use(ue["a"]);var fe=new ue["a"]({icons:{iconfont:"mdi"},theme:{dark:!0,themes:{light:{primary:de["a"].blue.darken2,secondary:de["a"].teal.darken2,accent:de["a"].shades.black,error:de["a"].red.accent3},dark:{primary:de["a"].green.accent3,secondary:de["a"].teal.accent3,accent:de["a"].shades.black,error:de["a"].red.accent3}}}});a["a"].config.productionTip=!1,new a["a"]({router:le,store:pe,vuetify:fe,render:e=>e(_)}).$mount("#app")},"80c4":function(e,t,r){"use strict";var a=r("569a"),n=r.n(a);n.a},"849e":function(e,t,r){e.exports=r.p+"img/triger.95fbf3d7.png"},f551:function(e,t,r){e.exports=r.p+"img/crypt.dc888e5d.png"}});
//# sourceMappingURL=app.8427eb41.js.map