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
          <p class="post-card__category-name">Категория</p>
          <p class="post-card__user-name">Юзер</p>
          <time class="post-card__date">1 час</time>
        </div>
        <TheButtonIcon 
          icon="Dots"
          class="post-card__dots-button"
        ></TheButtonIcon>
      </div>
      <p class="post-cart__title">Название</p>
    </div>
    <div class="post-card__body">
      <img src="/images/posts/1.png" alt="Название">
    </div>
    <div class="post-card__footer">
      <div class="post-cart__metrics">
        <span class="post-cart__metric post-cart__metric--likes">
          <Icons 
            iconName="Like" 
            size="22"
            class="post-cart__metric-icon"
          ></Icons>
          0
        </span>
        <span class="post-cart__metric post-cart__metric--dislikes">
          <Icons 
            iconName="Like" 
            size="22"
            class="post-cart__metric-icon"
          ></Icons>
          <!-- 0 -->
        </span>
        <span class="post-cart__metric post-cart__metric--comments">
          <Icons 
            iconName="Comments" 
            size="25"
            class="post-cart__metric-icon"
          ></Icons>
          0
        </span>
        <span class="post-cart__metric post-cart__metric--reposts">
          <Icons 
            iconName="Share" 
            size="22"
            class="post-cart__metric-icon"
          ></Icons>
          0
        </span>
      </div>
      <span class="post-cart__metric post-cart__metric--views">
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
  margin-bottom: 15px;

  background: var(--white);
  border: 1px solid rgba(var(--black), 0.1);
  border-radius: 5px;
}

.post-card__header {
  padding: 15px 15px 10px;
}

.post-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
}

.post-card__metadata {
  display: flex;
  align-items: center;
}

.post-card__caterogy-icon {
  flex-shrink: 0;

  width: 24px;
  height: 24px;
  border-radius: 3px;
  margin-right: 10px;
}

.post-card__category-name {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);

  margin-right: 20px;
}

.post-card__user-name {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: var(--gray);

  margin-right: 20px;
}
.post-card__date {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: var(--gray);
}

.post-card__dots-button {
  color: var(--gray);
}

.post-cart__title {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: var(--black);
}

.post-card__body {
  width: 100%;
  height: 370px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.post-card__footer {
  padding: 14px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: rgba(var(--black), .7);
}

.post-cart__metrics {
  display: flex;
  align-items: center;
}

.post-cart__metric {
  display: inline-flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &--dislikes {
    transform: rotate(180deg);
  }
}

.post-cart__metric-icon {
  margin-right: 8px;
  color: var(--gray);
  transition: color .3s;
  
  &:hover {
    color: var(--orange);
    transition: color .15s;
    cursor: pointer;
  }
}
</style>