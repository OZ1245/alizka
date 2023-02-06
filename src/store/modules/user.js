export default {
  state: () => ({
    usersList: [],
  }),
  
  getters: {
    getUsersList: ({ usersList }) => (
      usersList || []
    ),

    getUserById: ({ usersList }) => (id) => (
      usersList.find(user => user.id === id) || null
    ),
  },

  mutations: {
    SET_USERS_LIST(state, data) {
      state.usersList = data
    },
  },

  actions: {
    async fetchUsersList({ commit }) {
      const response = await fetch('/data/users.json')
      const json = await response.json()

      commit('SET_USERS_LIST', json.data)
    }
  },
}
