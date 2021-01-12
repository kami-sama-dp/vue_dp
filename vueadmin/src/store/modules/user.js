import {login} from '@/api/user';
const state = {

}

const mutations = {

}


// 异步操作
const actions = {
    //变量解构赋值
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((reject, reslove)=>{
            login({username:username.trim(), password: password}).then(res=>{
                const data = res.data
                commit('SET_TOKEN', data.token)
                reslove()
            }).catch(err=>reject(err))
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}