<template>
  <div
    class="flex items-center justify-center shadow-md transition hover:scale-105 duration-300
           w-[220px] sm:w-60 lg:w-[250px]
           min-h-[350px] sm:min-h-[380px] lg:min-h-[400px]"
    :style="{
      backgroundColor: bgColor,
      borderRadius,
      padding: '20px',
    }"
  >
    <!-- INNER BORDER -->
    <div
      class="flex flex-col items-center w-full min-h-full border-2 pb-4"
      :style="{
        borderColor: innerBorderColor,
        borderRadius,
        padding: '20px'
      }"
    >
      <!-- IMAGE -->
      <div class="flex items-center justify-center h-40 mb-4">
        <img
          :src="image"
          :alt="title"
          class="max-h-full object-contain"
        />
      </div>

      <!-- TEXT -->
      <div class="text-center h-20 flex flex-col justify-center mb-1">
        <h3 class="text-black font-semibold text-lg leading-tight">{{ title }}</h3>
        <p class="text-black font-bold text-base mt-1">Rp{{ price }}</p>
      </div>

      <!-- BUTTON -->
      <router-link
        v-if="showButton"
        :to="`/products/${productId}`"
        class="mt-auto"
      >
        <Button label="View Details" />
      </router-link>

    </div>
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";

defineProps({
  image: String,
  title: String,
  price: [String, Number],
  productId: [String, Number],
  showButton: { type: Boolean, default: false },
  innerBorderColor: { type: String, default: '#FF7C7C' },
  bgColor: { type: String, default: '#FFEAEA' },
  borderRadius: { type: String, default: '150px' }
});
</script>

<style scoped>
div {
  font-family: 'Poppins', sans-serif;
}
</style>
