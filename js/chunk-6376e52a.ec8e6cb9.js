(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6376e52a"],{1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link  text-dark",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[t._v("Previous")])]),t._l(t.pages.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pages.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link text-dark",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[t._v("Next")])])],2)])])},i=[],n={name:"Pagination",props:["pages"],data:function(){return{}},methods:{updatePage:function(t){this.$emit("update",t)}}},r=n,o=e("2877"),d=Object(o["a"])(r,s,i,!1,null,null,null);a["a"]=d.exports},"99af":function(t,a,e){"use strict";var s=e("23e7"),i=e("d039"),n=e("e8b5"),r=e("861d"),o=e("7b0b"),d=e("50c4"),l=e("8418"),c=e("65f0"),u=e("1dde"),p=e("b622"),b=e("2d00"),g=p("isConcatSpreadable"),f=9007199254740991,m="Maximum allowed index exceeded",v=b>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),h=u("concat"),_=function(t){if(!r(t))return!1;var a=t[g];return void 0!==a?!!a:n(t)},C=!v||!h;s({target:"Array",proto:!0,forced:C},{concat:function(t){var a,e,s,i,n,r=o(this),u=c(r,0),p=0;for(a=-1,s=arguments.length;a<s;a++)if(n=-1===a?r:arguments[a],_(n)){if(i=d(n.length),p+i>f)throw TypeError(m);for(e=0;e<i;e++,p++)e in n&&l(u,p,n[e])}else{if(p>=f)throw TypeError(m);l(u,p++,n)}return u.length=p,u}})},efd9:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"mt-5 row justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("table",{staticClass:"table"},[t._m(0),t.orders.length?e("tbody",t._l(t.orders,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.created.datetime)+" ")]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.payment)+" ")]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,s){return e("li",{key:s},[t._v(" "+t._s(a.product.title)+" 數量："+t._s(a.quantity)+t._s(a.product.unit)+" ")])})),0)]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.amount)+" ")]),e("td",{staticClass:"align-middle"},[a.paid?e("span",[t._v("已付款")]):e("strong",[t._v("未付款")])]),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"btn-group btn-group-sm"},[e("button",{staticClass:"btn btn-outline-primary",attrs:{disabled:a.paid},on:{click:function(e){return e.preventDefault(),t.getDetailed(a.id)}}},[t._v("選擇")])])])])})),0):t._e()]),e("Pagination",{attrs:{pages:t.pagination},on:{update:t.getOrders}}),e("div",{staticClass:"modal fade",attrs:{id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("OrderModal",{attrs:{order:t.order,status:t.status}})],1)],1)])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"200px"}},[t._v("購買時間")]),e("th",{attrs:{width:"200px"}},[t._v("購買方式")]),e("th",{attrs:{width:"250px"}},[t._v("商品列表")]),e("th",{attrs:{width:"120px"}},[t._v("應付金額")]),e("th",{attrs:{width:"200px"}},[t._v("付款狀態")]),e("th",{attrs:{width:"200px"}},[t._v("編輯")])])])}],n=(e("99af"),e("1799")),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"modal-dialog modal-xl"},[e("div",{staticClass:"modal-content "},[t._m(0),e("div",{staticClass:"m-2 text-left"},[t._v("訂單編號"+t._s(t.order.created.timestamp))]),e("span",{staticClass:"border-bottom"}),e("table",{staticClass:"table"},[t._m(1),e("tbody",t._l(t.order.products,(function(a){return e("tr",{key:a.id,staticClass:"border-bottom border-top"},[e("td",{staticClass:"border-0 px-0 font-weight-normal py-4",attrs:{scope:"row"}},[e("img",{staticStyle:{width:"90px",height:"90px","object-fit":"cover"},attrs:{src:a.product.imageUrl[0],alt:""}}),e("p",{staticClass:"mb-0 font-weight-bold ml-3 d-inline-block"},[t._v(t._s(a.product.title))])]),e("td",{staticClass:"border-0 align-middle",staticStyle:{"max-width":"160px"}},[e("div",{staticClass:"input-group "},[e("div",{staticClass:"input-group-prepend"},[e("button",{staticClass:"btn btn-outline-dark border-0 py-2",attrs:{type:"button",id:"button-addon1",disabled:1===a.quantity},on:{click:function(e){return t.quantityUpdate(a.quantity-1)}}},[e("i",{staticClass:"fas fa-minus"})])]),e("input",{staticClass:"form-control border-0 text-center my-auto shadow-none",attrs:{type:"text",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1"},domProps:{value:a.quantity},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.quantityUpdate(e.target.value,a.id)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-dark border-0 py-2",attrs:{type:"button",id:"button-addon2"},on:{click:function(e){return t.quantityUpdate(a.quantity+1)}}},[e("i",{staticClass:"fas fa-plus"})])])])]),e("td",{staticClass:"border-0 align-middle"},[e("p",{staticClass:"mb-0 ml-auto"},[t._v(t._s(a.product.price))])]),e("td",{staticClass:"border-0 align-middle"},[e("p",{staticClass:"mb-0 ml-auto"},[t._v(t._s(a.product.price*a.quantity))])])])})),0)]),e("div",{staticClass:"p-4 mb-4"},[e("h4",{staticClass:"font-weight-bold mb-4 text-right"},[t._v("結 算")]),e("div",{staticClass:"d-flex justify-content-between mt-4"},[e("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("Total")]),e("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("NT$"+t._s(t.order.amount))])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(a){return t.update()}}},[t._v("更新訂單")]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("訂單詳情")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"border-0",attrs:{scope:"col"}},[t._v("品名")]),e("th",{staticClass:"border-0",attrs:{scope:"col"}},[t._v("數量")]),e("th",{staticClass:"border-0",attrs:{scope:"col"}},[t._v("單價")]),e("th",{staticClass:"border-0",attrs:{scope:"col"}},[t._v("小計")])])])}],d={props:["order","status"],data:function(){return{quantity:""}},methods:{quantityUpdate:function(t){console.log(t)},update:function(){}},created:function(){}},l=d,c=e("2877"),u=Object(c["a"])(l,r,o,!1,null,null,null),p=u.exports,b={components:{Pagination:n["a"],OrderModal:p},data:function(){return{isLoading:!1,pagination:{},orders:[],order:{created:{},products:[]},orderId:"",status:{loadingItem:""}}},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/orders?page=").concat(a);this.$http.get(e).then((function(a){t.orders=a.data.data,t.pagination=a.data.meta.pagination,t.isLoading=!1}))},getDetailed:function(t){this.$router.push("/admin/order/".concat(t))}},created:function(){this.getOrders()}},g=b,f=Object(c["a"])(g,s,i,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-6376e52a.ec8e6cb9.js.map