<template>
<div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item)&&(!onlyOneChild.children||onlyOneChild.noShowingChildren) && !item.alwaysShow">
        <app-link v-if='onlyOneChild.meta' :to='resolvePath(onlyOneChild.path)'></app-link>
    </template>
</div>
</template>

<script>
import AppLink from './Link';
import {isExternal} from  '@/utils/validate';
export default {
    name: 'SidebarItem',
    components: {
        AppLink
    },
    data() {
        return {
            onlyOneChild: null
        }
    },
    props: {
        item: {
            type: Object,
            requried: true
        },
        basePath:{
            type: String,
            default: ''
        }
    },
    methods: {
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter(item => {
                if (item.hidden) {
                    return false
                }else{
                    this.onlyOneChild = item
                    return true
                }
            })
            if(showingChildren.length === 1){
                return true
            }
            if(showingChildren.length ==0){
                this.onlyOneChild= {...parent, path: '', noShowingChildren:true}
                return true
            }
            return false
  
        },
        resolvePath(routePath){
            if(isExternal(routePath)){
                return routePath
            }
            if(isExternal(this.basePath)){
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
        }
    }
}
</script>
