<template>
<div id="app">
    <h2>-------------App组件</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加一个学生</button>
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
            this.$store.commit("increment")
        },
        subtraction() {
            this.$store.commit("decrement")
        },
        addCount(count){
            this.$store.commit("incrementCount", count)
        },
        addStudent(){
            const stu = {id: 114, name:"why111", age:25}
            this.$store.commit("addStudent", stu)
        }
    },
};
</script>

<style></style>
