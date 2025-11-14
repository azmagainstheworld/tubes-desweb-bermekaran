<template>
  <nav class="w-full bg-white">
    <!-- Wrapper untuk isi navbar -->
    <div class="max-w-[1440px] mx-auto flex items-center justify-between px-6 h-[80px]">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img src="/src/assets/logodesweb.png" alt="Logo" class="h-35 w-auto" />
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex flex-1 justify-center gap-10 text-gray-800 font-semibold">
        <RouterLink to="/" class="hover:text-pink-500">Home</RouterLink>
        <RouterLink to="/products" class="hover:text-pink-500">Products</RouterLink>
        <RouterLink to="/about" class="hover:text-pink-500">About</RouterLink>
        <RouterLink to="/contact" class="hover:text-pink-500">Contact</RouterLink>
      </ul>

      <!-- Hamburger (Mobile) -->
      <button @click="toggleMenu" class="md:hidden text-3xl text-gray-800">
        <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>
    </div>

    <!-- Drop Down (Mobile) -->
    <transition name="slide-down">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-white border-t border-gray-200 flex flex-col text-gray-800 font-medium text-lg px-8 py-6 space-y-4"
      >
        <RouterLink @click="closeMenu" to="/" class="hover:text-pink-500">Home</RouterLink>
        <RouterLink @click="closeMenu" to="/products" class="hover:text-pink-500">Products</RouterLink>
        <RouterLink @click="closeMenu" to="/about" class="hover:text-pink-500">About</RouterLink>
        <RouterLink @click="closeMenu" to="/contact" class="hover:text-pink-500">Contact</RouterLink>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
