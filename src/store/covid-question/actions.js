export default {
    hadCovid(context, payload) {
        context.commit('hadCovid', payload)
      },
      hadAntibodyTest(context, payload) {
        context.commit('hadAntibodyTest', payload)
      },
      antibodies(context, payload) {
        context.commit('antibodies', payload)
      },
      testDate(context, payload) {
        context.commit('testDate', payload)
      },
      sicknessDate(context, payload) {
        context.commit('sicknessDate', payload)
      }
}