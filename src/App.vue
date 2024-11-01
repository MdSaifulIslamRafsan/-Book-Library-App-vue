<template>
  <Navbar></Navbar>
  <main class="min-h-[calc(100vh-100px)]">
    <RouterView />
  </main>
  <Footer></Footer>
</template>
<script>
import Footer from './components/SharePage/Footer.vue';
import Navbar from './components/SharePage/Navbar.vue';

export default {
  components: { Navbar, Footer },
  
}
</script>
<style lang="">
  
</style>