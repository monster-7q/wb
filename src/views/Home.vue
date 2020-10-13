<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="activeKey" :placeholder="true" @change="onChange">
      <van-tabbar-item to="/index" icon="service-o">玩吧</van-tabbar-item>
      <van-tabbar-item to="/news" icon="comment-o">消息</van-tabbar-item>
      <van-tabbar-item to="/voiceRoom" icon="more-o">语音房</van-tabbar-item>
      <van-tabbar-item to="/discover" icon="browsing-history-o">发现</van-tabbar-item>
      <van-tabbar-item to="/me" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: sessionStorage.getItem("activeKey") | 0,
    };
  },
  methods: {
    onChange() {
      sessionStorage.setItem("activeKey", this.activeKey);
    },
  },
};
</script>
<style lang="less">
  .van-tabbar{
    background-color: #ccc;
    >.van-tabbar-item--active{
      background-color: #ccc;
    }
  }
</style>
