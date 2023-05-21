export default {
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
