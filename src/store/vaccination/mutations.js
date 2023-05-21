export default {
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
}
