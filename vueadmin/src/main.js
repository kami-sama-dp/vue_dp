import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'
import 'normalize.css/normalize.css'  //css样式初始化
import './icons'
import './styles/index.scss';

Vue.config.productionTip = false


Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
