<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M10.5765 9.18981L7.74539 6.2491L0.936248 13.1692L0 12.2487L7.75524 4.36675L10.6139 7.3357L15.5315 2.62688L14.1225 1.21857H17.8012V4.89594L16.4599 3.55525L10.5765 9.18981ZM3.25783 18.7814H7.68958V12.5442H3.25783V18.7814ZM9.41304 18.7814H13.8448V10.5745H9.41304V18.7814ZM15.5682 6.47101V18.7814H20V6.47101H15.5682Z" 
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