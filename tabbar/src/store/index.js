import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 10000,
        students: [
            { id: 100, name: 'why', age: 18 },
            { id: 101, name: 'why1', age: 19 },
            { id: 102, name: 'why2', age: 20 },
            { id: 103, name: 'why3', age: 21 },
            { id: 104, name: 'why4', age: 22 },
        ]
    },

    //同步操作
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state, paylaod){
            // state.counter += count
            state.counter += paylaod.count
            console.log(paylaod)
        },
        addStudent(state, stu){
            state.students.push(stu)
        }
    },

    //异步操作
    actions: {},
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        more20Stu(state){
            return state.students.filter(s=> s.age>20)
        },
        more20StuLength(state, getters){
            return getters.more20Stu.length
        },
        moreAgeStu(state){
            // return function(age){
            //     return state.students.filter(s=>s.age>age)
            // }
            return age=>{
                return state.students.filter(s=>s.age>age)
            }
        },
        moreAgeStuLength(state){
            return age =>{
                return state.students.filter(s=>s.age>age).length
            }
        }
    },
    modules: {}
})

export default store