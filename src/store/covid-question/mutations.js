export default {
  hadCovid(state, payload) {
    state.had_covid = payload
  },
  hadAntibodyTest(state, payload) {
    if (payload === 'yes') {
      state.had_antibody_test = true
    } else {
      state.had_antibody_test = false
    }
  },
  testDate(state, payload) {
    state.antibodies.test_date = payload
  },
  antibodies(state, payload) {
    state.antibodies.number = Number(payload)
  },
  sicknessDate(state, payload) {
    state.covid_sickness_date = payload
  }
}
