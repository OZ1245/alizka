<template>
  <button
    :type="type"
  >
    <Icon
      :name="icon"
      :color="color"
      :size="size"
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
      type: String,
      required: false,
      default: '20px'
    }
  }
}
</script>