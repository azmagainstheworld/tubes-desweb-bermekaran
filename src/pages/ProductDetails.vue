<script setup>
import { useRoute } from "vue-router";
import { products } from "../data/products.js";

const route = useRoute();
const id = Number(route.params.id);

const product = products.find(p => p.id === id);
</script>

<template>
  <div class="pt-24 pb-32 px-6 max-w-7xl mx-auto">

    <!-- KONTEN PRODUK -->
    <div
      v-if="product"
      class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
    >
      <!-- BAGIAN KIRI = GAMBAR DALAM CARD PINK -->
      <div
        class="bg-[#FFEAEA] rounded-3xl p-10 flex items-center justify-center shadow-md"
      >
        <img :src="product.image" class="w-[350px] object-contain" />
      </div>

      <!-- BAGIAN KANAN = TEKS -->
      <div class="pr-6">
        <h1 class="text-4xl font-bold text-black mb-4">
          {{ product.title }}
        </h1>

        <h2 class="text-2xl font-semibold mb-2">Description</h2>
        <p class="text-gray-700 leading-relaxed mb-6 text-[15px]">
          {{ product.description }}
        </p>

        <p class="text-3xl font-bold text-black mb-8">
          Rp{{ product.price }}
        </p>

        <button
          class="bg-[#FF7C7C] text-white px-8 py-3 rounded-full
                 text-lg font-semibold shadow hover:bg-[#ff6565]
                 transition duration-200"
        >
          Order Now
        </button>
      </div>
    </div>

    <!-- ERROR -->
    <div v-else class="text-center text-red-500 text-xl mt-20">
      Product Not Found
    </div>
  </div>
</template>

<style scoped>
/* biar font sama */
* {
  font-family: "Poppins", sans-serif;
}
</style>
