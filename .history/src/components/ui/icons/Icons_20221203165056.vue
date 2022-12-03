<template>
  <component 
    :is="`${iconName}Icon`" 
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
    iconName: {
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