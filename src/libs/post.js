import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useUser } from '@/libs/user.js'

export function usePost() {
  const store = useStore()
  const { fetchUsersList, getUserById } = useUser()

  onMounted(() => {
    fetchUsersList()
    store.dispatch('post/getCommentsList')
    store.dispatch('post/getPostsList')
  })
  
  const postsList = computed(() => store.getters['post/getPostsList'])
  
  const getPostById = (id) => computed(() => {
    const post = computed(() => store.getters['post/getPostById'](id)).value
    const comments = computed(() => {
      return store.getters['post/getCommentsByPostId'](id).map(comment => {
        return {
          ...comment,
          authorName: getUserById(comment.authorId).name
        }
      })
    }).value

    return {
      ...post,
      comments: comments
    }
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