import { TabPane } from 'element-ui'
import router from './router'
import { getToken } from '@/utils/auth';
import store from './store';
import role from '../mock/role';


const whiteList = ['/login', '/auth-redirect']
router.beforeEach(async (to, from, next) => {
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            if (hasRoles) {
                next()
            } else {
                try {
                    const { roles } = await store.dispatch('user/get_user_info')
                    const accessRoutes = await store.dispatch('permisson/generateRoutes', roles)
                    router.addRoutes(accessRoutes)
                    next({ ...to, replace: true })
                } catch (err) {
                    next({ path: '/login' })
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) != -1) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }
    }
})