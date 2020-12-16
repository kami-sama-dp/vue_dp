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
      component: About
    },
    {
      path: '/user/:userid',
      component: User
    },
    {
      path: '/profile',
      component: Profile
    }
]

const router = new createRouter({
  routes,
  history:createWebHistory(process.env.BASE_URL)
})

export default router