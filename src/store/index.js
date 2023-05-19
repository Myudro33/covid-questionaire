import { createStore } from 'vuex'
import personalModule from './personal/index.js'
import covidQuestionModule from './covid-question/index.js'
import vaccinationModule from './vaccination/index.js'
import advicesModule from './advices/index.js'

const store = createStore({
  modules: {
    personal: personalModule,
    covid_questions: covidQuestionModule,
    vaccination: vaccinationModule,
    advices: advicesModule
  }
})

export default store
