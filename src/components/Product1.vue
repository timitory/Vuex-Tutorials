<!-- <template>
    <div id="product-1">
        <h2>Product One</h2>
        <h2 v-for="(sale,id) in Salestoday" :key="id"> {{ sale.name }} and {{ sale.price }}</h2>
        <ul>
            <h1 v-for="(make,id) in Finalwords" :key="id">Our new info on todays sale is{{ make.about }}</h1>
            <li>
                it is good to praise GOD
            </li>
        </ul>
        <button v-on:click="ReducePrice(6)">Reduce Price</button>
        <h2 v-for="(product,id) in products" :key="id"> {{ product.name }} and {{ product.price }}</h2>
    </div>

</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    computed:{
        products() {
            return this.$store.state.products;
        },
       ...mapGetters([
        'Salestoday',
        'Finalwords'
       ])

    },
    // methods: {
    //     ReducePrice:function(){
    //         this.$store.commit('ReducePrice')
    //         }
    //     },
    methods:{
       ...mapActions([
        'ReducePrice'
       ])
    }
    }

</script>

<style>

</style> -->