export default {
  namespaced: true,
  state() {
    return {
      first_name: localStorage.getItem('firstName') || '',
      last_name: localStorage.getItem('lastName') || '',
      email: localStorage.getItem('email') || ''
    }
  },
  mutations: {
    firstName(state, payload) {
      state.first_name = payload
    },
    lastName(state, payload) {
      state.last_name = payload
    },
    email(state, payload) {
      state.email = payload
    }
  },
  actions: {
    firstName(context, payload) {
      context.commit('firstName', payload)
    },
    lastName(context, payload) {
      context.commit('lastName', payload)
    },
    email(context, payload) {
      context.commit('email', payload)
    },
    storeLocalData(_, payload) {
      localStorage.setItem(payload.name, payload.value)
    }
  }
}
