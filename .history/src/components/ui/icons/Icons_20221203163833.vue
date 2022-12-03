<template>
  <component 
    :is="`${name}Icon`" 
    :fill="color"
  ></component>
</template>

<script>
export default {
  name: 'Icon',

  components: {
    BurgerIcon: () => import('./BurgerIcon.vue')
  },

  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: 'currentColor'
    },
  }
}
</script>