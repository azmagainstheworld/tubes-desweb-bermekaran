<template>
  <section class="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-16 bg-white">
    <!-- Kiri: Frame Bunga Satuan -->
    <div class="w-full md:w-1/2 flex flex-wrap justify-center md:justify-start md:gap-6 mb-10 md:mb-0">
      <!-- Frame 1 -->
      <Frame
        width="140px"
        height="380px"
        borderRadius="80px"
        bgColor="#FFE5E5"
      >
        <img
          src="/src/assets/rose_about.png"
          alt="Rose About"
          class="h-full object-contain mx-auto"
        />
      </Frame>

      <!-- Frame 2 -->
      <Frame
        width="140px"
        height="380px"
        borderRadius="80px"
        bgColor="#FFE5E5"
      >
        <img
          src="/src/assets/lily_about.png"
          alt="Lily About"
          class="h-full object-contain mx-auto"
        />
      </Frame>

      <!-- Frame 3 -->
      <Frame
        width="140px"
        height="380px"
        borderRadius="80px"
        bgColor="#FFE5E5"
      >
        <img
          src="/src/assets/edelweiss_about.png"
          alt="Edelweiss About"
          class="h-full object-contain mx-auto"
        />
      </Frame>
    </div>  


    <!-- Kanan: Text + Button -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
        Bermekaran will bringing love <br />
        and joy through every bloom.
      </h2>
      <p class="text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
        Every bouquet we create is more than just a collection of flowers —
        it’s a story of love, care, and heartfelt emotions, beautifully
        arranged to brighten someone’s day. Inspired by the beauty of nature
        and the warmth of human connection, we craft each piece with delicate
        attention to color, texture, and balance.
      </p>

      <Button label="Learn More" class="mx-auto md:mx-0" />
    </div>
  </section>
</template>

<script setup>
import Frame from './Frame.vue'
import Button from './Button.vue'
</script>

<style scoped>
section {
  font-family: 'Poppins', sans-serif;
}

/* Responsive adjustment */
@media (max-width: 768px) {
  section {
    text-align: center;
    padding-right: 4rem;
  }

  img {
    max-height: 180px;
  }
}
</style>
