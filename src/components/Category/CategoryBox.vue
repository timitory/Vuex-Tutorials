<template>
  
    <div class="card w-100 h-100 ">
      <div class="embed-responsive embed-responsive-16by9 ">
        <img  class="card-img-top embed-responsive-item " :src="category.imageUrl" alt="Avatar" style="width:100%">
      </div>
        <div class="card-body">
            <h4 class="card-title">{{ category.categoryName }}</h4> 
            <p class="card-text font-italic">{{ category.description }}</p> 
            <router-link class="py-2 px-4" to="/">Edit</router-link>
            
        </div>
    </div>

   
</template>
<script>
import { mapState } from 'vuex';

export default {
    name:"CategoryBox",
    props:["category"],
    computed:{
      ...mapState({
        categories:state=>state.categories
    })
    }
}


</script>
<style>
.embed-responsive .card-img-top {
  object-fit: cover;
}

.card-body>a{
  text-decoration: none;
}

.card-title {
  color: #484848;
  font-size: 1.1rem;
  font-weight: 400;
}

.card-title:hover {
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
}

#edit-category {
  float: right;
}

</style>