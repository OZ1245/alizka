<template>
  <div class="feed">
    <section class="feed__main-area">
      <!-- TODO: Create post -->
      <!-- TODO: Filter bar -->
      <!-- TODO: PostsList -->
      <PostsList></PostsList>
    </section>
    <section class="feed__right-area">
      <!-- TODO: Publics rating -->
      <!-- TODO: Users rating -->
      <!-- TODO: Support links -->
    </section>
  </div>
</template>

<script setup>
import PostsList from '@/components/feed/PostsList'
</script>

<style lang="scss" scoped>
.feed {
  display: flex;
  justify-content: space-between;
}

.feed__main-area {
  width: 660px;
}
.feed__right-area {
  width: 310px;
}
</style>