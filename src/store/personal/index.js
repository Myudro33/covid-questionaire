import actions from './actions.js'

export default {
    namespaced:true,
    state(){
       return{
            firstName:'',
            lastName:'',
            email:''
       }
    },
    actions,
}   