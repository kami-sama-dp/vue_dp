<script>
export default {
    name: 'Item',
    functional: true,
    props: {
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    render(createElement, context) {
        const {
            icon,
            title
        } = context.props
        const vnodes = []
        if (icon) {
            if (icon.includes('el-icon')) {
                const elHtml = createElement('i', {
                    attrs:{
                        class:[icon, 'sub-el-icon']
                    }
                })
                vnodes.push(elHtml)
            } else {
                const elHtml = createElement('svg-icon', {
                    attrs: {
                        'icon-class': icon
                    }
                })
                vnodes.push(elHtml)
            }
        }
        if (title) {
            const elHtml = createElement("span", {
                attrs:{
                    slot: title,
                }
            }, title)
            vnodes.push(elHtml)
        }
        return vnodes
    },
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
