<template>
<!-- component 子组件内容会替换SidebarItem里面的app-link标签, 若app-link标签有内容, 则会放在slot标签里 -->
<component :is="type" v-bind='linkProps(to)'>
    <slot />
</component>
</template>

<script>
import {
    isExternal
} from '@/utils/validate';
export default {
    props: {
        to: {
            type: String,
            requried: true
        }
    },
    computed: {
        isExternal(to) {
            return isExternal(to)
        },
        type() {
            if (this.isExternal) {
                return 'a'
            }
            return "router-link"
        }
    },
    methods: {
        linkProps(to) {
            if (this.isExternal) {
                return {
                    href: to,
                    target: '_blank',
                    rel: 'noopener'
                }
            }
            return {
                to: to
            }
        }
    }
}
</script>
