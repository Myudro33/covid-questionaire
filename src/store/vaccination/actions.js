export default {
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