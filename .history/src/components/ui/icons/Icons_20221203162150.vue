<template>
  <component 
    :is="iconName" 
    :fill="color"
    :width="size"
    :height="size"
  ></component>
</template>

<script>
export default {
  name: 'Icon',

  components: {
    burger: () => import('./Burger.vue')
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: 'currentColor'
    },
    size: {
      type: String,
      required: false,
      default: '20px'
    }
  }
}
</script>