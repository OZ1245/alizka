<template>
  <div class="layout layout--default">
    <Header class="layout__header"></Header>

    <div class="layout__content">
      <Aside class="layout__aside"></Aside>

      <main class="layout__main">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Aside from '@/components/common/Aside'

export default {
  name: 'DefaultLayout',

  components: {
    Header,
    Aside,
  }
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
}

.layout__header {
  background: rgba(orange, .4);
  flex-shrink: 0;
}

.layout__content {
  flex-shrink: 1;
  flex-grow: 1;

  width: 100%;
  height: 100%;
  position: relative;
}

.layout__aside {
  background: rgba(gray, .4);
  width: 0;
  height: 100%;
  position: sticky;
  // top: 62px;
  top: 0;
  left: 0;
}

.layout__content {
  background: rgba(yellow, .4);
  width: 100%;
  max-width: calc(55px + 15px + 310px);
}
</style>