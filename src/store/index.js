import { createStore } from "vuex";
import personalModule from "./personal/index.js";

const store  = createStore({
   modules:{
        personal:personalModule
   }
})

export default store