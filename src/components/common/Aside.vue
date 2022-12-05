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
            <RouterLink 
              :to="{ name: item.routerName }"
              active-class="menu__link--active"
              class="menu__link"
            >
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
              active-class="menu__link--active"
              class="menu__link"
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
          <li class="menu__item menu__item--toggler">
            <a 
              :class="[
                'menu__link',
                { 'menu__link--active': showAdditionalMenu }
              ]"
              @click="showAdditionalMenu = !showAdditionalMenu"
            >
              <figcaption class="menu__picture-box">
                <Icons
                  iconName="Chevron"
                  size="10"
                  class="menu__icon"
                ></Icons>
              </figcaption>
              Ещё
            </a>
          </li>
          <li
            v-show="showAdditionalMenu" 
            class="menu__item menu__item--additional"
          >
            <RouterLink to="/" class="menu__link">
              Ещё что-то
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="aside__footer">
        <ul class="footer-menu">
          <li
            v-for="(item, i) in footerNavigationList"
            :key="`footer-menu-${i}`" 
            class="footer-menu__item"
          >
            <RouterLink 
              :to="{ name: item.routerName }"
              active-class="footer-menu__link--active"
              class="footer-menu__link"
            >
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
  padding: calc(60px + 15px) 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // position: sticky;
  // top: calc(60px + 15px);
  // left: 0;

  background: var(--gray-very-light);
}

.aside .menu__link {
  display: inline-flex;
  width: 100%;
  padding: 12px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);
  text-decoration: none;

  background: transparent;
  border-radius: 8px;
  transition: background-color .3s;

  &:hover {
    background: var(--white);
    transition: background-color .15s;
    cursor: pointer;
  }
  
  &--active {
    background: var(--white);
  }
}

.aside .menu--categories .menu__link {
  padding: 12px 10px;
  border-radius: 0;
  
  &:hover,
  &--active {
    background: var(--white-dark)
  }
}

.aside .menu--addidional .menu__link:hover {
  background: transparent;
  text-decoration: underline;
}
.aside .menu--addidional .menu__link--active {
  background: transparent;
}

.aside .menu--addidional .menu__link--active .menu__icon {
  transform: rotate(180deg);
}

.aside .menu__icon {
  transition: transform .15s;
}

.aside .menu__picture-box {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aside .footer-menu__item:not(:last-child) {
  margin-bottom: 3px;
}

.aside .footer-menu__link {
  padding: 6px 10px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--black);
  text-transform: capitalize;
  text-decoration: none;
  transition: color .3s;
  
  &:hover {
    color: var(--orange);
    transition: color .15s;
  }
}
</style>