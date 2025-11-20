<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Preview -->
    <AboutPreview />

    <!-- Favorite Picks -->
    <section class="py-16 bg-white text-center">
      <h2 class="text-3xl font-bold mb-12">Our Favorite Picks</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        <ProductCard
          image="/src/assets/bucket_rose_1.png"
          title="Romantic Rose"
          price="450.000"
        />
        <ProductCard
          image="/src/assets/bucket_lily_2.png"
          title="Lily Lovely"
          price="550.000"
        />
        <ProductCard
          image="/src/assets/bucket_matahari_3.png"
          title="Sun Kiss You"
          price="350.000"
        />
        <ProductCard
          image="/src/assets/bucket_tulip_4.png"
          title="Tulip Classic"
          price="425.000"
        />
      </div>

      <!-- Button center -->
      <div class="mt-10 flex justify-center">
        <Button label="View All" />
      </div>
    </section>

  </div>
</template>

<script setup>
import AboutPreview from '../components/AboutPreview.vue';
import HeroSection from '../components/HeroSection.vue'
import ProductCard from '../components/ProductCard.vue';
import Button from '../components/Button.vue';
</script>
