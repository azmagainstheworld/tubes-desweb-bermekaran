<template>
  <div class="pt-24 pb-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">

    <div v-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

      <!-- Gambar -->
      <div class="bg-[#FFEAEA] rounded-3xl p-8 flex items-center justify-center shadow-md">
        <img :src="product.image" class="w-full max-w-[350px] object-contain" />
      </div>

      <!-- Detail -->
      <div class="pt-6 lg:pt-0">
        <h1 class="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-4 text-left">
          {{ product.title }}
        </h1>

        <h2 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-left">
          Description
        </h2>
        <p class="text-sm sm:text-base md:text-[15px] text-gray-700 leading-relaxed mb-6 text-left">
          {{ product.description }}
        </p>

        <p class="text-lg sm:text-2xl md:text-3xl font-bold text-black mb-8 text-left">
          Rp{{ product.price }}
        </p>

        <Button label="Order Now" @click="goToContact" class="mx-auto lg:mx-0" />
      </div>

    </div>

    <div v-else class="text-center text-red-500 text-lg mt-20">
      Product Not Found
    </div>
    
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { products } from "../data/products.js";
import Button from "../components/Button.vue";

const route = useRoute();
const router = useRouter();

const id = Number(route.params.id);
const product = products.find(p => p.id === id);

const goToContact = () => {
  router.push("/contact");
};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
}
</style>
