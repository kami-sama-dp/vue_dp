<template>
  <div id="app">
    <h2>-------------App</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <h2>-------------子组件</h2>
    <hello-vuex></hello-vuex>
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
};
</script>

<style></style>
