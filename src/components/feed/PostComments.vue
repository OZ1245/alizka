<template>
  <div class="post-comments">
    <template v-if="props.comments.length">
      <article
        v-for="(comment, i) in props.comments"
        :key="`comment-${i}`"
        class="comment"
        >
        <!-- TODO: User data -->
        <!-- <figcaption class="comment__avatar">
          <img src="_AUTHOR_AVATAR_SRC_" alt="_AUTHOR_NAME_"/>
        </figcaption> -->
        <div class="comment__content">
          <h3 class="comment__title">{{ comment.authorName }}</h3>
          <p class="comment__text">{{ comment.comment }}</p>
          <time class="comment__date">{{ comment.created }}</time>
        </div>
      </article>
    </template>
  </div>
</template>

<script setup>
// import { defineProps, computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  comments: Array
})
</script>