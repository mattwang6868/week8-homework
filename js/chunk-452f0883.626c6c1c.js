(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-452f0883"],{"99af":function(t,a,e){"use strict";var i=e("23e7"),s=e("d039"),r=e("e8b5"),n=e("861d"),d=e("7b0b"),o=e("50c4"),c=e("8418"),l=e("65f0"),u=e("1dde"),h=e("b622"),p=e("2d00"),v=h("isConcatSpreadable"),f=9007199254740991,_="Maximum allowed index exceeded",g=p>=51||!s((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),m=u("concat"),w=function(t){if(!n(t))return!1;var a=t[v];return void 0!==a?!!a:r(t)},b=!g||!m;i({target:"Array",proto:!0,forced:b},{concat:function(t){var a,e,i,s,r,n=d(this),u=l(n,0),h=0;for(a=-1,i=arguments.length;a<i;a++)if(r=-1===a?n:arguments[a],w(r)){if(s=o(r.length),h+s>f)throw TypeError(_);for(e=0;e<s;e++,h++)e in r&&c(u,h,r[e])}else{if(h>=f)throw TypeError(_);c(u,h++,r)}return u.length=h,u}})},"9a03":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("h2",[t._v("用戶訂單列表")]),e("div",{staticClass:"mt-5 row justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("table",{staticClass:"table"},[t._m(0),t.orders.length?e("tbody",t._l(t.orders,(function(a,i){return e("tr",{key:i},[e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.created.datetime)+" ")]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.payment)+" ")]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,i){return e("li",{key:i},[t._v(" "+t._s(a.product.title)+" 數量："+t._s(a.quantity)+t._s(a.product.unit)+" ")])})),0)]),e("td",{staticClass:"align-middle"},[a.coupon?e("strong",[t._v("是")]):e("span",[t._v("否")])]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.amount)+" ")]),e("td",{staticClass:"align-middle"},[a.paid?e("span",[t._v("已付款")]):e("strong",[t._v("未付款")])]),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"btn-group btn-group-sm"},[e("button",{staticClass:"btn btn-outline-primary",attrs:{disabled:a.paid},on:{click:function(e){return e.preventDefault(),t.goPage(a)}}},[t._v("去付款")])])])])})),0):t._e()]),e("hr",{staticClass:"w-100 mt-5"})])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"200px"}},[t._v("購買時間")]),e("th",{attrs:{width:"200px"}},[t._v("購買方式")]),e("th",{attrs:{width:"250px"}},[t._v("商品列表")]),e("th",{attrs:{width:"180px"}},[t._v("使用優惠卷")]),e("th",{attrs:{width:"120px"}},[t._v("應付金額")]),e("th",{attrs:{width:"200px"}},[t._v("付款狀態")]),e("th",{attrs:{width:"200px"}},[t._v("去付款")])])])}],r=(e("99af"),{data:function(){return{isLoading:!1,order:{user:{}},orders:[],orderId:""}},methods:{getOrders:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/orders");this.$http.get(a).then((function(a){t.orders=a.data.data,t.isLoading=!1}))},goPage:function(t){this.$router.push("/admin/customer_payorder/".concat(t.id))}},created:function(){this.getOrders()}}),n=r,d=e("2877"),o=Object(d["a"])(n,i,s,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-452f0883.626c6c1c.js.map