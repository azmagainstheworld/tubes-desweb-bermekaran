<template>
  <div>
    <!-- Hero Section -->
    <HeroSection :goToProducts="goToProducts" />

    <!-- About Preview -->
    <AboutPreview :goToAbout="goToAbout" />

    <!-- Favorite Picks -->
    <section class="py-16 bg-white text-center">
      <h2 class="text-3xl font-bold mb-12">Our Favorite Picks</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        <!-- Pilihan produk manual -->
        <ProductCard
          :image="products[0].image"
          :title="products[0].title"
          :price="products[0].price"
        />
        <ProductCard
          :image="products[1].image"
          :title="products[1].title"
          :price="products[1].price"
        />
        <ProductCard
          :image="products[2].image"
          :title="products[2].title"
          :price="products[2].price"
        />
        <ProductCard
          :image="products[3].image"
          :title="products[3].title"
          :price="products[3].price"
        />
      </div>

      <!-- Button center -->
      <div class="mt-10 flex justify-center">
        <Button label="View All" @click="goToProducts" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import AboutPreview from '../components/AboutPreview.vue'
import ProductCard from '../components/ProductCard.vue'
import Button from '../components/Button.vue'

// Import data produk
import { products } from '../data/products.js'

const router = useRouter()

const goToProducts = () => {
  router.push('/products')
}

const goToAbout = () => {
  router.push('/about')
}
</script>
