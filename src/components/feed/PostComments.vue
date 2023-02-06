<template>
  <div class="post-comments">
    <template v-if="props.comments.length">
      <pre>{{ props.comments }}</pre>
      <template v-for="(comment, i) in props.comments">
        <article
          v-if="(!showAllComments && i <= 2) || showAllComments"
          :key="`comment-${i}`"
          class="comment"
          >
          <figcaption class="comment__avatar">
            <img 
              :src="`/images/users/${comment.authorId}`" 
              :alt="comment.authorName"
            />
          </figcaption>
          <div class="comment__content">
            <h3 class="comment__title">{{ comment.authorName }}</h3>
            <p class="comment__text">{{ comment.comment }}</p>
            <time class="comment__date">{{ moment(comment.created, 'x').format('D MMM YYYY') }}</time>
          </div>
        </article>
      </template>

      <button 
        v-if="(!showAllComments)"
        type="button" 
        role="link"

        @click="showAllComments = true"
      >
        Показать все комментарии
      </button>

      <!-- TODO: Форма добавления комментария -->
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import moment from 'moment'
import 'moment/locale/ru'
import { defineProps } from 'vue'

const props = defineProps({
  comments: Array
})

const showAllComments = ref(false)
</script>