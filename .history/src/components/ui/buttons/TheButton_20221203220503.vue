<template>
  <button
    :type="type"
    class="button-icon"
  >
    <slot></slot>
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
  padding: 6px 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--white);
  box-shadow: 0px 4px 4px rgba(var(--black), 0.25);
  border: none;
  border-radius: 5px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);

  &:hover {
    cursor: pointer;
  }
}
</style>