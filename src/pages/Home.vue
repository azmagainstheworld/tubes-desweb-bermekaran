<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Preview -->
    <AboutPreview />

    <!-- Favorite Picks -->
    <section class="py-16 bg-white text-center">
      <h2 class="text-3xl font-bold mb-12">Our Favorite Picks</h2>

      <div class="flex flex-wrap justify-center gap-12">
        <ProductCard
          image="/src/assets/bucket_rose_1.png"
          title="Romantic Rose"
          price="450.000"
        />
        <ProductCard
          image="/src/assets/bucket_lily_2.png"
          title="Lily Lovely"
          price="450.000"
        />
        <ProductCard
          image="/src/assets/bucket_matahari_3.png"
          title="Sun Kiss You"
          price="450.000"
        />
        <ProductCard
          image="/src/assets/bucket_tulip_4.png"
          title="Tulip Classic"
          price="450.000"
        />
      </div>
    </section>

    <Button label="View All" />
  </div>
</template>

<script setup>
import AboutPreview from '../components/AboutPreview.vue';
import HeroSection from '../components/HeroSection.vue'
import ProductCard from '../components/ProductCard.vue';
import Button from '../components/Button.vue';
</script>
