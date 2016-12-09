<template>
 <div class="topic-container">
     <p>{{$route.params.id}}</p>
     <div v-for="item in topic">
         <p v-if="item.id==$route.params.id">{{item.desc}}</p>
     </div>
 </div>
</template>
<style scoped>

</style>
<script>
import listData from "../v1/list.json"
    export default {
        data (){
            return {
                topic:{}
            }
        },
        mounted (){
            this.topic=listData.info;
            console.log(this.topic);
        }
    }
</script>
