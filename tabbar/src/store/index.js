import Vue from 'vue';
import Vuex from 'vuex';
import { INCREMENT } from "./mutations-types";


Vue.use(Vuex)

const store = new Vuex.Store({
    //该state里面的对象一定是通过mutations操作的
    state: {
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
    },

    //同步操作
    mutations: {
        [INCREMENT](state) {
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
        },
        updateInfo(state){
            // 不要在mutations 做异步操作
            // setTimeout(()=>{
            //     state.info.name = "修改后的名字111111"
            // }, 1000)
            state.info.name = "修改后名字"
            Vue.set(state.info, 'address', '测试1111')

            //该方法做不到响应式
            // delete state.info.age
            
            // Vue.delete(state.info, 'age')
        }
    },

    //异步操作
    actions: {
        // aUpdateInfo(context, payload){
        //     setTimeout(()=>{
        //         context.commit("updateInfo")
        //         console.log(payload.message);
        //         payload.success()
        //     }, 1000)
        // }
        aUpdateInfo(context, payload){
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    context.commit("updateInfo")
                    console.log(payload);
                    resolve("111111111111")
                }, 1000)
            })
        }
    },
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