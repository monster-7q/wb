<template>
  <ul class="room-title">
    <li v-for="(item,index) in recommend" :key="index"
    :class="{ active: activeIndex === index }"
    @click="roomChange(index)"
    >
      {{item}}
      </li>
  </ul>
</template>

<script>
export default {
  props:["recommend"],
  data() {
    return {
      activeIndex:0
    }
  },
  methods:{
    roomChange(i){
      this.activeIndex=i
    }
  }
}
</script>

<style lang="less">
  .room-title{
    overflow: auto;
    display: flex;
    overflow: auto;
    padding: 10px 5px;
    >li{
      flex-shrink: 0;
      text-align: center;
      margin: 0 5px;
      width: 70px;
      height: 35px;
      font-size: 15px;
      line-height: 35px;
      background-color: #f7f8fa;
      border-radius: 30%;
    }
    >.active{
      background-color: #fff671;
      font-weight: 900;
    }
  }
</style>