import request from '@/utils/request'

export function login(data){
    return request({
        url: '/vue-element-admin/user/login',
        method: 'post',
        data
    })
}

export function getInfo(token) {
    return request({
        url: '/vue-element-admin/user/info',
        methods: 'get',
        params: {
            token: token
        }
    })
}