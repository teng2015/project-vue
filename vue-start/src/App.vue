<template>
  <div id="app">
    <top-bar></top-bar>
    <main-bar></main-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import MainBar from './components/MainBar'
export default {
  name: 'app',
  components: {
    TopBar,
    MainBar
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,"微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
