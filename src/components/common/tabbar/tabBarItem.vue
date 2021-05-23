<template>
  <div class="tab-bar-item" @click="select">
    <div class="item-icon" v-if="!isActive"><slot name="bar-icon"></slot></div>
    <div class="item-active-icon" v-else><slot name="bar-icon-active"></slot></div>
    <div class="item-text" :style="{color: getColor}" ><slot name="bar-title"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "tabBarItem",
    props: {
      path: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "red"
      }
    },
    methods: {
      select(){
        this.$router.push(this.path)
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      getColor(){
        return this.$route.path.indexOf(this.path) !== -1 ? "red" : "";
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
  }

  .item-icon img, .item-active-icon img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>
