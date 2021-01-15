import { TabPane } from 'element-ui'
import router from './router'


const whiteList = ['/login', '/auth-redirect']
router.beforeEach((to, from, next) => {
    const hasToken = true
    if (!hasToken){
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
        console.log("333333", to)
        if (whiteList.indexOf(to.path)!= -1){
            next()
        }else{
            console.log('走到了redirect', to)
            next(`/login?redirect=${to.path}`)
        }
    }
})