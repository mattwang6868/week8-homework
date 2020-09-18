import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    cart: {},
    cartTotal: 0,
    cartlength: '0'
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status)
    },
    getCart (context) {
      context.commit('LOADING', true)
      context.commit('CARTTOTAL', 0)
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      axios.get(url).then(res => {
        context.commit('CART', res.data.data)
        context.commit('CART_TOTAL', res.data.data)
        context.commit('CART_LENGTH', res.data.data.length)
        context.commit('LOADING', false)
      })
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    },
    CARTTOTAL (state, status) {
      state.cartTotal = status
    },
    CART (state, payload) {
      state.cart = payload
    },
    CART_LENGTH (state, payload) {
      state.cartlength = payload
    },
    CART_TOTAL (state, payload) {
      payload.forEach((item) => {
        state.cartTotal += item.product.price * item.quantity
      })
    }
  },
  getters: {
    cart (state) {
      return state.cart
    },
    cartlength (state) {
      return state.cartlength
    }
  },
  modules: {
  }
})
