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
import { computed } from 'vue'
import { useStore } from 'vuex'

import Header from '@/components/common/Header'
import Aside from '@/components/common/Aside'

const store = useStore()

const showMenu = computed(() => store.getters.getMenuState)
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
  z-index: 100;
}

.layout__content {
  flex-shrink: 1;
  flex-grow: 1;

  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;

  position: relative;
  
  margin-top: 60px;
  padding-top: 15px;

  background: var(--gray-light);
}

.layout__aside {
  width: 100%;
  max-width: calc(200px + 10px);
  height: 100%;
  position: absolute;
  top: 15px;
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.3s;

  &--show {
    transform: translateX(0);
    transition: transform 0.15s;
  }
}

.layout__main {
  background: rgba(yellow, .4);
  width: 100%;
  max-width: calc(660px + 15px + 310px);
}
</style>