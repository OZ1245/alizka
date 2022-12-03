<template>
  <header class="header">
    <div class="header__left-column">
      <TheButtonIcon 
        icon="Burger"
        :size="20" 
        title="Меню"
        class="header__menu-toggler"

        @click="toggleMenu"
      ></TheButtonIcon>

      <router-link :to="{ name: 'Home' }">
        <figure class="header__logo">
          <img src="/images/logo.png" alt="Alizka" title="На главную" />
        </figure>
      </router-link>
    </div>
    <div class="header__right-column"></div>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
import TheButtonIcon from '@/components/ui/TheButtonIcon'

export default {
  name: 'Header',

  components: {
    TheButtonIcon
  },

  methods: {
    ...mapActions({
      toggleMenu: 'toggleMenu'
    })
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

.header__left-column {
  display: flex;
  padding-left: 20px;
}

.header__menu-toggler {
  margin-right: 20px;
}

.header__logo {
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    object-fit: contain;
  }
}
</style>