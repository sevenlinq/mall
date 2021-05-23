<template>
  <div id="feature">
    <div class="feature-item" v-for="(item,index) in recommend" :key="index">
      <img :src="item.image"/>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FeatureViews",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  #feature{
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
  }
  .feature-item{
    flex: 1;
    text-align: center;
  }
  .feature-item img{
    width: 90px;
    height: 90px;
  }
</style>
