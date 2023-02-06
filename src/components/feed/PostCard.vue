<template>
  <article class="post-card">
    <div class="post-card__header">
      <div class="post-card__top">
        <div class="post-card__metadata">
          <img 
            :src="categoryImg" 
            :alt="post.categoryName" 
            class="post-card__caterogy-icon"
          />
          <p class="post-card__category-name">
            {{ post.categoryName }}
          </p>
          <routerLink 
            :to="{ name: 'User', props: post.authorId }"
            class="post-card__user-name"
          >
            {{ post.authorName }}
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
      <h2 class="post-card__title">
        {{ post.name }}
        <span 
          v-if="post.adultContent"
          class="post-card__adult-badge"
        >NSFW 18+</span>
      </h2>
    </div>
    <div class="post-card__body">
      <figcaption 
        class="post-card__image"
        :class="{ 'post-card__image--blur': post.adultContent }"
      >
        <img :src="post.img" :alt="post.name">
      </figcaption>
    </div>
    <div class="post-card__footer">
      <div class="post-card__metrics">
        <span class="post-card__metric post-card__metric--likes">
          <Icons
            v-if="!post.liked" 
            iconName="Like" 
            size="22"
            class="post-card__metric-icon"

            @click="likePost(post.id)"
          ></Icons>
          <Icons
            v-else
            iconName="LikeFill"
            size="22"
            class="post-card__metric-icon post-card__metric-icon--active"

            @click="likePost(post.id)"
          ></Icons>
          {{ post.likesCount }}
        </span>
        <span class="post-card__metric post-card__metric--dislikes">
          <Icons 
            v-if="!post.disliked"
            iconName="Like" 
            size="22"
            class="post-card__metric-icon"
            
            @click="dislikePost(post.id)"
          ></Icons>
          <Icons 
            v-else
            iconName="LikeFill" 
            size="22"
            class="post-card__metric-icon post-card__metric-icon--active"

            @click="dislikePost(post.id)"
          ></Icons>
          <!-- {{ post.dislikesCount }} -->
        </span>
        <span class="post-card__metric post-card__metric--comments">
          <Icons 
            iconName="Comments" 
            size="25"
            class="post-card__metric-icon"
          ></Icons>
          {{ post.commentsCount }}
        </span>
        <span class="post-card__metric post-card__metric--reposts">
          <Icons 
            iconName="Share" 
            size="22"
            class="post-card__metric-icon"
          ></Icons>
          {{ post.repostsCount }}
        </span>
      </div>
      <span class="post-card__metric post-card__metric--views">
        <Icons 
          iconName="Eye" 
          size="15"
          class="post-card__metric-icon"
        ></Icons>
        {{ post.viewsCount }}
      </span>
    </div>

    <PostComments :comments="post.comments"></PostComments>
  </article>
</template>

<script setup>
import moment from 'moment'
import 'moment/locale/ru'
import { defineProps, computed } from 'vue'
import { usePost } from '@/libs/post.js'
import TheButtonIcon from '@/components/ui/buttons/TheButtonIcon'
import Icons from '@/components/ui/icons/Icons'
import PostComments from '@/components/feed/PostComments'

const props = defineProps({
  id: Number,
})
const { getPostById, likePost, dislikePost } = usePost();
const post = getPostById(props.id)

const categoryImg = computed(() => `/images/categories/${post.categoryUID}.png`)
const created = computed(() => moment(post.created, 'x').fromNow(true))

console.log('--- Post Card component ---');
console.log('post:', post);
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

.post-card__title {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: var(--black);

  display: inline-flex;
  align-items: center;
}

.post-card__adult-badge {
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

.post-card__metrics {
  display: flex;
  align-items: center;
}

.post-card__metric {
  display: inline-flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &--dislikes {
    transform: rotate(180deg);
  }
}

.post-card__metric-icon {
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