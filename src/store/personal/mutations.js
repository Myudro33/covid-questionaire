export default {
  firstName(state, payload) {
    state.first_name = payload
  },
  lastName(state, payload) {
    state.last_name = payload
  },
  email(state, payload) {
    state.email = payload
  }
}
