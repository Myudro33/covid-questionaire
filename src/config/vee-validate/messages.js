import { configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'

configure({
  generateMessage: localize({
    en: {
      messages: {
        required: 'This Field is Required',
        email: 'This input is not in email format',
        min: '{field} must have at least 0:{min} symbols',
        max: '{field} must have at least 0:{max} symbols',
        redberry_email: 'This field must be in @redberry.ge mail format'
      }
    },
    ka: {
      messages: {
        required: 'ეს ველი სავალდებულოა',
        email: 'ეს ველი უნდა იყოს მეილის ფორმატში',
        min: '{field} ველი უნდა შედგებოდეს  მინიმუმ 0:{min} სიმბოლოსგან',
        max: '{field} ველი უნდა შედგებოდეს  მაქსიმუმ 0:{min} სიმბოლოსგან',
        redberry_email: '{field}ს ველი უნდა იყოს redberry-ის მეილის ფორმატში',
        date: 'რიცხვი უნდა ჩაიწეროს დღე/თვე/წელი ფორმატით'
      },
      names: {
        firstName: 'სახელის',
        lastName: 'გვარის',
        email: 'მეილი',
      }
    }
  })
})

setLocale('ka')
