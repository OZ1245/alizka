<template>
  <component 
    :is="iconComponent" 
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
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
    size: {
      type: [ Number, String ],
      required: false,
      default: 20
    }
  },

  computed: {
    iconComponent() {
      return `${this.iconName}Icon`
    }
  }
}
</script>