<template>
  <div class="global-search">
    <Icons
      iconName="Search"
      class="global-search__icon"
    ></Icons>

    <input 
      v-model="searchphrase"
      type="text" 
      placeholder="Поиск"
      class="global-search__input"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Icons from '@/components/ui/icons/Icons'

const searchphrase = ref('');
</script>

<style lang="scss" scoped>
.global-search {
  width: 100%;
  max-width: 350px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px;
  background: var(--white);
  border-radius: 5px;
}

.global-search__icon {
  margin-right: 10px;
}

.global-search__input {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);
  background: none;
}
</style>