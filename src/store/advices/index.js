export default {
    namespaced: true,
    state() {
        return {
            non_formal_meetings: localStorage.getItem('frequency')||"",
            number_of_days_from_office: localStorage.getItem('work_from_office')||"",
            what_about_meetings_in_live: localStorage.getItem('about_meet')||"",
            tell_us_your_opinion_about_us: localStorage.getItem('environment')||""
        }
    },
    mutations:{
        nonFormalMeetings(state,payload){
            state.non_formal_meetings= payload
        },
        daysFromOffice(state,payload){
            state.number_of_days_from_office = Number(payload)
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