import { computed } from 'vue'
import { useStore } from 'vuex'

export function useUser() {
  const store = useStore()

  const fetchUsersList = () => store.dispatch('user/fetchUsersList')
  
  const getUserById = (id) => computed(() => store.getters['user/getUserById'](id)).value
  
  return {
    fetchUsersList,
    getUserById,
  }
}