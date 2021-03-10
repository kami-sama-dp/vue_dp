const getters = {
    permisson_routes: state=>state.permisson.routes,
    roles:state=>state.user.roles,
    sidebar: state=>state.app.sidebar,
    device: state =>state.app.device,
    size: state=>state.app.size
}


export default getters