<template>
  <div class="layout layout--default">
    <Header class="layout__header"></Header>

    <div class="layout__content">
      <Aside 
        :class="[
          'layout__aside',
          { 'layout__aside--show': showMenu }
        ]"
      ></Aside>

      <main class="layout__main">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

import Header from '@/components/common/Header'
import Aside from '@/components/common/Aside'

const store = useStore()

let showMenu = store.getters.getMenuState
// export default {
//   name: 'DefaultLayout',

//   components: {
//     Header,
//     Aside,
//   },

//   computed: {
//     ...mapGetters({
//       showMenu: 'getMenuState'
//     })
//   }
// }
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout__header {
  flex-shrink: 0;

  width: 100%;
  height: 60px;
  position: fixed;
}

.layout__content {
  flex-shrink: 1;
  flex-grow: 1;

  width: 100%;
  height: 100%;
  position: relative;
  margin-top: calc(60px + 15px);
}

.layout__aside {
  background: rgba(gray, .4);
  width: 100%;
  max-width: 227px;
  height: 100%;
  position: fixed;
  top: calc(60px + 15px);
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.3s;

  &--show {
    transform: translateX(0);
    transition: transform 0.15s;
  }
}

.layout__content {
  width: 100%;
  display: flex;
  justify-content: center;
}
.layout__main {
  background: rgba(yellow, .4);
  width: 100%;
  max-width: calc(660px + 15px + 310px);
}
</style>