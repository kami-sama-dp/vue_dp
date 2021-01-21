const settings = require('@/settings')


const state = {
    showSettings: settings.showSettings,
    tagsView: settings.tagsView,
    fixedHeader: settings.fixedHeader,
    sideBarLogo: settings.sideBarLogo,
}

const mutations = {

}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations, 
    actions
}