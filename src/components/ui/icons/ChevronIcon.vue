<template>
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M4.99997 7.85014C4.82075 7.85014 4.64155 7.78171 4.50492 7.64513L0.205141 3.34532C-0.0683805 3.07179 -0.0683805 2.62833 0.205141 2.35491C0.478552 2.0815 0.921933 2.0815 1.19548 2.35491L4.99997 6.15963L8.80449 2.35505C9.07801 2.08164 9.52135 2.08164 9.79474 2.35505C10.0684 2.62846 10.0684 3.07193 9.79474 3.34545L5.49503 7.64527C5.35832 7.78186 5.17913 7.85014 4.99997 7.85014Z" 
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
