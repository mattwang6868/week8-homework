<template>
  <div>
    <div class="container">
      <nav class="navbar px-0 navbar-expand-lg navbar-light bg-dark">
          <a class="navbar-brand position-absolute text-white " href="./"
            style="left: 50%; transform: translate(-50%, -50%); top: 50%;">
            827 Music Studio
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse bg-dark custom-header-md-open " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link text-white " to="/">首頁</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-white " to="/products">產品列表</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-white " to="/orders">我的訂單</router-link>
              </li>
            </ul>
          </div>
          <div class="d-flex">
            <router-link class="nav-link text-white" to="/cart"><i class="fas fa-shopping-cart position-absolute"></i><span class="badge badge-pill badge-info position-relative" style="top:-12px;right:-15px;">{{cartlength}}</span></router-link>
          </div>
        </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  },
  methods: {
    getCart () {
      this.$store.dispatch('getCart')
    }
  },
  computed: {
    ...mapGetters(['cart', 'cartlength'])
  },
  created () {
    this.$store.dispatch('getCart')
  }
}
</script>
