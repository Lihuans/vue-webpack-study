<template>
    <div>
      <h1>我是菜单一</h1>
      <p class="user-info">用户信息:{{userInfos.name}}{{userInfos.id}}</p>
      <div>page:<button @click="count">{{userInfos.page}}</button></div>
    </div>
</template>

<script>
    export default {
      name: "menu-1",
      props: ['userInfos'],
      data() {
        return {
          page: 1
        }
      },
      methods: {
        count() {
          this.userInfos.page++;
          this.$emit('getCount',this.page)
        }
      }
    }
</script>

<style scoped>
  .user-info {
    margin: 10px 0;
  }
</style>
