<template>
  <button
    class="font-semibold px-6 py-3 rounded-full shadow transition duration-300"
    style="background-color: #FFA4A4; color: black;"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    :style="{ backgroundColor: isHover ? '#FF7C7C' : '#FFA4A4' }"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { ref } from 'vue'

const isHover = ref(false)

defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
button {
  font-family: 'Poppins', sans-serif;
}
</style>
