export default {
    storePersonalData(context,payload){
        return context.state = payload;
    },
    storeLocalData(_,payload){
        localStorage.setItem(payload.name,payload.value)
    }
}