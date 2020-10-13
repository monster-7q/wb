<template>
  <div class="voiceRoom">
    <ul>
      <li v-for="(item,index) in voiceRoomList "
      :key="index"
      :class="{ active: activeIndex === index }"
      @click="tabsChange(index,item.url)"
      >
        {{item.title}}
      </li>
      <van-icon name="search" />
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      voiceRoomList:[
        {
          title:"房间",
          url:"room"
        },
        {
          title:"电台",
          url:"broadcast"
        },
        {
          title:"派对",
          url:"party"
        },
        {
          title:"关注",
          url:"attention"
        }],
        // 将索引储存在sessionStorage里
      activeIndex:sessionStorage.getItem("activeIndex") | 0,
    };
  },
  methods: {
    tabsChange(i,url){
      sessionStorage.setItem("activeIndex", i);
      this.$router.push(url);
      this.activeIndex = sessionStorage.getItem("activeIndex") | 0
    }
  },
};
</script>
<style lang="less">
.voiceRoom{
  width: 100%;
  >ul{
    position: relative;
    padding: 0 20px;
    overflow: hidden;
    width: 100%;
    background-color: #c7c7c7;
    >li{
      text-align: center;
      width: 50px;
      font-size: 15px;
      float: left;
      height: 50px;
      line-height: 50px;
    }
    >.active{
      font-size: 20px;
      font-weight: 900;
    }
    >.van-icon-search{
      font-size: 30px;
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  }
}
</style>