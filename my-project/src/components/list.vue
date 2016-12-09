<template>
    <div class="list-container">
       <ul>
           <li v-for="item in list">
             <router-link :to="{name:'topic',params:{id:item.id}}">
               <div class="list-icon">
                 <div class="icon-left">
                   <div class="list-person-icon">
                     <img :src="item.cover_url"/>
                   </div>
                   <div class="list-person-name">
                     <p>{{item.author.name}}</p>
                   </div>
                 </div>
                 <div class="icon-right">
                   <a href="javascript:void(0);">{{item.column.name}}</a>
                 </div>
                 <div class="clear"></div>
               </div>
               <div class="list-item">
                 <div class="item-left">
                   <p>{{item.title}}</p>
                 </div>
                 <div class="item-right">
                   <img :src="item.author.avatar"/>
                 </div>
                 <div class="clear"></div>
               </div>
               <div class="list-item-text">
                 <p>
                   {{item.desc}}
                 </p>
                 <div class="list-item-comment">
                   <a href="javascript:void(0);">
                     <span class="comment-icon-1"></span>
                     <span>{{item.likers_count}}</span>
                   </a>
                   <a href="javascript:void(0);">
                     <span class="comment-icon-2"></span>
                     <span>{{item.comment_count}}</span>
                   </a>
                 </div>
               </div>
             </router-link>
           </li>
       </ul>
    </div>
</template>
<style scoped>
   .clear{
     clear:both;
   }
   .list-container ul li{
     border-bottom: 1px solid #e7e7e7;
     padding-bottom:12px;
     padding-top:12px;
   }
   .list-container ul li:first-child{
     padding-top:0;
   }
   .list-container ul li .list-icon{
     width:100%;
     height:24px;
   }
   .list-container ul li .list-icon .icon-left{
     float:left;
     width:35%;
     height:24px;
   }
   .list-container ul li .list-icon .icon-left .list-person-icon{
     float:left;
   }
   .list-container ul li .list-icon .icon-left .list-person-name{
     float:left;
   }
   .list-container ul li .list-icon .icon-left .list-person-name p{
     display:inline-block;
     line-height:24px;
     margin:0;
     padding-left:5px;
     font-size:14px;
     color:#494949;
   }
   .list-container ul li .list-icon .icon-left img{
     width:24px;
     height:24px;
     display:inline-block;
     border-radius:100%;
     border:none;
   }

   .list-container ul li .list-icon .icon-right{
     float:right;
     width:15%;
     height:24px;
   }

   .list-container ul li .list-icon .icon-right a{
     display:inline-block;
     width:100%;
     height:24px;
     text-align:center;
     line-height:24px;
     border:1px solid #e7e7e7;
     border-radius:5px;
     font-size:14px;
     color:#999;
   }

   .list-container ul li .list-item{
     width:100%;
     margin-top:16px;
   }

   .list-container ul li .list-item .item-left{
     float:left;
     width:75%;
   }
   .list-container ul li .list-item .item-left p{
     margin:0;
     font-size:16px;
     color:#494949;
     line-height:1.5
   }
   .list-container ul li .list-item .item-right{
     float:right;
     width:73px;
     height:73px;
   }
   .list-container ul li .list-item .item-right img{
     display:block;
     width:73px;
     height:73px;
   }
   .list-container ul li .list-item-text{
     width:100%;
   }

   .list-container ul li .list-item-text p{
     margin:10px 0 10px 0;
     font-size:13px;
     line-height:1.4;
     color:#aaa;
   }

   .list-container ul li .list-item-text .list-item-comment{
     width:100%;
   }
   .list-container ul li .list-item-text .list-item-comment a{
     display:inline-block;
     width:13%;
     height:26px;
     color:#aaa;
     font-size:12px;
   }
   .list-container ul li .list-item-text .list-item-comment a span{
     display:inline-block;
     width:45%;
     line-height:26px;
     text-align:center;
   }
   .list-container ul li .list-item-text .list-item-comment a span.comment-icon-1{
     width:12px;
     height:12px;
     background:url(https://img3.doubanio.com/f/talion/625409635d46500ea6f2f461cbb19cf657c09683/pics/card/ic_like_feed.svg) no-repeat center;
   }
   .list-container ul li .list-item-text .list-item-comment a span.comment-icon-2{
     width:12px;
     height:12px;
     background:url(https://img3.doubanio.com/f/talion/3c568730f3142cfd7fb2de8a3938fb960ccb475c/pics/card/ic_comments_feed.svg) no-repeat center;
   }
</style>
<script>
export default {
  props: ['list']
}
</script>
