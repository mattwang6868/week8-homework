(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31e9f74f"],{1799:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link  text-dark",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[t._v("Previous")])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link text-dark",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[t._v("Next")])])],2)])])},n=[],r={name:"Pagination",props:["pages"],data:function(){return{}},methods:{updatePage:function(t){this.$emit("update",t)}}},o=r,s=a("2877"),c=Object(s["a"])(o,i,n,!1,null,null,null);e["a"]=c.exports},"3ca3":function(t,e,a){"use strict";var i=a("6547").charAt,n=a("69f3"),r=a("7dd0"),o="String Iterator",s=n.set,c=n.getterFor(o);r(String,"String",(function(t){s(this,{type:o,string:String(t),index:0})}),(function(){var t,e=c(this),a=e.string,n=e.index;return n>=a.length?{value:void 0,done:!0}:(t=i(a,n),e.index+=t.length,{value:t,done:!1})}))},6062:function(t,e,a){"use strict";var i=a("6d61"),n=a("6566");t.exports=i("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n)},6547:function(t,e,a){var i=a("a691"),n=a("1d80"),r=function(t){return function(e,a){var r,o,s=String(n(e)),c=i(a),u=s.length;return c<0||c>=u?t?"":void 0:(r=s.charCodeAt(c),r<55296||r>56319||c+1===u||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):r:t?s.slice(c,c+2):o-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},6566:function(t,e,a){"use strict";var i=a("9bf2").f,n=a("7c73"),r=a("e2cc"),o=a("0366"),s=a("19aa"),c=a("2266"),u=a("7dd0"),d=a("2626"),l=a("83ab"),f=a("f183").fastKey,p=a("69f3"),g=p.set,v=p.getterFor;t.exports={getConstructor:function(t,e,a,u){var d=t((function(t,i){s(t,d,e),g(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=i&&c(i,t[u],t,a)})),p=v(e),h=function(t,e,a){var i,n,r=p(t),o=b(t,e);return o?o.value=a:(r.last=o={index:n=f(e,!0),key:e,value:a,previous:i=r.last,next:void 0,removed:!1},r.first||(r.first=o),i&&(i.next=o),l?r.size++:t.size++,"F"!==n&&(r.index[n]=o)),t},b=function(t,e){var a,i=p(t),n=f(e);if("F"!==n)return i.index[n];for(a=i.first;a;a=a.next)if(a.key==e)return a};return r(d.prototype,{clear:function(){var t=this,e=p(t),a=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete a[i.index],i=i.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,a=p(e),i=b(e,t);if(i){var n=i.next,r=i.previous;delete a.index[i.index],i.removed=!0,r&&(r.next=n),n&&(n.previous=r),a.first==i&&(a.first=n),a.last==i&&(a.last=r),l?a.size--:e.size--}return!!i},forEach:function(t){var e,a=p(this),i=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:a.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),r(d.prototype,a?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),l&&i(d.prototype,"size",{get:function(){return p(this).size}}),d},setStrong:function(t,e,a){var i=e+" Iterator",n=v(e),r=v(i);u(t,e,(function(t,e){g(this,{type:i,target:t,state:n(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),d(e)}}},"6d61":function(t,e,a){"use strict";var i=a("23e7"),n=a("da84"),r=a("94ca"),o=a("6eeb"),s=a("f183"),c=a("2266"),u=a("19aa"),d=a("861d"),l=a("d039"),f=a("1c7e"),p=a("d44e"),g=a("7156");t.exports=function(t,e,a){var v=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),b=v?"set":"add",x=n[t],m=x&&x.prototype,y=x,C={},_=function(t){var e=m[t];o(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!d(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!d(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!d(t))&&e.call(this,0===t?0:t)}:function(t,a){return e.call(this,0===t?0:t,a),this})};if(r(t,"function"!=typeof x||!(h||m.forEach&&!l((function(){(new x).entries().next()})))))y=a.getConstructor(e,t,v,b),s.REQUIRED=!0;else if(r(t,!0)){var k=new y,w=k[b](h?{}:-0,1)!=k,E=l((function(){k.has(1)})),P=f((function(t){new x(t)})),S=!h&&l((function(){var t=new x,e=5;while(e--)t[b](e,e);return!t.has(-0)}));P||(y=e((function(e,a){u(e,y,t);var i=g(new x,e,y);return void 0!=a&&c(a,i[b],i,v),i})),y.prototype=m,m.constructor=y),(E||S)&&(_("delete"),_("has"),v&&_("get")),(S||w)&&_(b),h&&m.clear&&delete m.clear}return C[t]=y,i({global:!0,forced:y!=x},C),p(y,t),h||a.setStrong(y,t,v),y}},7156:function(t,e,a){var i=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var r,o;return n&&"function"==typeof(r=e.constructor)&&r!==a&&i(o=r.prototype)&&o!==a.prototype&&n(t,o),t}},"81b1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),a("div",{staticClass:"container mt-md-5 mt-3 mb-7"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3",attrs:{id:"accordionExample"}},t._l(t.categories,(function(e,i){return a("div",{key:i.id,staticClass:"card border-0"},[a("div",{staticClass:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0",attrs:{id:"headingOne","data-toggle":"collapse","data-target":"#collapseOne"}},[a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("button",{staticClass:"btn rounded-0  w-100 py-3",attrs:{type:"button"},on:{click:function(a){return t.chooseCategory(e)}}},[a("h4",{staticClass:"mb-0 font-weight-bold"},[t._v(" "+t._s(e)+" ")])])])])])})),0)]),a("div",{staticClass:"col-md-8"},[t.products?a("div",{staticClass:"row"},t._l(t.products,(function(e,i){return a("div",{key:i.id,staticClass:"col-md-6"},[a("div",{staticClass:"card border-0 mb-4 position-relative position-relative"},[a("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.imageUrl+")"}}),t._m(1,!0),a("div",{staticClass:"card-body p-0"},[a("h4",{staticClass:"mb-0 mt-3"},[a("a",{staticClass:" text-dark",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goPage(e)}}},[t._v(t._s(e.title))])]),a("p",{staticClass:"card-text mb-0"},[t._v(" 售價 "+t._s(e.price)+" "),a("span",{staticClass:"text-muted "},[t._v(" 原價 "),a("del",[t._v(t._s(e.origin_price))])])]),a("p",{staticClass:"text-muted mt-3"})])])])})),0):t._e(),a("Pagination",{attrs:{pages:t.pagination},on:{update:t.getProducts}})],1)])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"position-relative d-flex align-items-center justify-content-center",staticStyle:{"min-height":"400px"}},[a("div",{staticClass:"position-absolute",staticStyle:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)","background-position":"center center",opacity:"0.1"}}),a("h2",{staticClass:"font-weight-bold"},[t._v("開始彈吉他吧!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"text-dark",attrs:{href:"#"}},[a("i",{staticClass:"far fa-heart position-absolute",staticStyle:{right:"16px",top:"16px"}})])}],r=(a("99af"),a("4160"),a("d3b7"),a("6062"),a("3ca3"),a("159b"),a("ddb0"),a("1799")),o={name:"Products",components:{Pagination:r["a"]},data:function(){return{isLoading:!1,products:[],pagination:{},categories:[],totalPages:[]}},methods:{getProducts:function(t){var e=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/products?page=").concat(t);this.$http.get(a).then((function(t){e.products=t.data.data,e.pagination=t.data.meta.pagination,e.isLoading=!1}))},getCategory:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/products"),a=[];this.$http.get(e).then((function(e){for(var i=0;i<e.data.meta.pagination.total_pages;i++)t.totalPages[i]=i+1;t.totalPages.forEach((function(e){t.$http.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/products?page=").concat(e)).then((function(e){e.data.data.forEach((function(t){a.push(t.category)}));var i=new Set,n=new Set;a.forEach((function(t){i.has(t)?n.add(t):i.add(t)})),t.categories=i,t.isLoading=!1}))}))}))},chooseCategory:function(t){var e=this;this.isLoading=!0,this.products=[],this.totalPages.forEach((function(a){e.$http.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/products?page=").concat(a)).then((function(a){a.data.data.forEach((function(a){a.category===t&&e.products.push(a)})),e.pagination.total_pages=Math.ceil(e.products.length/25)})),e.isLoading=!1}))},goPage:function(t){this.$router.push("/detail/".concat(t.id))}},created:function(){this.getProducts(),this.getCategory()}},s=o,c=a("2877"),u=Object(c["a"])(s,i,n,!1,null,null,null);e["default"]=u.exports},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("d039"),r=a("e8b5"),o=a("861d"),s=a("7b0b"),c=a("50c4"),u=a("8418"),d=a("65f0"),l=a("1dde"),f=a("b622"),p=a("2d00"),g=f("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",b=p>=51||!n((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),x=l("concat"),m=function(t){if(!o(t))return!1;var e=t[g];return void 0!==e?!!e:r(t)},y=!b||!x;i({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,i,n,r,o=s(this),l=d(o,0),f=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?o:arguments[e],m(r)){if(n=c(r.length),f+n>v)throw TypeError(h);for(a=0;a<n;a++,f++)a in r&&u(l,f,r[a])}else{if(f>=v)throw TypeError(h);u(l,f++,r)}return l.length=f,l}})},bb2f:function(t,e,a){var i=a("d039");t.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},ddb0:function(t,e,a){var i=a("da84"),n=a("fdbc"),r=a("e260"),o=a("9112"),s=a("b622"),c=s("iterator"),u=s("toStringTag"),d=r.values;for(var l in n){var f=i[l],p=f&&f.prototype;if(p){if(p[c]!==d)try{o(p,c,d)}catch(v){p[c]=d}if(p[u]||o(p,u,l),n[l])for(var g in r)if(p[g]!==r[g])try{o(p,g,r[g])}catch(v){p[g]=r[g]}}}},f183:function(t,e,a){var i=a("d012"),n=a("861d"),r=a("5135"),o=a("9bf2").f,s=a("90e3"),c=a("bb2f"),u=s("meta"),d=0,l=Object.isExtensible||function(){return!0},f=function(t){o(t,u,{value:{objectID:"O"+ ++d,weakData:{}}})},p=function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,u)){if(!l(t))return"F";if(!e)return"E";f(t)}return t[u].objectID},g=function(t,e){if(!r(t,u)){if(!l(t))return!0;if(!e)return!1;f(t)}return t[u].weakData},v=function(t){return c&&h.REQUIRED&&l(t)&&!r(t,u)&&f(t),t},h=t.exports={REQUIRED:!1,fastKey:p,getWeakData:g,onFreeze:v};i[u]=!0}}]);
//# sourceMappingURL=chunk-31e9f74f.7d01f1e2.js.map