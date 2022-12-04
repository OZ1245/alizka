<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M0 3.09375V20.9062H24V3.09375H0ZM22.5938 11.8963L18.0234 7.32595L11.7422 13.6072L9.02344 10.8885L1.40625 18.5056V4.5H22.5938V11.8963Z" 
      :fill="props.fill"
    />
    <path 
      d="M4.92188 5.90625C3.75877 5.90625 2.8125 6.85252 2.8125 8.01562C2.8125 9.17873 3.75877 10.125 4.92188 10.125C6.08498 10.125 7.03125 9.17873 7.03125 8.01562C7.03125 6.85252 6.08498 5.90625 4.92188 5.90625Z" 
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