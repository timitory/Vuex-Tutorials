// import Vue from 'vue';
import Vuex from 'vuex';
//import axios from 'axios';

// Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        // products:[
        //     {name:'Banana Skin',price:20},
        //     {name:'Shiny Star',price:40},
        //     {name:'Green Shells',price:60},
        //     {name:'Red Shells',price:80}
        //   ],
        //   documents:[
        //     {
        //       "id": 1,
        //       "make": "Chevrolet",
        //       "body": "coupe",
        //       "price": 45323,
        //       "year": 2020
        //   },
        //     ],
        baseURL:'https://limitless-lake-55070.herokuapp.com/',
        products:[],
        categories:[]

    },
    getters: {
        Salestoday:(state) =>{
            var Saletoday=state.products.map(sale =>{
                return {
                    name:'**' + sale.name + '**',
                    price:sale.price/2
                }
                
            })
            return Saletoday;
        },
        Finalwords:state=>{
            var makers=state.documents.map(maker=>{
                return {
                    about: 'The maker of this car ' +''+ maker.make+ ''+'with an ID of '+''+ maker.id +
                  ''+  'from '+''+ maker.body + ''+ 'at a price of ' +''+ maker.price + ''+'in the year ' + ''+ maker.year + new Date()
                }
                
            })
            return makers
        },
        // FetchData:(state)=>{
        // axios.get( state.baseURL + 'category/' )
        // .then(res =>{
        //   state.categories = res.data
        // }).catch((err)=>console.log('err',err))
        // },
        // getCategories:(state)=>{
        //       axios.get( state.baseURL + "product/" )
        //         .then(res =>{
        //       state.products = res.data
        //       console.log(state.products)
        //     }).catch((err)=>console.log('err',err))
        // },
        
    },
  
    mutations: {
        ReducePrice:(state,noy)=>{
            state.products.forEach(product=>{
                product.price -= noy;
            })
        },
        setCategories:(state,categories)=>{
            state.categories=categories
        },
        setProducts:(state,products)=>{
            state.products=products
        }
    },
    actions:{
        ReducePrice:(context,noy)=>{
            setTimeout(function(){
                context.commit('ReducePrice',noy)
            },3000)
           
        },
        // async fetchCategories({ commit, state }) {
        //      await axios.get(`${state.baseURL}category/`)
        //      .then(response=>{ 
        //         state.categories=response.data
        //         commit('setCategories', response.data);
        //      }).catch ((error)=>
        //       console.error('Error fetching categories:', error)
        //     )
        //   },
//           async fetchProducts({ commit, state }) {
//              await axios.get(`${state.baseURL}product/`)
//              .then(response=>{
//                 state.products=response.data
//                 commit('setProducts', response.data)
//              }).catch ((error)=>
//               console.error('Error fetching products:', error)
// )
//             }
          
    },
    
    
})
