import { constantRoutes, asyncRoutes} from '@/router'

function hasPerssmion(routes, roles){
    console.log('hasPerssmion:',routes)
    if(roles.meta &&route.meta.roles){
        return roles.some(role=>route.meta.roles.include(role))
    }
    return true
}


export function filterAsyncRoutes(routes, roles) {
    const res = []
    routes.foreach(route =>{
        const temp = {...route}
        console.log('filterAsyncRoutes--temp:', temp)
        if(hasPerssmion(temp, roles)){
            if(temp.children){
                temp.children = filterAsyncRoutes(temp.children, roles)
            }
            res.push(temp)
        }
    })
    return res
}


const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES(state, routes) {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    }
}

const actions = {
    generateRoutes({ commit }, roles) {
        return new Promise((resolve, reject) => {
            let accessdRoutes
            if(roles.includes('admin')){
                accessdRoutes =  asyncRoutes || []
            }else{
                accessdRoutes = filterAsyncRoutes(asyncRoutes, roles)
            }
            commit('SET_ROUTES', accessdRoutes)
            resolve(accessdRoutes)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}