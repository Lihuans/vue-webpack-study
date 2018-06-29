<template>
  <div>
    <v-header></v-header>
    <div class="wrap">
      <router-view/>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeader from './header'
  import vFooter from './footer'
    export default {
      name: "layout",
      components: { vHeader, vFooter}
    }
</script>

<style scoped>
  .wrap {
    margin: 20px 0;
    height: 500px;
    /*background-color: azure;*/
  }
</style>
