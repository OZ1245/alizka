<template>
  <article class="post-card">
    <div class="post-card__header">
      <div class="post-card__top">
        <div class="post-card__metadata">
          <img 
            :src="categoryImg" 
            :alt="props.categoryName" 
            class="post-card__caterogy-icon"
          />
          <p class="post-card__category-name">
            {{ props.categoryName }}
          </p>
          <routerLink 
            :to="{ name: 'User', props: props.authorId }"
            class="post-card__user-name"
          >
            {{ props.authorName }}
          </routerLink>
          <time class="post-card__date">
            {{ created }}
          </time>
        </div>
        <TheButtonIcon 
          icon="Dots"
          class="post-card__dots-button"
        ></TheButtonIcon>
      </div>
      <p class="post-cart__title">
        {{ props.name }}
        <span 
          v-if="props.adultContent"
          class="post-cart__adult-badge"
        >NSFW 18+</span>
      </p>
    </div>
    <div class="post-card__body">
      <figcaption 
        class="post-card__image"
        :class="{ 'post-card__image--blur': props.adultContent }"
      >
        <img :src="props.img" :alt="props.name">
      </figcaption>
    </div>
    <div class="post-card__footer">
      <div class="post-cart__metrics">
        <span class="post-cart__metric post-cart__metric--likes">
          <Icons
            v-if="!props.liked" 
            iconName="Like" 
            size="22"
            class="post-cart__metric-icon"

            @click="onLikePost()"
          ></Icons>
          <Icons
            v-else
            iconName="LikeFill"
            size="22"
            class="post-cart__metric-icon post-cart__metric-icon--active"

            @click="onLikePost()"
          ></Icons>
          {{ props.likesCount }}
        </span>
        <span class="post-cart__metric post-cart__metric--dislikes">
          <Icons 
            v-if="!props.disliked"
            iconName="Like" 
            size="22"
            class="post-cart__metric-icon"
            
            @click="onDislikePost()"
          ></Icons>
          <Icons 
            v-else
            iconName="LikeFill" 
            size="22"
            class="post-cart__metric-icon post-cart__metric-icon--active"

            @click="onDislikePost()"
          ></Icons>
          <!-- {{ props.dislikesCount }} -->
        </span>
        <span class="post-cart__metric post-cart__metric--comments">
          <Icons 
            iconName="Comments" 
            size="25"
            class="post-cart__metric-icon"
          ></Icons>
          {{ props.commentsCount }}
        </span>
        <span class="post-cart__metric post-cart__metric--reposts">
          <Icons 
            iconName="Share" 
            size="22"
            class="post-cart__metric-icon"
          ></Icons>
          {{ props.repostsCount }}
        </span>
      </div>
      <span class="post-cart__metric post-cart__metric--views">
        <Icons 
          iconName="Eye" 
          size="15"
          class="post-cart__metric-icon"
        ></Icons>
        {{ props.viewsCount }}
      </span>
    </div>
  </article>
</template>

<script setup>
import moment from 'moment'
import 'moment/locale/ru'
import { defineProps, computed } from 'vue'
import { usePost } from '@/libs/post.js'
import TheButtonIcon from '@/components/ui/buttons/TheButtonIcon'
import Icons from '@/components/ui/icons/Icons'

const post = usePost();

const props = defineProps({
  id: Number,
  name: String,
  img: String,
  categoryName: String,
  categoryUID: String,
  authorId: Number,
  authorName: String,
  created: String,
  likesCount: Number,
  dislikesCount: Number,
  commentsCount: Number,
  repostsCount: Number,
  viewsCount: Number,
  adultContent: Boolean,
  liked: Boolean,
  disliked: Boolean,
})

const categoryImg = computed(() => `/images/categories/${props.categoryUID}.png`)
const created = computed(() => moment(props.created, 'x').fromNow(true))

const onLikePost = () => {
  post.likePost(props.id)
}
const onDislikePost = () => {
  post.dislikePost(props.id)
}
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
  margin-bottom: 12px;
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
  text-decoration: none;

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

  display: inline-flex;
  align-items: center;
}

.post-cart__adult-badge {
  font-family: 'Inter';
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: var(--red);

  padding: 5px 7px;
  margin-left: 18px;
  background: var(--white);
  border: 1px solid var(--red);
  border-radius: 40px;
}

.post-card__body {
  width: 100%;
  height: 370px;
}

.post-card__image {
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &--blur {
    img {
      filter: blur(15px);
    }
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

  &--active {
    color: var(--orange);
  }
}
</style>