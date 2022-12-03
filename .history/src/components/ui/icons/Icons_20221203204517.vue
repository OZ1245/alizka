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
import BurgerIcon from './BurgerIcon'
import SearchIcon from './SearchIcon'
import BellIcon from './BellIcon'
import DollarIcon from './DollarIcon'
import UserIcon from './UserIcon'

export default {
  name: 'Icon',

  components: {
    BurgerIcon,
    SearchIcon,
    BellIcon,
    DollarIcon,
    UserIcon
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