export default {
  state: {
    postsList: []
  },
  getters: {
    getPostsList: ({ postsList }) => (filter = null) => {
      if (filter) {
        // TODO
        return postsList || []
      }
    
      return postsList || []
    },

    getPostById: ({ postsList }) => (id) => (
      postsList.find(post => post.id === id) || null
    )  
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
    }
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
    }
  },
}
