(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b95f66b"],{"057f":function(t,e,r){var a=r("fc6a"),n=r("241c").f,s={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==s.call(t)?o(t):n(a(t))}},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var a=r("428f"),n=r("5135"),s=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});n(e,t)||i(e,t,{value:s.f(t)})}},a4d3:function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),s=r("d066"),i=r("c430"),o=r("83ab"),c=r("4930"),u=r("fdbf"),l=r("d039"),d=r("5135"),f=r("e8b5"),p=r("861d"),b=r("825a"),m=r("7b0b"),h=r("fc6a"),g=r("c04e"),v=r("5c6c"),y=r("7c73"),C=r("df75"),w=r("241c"),O=r("057f"),_=r("7418"),j=r("06cf"),x=r("9bf2"),k=r("d1e7"),P=r("9112"),S=r("6eeb"),$=r("5692"),E=r("f772"),N=r("d012"),U=r("90e3"),D=r("b622"),I=r("e538"),L=r("746f"),q=r("d44e"),J=r("69f3"),T=r("b727").forEach,A=E("hidden"),F="Symbol",M="prototype",Q=D("toPrimitive"),W=J.set,z=J.getterFor(F),B=Object[M],G=n.Symbol,H=s("JSON","stringify"),K=j.f,R=x.f,V=O.f,X=k.f,Y=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),rt=$("wks"),at=n.QObject,nt=!at||!at[M]||!at[M].findChild,st=o&&l((function(){return 7!=y(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,r){var a=K(B,e);a&&delete B[e],R(t,e,r),a&&t!==B&&R(B,e,a)}:R,it=function(t,e){var r=Y[t]=y(G[M]);return W(r,{type:F,tag:t,description:e}),o||(r.description=e),r},ot=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ct=function(t,e,r){t===B&&ct(Z,e,r),b(t);var a=g(e,!0);return b(r),d(Y,a)?(r.enumerable?(d(t,A)&&t[A][a]&&(t[A][a]=!1),r=y(r,{enumerable:v(0,!1)})):(d(t,A)||R(t,A,v(1,{})),t[A][a]=!0),st(t,a,r)):R(t,a,r)},ut=function(t,e){b(t);var r=h(e),a=C(r).concat(bt(r));return T(a,(function(e){o&&!dt.call(r,e)||ct(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},dt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===B&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,A)&&this[A][e])||r)},ft=function(t,e){var r=h(t),a=g(e,!0);if(r!==B||!d(Y,a)||d(Z,a)){var n=K(r,a);return!n||!d(Y,a)||d(r,A)&&r[A][a]||(n.enumerable=!0),n}},pt=function(t){var e=V(h(t)),r=[];return T(e,(function(t){d(Y,t)||d(N,t)||r.push(t)})),r},bt=function(t){var e=t===B,r=V(e?Z:h(t)),a=[];return T(r,(function(t){!d(Y,t)||e&&!d(B,t)||a.push(Y[t])})),a};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=U(t),r=function(t){this===B&&r.call(Z,t),d(this,A)&&d(this[A],e)&&(this[A][e]=!1),st(this,e,v(1,t))};return o&&nt&&st(B,e,{configurable:!0,set:r}),it(e,t)},S(G[M],"toString",(function(){return z(this).tag})),S(G,"withoutSetter",(function(t){return it(U(t),t)})),k.f=dt,x.f=ct,j.f=ft,w.f=O.f=pt,_.f=bt,I.f=function(t){return it(D(t),t)},o&&(R(G[M],"description",{configurable:!0,get:function(){return z(this).description}}),i||S(B,"propertyIsEnumerable",dt,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),T(C(rt),(function(t){L(t)})),a({target:F,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=G(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),a({target:"Object",stat:!0,forced:!c,sham:!o},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),a({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),a({target:"Object",stat:!0,forced:l((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(m(t))}}),H){var mt=!c||l((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));a({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var a,n=[t],s=1;while(arguments.length>s)n.push(arguments[s++]);if(a=e,(p(e)||void 0!==t)&&!ot(t))return f(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!ot(e))return e}),n[1]=e,H.apply(null,n)}})}G[M][Q]||P(G[M],Q,G[M].valueOf),q(G,F),N[A]=!0},dbb4:function(t,e,r){var a=r("23e7"),n=r("83ab"),s=r("56ef"),i=r("fc6a"),o=r("06cf"),c=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=i(t),n=o.f,u=s(a),l={},d=0;while(u.length>d)r=n(a,e=u[d++]),void 0!==r&&c(l,e,r);return l}})},e439:function(t,e,r){var a=r("23e7"),n=r("d039"),s=r("fc6a"),i=r("06cf").f,o=r("83ab"),c=n((function(){i(1)})),u=!o||c;a({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})},e538:function(t,e,r){var a=r("b622");e.f=a},fa92:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center mt-5"},[r("div",{staticClass:"col-md-7"},[r("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[r("div",{staticClass:"carousel-inner"},[r("div",{staticClass:"carousel-item active"},[r("img",{staticClass:"d-block m-auto",staticStyle:{height:"300px"},attrs:{src:t.imageUrl[0],alt:"..."}})]),r("div",{staticClass:"carousel-item"},[r("img",{staticClass:"d-block m-auto",staticStyle:{height:"300px"},attrs:{src:t.imageUrl[1],alt:"..."}})]),r("div",{staticClass:"carousel-item "},[r("img",{staticClass:"d-block m-auto ",staticStyle:{height:"300px"},attrs:{src:t.imageUrl[2],alt:"..."}})])]),t._m(0),t._m(1)])]),r("div",{staticClass:"col-md-5"},[r("h2",{staticClass:"font-weight-bold h1 mb-1"},[t._v(t._s(t.product.title))]),r("p",{staticClass:"mb-0 text-muted text-right"},[r("del",[t._v(t._s(t._f("money")(Math.floor(t.product.origin_price))))])]),r("p",{staticClass:"h4  text-right"},[t._v(t._s(t._f("money")(Math.floor(t.product.price))))]),r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"input-group my-3 mr-2 bg-light rounded col-md-6"},[r("div",{staticClass:"input-group-prepend"},[r("button",{staticClass:"btn btn-outline-dark border-0 py-2",attrs:{type:"button",id:"button-addon1",disabled:1===t.num},on:{click:function(e){return t.updateNum("minus")}}},[r("i",{staticClass:"fas fa-minus"})])]),r("input",{staticClass:"form-control border-0 text-center my-auto shadow-none bg-light",attrs:{type:"text",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1"},domProps:{value:t.num},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.quantityUpdate(e.target.value,t.item.product.id)}}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-outline-dark border-0 py-2",attrs:{type:"button",id:"button-addon2"},on:{click:function(e){return t.updateNum("plus")}}},[r("i",{staticClass:"fas fa-plus"})])])]),r("div",{staticClass:"col-md-6 d-flex "},[r("p",{staticClass:"h5 mb-0 text-left font-weight-bolder my-auto"},[t._v("小記")]),r("p",{staticClass:"h3 mb-0 text-left font-weight-bolder ml-auto"},[t._v(t._s(t._f("money")(t.product.price*t.num)))])])]),r("div",[r("button",{staticClass:"btn btn-dark btn-block py-2",attrs:{type:"button"},on:{click:function(e){return t.modalAddToCart(t.product.id)}}},[t.status.loadingItem==t.product.id?r("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v(" 加入購物車 ")])])])]),r("div",{staticClass:"row my-5"},[r("div",{staticClass:"col-md-4"},[r("p",[t._v(t._s(t.product.description))])]),r("div",{staticClass:"col-md-4"},[r("p",[t._v(t._s(t.product.content))])])]),r("h3",{staticClass:"font-weight-bold"},[t._v(t._s(t.product.title))]),r("div",{staticClass:"swiper-container mt-4 mb-5"},[r("div",{staticClass:"swiper-wrapper"},[r("div",{staticClass:"swiper-slide"},t._l(t.imageUrl,(function(t){return r("div",{key:t.id,staticClass:"card border-0 mb-4 position-relative position-relative"},[r("img",{staticClass:"card-img-top rounded-0 w-50 d-block m-auto",attrs:{src:t,alt:"..."}})])})),0)])])])],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[r("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[r("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"sr-only"},[t._v("Next")])])}],s=(r("99af"),r("5530")),i=r("2f62"),o={data:function(){return{product:{},imageUrl:{},num:1,status:{loadingItem:""}}},methods:{getCart:function(){this.$store.dispatch("getCart")},updateNum:function(t){switch(t){case"plus":this.num=this.num+1;break;case"minus":this.num=this.num-1;break}},modalAddToCart:function(t){var e=this;this.status.loadingItem=t;var r={product:t,quantity:this.num},a="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/shopping");this.$http.post(a,r).then((function(t){e.status.loadingItem="",e.getCart(),e.$bus.$emit("message:push","已加入購物車","success")})).catch((function(t){e.status.loadingItem="",e.$bus.$emit("message:push","加入失敗，".concat(t.response.data.errors),"danger")}))}},computed:Object(s["a"])({},Object(i["b"])(["cartlength","isLoading"])),created:function(){var t=this;this.$store.dispatch("updateLoading",!0);var e=this.$route.params.id;this.$http.get(" ".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/product/").concat(e)).then((function(e){t.product=e.data.data,t.imageUrl=e.data.data.imageUrl,t.$store.dispatch("updateLoading",!1)})).catch((function(e){t.$store.dispatch("updateLoading",!1),404===e.response.request.status?t.$bus.$emit("message:push","".concat(e.response.request.status," 找不到頁面"),"danger"):t.$bus.$emit("message:push","".concat(e.response.request.status).concat(e.response.data.message),"danger")}))}},c=o,u=r("2877"),l=Object(u["a"])(c,a,n,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-3b95f66b.dba16570.js.map