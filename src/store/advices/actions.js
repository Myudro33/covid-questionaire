export default {
    nonFormalMeetings(context, payload) {
        context.commit('nonFormalMeetings', payload)
      },
      daysFromOffice(context, payload) {
        context.commit('daysFromOffice', payload)
      },
      aboutMeetings(context, payload) {
        context.commit('aboutMeetings', payload)
      },
      yourOpinion(context, payload) {
        context.commit('yourOpinion', payload)
      },
      postData(context, _) {
        context.commit('postData', this._state.data)
      }
}