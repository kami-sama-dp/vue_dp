import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout/index'

// all roles can be accessed
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      },
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation'),
        name: 'documentation',
        meta: { title: 'documentation', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: "/guide",
    redirect: '/guide/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide'),
        name: 'guide',
        meta: { title: 'guide', icon: 'guide', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile'),
        name: 'profile',
        meta: { title: 'profile', icon: 'user', affix: true }
      }
    ]
  }
]

// the routes that need to be dynamically loaded based on user roles
export const asyncRoutes = [
  {
    path: '/permisson',
    component: Layout,
    redirect: '/permisson/index',
    alwaysShow: true, // will always show the root menu
    name: 'permisson',
    meta: { title: 'permisson', icon: 'lock', roles: ['admin', 'editor'] },
    children: [
      {
        path: 'page',
        component: () => import("@/views/permisson/page"),
        name: 'PagePermisson',
        meta: { title: 'Page Permisson',  }
      }, 
      {
        path: 'directive',
        component: () => import("@/views/permisson/directive"),
        name: 'DirectivePermission',
        meta: { title: 'Directive Permisson', }
      },
      {
        path: 'role',
        component: () => import("@/views/permisson/role"),
        name: 'RolePermission',
        meta: { title: 'Role Permisson', }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
