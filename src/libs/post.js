import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export function usePost() {
  const store = useStore()

  onMounted(() => {
    store.dispatch('post/getCommentsList')
    store.dispatch('post/getPostsList')
  })
  
  const postsList = computed(() => store.getters['post/getPostsList'])
  
  const getPostById = (id) => computed(() => {
    const post = computed(() => store.getters['post/getPostById'](id)).value
    post['comments'] = computed(() => store.getters['post/getCommentsByPostId'](id)).value
    return post
  }).value
  
  const addPost = (data) => store.dispatch('post/addPost',data)
  const likePost = (data) => store.dispatch('post/likePost', data)
  const dislikePost = (data) => store.dispatch('post/dislikePost', data)

  return {
    postsList,
    getPostById,
    addPost,
    likePost,
    dislikePost
  }
}