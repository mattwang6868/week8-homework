<template>
  <div class="home">
    <Navbar class="bg-dark"></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>
