<template>
<div id="app">
    <h2>-------------App组件, modules里的内容</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改</button>

    <h2>-------------App组件</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加一个学生</button>
    <button @click="updateInfo">添加信息</button>
    <h2>-------------子组件</h2>
    <hello-vuex></hello-vuex>
    <h2>-------------App内容: getters相关信息----------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>{{$store.getters.more20StuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(18)}}</h2>
    <h2>{{$store.getters.moreAgeStuLength(18)}}</h2>
</div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import {INCREMENT} from "./store/mutations-types";
export default {
    name: "App",
    components: {
        HelloVuex,
    },
    data() {
        return {
            message: "我是App组件",
        };
    },
    computed:{
      more20Stu(){
        return this.$store.state.students.filter(s=>s.age>=20)
      }
    },
    methods: {
        addition() {
            this.$store.commit(INCREMENT)
        },
        subtraction() {
            this.$store.commit("decrement")
        },
        addCount(count){
            // this.$store.commit("incrementCount", count)
            this.$store.commit({
                type: "incrementCount",
                // count:count
                count,
            })
        },
        addStudent(){
            const stu = {id: 114, name:"why111", age:25}
            this.$store.commit("addStudent", stu)
        },
        updateInfo(){
        //   this.$store.commit("updateInfo")
            // this.$store.dispatch("aUpdateInfo",{
            //     message: "我是携带的信息",
            //     success:  ()=>{
            //         console.log("里面已经完成了！");
            //     }
            // })
            this.$store.dispatch("aUpdateInfo", "我是携带的信息").then(res=>console.log(res))
        },
        updateName(){
            this.$store.commit("updateName", "bbbbbb")           
        },
        asyncUpdateName(){
            this.$store.dispatch("aUpdateName")
        }
    },
};
</script>

<style></style>
