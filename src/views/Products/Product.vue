<template >
    <div class="container">
        <div class="row">
            <h2> Our Products</h2>
        </div>
        <div class="row">
            <div v-for="product of products" :key="product.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
            <ProductBox :product="product"></ProductBox>
          </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapMutations, mapState } from 'vuex'
import ProductBox from '../../components/ProductBox.vue'
export default {
    name:'Product',
   // props:['products'],
    components:{ProductBox},
    data() {
        return {
            // baseURL:'https://limitless-lake-55070.herokuapp.com/',
        }
    },
    computed:{
       ...mapState({
        products:state =>state.products
       })
    },
    methods:{
        ...mapMutations(['setProducts']),
        async fetchProducts() {
             await axios.get(`${this.$store.state.baseURL}product/`)
             .then(response=>{
                this.setProducts(response.data)
             }).catch ((error)=>
              console.error('Error fetching products:', error)
)
            }
    //     fetchProducts(){
    //     this.$store.dispatch('fetchProducts')
    // }
    },
    watch: {
    
    products(newProducts, oldProducts) {
      console.log('Products changed:', newProducts);
    }
  },
  mounted(){
  
  this.fetchProducts();
},
}
</script>