import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from  "./actions";
import getters from './getters';
import moduleA from './modules/moduleA';

Vue.use(Vuex)

const state =  {
    counter: 10000,
    students: [
        { id: 100, name: 'why', age: 18 },
        { id: 101, name: 'why1', age: 19 },
        { id: 102, name: 'why2', age: 20 },
        { id: 103, name: 'why3', age: 21 },
        { id: 104, name: 'why4', age: 22 },
    ],
    info:{
        name: 'why333333',
        age: 40, 
        height: 1.88
    }
}
const store = new Vuex.Store({
    //该state里面的对象一定是通过mutations操作的
    state,
    
    //同步操作
    mutations,

    //异步操作
    actions,
    getters,
    modules: {
        a: moduleA
    }
})

export default store