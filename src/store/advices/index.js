export default {
    namespaced: true,
    state() {
        return {
            non_formal_meetings: "",
            number_of_days_from_office: "",
            what_about_meetings_in_live: "",
            tell_us_your_opinion_about_us: ""
        }
    },
    mutations:{
        nonFormalMeetings(state,payload){
            state.non_formal_meetings= payload
        },
        daysFromOffice(state,payload){
            state.number_of_days_from_office = payload
        },
        aboutMeetings(state,payload){
            state.what_about_meetings_in_live=payload
        },
        yourOpinion(state,payload){
            state.tell_us_your_opinion_about_us = payload
        }
    },
    actions:{
        nonFormalMeetings(context,payload){
            context.commit('nonFormalMeetings',payload)
        },
        daysFromOffice(context,payload){
            context.commit('daysFromOffice',payload)
        },
        aboutMeetings(context,payload){
            context.commit('aboutMeetings',payload)
        },
        yourOpinion(context,payload){
            context.commit('yourOpinion',payload)
        }
    }
}