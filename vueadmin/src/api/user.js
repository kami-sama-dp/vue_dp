import request from '@/utils/request'

export function login(data){
    return request({
        url: 'vue-element-ui-admin/user/login',
        method: 'post',
        data
    })
}