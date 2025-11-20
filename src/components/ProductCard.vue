<template>
  <div
    class="flex items-center justify-center shadow-md transition hover:scale-105 duration-300"
    :style="{
      backgroundColor: bgColor,
      width,
      height,
      borderRadius,
      padding: '20px',
    }"
  >
    <!-- INNER BORDER -->
    <div
      class="flex flex-col items-center w-full h-full border-2"
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
  width: { type: String, default: '250px' },
  height: { type: String, default: '400px' },
  borderRadius: { type: String, default: '150px' }
});
</script>

<style scoped>
div {
  font-family: 'Poppins', sans-serif;
}
</style>
