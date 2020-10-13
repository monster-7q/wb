<template>
    <div>
        <van-tabbar v-model="active" :fixed="true" :placeholder="true" @change="change">
            <van-tabbar-item class="iconfont icon-youxi" to="/play">玩吧</van-tabbar-item>
            <van-tabbar-item  class="iconfont icon-xiaoxi" to="/message">消息</van-tabbar-item>
            <van-tabbar-item  class="iconfont icon-yuyinjiaohu" to="/voice">语音房</van-tabbar-item>
            <van-tabbar-item  class="iconfont icon-faxian" to="/find">发现</van-tabbar-item>
            <van-tabbar-item  class="iconfont icon-wode" to="/mine">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
   data () {
     return {
         active: sessionStorage.getItem('getactive') || 0
     }
   },
   methods: {
       change() {
           sessionStorage.setItem('getactive', this.active);
       }
   }
}
</script> 

<style lang = "stylus">
.van-tabbar-item__text{
    font-size 12px
}
</style>
