<template>
  <div
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    @click.self="close"
  >
    <div class="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
      <h2 class="text-xl font-bold mb-4">Message Sent!</h2>
      <p class="text-gray-600 mb-6">
        Your message has been successfully sent.
      </p>

      <Button label="Close" @click="close" />
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue'
 
const emit = defineEmits(["close"])

const close = () => {
  emit("close")
}
</script>
