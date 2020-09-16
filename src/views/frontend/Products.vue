<template>
  <div class="">
    <loading :active.sync="isLoading"></loading>
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 400px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.1;"></div>
      <h2 class="font-weight-bold">開始彈吉他吧!</h2>
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-4">
          <div class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3" id="accordionExample">
            <div class="card border-0" v-for="(item,index) in categories" :key="index.id">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center">
                  <button class="btn rounded-0  w-100 py-3" type="button" @click="chooseCategory(item)">
                    <h4 class="mb-0 font-weight-bold">
                    {{item}}
                    </h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row" v-if="products">
            <div class="col-md-6"  v-for="(item,index) in products" :key="index.id">
              <div class="card border-0 mb-4 position-relative position-relative">
                <div style="height: 150px; background-size: cover; background-position: center; "
                    :style="{backgroundImage: `url(${item.imageUrl})`}">
                </div>
                <a href="#" class="text-dark">
                  <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#" class=" text-dark" @click.prevent="goPage(item)">{{item.title}}</a></h4>
                  <p class="card-text mb-0"> 售價 {{item.price}} <span class="text-muted "> 原價 <del>{{item.origin_price}}</del></span></p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>
          <Pagination :pages = "pagination" @update = "getProducts"></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// /* global $ */
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Products',
  components: {
    Pagination
  },
  data () {
    return {
      isLoading: false,
      products: [],
      pagination: {},
      categories: [],
      totalPages: []
    }
  },
  methods: {
    getProducts (num) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${num}`
      this.$http.get(url).then(res => {
        this.products = res.data.data
        this.pagination = res.data.meta.pagination
        this.isLoading = false
      })
    },
    getCategory () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`
      const allCategory = []
      this.$http.get(url).then(res => {
        for (let i = 0; i < res.data.meta.pagination.total_pages; i++) {
          this.totalPages[i] = i + 1
        }
        this.totalPages.forEach(item => {
          this.$http.get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${item}`).then(res => {
            (res.data.data).forEach(item => {
              allCategory.push(item.category)
            })
            const result = new Set()
            const repeat = new Set()
            allCategory.forEach(item => {
              result.has(item) ? repeat.add(item) : result.add(item)
            })
            this.categories = result
            this.isLoading = false
          })
        })
      })
    },
    chooseCategory (categoryName) {
      this.isLoading = true
      this.products = []
      this.totalPages.forEach(item => {
        this.$http.get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${item}`).then(res => {
          res.data.data.forEach(item => {
            if (item.category === categoryName) {
              this.products.push(item)
            }
          })
          this.pagination.total_pages = Math.ceil(this.products.length / 25)
        })
        this.isLoading = false
      })
    },
    goPage (item) {
      this.$router.push(`/detail/${item.id}`)
    }
  },
  created () {
    this.getProducts()
    this.getCategory()
  }
}
</script>
