(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e82cede"],{1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link  text-dark",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[t._v("Previous")])]),t._l(t.pages.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pages.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link text-dark",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[t._v("Next")])])],2)])])},i=[],o={name:"Pagination",props:["pages"],data:function(){return{}},methods:{updatePage:function(t){this.$emit("update",t)}}},n=o,r=e("2877"),c=Object(r["a"])(n,s,i,!1,null,null,null);a["a"]=c.exports},d2e2:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"container"},[e("div",{staticClass:"row mt-4 d-flex"},t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"col-md-4 mb-4 "},[e("div",{staticClass:"card h-100"},[e("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),e("div",{staticClass:"card-body d-flex flex-column"},[e("div",{staticClass:"d-flex justify-content-between align-items-baseline mb-2"},[e("h5",{staticClass:"card-title m-0"},[t._v(t._s(a.title))]),e("span",{staticClass:"badge badge-pill badge-primary "},[t._v(t._s(a.category))])]),e("p",{staticClass:"card-text"},[t._v(t._s(a.content))]),e("div",{staticClass:"d-flex mt-auto flex-column"},[a.price?e("div",{staticClass:"d-flex align-items-baseline justify-content-between"},[e("del",{staticClass:"text-info"},[t._v("原價"+t._s(t._f("money")(a.origin_price)))]),e("div",{staticClass:"font-weight-bolder h5 text-danger"},[t._v("現在只要"+t._s(t._f("money")(a.price)))])]):e("div",[t._v(t._s(a.origin_price))])])]),e("div",{staticClass:"card-footer bg-light d-flex"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button",disabled:t.status.loadingItem===a.id},on:{click:function(e){return t.getDetail(a.id)}}},[t._v("查看更多")]),e("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button",disabled:t.status.loadingItem===a.id},on:{click:function(e){return t.addToCart(a.id)}}},[t._v("加到購物車")])])])])})),0),e("Pagination",{attrs:{pages:t.pagination},on:{update:t.getProducts}}),e("div",{staticClass:"modal fade",attrs:{id:"DetailModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("DetailModal",{attrs:{"temp-product":t.tempProduct,status:t.status},on:{modaltocart:function(a){return t.modalAddCart(t.tempProduct.id)}}})],1),e("div",{staticClass:"my-5 row justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"text-right mb-3"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.removeAllCartItem()}}},[e("i",{staticClass:"far fa-trash-alt"}),t._v(" 刪除所有品項 ")])]),e("table",{staticClass:"table"},[t._m(0),t.cart.length?e("tbody",t._l(t.cart,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"align-middle"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.removeCartItem(a.product.id)}}},[e("i",{staticClass:"far fa-trash-alt"})])]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" ")]),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"input-group"},[e("div",{staticClass:"input-group-prepend"},[e("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return t.quantityUpdate(a.quantity+1,a.product.id)}}},[t._v(" + ")])]),e("input",{staticClass:"form-control text-center",attrs:{type:"text"},domProps:{value:a.quantity},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.quantityUpdate(e.target.value,a.product.id)}}}),e("div",{staticClass:"input-group-prepend"},[e("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button",disabled:1===a.quantity},on:{click:function(e){return t.quantityUpdate(a.quantity-1,a.product.id)}}},[t._v(" - ")])])])]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.unit)+" ")]),e("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("money")(a.product.price))+" ")]),e("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("money")(a.product.price*a.quantity))+" ")])])})),0):t._e(),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"5"}},[t._v(" 總計 ")]),e("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("money")(t.cartTotal))+" ")])]),e("tr",[e("td",{attrs:{colspan:"6"}},[e("div",{staticClass:"input-group mb-3 input-group-sm"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.searchCoupon}},[t._v(" 套用優惠碼 ")])])])])]),e("tr",[e("td",{staticClass:"text-right text-success",attrs:{colspan:"5"}},[t._v(" 折扣價 ")]),e("td",{staticClass:"text-right text-success"},[t._v(" "+t._s(t._f("money")(t.cartTotal*((100-t.couponPercent)/100)))+" ")])])])])])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.invalid;return[e("form",{staticClass:"text-left",on:{submit:function(a){return a.preventDefault(),t.submitForm(a)}}},[e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,i=a.classes,o=a.passed;return[e("div",{staticClass:" mb-3 "},[e("label",{attrs:{for:"name"}},[t._v("收件人姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:i,attrs:{id:"name",type:"text",name:"姓名"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))]),o?e("span",{staticClass:"text-success"},[e("small",[t._v("OK")])]):t._e()])]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,i=a.classes,o=a.passed;return[e("div",{staticClass:" mb-3"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:i,attrs:{id:"email",type:"email",name:"電子信箱"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))]),o?e("span",{staticClass:"text-success"},[e("small",[t._v("OK")])]):t._e()])]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,i=a.classes,o=a.passed;return[e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"tel"}},[t._v("電話")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:i,attrs:{id:"tel",type:"tel",name:"電話"},domProps:{value:t.form.tel},on:{input:function(a){a.target.composing||t.$set(t.form,"tel",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))]),o?e("span",{staticClass:"text-success"},[e("small",[t._v("OK")])]):t._e()])]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,i=a.classes;return[e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"address"}},[t._v("地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:i,attrs:{type:"text",id:"address",name:"地址"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,i=a.classes;return[e("div",{staticClass:" mb-3"},[e("label",{attrs:{for:"payment"}},[t._v("購買方式")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",class:i,attrs:{id:"payment",name:"付款方式"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.form,"payment",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",disabled:""}},[t._v(" 請選擇付款方式 ")]),e("option",{attrs:{value:"WebATM"}},[t._v(" WebATM ")]),e("option",{attrs:{value:"ATM"}},[t._v(" ATM ")]),e("option",{attrs:{value:"CVS"}},[t._v(" CVS ")]),e("option",{attrs:{value:"Barcode"}},[t._v(" Barcode ")]),e("option",{attrs:{value:"Credit"}},[t._v(" Credit ")]),e("option",{attrs:{value:"ApplePay"}},[t._v(" ApplePay ")]),e("option",{attrs:{value:"GooglePay"}},[t._v(" GooglePay ")])]),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,i=a.classes;return[e("div",{staticClass:" mb-3"},[e("label",{attrs:{for:"message"}},[t._v("留言")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",class:i,attrs:{id:"message",placeholder:"請輸入留言..."},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:s}},[t._v(" 送出表單 ")])])])]}}])})],1)])],1)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("刪除")]),e("th",[t._v("品名")]),e("th",{attrs:{width:"150px"}},[t._v(" 數量 ")]),e("th",[t._v("單位")]),e("th",[t._v("單價")]),e("th",[t._v("小計")])])])}],o=(e("99af"),e("4160"),e("159b"),e("1157")),n=e.n(o),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content "},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.tempProduct.title))]),t._m(0)]),e("div",{staticClass:"modal-body"},[e("div",{staticStyle:{height:"250px","background-size":"cover","background-position":"center"},style:t.tempProduct.bgImage}),t._v(" "+t._s(t.tempProduct.description)+" ")]),e("div",{staticClass:"p-3"},[t.tempProduct.price?e("div",{staticClass:"d-flex align-items-baseline justify-content-between"},[e("del",{staticClass:"text-info"},[t._v("原價"+t._s(t.tempProduct.origin_price))]),e("div",{staticClass:"font-weight-bolder h5 text-danger"},[t._v(" 現在只要"+t._s(t.tempProduct.price)+" ")])]):e("div",[t._v(" "+t._s(t.tempProduct.origin_price)+" ")])]),e("div",{staticClass:"modal-footer"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],staticClass:"form-control mt-3",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.num=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"0",disabled:"",selected:""}},[t._v("請選擇數量")]),t._l(10,(function(a){return e("option",{key:a,domProps:{value:a}},[t._v(t._s(a))])}))],2),e("div",[e("p",[t._v("小記 "+t._s(t.num*t.tempProduct.price)+" ")])]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:0===t.num},on:{click:function(a){return t.modalAddToCart(t.tempProduct.id)}}},[t.status.loadingItem==t.tempProduct.id?e("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v(" 加到購物車")])])])])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],l={props:["tempProduct","status"],data:function(){return{num:0,product:{},cart:{}}},methods:{modalAddToCart:function(t){var a=this;this.status.loadingItem=t;var e={product:t,quantity:this.num},s="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/shopping");this.$http.post(s,e).then((function(t){console.log(t),a.status.loadingItem="",a.isLoading=!1,a.$bus.$emit("message:push","已加入購物車","success"),a.$emit("modaltocart")})).catch((function(t){a.status.loadingItem="",console.log(t.response.data.errors),a.$bus.$emit("message:push","加入失敗，".concat(t.response.data.errors),"danger"),a.isLoading=!1,a.$emit("modaltocart")}))}}},d=l,u=e("2877"),p=Object(u["a"])(d,r,c,!1,null,null,null),m=p.exports,v=e("1799"),g=n.a,f={components:{DetailModal:m,Pagination:v["a"]},data:function(){return{isLoading:!1,products:[],pagination:{},tempProduct:{num:0,subtotal:0,imageUrl:[],bgImage:""},cart:{},coupon:{},coupon_code:"",couponPercent:"",cartTotal:0,form:{name:"",email:"",tel:"",address:"",payment:"",coupon:"",message:""},status:{loadingItem:""}}},methods:{getProducts:function(t){var a=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/products?page=").concat(t);this.$http.get(e).then((function(t){a.products=t.data.data,a.pagination=t.data.meta.pagination,a.isLoading=!1})).catch((function(){a.isLoading=!1,a.$bus.$emit("message:push","無法取得產品列表","danger")}))},getCart:function(){var t=this;this.isLoading=!0,this.cartTotal=0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/shopping");this.$http.get(a).then((function(a){t.cart=a.data.data,t.cart.forEach((function(a){t.cartTotal+=a.product.price*a.quantity})),t.isLoading=!1})).catch((function(){t.isLoading=!1,t.$bus.$emit("message:push","無法取得購物車資訊","danger")}))},searchCoupon:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/coupon/search");this.$http.post(a,{code:this.coupon_code}).then((function(a){t.coupon=a.data.data,t.couponPercent=a.data.data.percent,t.$bus.$emit("message:push","已使用優惠券","success"),t.isLoading=!1})).catch((function(){t.$bus.$emit("message:push","沒有此優惠券","danger"),t.isLoading=!1}))},getDetail:function(t){var a=this;this.isLoading=!0,this.status.loadingItem=t;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/product/").concat(t);this.$http.get(e).then((function(t){a.tempProduct=t.data.data,a.tempProduct.num=0,a.tempProduct.bgImage="background-image:url(".concat(t.data.data.imageUrl,")"),g("#DetailModal").modal("show"),a.status.loadingItem="",a.isLoading=!1})).catch((function(){a.isLoading=!1,a.$bus.$emit("message:push","無法取得產品詳細資訊","danger")}))},addToCart:function(t){var a=this;this.isLoading=!0,this.status.loadingItem=t;var e={product:t,quantity:1},s="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/shopping");this.$http.post(s,e).then((function(t){a.getCart(),a.status.loadingItem="",a.$bus.$emit("message:push","已加入購物車","success"),a.isLoading=!1})).catch((function(t){a.status.loadingItem="",console.log(t.response.data.errors),a.$bus.$emit("message:push","加入失敗惹，好糗Σ( ° △ °|||)︴".concat(t.response.data.errors),"danger"),g("#DetailModal").modal("hide"),a.isLoading=!1}))},modalAddCart:function(t){this.status.loadingItem=t,this.getCart(),this.status.loadingItem="",g("#DetailModal").modal("hide")},removeAllCartItem:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/shopping/all/product");this.$http.delete(a).then((function(a){t.getCart(),t.cartTotal=0,t.$bus.$emit("message:push","刪除成功","success"),t.isLoading=!1})).catch((function(){t.isLoading=!1,t.$bus.$emit("message:push","刪除失敗","danger")}))},removeCartItem:function(t){var a=this;this.isLoading=!0,this.status.loadingItem=t;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/shopping/").concat(t);this.$http.delete(e).then((function(t){a.getCart(),a.$bus.$emit("message:push","刪除成功","success"),a.isLoading=!1})).catch((function(){a.isLoading=!1,a.$bus.$emit("message:push","刪除失敗","danger")}))},quantityUpdate:function(t,a){var e=this;if(!(t<=0)){this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/shopping"),i={product:a,quantity:t};this.$http.patch(s,i).then((function(t){e.getCart(),e.isLoading=!1})).catch((function(){e.isLoading=!1,e.$bus.$emit("message:push","更改數量失敗","danger")}))}},submitForm:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/orders"),e=this.form;this.coupon.enabled&&(e.coupon=this.coupon.code),console.log(e),this.$http.post(a,e).then((function(a){a.data.data.id&&t.$router.push("/admin/customer_checkout"),t.isLoading=!1})).catch((function(){t.isLoading=!1,t.$bus.$emit("message:push","無法送出訂單","danger")}))}},created:function(){this.getProducts(),this.getCart()}},h=f,_=Object(u["a"])(h,s,i,!1,null,null,null);a["default"]=_.exports}}]);
//# sourceMappingURL=chunk-7e82cede.b84234cd.js.map