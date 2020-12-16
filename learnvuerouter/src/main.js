import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')


const obj = {
    name :'why'
}

Object.defineProperty(obj, 'age', {value:18})

console.log(obj)