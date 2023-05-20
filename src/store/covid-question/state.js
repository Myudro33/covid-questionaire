export default {
    state() {
        return {
          had_covid: localStorage.getItem('had_covid') || '',
          had_antibody_test: localStorage.getItem('antibody_test') === 'no' ? false : true || '',
          antibodies: {
            test_date: localStorage.getItem('test_number') || '',
            number: localStorage.getItem('antibody') || null
          },
          covid_sickness_date: localStorage.getItem('had_covid_date') || ''
        }
      },
}