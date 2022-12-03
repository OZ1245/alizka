<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'

export default {
  computed: {
    layout() {
      return this.$route.meta.layout || DefaultLayout;
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
}
</style>
