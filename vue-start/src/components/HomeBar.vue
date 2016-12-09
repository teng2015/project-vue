<template>
   <div class="home-bar">
       <h1>Home</h1>
       <ul>
         <li>
           <router-link to="/first">点击跳转到第一页</router-link>
           <router-link to="/second">点击跳转到第二页</router-link>
         </li>
       </ul>
       <router-view></router-view>
   </div>
</template>
<style scoped>
  .home-bar{
      width:1140px;
      margin:24px 0 0 24px;
      float:right;
  }
</style>
<script>
import firstcomponent from './common/firstcomponent.vue'
export default {
  name: 'home-bar',
  component: {
    firstcomponent
  }
}
</script>
