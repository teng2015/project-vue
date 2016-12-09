<template>
  <div id="app" class="app">
     <header-nav></header-nav>
     <div class="app-main">
       <router-view></router-view>
     </div>
  </div>
</template>

<script>
import HeaderNav from "./components/head.vue"

export default {
  name: 'app',
  components: {
    HeaderNav
  }
}
</script>

<style scoped>
  .app{
    width:100%;
    max-width:640px;
    margin:0 auto;
  }
  .app .app-main{
    padding-top:44px;
  }
</style>
