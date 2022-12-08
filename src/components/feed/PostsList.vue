<template>
  <div class="posts-list">
    <div class="posts-list__item">
      <PostCard></PostCard>
    </div>
  </div>
</template>

<script setup>
import { usePost } from '@/libs/post.js'
import PostCard from '@/components/feed/PostCard'

const post = usePost()

console.log(post.postsList)
</script>