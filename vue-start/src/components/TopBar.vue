<template>
  <div class="top-bar">
    <div class="top-nav">
      <div class="logo">
        <h1>logo</h1>
      </div>
      <ul>
        <li v-for="item in topNav"><a href="#">{{item}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-bar',
  data () {
    return {
      topNav: ['首页', '关于我们', '我的账户', '退出']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .top-bar{
     width:100%;
     height:44px;
     background-color:#333;
   }
  .top-nav{
    width:1280px;
    height:44px;
    margin:0 auto;
  }
  .top-nav .logo{
    width:500px;
    height:44px;
    float:left;
  }
  .top-nav .logo h1{
    line-height:44px;
    font-size:28px;
    color:#fff;
  }
  .top-nav ul{
    float:left;
    width:780px;
    height:44px;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .top-nav ul li{
    float:left;
    width:120px;
    height:44px;
    line-height:44px;
    text-align:center;
  }
   .top-nav ul li a{
     color:#fff;
     font-size:14px;
   }
</style>
