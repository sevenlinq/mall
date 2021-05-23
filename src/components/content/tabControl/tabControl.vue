<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="{active: curIndex === index}" @click="selectTab(index)"
         v-for="(item,index) in titles"  :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    data(){
      return {
        curIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      selectTab(index){
        this.curIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
