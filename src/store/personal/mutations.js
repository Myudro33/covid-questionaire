export default {
  firstName(state, payload) {
    state.first_name = payload
    localStorage.setItem('firstName', payload)
  },
  lastName(state, payload) {
    state.last_name = payload
    localStorage.setItem('lastName', payload)
  },
  email(state, payload) {
    state.email = payload
    localStorage.setItem('email', payload)
  }
}
