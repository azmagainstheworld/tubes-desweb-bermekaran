<template>
  <div
    class="flex items-center justify-center overflow-hidden shadow-md"
    :style="{
      backgroundColor: bgColor,
      width: width,
      height: height,
      borderRadius: borderRadius
    }"
  >
    <!-- Gambar atau konten di dalam frame -->
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  bgColor: {
    type: String,
    default: '#FFEAEA' // warna dasar frame (lembut, senada dengan tema bunga)
  },
  width: {
    type: String,
    default: '300px'
  },
  height: {
    type: String,
    default: '300px'
  },
  borderRadius: {
    type: String,
    default: '1rem' // default 16px
  }  
})
</script>
