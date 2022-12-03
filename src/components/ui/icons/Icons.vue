<template>
  <component 
    :is="iconComponent" 
    :width="props.size"
    :height="props.size"
    :viewBox="`0 0 ${props.size} ${props.size}`"
    :fill="color"
  ></component>
</template>

<script setup>
import { defineProps, computed, defineAsyncComponent } from 'vue'

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'currentColor'
  },
  size: {
    type: [ Number, String ],
    required: false,
    default: 20
  }
})

const iconComponent = computed(() => (
  defineAsyncComponent(() => import(`./${props.iconName}Icon.vue`))
))
</script>