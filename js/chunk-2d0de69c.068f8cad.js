(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de69c"],{8619:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),t.favoriteList.length?e("div",{staticClass:"container"},[e("h2",{staticClass:"font-weight-bold mt-3"},[t._v("我的最愛")]),e("div",{staticClass:" row mt-md-5 mt-3 mb-7"},t._l(t.favoriteList,(function(s){return e("div",{key:s.id,staticClass:"col-md-6"},[e("div",{staticClass:"card border-0 mb-4 position-relative position-relative"},[e("a",{staticClass:" text-dark",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goPage(s.id)}}},[e("div",{staticStyle:{height:"200px","background-size":"cover","background-position":"center","text-indent":"101%",overflow:"hidden","white-space":"nowrap"},style:{backgroundImage:"url("+s.imageUrl+")"}},[t._v(t._s(s.title)+" ")])]),e("a",{staticClass:"text-danger",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-times position-absolute border border-danger p-1 ",staticStyle:{right:"1px",bottom:"50px"},on:{click:function(e){return e.preventDefault(),t.deleteFavorite(s.id)}}},[t._v("刪除")])]),e("div",{staticClass:"card-body p-0"},[e("h4",{staticClass:"mb-0 mt-3"},[e("a",{staticClass:" text-dark",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goPage(s.id)}}},[t._v(t._s(s.title))])]),e("p",{staticClass:"card-text mb-0"},[t._v(" 原價 "),e("del",{staticClass:"text-muted "},[t._v(t._s(t._f("money")(s.origin_price)))]),t._v(" "),e("span",[t._v(" 售價 "+t._s(t._f("money")(s.price))+" ")])]),e("p",{staticClass:"text-muted mt-3"})])])])})),0)]):e("div",[e("div",{staticClass:"position-relative",staticStyle:{height:"300px"}},[e("div",{staticClass:"position-absolute",staticStyle:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=30)","background-position":"center center",opacity:"0.3"}}),e("div",{staticClass:"container d-flex flex-column position-absolute",staticStyle:{left:"50%",transform:"translate(-50%, -40%)",top:"50%"}},[e("div",{staticClass:"row justify-content-center my-auto"},[e("div",{staticClass:"col-md-4 text-center"},[e("i",{staticClass:"fas fa-shopping-cart fa-7x"}),e("h1",{staticClass:"h3 my-3"},[t._v("沒有收藏的商品")]),e("button",{staticClass:"btn btn-outline-dark mb-5",on:{click:function(s){return t.goShopping()}}},[t._v(" 去購物 ")])])])])])])],1)},a=[],o=(e("99af"),{data:function(){return{isLoading:!1,products:[]}},methods:{getProducts:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("71a05497-9279-4af4-a348-48c8c33eca99","/ec/products?page=").concat(s);this.$http.get(e).then((function(s){t.products=s.data.data,t.isLoading=!1,t.getFavoriteList()})).catch((function(s){404===s.response.request.status?t.$bus.$emit("message:push","".concat(s.response.request.status," 找不到頁面"),"danger"):t.$bus.$emit("message:push","".concat(s.response.request.status).concat(s.response.data.message),"danger")}))},getFavoriteList:function(){this.$store.dispatch("getFavoriteList",this.products)},deleteFavorite:function(t){this.isLoading=!0,this.$store.dispatch("deleteFavorite",t),this.getProducts()},goShopping:function(){this.$router.push("/products")},goPage:function(t){console.log(t),this.$router.push("/detail/".concat(t))}},computed:{favorite:function(){return this.$store.state.favorite},favoriteList:function(){return this.$store.state.favoriteList}},created:function(){this.getProducts()}}),n=o,c=e("2877"),r=Object(c["a"])(n,i,a,!1,null,null,null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0de69c.068f8cad.js.map