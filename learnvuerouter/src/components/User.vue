<template lang="">
<div>
    <h2>我是用户界面</h2> {{ userId }}
</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {
        userId() {
            return this.$route.params.userid;
        },
    },
};
</script>

<style lang=""></style>
