<template>
  <section class="flex flex-col md:flex-row items-start justify-between py-10 bg-white">
    <!-- Kiri: Teks -->
    <div class="max-w-lg text-center md:text-left">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-10">
        A Flower For <br />
        Every Special Moment
      </h1>

      <p class="text-gray-600 mb-6">
        Discover our curated collection of flower bouquets — simple, elegant,
        and made to make you fall in love.
      </p>

      <Button label="View Products" @click="goToProducts" />
    </div>

    <!-- Kanan: Gambar -->
    <div class="mt-10 md:mt-0">
      <Frame   width="340px" height="450px" borderRadius="300px" bgColor="#FFE5E5">
        <img
          src="/src/assets/bucket_hero_section.png"
          alt="Flower Bouquet"
          class="h-72 w-72 object-contain"
        />
      </Frame>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import Button from './Button.vue';
import Frame from './Frame.vue';

const router = useRouter();

const goToProducts = () => {
  router.push('/products');
};
</script>

<style scoped>
section {
  font-family: 'Poppins', sans-serif;
}
</style>
