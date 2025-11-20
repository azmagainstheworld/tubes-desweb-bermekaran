<template>
  <div class="py-16 text-center">
    <h1 class="text-4xl font-bold mb-2">All Flower Bouquets</h1>
    <p class="text-gray-600 mb-12">
      Find your perfect bloom - crafted with love and care
    </p>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
             gap-12 justify-items-center px-6">

      <ProductCard
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :price="product.price"
        :productId="product.id"
        :showButton="true"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
import { products } from "../data/products.js"; 
</script>
