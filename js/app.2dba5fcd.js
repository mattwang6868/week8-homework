(function(t){function n(n){for(var a,r,i=n[0],u=n[1],s=n[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),e()}function e(){for(var t,n=0;n<c.length;n++){for(var e=c[n],a=!0,r=1;r<e.length;r++){var u=e[r];0!==o[u]&&(a=!1)}a&&(c.splice(n--,1),t=i(i.s=e[0]))}return t}var a={},o={app:0},c=[];function r(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b2197":"c9bfb6e1","chunk-2d0ba0a0":"bd78d0f4","chunk-2d0ba33b":"b8f2aa8c","chunk-2d0ce791":"31fe2332","chunk-2d0de69c":"068f8cad","chunk-2d0e5004":"d2e14656","chunk-2d0efc41":"c89d2e70","chunk-2d2086b7":"0a2bc134","chunk-2d2163a5":"d20f7c7c","chunk-2d216ec8":"74fdad19","chunk-2d225006":"36f9d81a","chunk-2d2263a4":"63bdec4c","chunk-2d238482":"c3154d4a","chunk-3b95f66b":"201332f5","chunk-3d3390cb":"0c73ac14","chunk-7e6de1df":"e3f29c88","chunk-7e6f80b1":"4d85bf72","chunk-7e82cede":"a2c477d8","chunk-7e840659":"04d2a484","chunk-a039b3b2":"d41ddca6","chunk-b1b52242":"c04fd158"}[t]+".js"}function i(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var n=[],e=o[t];if(0!==e)if(e)n.push(e[2]);else{var a=new Promise((function(n,a){e=o[t]=[n,a]}));n.push(e[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=r(t);var s=new Error;c=function(n){u.onerror=u.onload=null,clearTimeout(d);var e=o[t];if(0!==e){if(e){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",s.name="ChunkLoadError",s.type=a,s.request=c,e[1](s)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(n)},i.m=t,i.c=a,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)i.d(e,a,function(n){return t[n]}.bind(null,a));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var l=s;c.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"3fac":function(t,n,e){"use strict";var a=e("9d1b"),o=e.n(a);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("4de4"),e("4160"),e("b64b"),e("159b"),e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),o=e("2f62"),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Toast"),e("router-view")],1)},r=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{position:"fixed",top:"20px",right:"20px","min-width":"300px","z-index":"11000"}},t._l(t.messages,(function(n,a){return e("div",{key:a,staticClass:"toast fade show",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true","data-autohide":"false",id:"toast-"+a}},[e("div",{staticClass:"toast-header"},[e("div",{staticClass:"inline-block rounded mr-2",class:"bg-"+n.status,staticStyle:{width:"20px",height:"20px"}}),e("strong",{staticClass:"mr-auto"},[t._v("六角實戰班")]),e("small",[t._v("現在")]),e("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"},on:{click:function(n){return t.closeToast("toast-"+a)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"toast-body"},[t._v(" "+t._s(n.message)+" ")])])})),0)},u=[],s=(e("a434"),e("1157")),d=e.n(s),l=d.a,f={name:"Toasts",data:function(){return{messages:[]}},methods:{updateMessage:function(t,n){var e=Math.floor(new Date/1e3);this.messages.push({message:t,status:n,timestamp:e}),this.removeMessageWithTiming(e)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var n=this;setTimeout((function(){n.messages.forEach((function(e,a){e.timestamp===t&&n.messages.splice(a,1)}))}),5e3)},closeToast:function(t){l("#".concat(t)).toast("hide")}},created:function(){var t=this;t.$bus.$on("message:push",(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(n,e)}))},beforeDestroy:function(){var t=this;t.$bus.$off("message:push")}},h=f,p=(e("3fac"),e("2877")),m=Object(p["a"])(h,i,u,!1,null,null,null),b=m.exports,v={components:{Toast:b},data:function(){return{}}},g=v,k=(e("5c0b"),Object(p["a"])(g,c,r,!1,null,null,null)),T=k.exports,O=(e("d3b7"),e("8c4f"));a["a"].use(O["a"]);var y=[{path:"*",redirect:"/"},{path:"/",component:function(){return e.e("chunk-b1b52242").then(e.bind(null,"2277"))},children:[{path:"",name:"HomePage",component:function(){return e.e("chunk-2d238482").then(e.bind(null,"ff5a"))}},{path:"products",name:"Products",component:function(){return e.e("chunk-3d3390cb").then(e.bind(null,"81b1"))}},{path:"cart",name:"Cart",component:function(){return e.e("chunk-2d0b2197").then(e.bind(null,"2355"))}},{path:"detail/:id",name:"Detail",component:function(){return e.e("chunk-3b95f66b").then(e.bind(null,"fa92"))}},{path:"orders",name:"Orders",component:function(){return e.e("chunk-2d0ba33b").then(e.bind(null,"35cf"))}},{path:"payorder/:id",name:"PayOrder",component:function(){return e.e("chunk-2d0ba0a0").then(e.bind(null,"3607"))}},{path:"checkoutsuccess/:id",name:"CheckOutSuccess",component:function(){return e.e("chunk-2d2163a5").then(e.bind(null,"c222"))}},{path:"recording",name:"Recording",component:function(){return e.e("chunk-2d2263a4").then(e.bind(null,"e883"))}},{path:"lesson",name:"Lesson",component:function(){return e.e("chunk-2d0e5004").then(e.bind(null,"932f"))}},{path:"favorite",name:"Favorite",component:function(){return e.e("chunk-2d0de69c").then(e.bind(null,"8619"))}}]},{path:"/login",name:"Login",component:function(){return e.e("chunk-2d2086b7").then(e.bind(null,"a55b"))}},{path:"/admin",name:"Admin",component:function(){return e.e("chunk-2d225006").then(e.bind(null,"e313"))},children:[{path:"products",name:"後台產品列表",component:function(){return e.e("chunk-7e6de1df").then(e.bind(null,"61bc"))}},{path:"coupons",name:"優惠卷列表",component:function(){return e.e("chunk-7e6f80b1").then(e.bind(null,"8c58"))}},{path:"orders",name:"訂單列表",component:function(){return e.e("chunk-7e840659").then(e.bind(null,"efd9"))}},{path:"order/:id",name:"訂單詳情",component:function(){return e.e("chunk-2d0ce791").then(e.bind(null,"6034"))}},{path:"customer_orders",name:"模擬下單系統",component:function(){return e.e("chunk-7e82cede").then(e.bind(null,"d2e2"))}},{path:"customer_checkout",name:"用戶訂單列表",component:function(){return e.e("chunk-2d0efc41").then(e.bind(null,"9a03"))}},{path:"customer_payorder/:id",name:"用戶訂單結帳",component:function(){return e.e("chunk-2d216ec8").then(e.bind(null,"c511"))}},{path:"storages",name:"圖片列表",component:function(){return e.e("chunk-a039b3b2").then(e.bind(null,"3f2d"))}}]}],L=new O["a"]({routes:y}),_=L,w=(e("4989"),e("bc3a")),A=e.n(w),E=e("a7fe"),C=e.n(E),S=e("9062"),j=e.n(S),x=(e("e40d"),e("7bb1")),I=e("4c93"),R=e("60d4"),D=(e("a15b"),e("ac1f"),e("25f0"),e("5319"),e("1276"),function(t){var n=t.toString().split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"$"+n.join(".")});e("99af"),e("c975");a["a"].use(o["a"]);var P=new o["a"].Store({strict:!0,state:{isLoading:!1,cart:{},cartTotal:0,cartlength:"0",favorite:JSON.parse(localStorage.getItem("listData"))||[],favoriteList:[],favoritelength:"0"},actions:{updateLoading:function(t,n){t.commit("LOADING",n)},getCart:function(t){t.commit("LOADING",!0),t.commit("CARTTOTAL",0);var n="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/shopping");A.a.get(n).then((function(n){t.commit("CART",n.data.data),t.commit("CART_TOTAL",n.data.data),t.commit("CART_LENGTH",n.data.data.length),t.commit("LOADING",!1)}))},addToFavorite:function(t,n){t.commit("FAVORITE",n)},getFavoriteList:function(t,n){t.commit("FAVORITE_LIST",n)},deleteFavorite:function(t,n){t.commit("DELETE_FAVORITE",n)}},mutations:{LOADING:function(t,n){t.isLoading=n},CARTTOTAL:function(t,n){t.cartTotal=n},CART:function(t,n){t.cart=n},CART_LENGTH:function(t,n){t.cartlength=n},CART_TOTAL:function(t,n){t.cartTotal=0,n.forEach((function(n){t.cartTotal+=n.product.price*n.quantity}))},FAVORITE:function(t,n){t.favorite.push(n),localStorage.setItem("listData",JSON.stringify(t.favorite)),t.favoritelength=t.favorite.length},FAVORITE_LIST:function(t,n){t.favoriteList=n.filter((function(n){return t.favorite.indexOf(n.id)>-1}))},DELETE_FAVORITE:function(t,n){console.log(n);var e=t.favorite.indexOf(n);-1!==e&&t.favorite.splice(e,1),localStorage.setItem("listData",JSON.stringify(t.favorite)),t.favoritelength=JSON.parse(localStorage.getItem("listData")).length}},getters:{cart:function(t){return t.cart},cartlength:function(t){return t.cartlength},favorite:function(t){return t.favorite},favoriteList:function(t){return t.favoriteList},isLoading:function(t){return t.isLoading}}});a["a"].prototype.$bus=new a["a"],a["a"].config.productionTip=!1,window.$=d.a,a["a"].use(o["a"]),a["a"].use(C.a,A.a),a["a"].component("Loading",j.a),a["a"].component("ValidationProvider",x["b"]),a["a"].component("ValidationObserver",x["a"]),a["a"].filter("money",D),Object.keys(I).forEach((function(t){Object(x["d"])(t,I[t])})),Object(x["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),Object(x["e"])("tw",R),new a["a"]({router:_,store:P,render:function(t){return t(T)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var a=e("9c0c"),o=e.n(a);o.a},"9c0c":function(t,n,e){},"9d1b":function(t,n,e){}});
//# sourceMappingURL=app.2dba5fcd.js.map