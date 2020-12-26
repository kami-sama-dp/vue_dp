export default {
    state:{
        name: "AAAAA"
    },
    mutations:{
        updateName(state, payload){
            state.name = payload
        }
    },
    actions:{
        aUpdateName(context){
           setTimeout(()=>{
               context.commit("updateName", "3333333333333")
           }, 1000)
        }
    },
    getters:{
        fullName(state){
            return state.name + "1111111"
        },
        //此处传入的getters为当前模块的getters的属性
        fullName2(state, getters){
            return getters.fullName + "22222222"
        },
        //引用根的state里的对象
        fullName3(state, getters, rootState){
            return getters.fullName2 + rootState.counter
        }
    }
}