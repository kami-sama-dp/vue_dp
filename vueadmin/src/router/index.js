import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/views/login/index'),
    hidden:true
  },
  {
    path: '/index',
    name: 'index',
    component: ()=>import('@/views/layout')
  },
  {
    path: '/',
    redirect: '/dashboard',
    name:'dashboard',
    component:()=>import('@/views/dashboard')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
