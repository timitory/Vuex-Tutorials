<script>
import Navbar from './components/Navbar/Navbar.vue';
import {RouterView} from "vue-router";
// import axios from 'axios';
//import { mapState,mapActions } from 'vuex';
export default {
  
  components: {
    RouterView,
    Navbar
  },
  name:'App',
  computed:{
    // ...mapState({
    //   categories: state => state.categories,
    //   products: state => state.products
    // }),
    // categories(){
    //   return this.$store.state.categories
    // },
    // products(){
    //   return this.$store.state.products
    // }
  },
  methods:{
    // ...mapActions([
    //   'fetchCategories',
    //   'fetchProducts'
    // ]),
   
   
  },
  // mounted(){
  
  //   this.fetchProducts();
  // },
  // watch: {
    
  //   products(newProducts, oldProducts) {
  //     console.log('Products changed:', newProducts);
  //   }
  // }
  // methods: {
  //   //api to call the category
  //     async fetchData() {
  //       await  axios.get( this.baseURL + 'category/' )
  //       .then(res =>{
  //         this.categories = res.data
  //       }).catch((err)=>console.log('err',err))

  //       //api for products
  //       // await  axios.get( this.baseURL + "product/" )
        
  //       // .then(res =>{
  //       //   this.products = res.data
  //       //   console.log(this.products)
  //       // }).catch((err)=>console.log('err',err))
  //     },
  //     async getCategories(){
  //       await  axios.get( this.baseURL + "product/" )
        
  //       .then(res =>{
  //         this.products = res.data
  //         console.log(this.products)
  //       }).catch((err)=>console.log('err',err))
  //     }
  //     // async getCategories(){
  //     //       await axios.get(`${this.baseURL}/category/`)
  //     //       .then(res => this.categories=res.data)
  //     //       .catch(err => console.log(err))
  //     //   }
  //   },
    // mounted(){
    //   fetchData();
    //   getCategories();
    // }
}

</script>

<template>
  <div id="App" class="d-flex flex-column min-vh-100">
    <Navbar/>
    <!-- <div class="nav d-flex justify-content-center align-items-center py-2">
      <router-link class="mx-2" active-class="active" to="/">Home</router-link>
      <router-link class="mx-2" active-class="active" to="/about">About</router-link>
    </div> -->
    
    <RouterView 
    class="flex-grow-1"/>

  </div>
</template>

<style>
.nav.router-link-exact-active{
  background-color: red;
  color: white;
  border-radius: 7px;
  font-weight: bold;
}
.nav>a{
  text-align: center;
  align-items: center;
  color: red;
  align-content: center;
}
body{
    margin: 0;
    padding: 0;
}
*{
    box-sizing: border-box;
}
</style>
