<template>
  <component 
    :is="name" 
    :fill="color"
    :width="size"
    :height="size"
  ></component>
</template>

<script>
export default {
  name: 'Icon',

  components: {
    BurgerIcon: () => import('./BurgerIcon.vue')
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