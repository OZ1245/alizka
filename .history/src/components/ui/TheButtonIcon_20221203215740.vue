<template>
  <button
    :type="type"
    class="button-icon"
  >
    <Icon
      :iconName="icon"
      :color="color"
      :size="size"
      class="button-icon__icon"
    ></Icon>
  </button>
</template>

<script>
import Icon from '@/components/ui/icons/Icons'

export default {
  name: 'TheButtonIcon',

  components: {
    Icon
  },

  props: {
    type: {
      type: String,
      required: false,
      default: 'button'
    },
    icon: {
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
  }
}
</script>

<style lang="scss" scoped>
.button-icon {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
</style>