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
import BurgerIcon from './BurgerIcon.vue'
import SearchIcon from './SearchIcon.vue'
import BellIcon from './BellIcon.vue'

export default {
  name: 'Icon',

  components: {
    BurgerIcon,
    SearchIcon,
    BellIcon
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