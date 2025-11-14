import { createRouter, createWebHistory } from 'vue-router'

// Import semua halaman
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import ProductDetail from '../pages/ProductDetails.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

// Definisikan route
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Products', component: Products },
  { path: '/products/:id', name: 'ProductDetails', component: ProductDetail },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
]

// Buat router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Export router supaya bisa digunakan di main.js
export default router
