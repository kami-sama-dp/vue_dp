import { TabPane } from 'element-ui'
import router from './router'
import { getToken } from '@/utils/auth';
import store from './store';


const whiteList = ['/login', '/auth-redirect']
router.beforeEach((to, from, next) => {
    const hasToken = getToken() 
    if (hasToken){
        if(to.path === '/login'){
            next({path: '/'})
        }else{
            const hasRoles = store.getters.roles && store.getters.roles.length > 0 
            console.log('hasRoles:', hasRoles)
            if (hasRoles){
                next()
            }else{
                try{
                    const {roles} = await store.dispatch('user/get_user_info')
                }catch(err){
                    next({path: '/login'})
                }
            }
        }
    }else{
        if (whiteList.indexOf(to.path)!= -1){
            next()
        }else{
            next(`/login?redirect=${to.path}`)
        }
    }
})