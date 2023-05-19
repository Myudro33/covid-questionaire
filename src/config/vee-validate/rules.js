import { defineRule } from 'vee-validate' // npm install vee-validate --save
import { required, email, min, max } from '@vee-validate/rules' // npm install @vee-validate/rules

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)

defineRule('redberry_email', (value) => {
  if (!/^[a-z][a-z0-9_.]*@redberry.ge+$/.test(value)) {
    return false
  }
  return true
})

defineRule('date', (value) => {
  if (!value || !value.length) {
    return true
  }

  const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/
  if (dateRegex.test(value)) {
    return true
  }
  return false
})
