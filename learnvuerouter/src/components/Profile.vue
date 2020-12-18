<template lang="">
<div>
    <h2>Profile组件</h2>
    <h2>{{ this.$route.query.name }}</h2>
    <h2>{{ this.$route.query.age }}</h2>
    <h2>{{
    this.$route.query.height
  }}</h2>
</div>
</template>

<script>
export default {};
</script>

<style lang=""></style>
