import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Products', component: Products },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: () => import('../pages/ProductDetails.vue')
  },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact }
]

export default createRouter({
  history: createWebHashHistory(),  // <-- ini yang diganti
  routes
})
