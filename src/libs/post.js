import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export function usePost() {
  const store = useStore()

  onMounted(() => store.dispatch('post/getPostsList'))

  const getPostsList = (filter) => computed(() => store.getters['post/getPostsList'](filter))
  const postsList = getPostsList()
  
  const getPostById = (id) => computed(() => store.getters['post/getPostById'](id))
  const post = getPostById()
  
  const addPost = (data) => store.dispatch('post/addPost',data)
  const likePost = (data) => store.dispatch('post/likePost', data)
  const dislikePost = (data) => store.dispatch('post/dislikePost', data)

  return {
    postsList,
    post,
    addPost,
    likePost,
    dislikePost
  }
}