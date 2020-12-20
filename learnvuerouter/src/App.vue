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

    <!-- vuecli4 特性 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <!-- vuecli3 写法
    <keep-alive>
    <router-view/>
    </keep-alive> -->
  </div>
</template>

<script>
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("success message");
//     reject("error meassage");
//   }, 1000);
// })
//   .then((data) => {
//     console.log(data);
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log(err);
//   });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("aaaa");
//   }, 1000);
// })
//   .then((res) => {
//     console.log("第一层:", res);
//     // return Promise.resolve(res + "222");
//     throw "throw message2";
//     // return Promise.reject("error message22222");
//     // return res + "2222"; // 等于直接调用resolve方法
//   })
//   .then((res) => {
//     console.log("第二层:", res);
//     // return Promise.resolve(res + "333");
//     return res + "333"; // 等于直接调用resolve方法
//   })
//   .then((res) => {
//     console.log("第三层:", res);
//   })
//   .catch((err) => {
//   console.log(err);
// });

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("result1");
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("result2");
    }, 1000);
  }),
]).then((results) => {
  console.log(results[0]);
  console.log(results[1]);
});
export default {
  name: "#app",
  data() {
    return {
      userId: "zhangsan",
    };
  },
  methods: {
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "codePush",
          age: 18,
          height: 1.88,
        },
      });
    },
  },
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
