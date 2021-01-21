import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(params){
    return Cookies.set(TokenKey, params)    
}

export function removeToken(params) {
    return Cookies.remove(TokenKey)
}