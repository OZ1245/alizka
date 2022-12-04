<template>
  <article class="post-card">
    <div class="post-card__header">
      <div class="post-card__top">
        <div class="post-card__metadata">
          <img 
            src="/images/categories/games.png" 
            alt="Игры" 
            class="post-card__caterogy-icon"
          />
          <p class="post-card__category-name"></p>
          <p class="post-card__user-name"></p>
          <time class="post-card__date"></time>
        </div>
        <TheButtonIcon icon="Dots"></TheButtonIcon>
      </div>
      <p class="post-cart__title">Название</p>
    </div>
    <div class="post-card__body">
      <img src="/images/posts/1.png" alt="Название">
    </div>
    <div class="post-card__footer">
      <div class="post-cart__metrics">
        <span class="post-cart__likes">
          <Icons 
            iconName="Like" 
            size="22"
            class="post-cart__metric-icon"
          ></Icons>
          0
        </span>
        <span class="post-cart__dislikes">
          <Icons 
            iconName="Like" 
            size="22"
            class="post-cart__metric-icon"
          ></Icons>
          0
        </span>
        <span class="post-cart__comments">
          <Icons 
            iconName="Comments" 
            size="25"
            class="post-cart__metric-icon"
          ></Icons>
          0
        </span>
        <span class="post-cart__reposts">
          <Icons 
            iconName="Share" 
            size="22"
            class="post-cart__metric-icon"
          ></Icons>
          0
        </span>
      </div>
      <span class="post-cart__views">
        <Icons 
          iconName="Eye" 
          size="15"
          class="post-cart__metric-icon"
        ></Icons>
        0
      </span>
    </div>
  </article>
</template>

<script setup>
import TheButtonIcon from '@/components/ui/buttons/TheButtonIcon'
import Icons from '@/components/ui/icons/Icons'
</script>

<style lang="scss" scoped>
.post-card {
  width: 100%;
}

.post-card__header {
  padding: 15px 15px 10px;
}

.post-card__top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
}

.post-card__category-icon {
  
}
</style>