export default {
  namespaced: true,
  state() {
    return {
      had_vaccine: localStorage.getItem('vaccinated') === 'no' ? false : true || '',
      vaccination_stage: localStorage.getItem('vaccination_stage') || '',
      i_am_waiting: localStorage.getItem('waiting_for') || ''
    }
  },
  mutations: {
    hadVaccine(state, payload) {
      if (payload === 'yes') {
        state.had_vaccine = true
      } else {
        state.had_vaccine = false
      }
    },
    vaccinationStage(state, payload) {
      state.vaccination_stage = payload
    },
    waiting(state, payload) {
      state.i_am_waiting = payload
    }
  },
  actions: {
    hadVaccine(context, payload) {
      context.commit('hadVaccine', payload)
    },
    vaccinationStage(context, payload) {
      context.commit('vaccinationStage', payload)
    },
    waiting(context, payload) {
      context.commit('waiting', payload)
    }
  }
}
