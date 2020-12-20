import {createRouter, createWebHistory} from 'vue-router';

const Home = () => import ("../components/Home.vue")
const About = () => import ("../components/About.vue")
const HomeMessage = () => import ("../components/HomeMessage.vue")
const HomeNews = () =>import ("../components/HomeNews.vue")
const User = () => import ("../components/User.vue")
const Profile = () => import ("../components/Profile.vue")

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title: '首页'
    },
    children:[
      {
        path:'',
        redirect: '/home/news'
      }, 
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]},
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/user/:userid',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        title: '档案'
      }
    }
]

const router = new createRouter({
  routes,
  history:createWebHistory(process.env.BASE_URL)
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router