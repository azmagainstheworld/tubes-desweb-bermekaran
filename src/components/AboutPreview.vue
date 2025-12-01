<template>
  <!-- Menambahkan md:gap-12 untuk memberi jarak 3rem (48px) antara Frame dan Teks di layar tablet/desktop -->
  <section class="flex flex-col md:flex-row-reverse items-center md:items-start justify-between py-16 px-4 bg-white max-w-7xl mx-auto md:gap-12">

    <!-- 1. Teks Block (Judul, Deskripsi Desktop/iPad, Tombol Desktop) - order-1 (Mobile) -->
    <div class="w-full md:w-1/2 text-center md:text-left order-1 md:order-none mb-8 md:mb-0">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
        Bermekaran will bringing love and joy<br />
        through every bloom.
      </h2>

      <!-- DESKRIPSI DESKTOP/IPAD -->
      <p class="text-gray-700 mb-8 max-w-lg mx-auto md:mx-0 hidden md:block">
        Every bouquet we create is more than just a collection of flowers —
        it’s a story of love, care, and heartfelt emotions, beautifully
        arranged to brighten someone’s day.
      </p>

      <!-- Tombol Desktop untuk About -->
      <div class="hidden md:block mt-8">
        <!-- Memanggil prop fungsi dari parent saat button diklik -->
        <Button label="Learn More" class="mx-auto md:mx-0" @click="goToAbout" />
      </div>
    </div>
    
    <!-- 2. Gambar (Frame) - order-2 (Mobile) -->
    <div class="w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-none mb-8 md:mb-0">
      <Frame
        width="340px"
        height="450px"
        borderRadius="300px"
        bgColor="#FFE5E5"
      >
        <img
          src="/src/assets/lily_about.png"
          alt="Flower Bouquet"
          class="h-72 w-72 object-contain"
        />
      </Frame>
    </div>

    <!-- 3. Deskripsi MOBILE - order-3 (Mobile). Tetap tersembunyi di md: ke atas. -->
    <div class="w-full flex justify-center md:hidden order-3 mt-6">
      <p class="text-gray-700 text-center max-w-sm">
        Every bouquet we create is more than just a collection of flowers —
        it’s a story of love, care, and heartfelt emotions, beautifully
        arranged to brighten someone’s day.
      </p>
    </div>
    
    <!-- 4. Tombol Mobile untuk About - order-4 (Mobile) -->
    <div class="w-full flex justify-center mt-8 order-4 md:hidden">
      <!-- Memanggil prop fungsi dari parent saat button diklik -->
      <Button label="Learn More" @click="goToAbout" />
    </div>

  </section>
</template>

<script setup>
// Asumsi Button dan Frame adalah komponen yang dapat diimpor
import Button from './Button.vue';
import Frame from './Frame.vue';

// Menerima fungsi navigasi sebagai prop dari parent (HomePage.vue)
const props = defineProps({
  goToAbout: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped>
section {
  font-family: 'Poppins', sans-serif;
}
</style>