import { TabPane } from 'element-ui'
import router from './router'
import { getToken } from '@/utils/auth';


const whiteList = ['/login', '/auth-redirect']
router.beforeEach((to, from, next) => {
    const hasToken = getToken() 
    if (hasToken){
        if(to.path === '/login'){
            next({path: '/'})
        }else{
            const hasRoles = true
            if (hasRoles){
                next()
            }else{
                try{
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