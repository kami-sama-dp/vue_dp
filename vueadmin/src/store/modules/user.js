import {login, getInfo} from '@/api/user';
import {getToken, setToken} from '@/utils/auth';
const state = {
    token: getToken(),
    roles:[]
}

const mutations = {
    SET_TOKEN(state, token){
        state.token = token
        console.log('state.token:', state.token)
    },
    SET_ROLES(state, roles){
        state.roles = roles
    }
}


// 异步操作
const actions = {
    //变量解构赋值
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject)=>{
            login({username:username.trim(), password: password}).then(res=>{
                const data = res.data
                commit('SET_TOKEN', data.token)
                setToken(data.token)
                resolve()
        }).catch(err=>reject(err))
        })
    },

    get_user_info({commit, state}){
        return new Promise((resolve, reject)=>{
            getInfo(state.token).then(resp=>{
                const {data} = resp
                resolve(data)
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