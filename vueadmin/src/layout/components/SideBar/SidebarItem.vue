<template>
<div v-if="!item.hidden">
    <!-- 路由下只有一个children或者没有 -->
    <template v-if="hasOneShowingChild(item.children, item)&&(!onlyOneChild.children||onlyOneChild.noShowingChildren) && !item.alwaysShow">
        <app-link v-if='onlyOneChild.meta' :to='resolvePath(onlyOneChild.path)'>
            <!-- 以下内容会放在子组件的slot的标签里-->
            <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown': !isNest}">
                <item :icon='onlyOneChild.meta.icon ||(item.meta &&item.meta.icon)'  :title='onlyOneChild.meta.title'>
                </item>
            </el-menu-item>
        </app-link>
    </template>
    <!--不然就认为有subMenu-->
    <el-submenu v-else ref='subMenu' :index='resolvePath(item.path)' popper-append-to-body>
        <template slot='title'>
           <item v-if='item.meta' :icon='item.meta&&item.meta.icon' :title='item.meta&&item.meta.title'></item>
        </template>
        <sidebar-item v-for='child in item.children' :key='child.path' :item='child' :base-path='resolvePath(child.path)' :is-nest="true" />
    </el-submenu>
</div>
</template>

<script>
import AppLink from './Link';
import path from 'path';
import Item from './Item';
import {isExternal} from '@/utils/validate';
export default {
    name: 'SidebarItem',
    components: {
        AppLink,
        Item
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
        basePath: {
            type: String,
            default: ''
        },
        isNest:{
            type: Boolean,
            default: false
        }
    },
    methods: {
        hasOneShowingChild(children = [], parent) {
            // console.log("hasOneShowingChild:", this.item)
            const showingChildren = children.filter(item => {
                if (item.hidden) {
                    return false
                } else {
                    this.onlyOneChild = item
                    return true
                }
            })
            if (showingChildren.length === 1) {
                return true
            }
            if (showingChildren.length == 0) {
                this.onlyOneChild = {
                    ... parent,
                    path: '',
                    noShowingChildren: true
                }
                // console.log(this.onlyOneChild);
                return true
            }
            
            return false

        },
        resolvePath(routePath) {
            if (isExternal(routePath)) {
                return routePath
            }
            if (isExternal(this.basePath)) {
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
        },
        resolvePath1(routePath) {
            console.log("11111",path.resolve(this.basePath, routePath))
            if (isExternal(routePath)) {
                return routePath
            }
            if (isExternal(this.basePath)) {
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
        },
    }
}
</script>
