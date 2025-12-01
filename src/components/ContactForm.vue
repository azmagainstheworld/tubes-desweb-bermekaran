<template>
  <div class="relative max-w-xl mx-auto bg-[#FFE5E5] p-10 rounded-xl shadow-md">

    <div class="mb-4">
      <label class="font-semibold">Fullname</label>
      <input v-model="fullname" class="w-full p-3 border rounded-xl mt-1 bg-white" placeholder="Value" />
    </div>

    <div class="mb-4">
      <label class="font-semibold">Email Address</label>
      <input v-model="email" class="w-full p-3 border rounded-xl mt-1 bg-white" placeholder="Value" />
    </div>

    <div class="mb-4">
      <label class="font-semibold">Address</label>
      <input v-model="address" class="w-full p-3 border rounded-xl mt-1 bg-white" placeholder="Value" />
    </div>

    <div class="mb-4">
      <label class="font-semibold">Order Details</label>
      <input v-model="orderDetails" class="w-full p-3 border rounded-xl mt-1 bg-white" placeholder="Value" />
    </div>

    <!-- ERROR MESSAGE -->
    <p v-if="errorMessage" class="text-red-500 mb-4">{{ errorMessage }}</p>

    <!-- BUTTON -->
    <Button label="Send Message" @click="handleSubmit" />

    <!-- MODAL -->
    <ModalMessage v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from '../components/Button.vue'
import ModalMessage from '../components/Modal.vue'

const showModal = ref(false)
const errorMessage = ref("")

// STATE INPUT
const fullname = ref("")
const email = ref("")
const address = ref("")
const orderDetails = ref("")

// FUNGSI SUBMIT
const handleSubmit = () => {
  // cek semua field diisi
  if (!fullname.value || !email.value || !address.value || !orderDetails.value) {
    errorMessage.value = "Semua field harus diisi"
    return
  }

  // jika valid, bersihkan error dan tampilkan modal
  errorMessage.value = ""
  showModal.value = true

  // reset form
  fullname.value = ""
  email.value = ""
  address.value = ""
  orderDetails.value = ""
}
</script>
