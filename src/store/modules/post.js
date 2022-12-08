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
    }
  },
  actions: {
    async getPostsList({ commit }) {
      const response = await fetch('/data/posts.json')
      const json = await response.json()
      commit('SET_POSTS_LIST', json)
    }
  },
}
