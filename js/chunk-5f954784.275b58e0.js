(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f954784"],{3607:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),r("div",{staticClass:"m-5 row  justify-content-center"},[r("form",{staticClass:"col-md-6 ",on:{submit:function(a){return a.preventDefault(),t.payOrder(a)}}},[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.order.products,(function(a,e){return r("tr",{key:e},[r("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" ")]),r("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.quantity)+" / "+t._s(a.product.unit)+" ")]),r("td",{staticClass:"align-middle"},[t._v(" NT$"+t._s(a.product.price)+" ")])])})),0),r("tfoot",[r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v(" 總計 ")]),r("td",{staticClass:"text-right"},[t._v(" NT$ "+t._s(t.order.amount)+" ")])])])]),r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{attrs:{width:"100"}},[t._v(" Email ")]),r("td",[t._v(t._s(t.order.user.email))])]),r("tr",[r("th",[t._v("姓名")]),r("td",[t._v(t._s(t.order.user.name))])]),r("tr",[r("th",[t._v("收件人電話")]),r("td",[t._v(t._s(t.order.user.tel))])]),r("tr",[r("th",[t._v("收件人地址")]),r("td",[t._v(t._s(t.order.user.address))])]),r("tr",[r("th",[t._v("付款狀態")]),r("td",[t.order.paid?r("span",{staticClass:"text-success"},[t._v("付款完成")]):r("span",[t._v("尚未付款")])])])])]),!1===t.order.paid?r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger"},[t._v(" 確認付款去 ")])]):t._e()])])],1)},s=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("thead",[r("th",{attrs:{width:"200px"}},[t._v("品名")]),r("th",{attrs:{width:"200px"}},[t._v("數量")]),r("th",{attrs:{width:"200px"}},[t._v("單價")])])}],i=(r("99af"),{data:function(){return{isLoading:!1,order:{user:{}},orderId:""}},methods:{getDetail:function(t){var a=this;this.isLoading=!0;var r="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/orders/").concat(t);this.$http.get(r).then((function(t){a.order=t.data.data,a.isLoading=!1}))},payOrder:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/orders/").concat(this.orderId,"/paying");this.$http.post(a).then((function(a){a.data.data.paid&&(t.getDetail(t.orderId),t.$router.push("/checkoutsuccess/".concat(t.orderId)),t.isLoading=!1)}))}},created:function(){var t=this.$route.params.id;console.log(t),this.orderId=t,this.getDetail(t)}}),o=i,n=r("2877"),c=Object(n["a"])(o,e,s,!1,null,null,null);a["default"]=c.exports},"99af":function(t,a,r){"use strict";var e=r("23e7"),s=r("d039"),i=r("e8b5"),o=r("861d"),n=r("7b0b"),c=r("50c4"),d=r("8418"),u=r("65f0"),l=r("1dde"),h=r("b622"),p=r("2d00"),v=h("isConcatSpreadable"),f=9007199254740991,_="Maximum allowed index exceeded",g=p>=51||!s((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=l("concat"),m=function(t){if(!o(t))return!1;var a=t[v];return void 0!==a?!!a:i(t)},w=!g||!b;e({target:"Array",proto:!0,forced:w},{concat:function(t){var a,r,e,s,i,o=n(this),l=u(o,0),h=0;for(a=-1,e=arguments.length;a<e;a++)if(i=-1===a?o:arguments[a],m(i)){if(s=c(i.length),h+s>f)throw TypeError(_);for(r=0;r<s;r++,h++)r in i&&d(l,h,i[r])}else{if(h>=f)throw TypeError(_);d(l,h++,i)}return l.length=h,l}})}}]);
//# sourceMappingURL=chunk-5f954784.275b58e0.js.map