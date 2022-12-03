<template>
  <aside 
    :class="[
      'aside',
      { 'aside--show': showMenu }
    ]"
  >
    TODO: ASIDE COMPONENT
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Aside',

  computed: {
    ...mapGetters({
      showMenu: 'getMenuState'
    })
  }
}
</script>