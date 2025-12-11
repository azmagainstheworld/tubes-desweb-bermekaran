import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import About from '../pages/About.vue'
import Skill from '../pages/AboutMe.vue'
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
  { path: '/skill', name: 'Skill', component: Skill },
  { path: '/contact', name: 'Contact', component: Contact }
]

export default createRouter({
  history: createWebHashHistory(),  
  routes
})
