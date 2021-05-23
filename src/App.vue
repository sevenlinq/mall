<template>
  <div id="app">
    <router-view/>
    <tab-bar-main/>
  </div>
</template>

<script>
import tabBarMain from "./components/content/tabbar/tabBarMain";
export default {
  name: 'App',
  components: {
    tabBarMain
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
