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
  // top: 62px;
  top: 0;
  left: 0;
  transform: translateX(-100%);

  &--show {
    transform: traslateX(0);
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