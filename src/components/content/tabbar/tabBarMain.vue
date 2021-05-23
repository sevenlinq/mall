<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" >
        <img slot="bar-icon" src="~assets/img/tabbar/home.svg">
        <img slot="bar-icon-active" src="~assets/img/tabbar/home_active.svg">
        <div slot="bar-title">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" >
        <img slot="bar-icon" src="~assets/img/tabbar/category.svg">
        <img slot="bar-icon-active" src="~assets/img/tabbar/category_active.svg">
        <div slot="bar-title">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" >
        <img slot="bar-icon" src="~assets/img/tabbar/cart.svg">
        <img slot="bar-icon-active" src="~assets/img/tabbar/cart_active.svg">
        <div slot="bar-title">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" >
        <img slot="bar-icon" src="~assets/img/tabbar/profile.svg">
        <img slot="bar-icon-active" src="~assets/img/tabbar/profile_active.svg">
        <div slot="bar-title">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import tabBar from "../../common/tabbar/tabBar";
  import tabBarItem from "../../common/tabbar/tabBarItem";
  export default {
    name: "tabBarMain",
    components: {
      tabBar,
      tabBarItem
    }
  }
</script>

<style scoped>

</style>
