(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2197"],{2355:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"container"},[s("div",{staticClass:"mt-3"},[s("h3",{staticClass:"mt-3 mb-4"},[t._v("購物車列表")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},[s("table",{staticClass:"table"},[t._m(0),t.cart.length?s("tbody",t._l(t.cart,(function(a){return s("tr",{key:a.product.id,staticClass:"border-bottom border-top"},[s("th",{staticClass:"border-0 px-0 font-weight-normal py-4 text-left",attrs:{scope:"row"}},[s("img",{staticStyle:{width:"72px",height:"72px","object-fit":"cover"},attrs:{src:a.product.imageUrl[0],alt:""}}),s("p",{staticClass:"mb-0 font-weight-bold ml-3 d-inline-block"},[t._v(t._s(a.product.title))])]),s("td",{staticClass:"border-0 align-middle",staticStyle:{"max-width":"160px"}},[s("div",{staticClass:"input-group "},[s("div",{staticClass:"input-group-prepend"},[s("button",{staticClass:"btn btn-outline-dark border-0 py-2",attrs:{type:"button",id:"button-addon1",disabled:1===a.quantity},on:{click:function(s){return t.quantityUpdate(a.quantity-1,a.product.id)}}},[s("i",{staticClass:"fas fa-minus"})])]),s("input",{staticClass:"form-control border-0 text-center my-auto shadow-none",attrs:{type:"text",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1"},domProps:{value:a.quantity},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.quantityUpdate(s.target.value,a.product.id)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-dark border-0 py-2",attrs:{type:"button",id:"button-addon2"},on:{click:function(s){return t.quantityUpdate(a.quantity+1,a.product.id)}}},[s("i",{staticClass:"fas fa-plus"})])])])]),s("td",{staticClass:"border-0 align-middle"},[s("p",{staticClass:"mb-0 ml-auto"},[t._v(t._s(t._f("money")(a.product.price)))])]),s("td",{staticClass:"border-0 align-middle"},[s("button",{staticClass:"btn btn-outline-dark border-0 py-2",attrs:{type:"button"},on:{click:function(s){return t.removeCartItem(a.product.id)}}},[s("i",{staticClass:"fas fa-times"})])])])})),0):t._e()]),s("div",{staticClass:"input-group w-50"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control rounded-0 border-bottom border-top-0 border-left-0 border-right-0 shadow-none",attrs:{type:"text",placeholder:"套用優惠碼","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.searchCoupon}},[s("i",{staticClass:"fas fa-paper-plane"})])])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"border p-4 mb-4"},[s("h4",{staticClass:"font-weight-bold mb-4"},[t._v("Order Detail")]),s("table",{staticClass:"table text-muted border-bottom"},[s("tbody",[s("tr",[s("th",{staticClass:"border-0 px-0 pt-4 font-weight-normal text-left",attrs:{scope:"row"}},[t._v("商品金額")]),s("td",{staticClass:"text-right border-0 px-0 pt-4"},[t._v("NT"+t._s(t._f("money")(t.cartTotal)))])]),s("tr",[s("th",{staticClass:"border-0 px-0 font-weight-normal text-left",attrs:{scope:"row"}},[t._v("折扣金額")]),t.couponPercent?s("td",{staticClass:"text-right border-0 px-0 "},[t._v("NT"+t._s(t._f("money")(Math.ceil(t.cartTotal*(100-t.couponPercent)/100))))]):s("td",{staticClass:"text-right border-0 px-0 "},[t._v("NT"+t._s(t._f("money")(Math.ceil(t.cartTotal*t.couponPercent))))])])])]),t.couponPercent?s("div",{staticClass:"d-flex justify-content-between mt-4"},[s("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("Total")]),s("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("NT"+t._s(t._f("money")(Math.ceil(t.cartTotal*t.couponPercent/100))))])]):s("div",{staticClass:"d-flex justify-content-between mt-4"},[s("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("Total")]),s("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("NT"+t._s(t._f("money")(t.cartTotal)))])])])])]),s("div",{staticClass:"my-5"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-6"},[s("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.invalid;return[s("form",{staticClass:"text-left",on:{submit:function(a){return a.preventDefault(),t.submitForm(a)}}},[s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes,i=a.passed;return[s("div",{staticClass:" mb-3 "},[s("label",{attrs:{for:"name"}},[t._v("收件人姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:o,attrs:{id:"name",type:"text",name:"姓名"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))]),i?s("span",{staticClass:"text-success"},[s("small",[t._v("OK")])]):t._e()])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes,i=a.passed;return[s("div",{staticClass:" mb-3"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:o,attrs:{id:"email",type:"email",name:"電子信箱"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))]),i?s("span",{staticClass:"text-success"},[s("small",[t._v("OK")])]):t._e()])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes,i=a.passed;return[s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"tel"}},[t._v("電話")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:o,attrs:{id:"tel",type:"tel",name:"電話"},domProps:{value:t.form.tel},on:{input:function(a){a.target.composing||t.$set(t.form,"tel",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))]),i?s("span",{staticClass:"text-success"},[s("small",[t._v("OK")])]):t._e()])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes;return[s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"address"}},[t._v("地址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:o,attrs:{type:"text",id:"address",name:"地址"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes;return[s("div",{staticClass:" mb-3"},[s("label",{attrs:{for:"payment"}},[t._v("購買方式")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",class:o,attrs:{id:"payment",name:"付款方式"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.form,"payment",a.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",disabled:""}},[t._v(" 請選擇付款方式 ")]),s("option",{attrs:{value:"WebATM"}},[t._v(" WebATM ")]),s("option",{attrs:{value:"ATM"}},[t._v(" ATM ")]),s("option",{attrs:{value:"CVS"}},[t._v(" CVS ")]),s("option",{attrs:{value:"Barcode"}},[t._v(" Barcode ")]),s("option",{attrs:{value:"Credit"}},[t._v(" Credit ")]),s("option",{attrs:{value:"ApplePay"}},[t._v(" ApplePay ")]),s("option",{attrs:{value:"GooglePay"}},[t._v(" GooglePay ")])]),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes;return[s("div",{staticClass:" mb-3"},[s("label",{attrs:{for:"message"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",class:o,attrs:{id:"message",placeholder:"請輸入留言..."},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])])]}}],null,!0)})],1),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-dark",attrs:{type:"submit",disabled:e}},[t._v(" 送出表單 ")])])])]}}])})],1)])])])])],1)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{staticClass:"border-0 pl-0",attrs:{scope:"col"}},[t._v("品名")]),s("th",{staticClass:"border-0",attrs:{scope:"col"}},[t._v("數量")]),s("th",{staticClass:"border-0",attrs:{scope:"col"}},[t._v("單價")]),s("th",{staticClass:"border-0",attrs:{scope:"col"}},[t._v("刪除")])])])}],i=(s("99af"),{data:function(){return{isLoading:!1,coupon:{},coupon_code:"",couponPercent:"",status:{loadingItem:""},form:{name:"",email:"",tel:"",address:"",payment:"",coupon:"",message:""}}},methods:{getCart:function(){this.$store.dispatch("getCart")},quantityUpdate:function(t,a){var s=this;if(!(t<=0)){this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/shopping"),o={product:a,quantity:t};this.$http.patch(e,o).then((function(t){s.$store.dispatch("getCart"),s.isLoading=!1})).catch((function(){s.isLoading=!1,s.$bus.$emit("message:push","更改數量失敗","danger")}))}},removeCartItem:function(t){var a=this;this.isLoading=!0,this.status.loadingItem=t;var s="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/shopping/").concat(t);this.$http.delete(s).then((function(t){a.$store.dispatch("getCart"),a.$bus.$emit("message:push","刪除成功","success"),a.isLoading=!1})).catch((function(){a.isLoading=!1,a.$bus.$emit("message:push","產品刪除失敗","danger")}))},searchCoupon:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/coupon/search");this.$http.post(a,{code:this.coupon_code}).then((function(a){t.coupon=a.data.data,t.couponPercent=a.data.data.percent,t.$bus.$emit("message:push","已使用優惠券","success"),t.isLoading=!1})).catch((function(){t.$bus.$emit("message:push","沒有此優惠券","danger"),t.isLoading=!1}))},submitForm:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/orders"),s=this.form;this.coupon.enabled&&(s.coupon=this.coupon.code),this.$http.post(a,s).then((function(a){a.data.data.id&&t.$router.push("/orders"),t.isLoading=!1})).catch((function(){t.isLoading=!1,t.$bus.$emit("message:push","訂單送出失敗","danger")}))}},computed:{cart:function(){return this.$store.state.cart},cartTotal:function(){return this.$store.state.cartTotal}},created:function(){this.getCart()}}),r=i,n=s("2877"),c=Object(n["a"])(r,e,o,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b2197.d2f6b183.js.map