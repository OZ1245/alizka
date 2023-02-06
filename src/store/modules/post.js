export default {
  state: () => ({
    postsList: [],
    commentsList: []
  }),
  
  getters: {
    getPostsList: ({ postsList }) => (
      postsList || []
    ),

    getPostById: ({ postsList }) => (id) => (
      postsList.find(post => post.id === id) || null
    ),
    
    getCommentsByPostId: ({ commentsList }) => (postId) => {
      console.log('--- getCommentsByPostId getter ---')
      console.log('commentsList:', commentsList)
      return commentsList.filter(comment => comment.postId == postId) || []
    }
  },

  mutations: {
    SET_POSTS_LIST(state, data) {
      state.postsList = data
    },

    LIKE_POST(state, postId) {
      state.postsList.map(post => {
        if (post.id === postId) {
          if (!post.liked) {
            post.likesCount++
            if (post.disliked) post.dislikesCount--
            // TODO: Разработать полноценный механизм зайков. Это костыль
            post['liked'] = true
            post['disliked'] = false
          } else {
            post.likesCount--
            post['liked'] = false
          }
        }
      })
    },

    DISLIKE_POST(state, postId) {
      state.postsList.map(post => {
        if (post.id === postId) {
          if (!post.disliked) {
            post.dislikesCount++
            if (post.liked) post.likesCount--

            post['disliked'] = true
            post['liked'] = false
          } else {
            post.dislikesCount--
            post['disliked'] = false
          }
        }
      })
    },

    SET_COMMENTS_LIST(state, data) {
      state.commentsList = data
    },
  },

  actions: {
    async getPostsList({ commit }) {
      const response = await fetch('/data/posts.json')
      const json = await response.json()

      commit('SET_POSTS_LIST', json.data)
    },

    likePost({ commit }, postId) {
      commit('LIKE_POST', postId)
    },

    dislikePost({ commit }, postId) {
      commit('DISLIKE_POST', postId)
    },

    async getCommentsList({ commit }) {
      const response = await fetch('/data/comments.json')
      const json = await response.json()

      commit('SET_COMMENTS_LIST', json.data)
    },
  },
}
