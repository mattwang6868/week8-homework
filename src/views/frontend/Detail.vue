<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="row align-items-center mt-5">
        <div class="col-md-7">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner"  >
              <div class="carousel-item active">
                  <img :src="imageUrl[0]" class="d-block m-auto"  style="height:300px" alt="...">
              </div>
              <div class="carousel-item">
                  <img :src="imageUrl[1]" class="d-block m-auto" style="height:300px" alt="...">
              </div>
              <div class="carousel-item ">
                  <img :src="imageUrl[2]" class="d-block m-auto " style="height:300px" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <h2 class="font-weight-bold h1 mb-1">{{product.title}}</h2>
          <p class="mb-0 text-muted text-right"><del>{{product.origin_price}}</del></p>
          <p class="h4 font-weight-bold text-right">{{product.price}}</p>
          <div class="d-flex align-items-center">
            <div class="input-group my-3 mr-2 bg-light rounded">
              <div class="input-group-prepend">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1" :disabled="num === 1" @click="updateNum('minus')">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"  :value="num" @keyup.enter="quantityUpdate($event.target.value,item.product.id )">
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2" @click="updateNum( 'plus' )">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <button type="button" class="btn btn-dark btn-block py-2" @click="modalAddToCart(product.id)">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="status.loadingItem == product.id"></span>
              加入購物車
            </button>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-md-4">
          <p>{{product.description}}</p>
        </div>
        <div class="col-md-4">
          <p>{{product.content}}</p>
        </div>
      </div>
      <h3 class="font-weight-bold">{{product.title}}</h3>
      <div class="swiper-container mt-4 mb-5">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative" v-for = "item in imageUrl" :key="item.id">
              <img :src="item" class="card-img-top rounded-0 w-50 d-block m-auto" alt="...">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      isActive: false,
      product: {},
      imageUrl: {},
      cart: {},
      num: 1,
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    updateNum (state) {
      switch (state) {
        case 'plus':
          this.num = this.num + 1
          break
        case 'minus':
          this.num = this.num - 1
          break
      }
    },
    modalAddToCart (id) {
      this.status.loadingItem = id
      const cart = {
        product: id,
        quantity: this.num
      }
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.post(url, cart).then(res => {
        this.status.loadingItem = ''
        this.$bus.$emit('message:push', '已加入購物車', 'success')
      }).catch((error) => {
        this.status.loadingItem = ''
        console.log(error.response.data.errors)
        this.$bus.$emit('message:push', `加入失敗惹，好糗Σ( ° △ °|||)︴${error.response.data.errors}`, 'danger')
      })
    }
  },
  created () {
    this.isLoading = true
    const id = this.$route.params.id
    this.$http.get(` ${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then(res => {
        this.product = res.data.data
        this.imageUrl = res.data.data.imageUrl
        this.isLoading = false
      })
  }
}
</script>
