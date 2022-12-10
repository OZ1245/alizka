<template>
  <div class="posts-list">
    <div
      v-for="(post, i) in postsList" 
      :key="`post-${i}`"
      class="posts-list__item"
    >
      <PostCard v-bind="post"></PostCard>
    </div>
  </div>
</template>

<script setup>
import { usePost } from '@/libs/post.js'
import PostCard from '@/components/feed/PostCard'

const post = usePost()
const postsList = post.postsList
</script>