import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue'),
    hidden: true
  },
  {
    path: 'auth-redirect',
    component: () => import('../views/login/auth-redirect.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('../views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('../views/error-page/401.vue'),
    hidden: true
  },
  // {
  //   path:'/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children:[
  //     {
  //       path: 'dashboard',
  //       component: ()=>import('../views/dashboard/index.vue'),
  //       name: 'Dashboard',
  //       meta:{
  //         title: 'Dashboard',
  //         icon: 'dashboard',
  //         affix:true
  //       }
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:constantRoutes
})

export default router
