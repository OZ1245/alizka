<template>
  <aside class="aside">
    <!-- <PerfectScrollbar> -->
      <nav class="aside__menu">
        <ul class="menu menu--navigation">
          <li
            v-for="(item, i) in menuList" 
            :key="`nav-menu-${i}`"
            class="menu__item"
          >
            <RouterLink :to="{ name: item.routerName }">
              <figcaption class="menu__picture-box">
                <Icons
                  :iconName="item.iconName"
                  class="menu__icon"
                ></Icons>
              </figcaption>
              {{ item.title }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <ul class="menu menu--categories">
        <li
          v-for="(item, i) in categoryList"
          :key="`categories-menu-${i}`"
          class="menu__item"
        >
          <RouterLink 
            :to="{
              name: item.routerName,
              params: { uid: item.routerUid }
            }"
          >
            <figcaption class="menu__picture-box">
              <img 
                :src="item.logo" 
                :alt="item.title"
                class="menu__logo"
              >
            </figcaption>
            {{ item.title }}
          </RouterLink>
        </li>
      </ul>

      <ul class="menu menu--addidional">
        <li 
          :class="[
            'menu__item',
            'menu__item--toggler',
            { 'menu__item--active': showAdditionalMenu }
          ]"
        >
          <figcaption 
            class="menu__picture-box"
            @click="showAdditionalMenu = !showAdditionalMenu"
          >
            <Icons
              iconName="Chevron"
            ></Icons>
          </figcaption>
          Ещё
        </li>
        <li
          v-show="showAdditionalMenu" 
          class="menu__item menu__item--additional"
        >
          <RouterLink to="/">
            <figcaption class="menu__picture-box">
              <Icons
                iconName="Chevron"
                size="10"
              ></Icons>
            </figcaption>
            Ещё что-то
          </RouterLink>
        </li>
      </ul>

      <div class="aside__footer">
        <ul class="footer-menu">
          <li
            v-for="(item, i) in footerNavigationList"
            :key="`footer-menu-${i}`" 
            class="footer-menu__item"
          >
            <RouterLink :to="{ name: item.routerName }">
              {{ item.title }}
            </RouterLink>
          </li>
        </ul>

        <!-- TODO: В макете это как скриншот. Я не могу это сверстать -->
        <!-- <div class="aside__social-links">
          <RouterLink to="//play.google.com/" external>

          </RouterLink>
        </div> -->
      </div>
    <!-- </PerfectScrollbar> -->
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import Icons from '@/components/ui/icons/Icons'

const showAdditionalMenu = ref(false)

const menuList = [
  {
    title: 'Главная',
    routerName: 'Home',
    iconName: 'Rocket'
  },
  {
    title: 'Рейтинг',
    routerName: 'Rating',
    iconName: 'Rating'
  },
  {
    title: 'Подписки',
    routerName: 'Subscribes',
    iconName: 'List'
  },
]

const categoryList = [
  {
    title: 'Игры',
    routerName: 'Category',
    routerUid: 'games',
    logo: '/images/categories/games.png' 
  },
  {
    title: 'Индустрия',
    routerName: 'Category',
    routerUid: 'industry',
    logo: '/images/categories/industry.png' 
  },
  {
    title: 'Кино',
    routerName: 'Category',
    routerUid: 'movies',
    logo: '/images/categories/movies.png' 
  },
]

const footerNavigationList = [
  {
    title: 'Реклама',
    routerName: 'Advertising',
  },
  {
    title: 'Правила Площадки',
    routerName: 'Rules',
  },
  {
    title: 'Контакты и Работа',
    routerName: 'Contacts',
  },
  {
    title: 'Служба Поддержки',
    routerName: 'Support',
  },
]
</script>

<style lang="scss" scoped>
.aside {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: sticky;
  top: calc(60px + 15px);
  left: 0;
}
</style>