<template>
<div id="nav">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/' + userId">用户</router-link>
    <router-link
      :to="{ path: '/profile', query: { name: 'why', age: 18, height: 1.88 } }"
    >
      档案
    </router-link> -->
    <button @click="userClick()">用户</button>
    <button @click="profileClick()">档案</button>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "#app",
    data() {
        return {
            userId: "zhangsan",
        };
    },
    methods: {
        userClick() {
            this.$router.push('/user/' + this.userId)
        },
        profileClick() {
            this.$router.push({
              path: '/profile',
              query: {
                name: 'codePush',
                age: 18, 
                height: 1.88
              }
            })
        }
    }
};
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
