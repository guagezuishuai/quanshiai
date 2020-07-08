<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    const curHref = localStorage.getItem('curHref');
    curHref && this.$router.push(curHref);
  }
}
</script>
<style lang="scss" scoped>
#app{
  width: 100vw;
  height: 100vh;
}
</style>