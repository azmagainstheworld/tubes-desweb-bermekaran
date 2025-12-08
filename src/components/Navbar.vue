<template>
  <nav class="w-full bg-white">
    <!-- Wrapper -->
    <div class="max-w-[1440px] mx-auto flex items-center justify-between px-6 h-20">
      
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img :src="logo" alt="Logo" class="h-35 w-auto" />
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex flex-1 justify-center gap-[30px] text-gray-800 font-semibold">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/products" class="nav-link">Products</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
        <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
      </ul>



      <!-- Hamburger (Mobile) -->
      <button @click="toggleMenu" class="md:hidden text-3xl text-gray-800">
        <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-white border-t border-gray-200 flex flex-col text-gray-800 font-medium text-lg px-8 py-6 space-y-4"
      >
        <RouterLink @click="closeMenu" to="/" class="nav-link">Home</RouterLink>
        <RouterLink @click="closeMenu" to="/products" class="nav-link">Products</RouterLink>
        <RouterLink @click="closeMenu" to="/about" class="nav-link">About</RouterLink>
        <RouterLink @click="closeMenu" to="/contact" class="nav-link">Contact</RouterLink>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logo from '../assets/logodesweb.png'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
/* Transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Hover warna custom */
.nav-link {
  transition: 0.2s;
}
.nav-link:hover {
  color: #FF7C7C;
}

/* Active page */
.router-link-exact-active {
  color: #FF7C7C;
  font-weight: 700;
  border-bottom: 2px solid #FF7C7C;
  padding-bottom: 4px;
}
</style>
