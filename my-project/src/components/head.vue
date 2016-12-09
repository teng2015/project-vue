<template>
   <header>
       <div class="header-container">
         <router-link to="/" class="header-logo">
            <div class="logo"> </div>
         </router-link>
         <ul class="header-nav">
           <li v-for="item in navs">
             <router-link :to="item.path">{{item.title}}</router-link>
           </li>
         </ul>
       </div>
   </header>
</template>
<style scoped>
  header{
      width:100%;
      height:44px;
      background-color:#f8f8f8;
      box-shadow:2px 4px 4px #ccc;
      position:fixed;
      top:0;
      left:0;
  }
  .header-container{
      width:90%;
      height:44px;
      margin:0 auto;
      border:1px solid transparent;
  }
  .header-container .header-logo{
    display:inline-block;
  }
  .header-container .logo{
      width:46px;
      height:22px;
      margin-top:12px;
      background:url(../assets/images/logo.png) no-repeat;
      background-size:46px 22px;
      float:left;
  }
  .header-container .header-nav{
      width:60%;
      height:44px;
      float:right;
  }
  .header-container .header-nav li{
      width:20%;
      height:44px;
      font-size:14px;
      line-height:44px;
      text-align:center;
      float:left;
  }
  .header-container .header-nav li:nth-child(1){
      color:#2384E8;
  }
  .header-container .header-nav li:nth-child(2){
      color:#9F7860;
  }
  .header-container .header-nav li:nth-child(3){
      color:#E4A813;
  }
  .header-container .header-nav li:nth-child(4){
      color:#9F7860;
  }
  .header-container .header-nav li:last-child{
      height:18px;
      margin-top:14px;
      background:url(../assets/images/search.png) no-repeat center;
      background-size:24px 18px;
  }
</style>
<script>
  export default {
      data () {
          return {
            navs:[
                {'path':'/movie','title':'电影'},
                {'path':'/book','title':'图书'},
                {'path':'/network','title':'广播'},
                {'path':'/group','title':'小组'},
                {'path':'/search','title':''}
            ]
          }
      }
  }
</script>
