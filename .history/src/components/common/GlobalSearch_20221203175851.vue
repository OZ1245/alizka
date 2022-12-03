<template>
  <div class="global-search">
    <Icon
      iconName="Search"
      class="global-search__icon"
    ></Icon>

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
}

.global-search__icon {
  margin-right: 10px;
}

.global-search__input {
  
}
</style>