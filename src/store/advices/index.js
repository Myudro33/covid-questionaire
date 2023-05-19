import axios from 'axios'
import { route } from '../../main.js'
export default {
  namespaced: true,
  state() {
    return {
      non_formal_meetings: localStorage.getItem('frequency') || '',
      number_of_days_from_office: localStorage.getItem('work_from_office') || '',
      what_about_meetings_in_live: localStorage.getItem('about_meet') || '',
      tell_us_your_opinion_about_us: localStorage.getItem('environment') || ''
    }
  },
  mutations: {
    nonFormalMeetings(state, payload) {
      state.non_formal_meetings = payload
    },
    daysFromOffice(state, payload) {
      state.number_of_days_from_office = Number(payload)
    },
    aboutMeetings(state, payload) {
      state.what_about_meetings_in_live = payload
    },
    yourOpinion(state, payload) {
      state.tell_us_your_opinion_about_us = payload
    },
    async postData(_, payload) {
      const data = {
        first_name: payload.personal.first_name,
        last_name: payload.personal.last_name,
        email: payload.personal.email,
        had_covid: payload.covid_questions.had_covid,
        had_vaccine: payload.vaccination.had_vaccine,
        non_formal_meetings: payload.advices.non_formal_meetings,
        number_of_days_from_office: payload.advices.number_of_days_from_office
      }
      if (payload.covid_questions.had_covid === 'yes') {
        data.had_antibody_test = payload.covid_questions.had_antibody_test
        if (data.had_antibody_test) {
          if (
            (payload.covid_questions.antibodies.test_date !== '' && payload.covid_questions.antibodies.test_date !== null &&
              payload.covid_questions.antibodies.number !== null)
          ) {
            data.antibodies = {
              test_date: payload.covid_questions.antibodies.test_date,
              number: payload.covid_questions.antibodies.number
            }
          } else if (payload.covid_questions.antibodies.number !== null) {
            data.antibodies = { number: payload.covid_questions.antibodies.number }
          } else if (payload.covid_questions.antibodies.test_date !== '') {
            data.antibodies = { test_date: payload.covid_questions.antibodies.test_date }
          }
        } else {
          data.covid_sickness_date = payload.covid_questions.covid_sickness_date
        }
      }
      if (data.had_vaccine) {
        data.vaccination_stage = payload.vaccination.vaccination_stage
      } else {
        data.i_am_waiting = payload.vaccination.i_am_waiting
      }
      if (payload.advices.what_about_meetings_in_live !== '') {
        data.what_about_meetings_in_live = payload.advices.what_about_meetings_in_live
      }
      if (payload.advices.tell_us_your_opinion_about_us !== '') {
        data.tell_us_your_opinion_about_us = payload.advices.tell_us_your_opinion_about_us
      }
      try {
        const response = await axios.post('https://covid19.devtest.ge/api/create', data)
        if (response.status === 201) {
          route.push({ path: '/thanks' })
        }
      } catch (error) {
        alert(error)
      }
    }
  },
  actions: {
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
}
