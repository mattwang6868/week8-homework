(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0efc41"],{"9a03":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("h2",[t._v("用戶訂單列表")]),a("div",{staticClass:"mt-5 row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("table",{staticClass:"table"},[t._m(0),t.orders.length?a("tbody",t._l(t.orders,(function(s,i){return a("tr",{key:i},[a("td",{staticClass:"align-middle"},[t._v(" "+t._s(s.created.datetime)+" ")]),a("td",{staticClass:"align-middle"},[t._v(" "+t._s(s.payment)+" ")]),a("td",t._l(s.products,(function(s,i){return a("ul",{key:i,staticClass:"list-unstyled"},[a("li",[t._v(" "+t._s(s.product.title)+" ")])])})),0),a("td",t._l(s.products,(function(s,i){return a("ul",{key:i,staticClass:"list-unstyled"},[a("li",[t._v(t._s(s.quantity)+t._s(s.product.unit))])])})),0),a("td",{staticClass:"align-middle"},[s.coupon?a("strong",[t._v("是")]):a("span",[t._v("否")])]),a("td",{staticClass:"align-middle"},[t._v(" "+t._s(t._f("money")(Math.round(s.amount)))+" ")]),a("td",{staticClass:"align-middle"},[s.paid?a("span",[t._v("已付款")]):a("strong",[t._v("未付款")])]),a("td",{staticClass:"align-middle"},[a("div",{staticClass:"btn-group btn-group-sm"},[a("button",{staticClass:"btn btn-outline-primary",attrs:{disabled:s.paid},on:{click:function(a){return a.preventDefault(),t.goPage(s)}}},[t._v("去付款")])])])])})),0):t._e()]),a("hr",{staticClass:"w-100 mt-5"})])])],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{width:"200px"}},[t._v("購買時間")]),a("th",{attrs:{width:"200px"}},[t._v("購買方式")]),a("th",{attrs:{width:"250px"}},[t._v("商品列表")]),a("th",{attrs:{width:"180px"}},[t._v("數量")]),a("th",{attrs:{width:"180px"}},[t._v("使用優惠卷")]),a("th",{attrs:{width:"120px"}},[t._v("應付金額")]),a("th",{attrs:{width:"200px"}},[t._v("付款狀態")]),a("th",{attrs:{width:"200px"}},[t._v("去付款")])])])}],e=(a("99af"),{data:function(){return{isLoading:!1,orders:[],orderId:""}},methods:{getOrders:function(){var t=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/orders");this.$http.get(s).then((function(s){t.orders=s.data.data,t.isLoading=!1})).catch((function(){t.isLoading=!1,t.$bus.$emit("message:push","無法取得訂單列表","danger")}))},goPage:function(t){this.$router.push("/admin/customer_payorder/".concat(t.id))}},created:function(){this.getOrders()}}),d=e,r=a("2877"),c=Object(r["a"])(d,i,n,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0efc41.299ef067.js.map