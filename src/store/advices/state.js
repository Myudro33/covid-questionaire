export const state = {
          non_formal_meetings: localStorage.getItem('frequency') || '',
          number_of_days_from_office: localStorage.getItem('work_from_office') || '',
          what_about_meetings_in_live: localStorage.getItem('about_meet') || '',
          tell_us_your_opinion_about_us: localStorage.getItem('environment') || ''
        }