export const state =  {
         first_name: localStorage.getItem('firstName') || '',
         last_name: localStorage.getItem('lastName') || '',
         email: localStorage.getItem('email') || ''
        }