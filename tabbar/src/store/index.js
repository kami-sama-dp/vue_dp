import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        counter:10000
    },

    //同步操作
    mutations:{
        increment(state){
            state.counter ++
        },
        decrement(state){
            state.counter --
        }
    },
    
    //异步操作
    actions:{},
    getters:{},
    modules:{}
})

export default store