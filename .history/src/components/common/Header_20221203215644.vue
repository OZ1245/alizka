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

      <GlobalSearch></GlobalSearch>
    </div>
    <div class="header__right-column">
      <button
        type="button"
        class="header__premium-button" 

        @click="$router.push({ name: 'Premium' })"
      >
        <Icons 
          iconName="Dollar"
          :size="24"
          class="header__dollar-icon"
        ></Icons>
        Премиум
      </button>

      <TheButtonIcon
        icon="Bell"
        :size="26"
        class="header__notifications"
      ></TheButtonIcon>
    </div>
  </header>
</template>

<script setup>
import { useStore } from 'vuex';

import TheButtonIcon from '@/components/ui/TheButtonIcon'
import GlobalSearch from '@/components/common/GlobalSearch'
import Icons from '@/components/ui/icons/Icons'

const store = useStore()

const toggleMenu = () => store.dispatch('toggleMenu')
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
  align-items: center;
  padding-left: 20px;
}

.header__right-column {
  display: flex;
  align-items: center;
  padding-right: 36px;
}

.header__menu-toggler {
  margin-right: 20px;
}

.header__logo {
  width: 30px;
  height: 30px;
  margin-right: 30px;

  img {
    width: 100%;
    object-fit: contain;
  }
}

.header__premium-button {
  padding: 6px 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--yellow);
  box-shadow: 0px 4px 4px rgba(var(--black), 0.25);
  border: none;
  border-radius: 20px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);
  transition: background-color .3s;
  
  &:hover {
    background: var(--gray-very-light);
    cursor: pointer;
    transition: background-color .15s;
  }
}

.header__dollar-icon {
  margin-right: 5px;
}

.header__notifications {
  margin-left: 20px;
  color: var(--black);

  &:hover {
    color: var(--white);
  }
}
</style>