import {login, getInfo} from '@/api/user';
import {getToken, setToken} from '@/utils/auth';
import role from '../../../mock/role';
const state = {
    token: getToken(),
    roles:[],
    name: '' , 
    avatar: '',
    introduction: '',
}

const mutations = {
    SET_TOKEN(state, token){
        state.token = token
        console.log('state.token:', state.token)
    },
    SET_ROLES(state, roles){
        state.roles = roles
    },
    SET_AVATAR(state, avatar){
        state.avatar = avatar
    },
    SET_INTRODUCTION(state, introduction){
        state.introduction = introduction
    },
    SET_NAME(state, name){
        state.name = name
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
                if(!data){
                    reject("验证失败!,please login again")
                }
                const{avatar, introduction, name, roles} = data
                if (!roles ||roles.length <= 0){
                    reject("getInfo: roles must be a non-null array!")
                }
                commit('SET_ROLES', roles)
                commit('SET_NAME', name)
                commit('SET_INTRODUCTION', introduction)
                commit('SET_AVATAR', avatar)
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