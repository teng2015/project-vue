<template>
    <div class="container" >
      <div class="aside-slide">
        <ul>
          <li v-for="item in asideSlide" @click=tip();><router-link :to="item.path">{{item.title}}</router-link></li>
        </ul>
      </div>
    </div>
</template>
<style scoped>
  .container{
    width:1280px;
    margin:0 auto;
  }
  .aside-slide{
    width:280px;
    margin-top:24px;
    float:left;
  }
  .aside-slide ul{
    width:280px;
    background-color:#333;
  }
  .aside-slide ul li{
    width:279px;
    height:44px;
    line-height:44px;
    text-align:center;
    border-bottom:1px solid #555;
  }
  .aside-slide ul li:last-child{
    border-bottom:0;
  }
  .aside-slide ul li a{
    display:block;
    width:279px;
    height:44px;
    line-height:44px;
    color:#fff;
  }
</style>
<script>
export default {
  name: 'main-bar',
  data () {
    return {
      asideSlide: [
        { 'title': '首页', 'path': '/' },
        { 'title': '关于我们', 'path': '/about' },
        { 'title': '我的账户', 'path': '/account' },
        { 'title': '退出', 'path': '/layout' }
      ]
    }
  },
  methods: {
    tip: function () {
      console.log('aaa')
    }
  }
}
</script>

