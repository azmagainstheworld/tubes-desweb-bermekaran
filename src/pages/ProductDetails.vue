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

<template>
  <div class="pt-24 pb-32 px-6 max-w-7xl mx-auto">

    <div
      v-if="product"
      class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
    >
      <div
        class="bg-[#FFEAEA] rounded-3xl p-10 flex items-center justify-center shadow-md"
      >
        <img :src="product.image" class="w-[350px] object-contain" />
      </div>

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

        <!-- Pakai komponen button -->
        <Button label="Order Now" @click="goToContact" />
      </div>
    </div>

    <div v-else class="text-center text-red-500 text-xl mt-20">
      Product Not Found
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
}
</style>
