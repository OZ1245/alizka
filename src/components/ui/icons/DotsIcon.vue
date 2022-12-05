<template>
  
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12.5 10C12.5 11.3808 11.3808 12.5 10 12.5C8.61923 12.5 7.5 11.3808 7.5 10C7.5 8.61923 8.61923 7.5 10 7.5C11.3808 7.5 12.5 8.61923 12.5 10Z" 
      :fill="props.fill"
    />
    <path 
      d="M5 10C5 11.3808 3.88077 12.5 2.5 12.5C1.11923 12.5 0 11.3808 0 10C0 8.61923 1.11923 7.5 2.5 7.5C3.88077 7.5 5 8.61923 5 10Z" 
      :fill="props.fill"
    />
    <path 
      d="M20 10C20 11.3808 18.8808 12.5 17.5 12.5C16.1192 12.5 15 11.3808 15 10C15 8.61923 16.1192 7.5 17.5 7.5C18.8808 7.5 20 8.61923 20 10Z" 
      :fill="props.fill"
    />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  fill: {
    type: String,
    required: false,
    default: 'currentColor'
  }
})
</script>
