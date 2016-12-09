<template>
    <div class="home-container">
       <div class="home-navs">
           <ul>
               <li class="navs-list" v-for="item in homeNavs">
                   <a href="javascript:void(0);">{{item}}</a>
               </li>
           </ul>
           <div class="clear"></div>
       </div>
       <div class="home-list">
          <navs-list :list="info"></navs-list>
       </div>
    </div>
</template>
<style scoped>
 .home-container{
   padding:0 12px 0 12px;
 }
 .home-navs ul li{
     width:48%;
     height:44px;
     text-align:center;
     line-height:44px;
     margin-left:4%;
     margin-top:2%;
     float:left;
     background-color:#f6f6f6;
 }
 .home-navs ul li:nth-child(2n+1){
   margin-left:0;
 }

 .home-navs ul li a{
     display:block;
     color:#555;
     font-size:14px;
 }
 .home-navs .clear{
     clear:both;
 }
 .home-list{
     padding-top:24px;
 }
</style>
<script>
import NavsList from './list.vue'
import listData from '../v1/list.json'
export default {
    data (){
        return {
            homeNavs:['影院热映',"跳骚市场","美好的事情","使用豆瓣App"],
            info:{}
        }
    },
    mounted (){
//      this.$http.get('../v1/list.json',function(data){
//            console.log(data);
//    });
      this.info=listData.info;
  },
    components:{
        NavsList
    }
}
</script>
