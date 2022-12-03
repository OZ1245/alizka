<template>
  <aside class="aside">
    <nav class="aside__menu">
      <ul class="menu">
        <li class="menu__item">
          <RouterLink :to="{ name: 'Home' }"></RouterLink>
        </li>
      </ul>
    </nav>
    <div class="aside__footer"></div>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
}
</script>

<style lang="scss" scoped>
.aside {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>