export default {
    namespaced:true,
    state(){
        return{    
            had_covid: localStorage.getItem('had_covid')||"",
            had_antibody_test: localStorage.getItem('antibody_test')==='no'?false:true||"",
            antibodies: {
              test_date:localStorage.getItem('test_number')||"",
              number: localStorage.getItem('antibody')||null,
            },
            covid_sickness_date: localStorage.getItem('had_covid_date')||"",
        }
    },
    mutations:{
        hadCovid(state,payload){
                state.had_covid = payload
        },
        hadAntibodyTest(state,payload){
            if(payload==='yes'){
                state.had_antibody_test = true
            }else{
                state.had_antibody_test = false
            }
        },
        testDate(state,payload){
            state.antibodies.test_date = payload

        },
        antibodies(state,payload){
                state.antibodies.number = Number(payload)
        },
        sicknessDate(state,payload){
            state.covid_sickness_date = payload
        }
    },
    actions:{
        hadCovid(context,payload){
            context.commit('hadCovid',payload)
        },
        hadAntibodyTest(context,payload){
            context.commit('hadAntibodyTest',payload)   
        },
        antibodies(context,payload){
            context.commit('antibodies',payload)   
        },
        testDate(context,payload){
            context.commit('testDate',payload)   
        },
        sicknessDate(context,payload){
            context.commit('sicknessDate',payload)
        }
    }
}