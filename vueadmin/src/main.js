import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'
import 'normalize.css/normalize.css'  //css样式初始化
import './icons'
import './styles/index.scss'
import './permisson'


/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
Vue.config.productionTip = false


Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
