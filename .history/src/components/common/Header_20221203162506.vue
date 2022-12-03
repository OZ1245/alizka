<template>
  <header class="header">
    <div class="header__left-column">
      <TheButtonIcon 
        icon="burger"
        size="20px" 
        title="Меню"
      ></TheButtonIcon>
    </div>
    <div class="header__right-column"></div>
  </header>
</template>

<script>
import TheButtonIcon from '@/components/ui/TheButtonIcon'

export default {
  name: 'Header',

  components: {
    TheButtonIcon
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(79.78deg, var(--orange-dark) 9.12%, var(--orange-light) 92.5%);
}
</style>