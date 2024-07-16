import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import Category from '../views/Category/Category.vue'
import Admin from '../views/Admin.vue'
import Product from '../views/Products/Product.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component:AboutView
    // },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/addcategory',
      name: 'addcategory',
      component:AddCategory
    },
    {
      path: '/admin/category',
      name: 'Category',
      component:Category
    },
    {
      path: '/admin/product',
      name: 'adminproduct',
      component:Product
    },
    
  ]
})

export default router
