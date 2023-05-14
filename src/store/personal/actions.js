export default {
    storePersonalData(context,payload){
        return context.state = payload;
    },
    storeLocalData(_,payload){
        if(payload.name==='firstName'){
            localStorage.setItem('firstName',payload.value)
           }else if(payload.name==='lastName'){
            localStorage.setItem('lastName',payload.value)
           }else{
            localStorage.setItem('email',payload.value)
           }
    }
}