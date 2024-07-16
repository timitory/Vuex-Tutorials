<template>
    <div class="d-flex justify-content-center align-items-center" >
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 text-center">
            <h3 class="pt-3">Our Categories</h3>
            <router-link to="/admin/addcategory">
            <button class="btn btn-primary" style="float:right">AddCategory</button>
            </router-link>
          </div>
        </div>
        <div class="row">
          <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
            <CategoryBox :category="category"></CategoryBox>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';
import { mapMutations, mapState } from 'vuex';
import CategoryBox from '../../components/Category/CategoryBox.vue'
import store from '@/store/store';
export default {
    name:"Category",
    //props:['categories'],

    components:{CategoryBox},
    data() {
        return {
             
        }
        
    },
    computed:{
     ...mapState({
      categories:state=>state.categories
     })
    },
    actions:{
     
    },
    
    methods:{
      //...mapMutations(['setProducts']),
      async fetchCategories()
       {
             await axios.get('https://limitless-lake-55070.herokuapp.com/category/')
             .then(response=>{ 
              const categories=response.data
              this.$store.commit('setCategories',categories)

                //this.setCategories(response.data)
             }).catch ((error)=>
              console.error('Error fetching categories:', error)
            )
          },
    //   fetchCategories(){
    //   this.$store.dispatch('fetchCategories')
    // },
    },
    mounted(){
       // console.log(this.baseURL);
        this.fetchCategories()
    },
    watch: {
    categories(newCategories, oldCategories) {
      console.log('Categories changed:', newCategories);
      console.log('old Value:', oldCategories)
    },
  }
    
    }
    
</script>

<style scoped>
.container{
    width: 100%;
    margin: 0;
}
.title-cont{
padding-top: 2rem;
}
.title-cont>h3{
    text-align: center;
    font-weight: bold;
    color: red;
}
</style>