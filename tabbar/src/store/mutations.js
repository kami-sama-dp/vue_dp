import { INCREMENT } from "./mutations-types";

export default  {
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
}