<template>
  <navbar-page></navbar-page>
  <main>
    <RouterView />
  </main>
</template>
<script>

import NavbarPage from './components/SharePage/NavbarPage.vue'


export default {
  components: { NavbarPage },
  
}
</script>
<style lang="">
  
</style>