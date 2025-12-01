<template>
  <!-- Layout mengikuti struktur About Preview -->
  <section class="flex flex-col md:flex-row items-center md:items-start justify-between py-16 px-4 bg-white max-w-7xl mx-auto md:gap-12">

    <!-- 1. TEKS – muncul di kiri pada desktop, paling atas pada mobile -->
    <div class="w-full md:w-1/2 text-center md:text-left order-1 md:order-none mb-8 md:mb-0">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        A Flower For <br />
        Every Special Moment
      </h1>

      <!-- Deskripsi desktop/iPad -->
      <p class="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 hidden md:block">
        Discover our curated collection of flower bouquets — simple, elegant,
        and made to make you fall in love.
      </p>

      <!-- Tombol desktop -->
      <div class="hidden md:block mt-8">
        <Button label="View Products" @click="goToProducts" />
      </div>
    </div>

    <!-- 2. FRAME – kanan di desktop, di tengah pada mobile -->
    <div class="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-none mb-8 md:mb-0">
      <Frame
        width="340px"
        height="450px"
        borderRadius="300px"
        bgColor="#FFE5E5"
      >
        <img
          src="/src/assets/bucket_hero_section.png"
          alt="Flower Bouquet"
          class="h-72 w-72 object-contain"
        />
      </Frame>
    </div>

    <!-- 3. Deskripsi Mobile -->
    <div class="w-full flex justify-center md:hidden order-3 mt-4">
      <p class="text-gray-600 text-center max-w-sm">
        Discover our curated collection of flower bouquets — simple, elegant,
        and made to make you fall in love.
      </p>
    </div>

    <!-- 4. Tombol Mobile -->
    <div class="w-full flex justify-center mt-8 order-4 md:hidden">
      <Button label="View Products" @click="goToProducts" />
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
