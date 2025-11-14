<template>
  <footer class="bg-[#FF7C7C] text-black px-8 md:px-20 py-2">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">

      <!-- Kiri -->
      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <!-- Logo -->
        <img
          src="/src/assets/logodesweb.png"
          alt="Logo"
          class="w-60 h-60 object-contain -mt-10"
        />

        <!-- Teks lebih rapat -->
        <div class="mt-1 space-y-1">
          <p class="text-sm leading-tight">
            Bringing love and joy<br />through every bloom.
          </p>
          <p class="text-xs">© 2025 Bermekaran</p>
        </div>
      </div>

      <!-- Tengah -->
      <div class="flex flex-col items-center justify-start space-y-6 mt-10">
        <h3 class="font-semibold text-base">Navigation</h3>
        <RouterLink to="/" class="hover:underline">Home</RouterLink>
        <RouterLink to="/products" class="hover:underline">Products</RouterLink>
        <RouterLink to="/about" class="hover:underline">About</RouterLink>
        <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
      </div>

      <!-- Kanan -->
      <div class="flex flex-col items-center md:items-end text-center md:text-right space-y-2 mt-10">
        <h3 class="font-semibold text-base">Get to know us more!</h3>
        <p>Follow us on:</p>
        <div class="flex space-x-4 text-2xl">
          <a href="https://facebook.com" target="_blank" class="hover:text-pink-600">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" class="hover:text-pink-600">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.font-cursive {
  font-family: 'Playfair Display', cursive;
}
</style>
