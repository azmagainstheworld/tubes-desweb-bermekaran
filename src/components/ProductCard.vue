<template>
    <div class="flex items-center justify-between overflow-hidden shadow-md"
    :style="{
        backgroundColor: bgColor,
        width: width,
        height: height,
        borderRadius: borderRadius
    }">

    <div class="absolute-inset-[1rem] items-center justify-between border-2"
    :style="{
        borderColor: innerBorderColor,
        borderRadius: borderRadius
    }">
    
    <img
    :src="image"
    :alt="title" 
    class="z-10 w-40 h-40 object-contain mt-4"/>

    <div class="z-10 text-center mt-3">
      <h3 class="text-black font-medium text-lg">{{ title }}</h3>
      <p class="text-black font-bold text-lg mt-1">Rp{{ price }}</p>">
    </div>

    </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'


const props = defineProps({
    image: String,
    title: String,
    price: [String, Number],
    innerBorderColor: {
        type: String,
        default: '#FF7C7C' 
    },
    bgColor: {
        type: String,
        default: '#FFEAEA' 
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
        default: '50%' 

  }  
})

</script>

<style scoped>
div {
    font-family: 'Poppins', sans-serif;
}
</style>