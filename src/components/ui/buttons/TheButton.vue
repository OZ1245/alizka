<template>
  <button
    :type="props.type"
    class="button-icon"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'button'
  }
})
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