<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-banner :banners="banner"/>
    <feature-views :recommend="recommend"/>
    <recommend-view/>
    <tab-control class="tab-control" :titles="['最新','流行','最热']"/>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div><div>2122222222222222</div><div>2122222222222222</div>
    <div>2122222222222222</div><div>2122222222222222</div><div>2122222222222222</div>
    <div>2122222222222222</div><div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div><div>2122222222222222</div><div>2122222222222222</div>
    <div>2122222222222222</div><div>2122222222222222</div><div>2122222222222222</div>
    <div>2122222222222222</div><div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div><div>2122222222222222</div><div>2122222222222222</div>
    <div>2122222222222222</div><div>2122222222222222</div><div>2122222222222222</div>
    <div>2122222222222222</div><div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
    <div>2122222222222222</div>
  </div>
</template>

<script>
  import navBar from "components/common/navbar/navBar";
  import homeBanner from "./childComponent/homeSwiper";
  import RecommendView from "./childComponent/RecommendView";
  import FeatureViews from "./childComponent/FeatureViews";
  import tabControl from "components/content/tabControl/tabControl";

  import {getHomeList} from "../../network/home";

  export default {
    name: "home",
    components: {
      navBar,
      homeBanner,
      RecommendView,
      FeatureViews,
      tabControl
    },
    data(){
      return {
        banner: [],
        recommend: [],
        goods: {
          "pop": {page: 0, list: []},
          "news": {page: 0, list: []},
          "sell": {page: 0, list: []}
        }
      }
    },
    created() {
      getHomeList().then(res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;

    position: fixed;
    right: 0;
    left: 0;
    top:0;
    z-index: 9;

  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
