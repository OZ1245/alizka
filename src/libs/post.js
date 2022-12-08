import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export function usePost() {
  const store = useStore()

  onMounted(() => store.dispatch('post/getPostsList'))

  const postsList = (filter) => computed(() => store.getters['post/getPostsList'](filter))
  
  const post = (id) => computed(() => store.getters['post/getPostById'](id))
  
  const addPost = (data) => store.dispatch('post/addPost')(data)

  return (
    postsList,
    post,
    addPost
  )
}