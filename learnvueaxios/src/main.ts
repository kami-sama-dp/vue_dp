import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import { config } from 'vue/types/umd'

Vue.config.productionTip = false



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')


axios({
  url: "http://123.207.32.32:8000/home/multidata"
}).then(res => console.log(res))


axios({
  url: "http://123.207.32.32:8000/home/data",
  params:{
    type: 'pop',
    page: 1
  }
}).then(res=> console.log(res))