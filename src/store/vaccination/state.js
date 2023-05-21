export const state = {
          had_vaccine: localStorage.getItem('vaccinated') === 'no' ? false : true || '',
          vaccination_stage: localStorage.getItem('vaccination_stage') || '',
          i_am_waiting: localStorage.getItem('waiting_for') || ''
        }