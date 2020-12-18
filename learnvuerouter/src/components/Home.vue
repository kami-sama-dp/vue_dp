<template lang="">
<div>
    <h2>我是首页内容</h2>
    <router-link to='/home/news'>新闻</router-link>
    <router-link to='/home/message'>消息</router-link>
    <router-view></router-view>

</div>
</template>

<script>
export default {
    data() {
        return {
            path: '/home/news'
        };
    },
    activated() {
        console.log('actived')
    },
    deactivated() {
        console.log('deactived')
    },
};
</script>

<style lang=""></style>
