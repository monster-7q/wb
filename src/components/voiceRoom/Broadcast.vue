<template>
  <div class="broadcast">
    <!-- 推荐组件 -->
    <recommend :recommend="broadcastRecommend"/>
    <!-- banner组件 -->
    <banner-img :bannerImg="BannerImg3"/>
    <!-- 排行榜组件 -->
    <top :roomtoptitle="broadcasttoptitle"/>
    <!-- 音乐组件 -->
    <room-music :roomData="broadcastData" />
    <!-- 人气组件 -->
    <hot :hotdata="popularity" />
    <!-- 人气组件 -->
    <hot :hotdata="popularity1" />
    <!-- 人气组件 -->
    <hot :hotdata="popularity2" />
  </div>
</template>

<script>
// 推荐组件
import Recommend from "@/components/Recommend"
// banner图组件
import BannerImg from "@/components/BannerImg"
// 榜单组件
import Top from "@/components/Top"
// 音乐标题组件
import RoomMusic from "@/components/RoomMusic"
// 人气组件
import Hot from "@/components/Hot"

export default {
  data() {
    return {
      broadcastRecommend:["推荐","情感","音乐","故事","娱乐"],
      BannerImg3:require("@/assets/img/roombanner3.png"),
      broadcasttoptitle:{
        title:"电台听众榜"
      },
      broadcastData:{
        img:require("@/assets/img/huo.png"),
        title:"儿童节快乐",
        more:"true"
      },
      popularity:[{
        top:"唱歌",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"瓜子儿",
        sex:"0"
      },{
        top:"拍卖",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"霸王娟",
        sex:"0"
      }],
      popularity1:[{
        top:"六一特辑",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"瓜子儿",
        sex:"0"
      },{
        top:"六一特辑",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"霸王娟",
        sex:"0"
      }],
      popularity2:[{
        top:"六一特辑",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"瓜子儿",
        sex:"0"
      },{
        top:"六一特辑",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"霸王娟",
        sex:"0"
      }],
    }
  },
  components: {
    Recommend,
    BannerImg,
    Top,
    RoomMusic,
    Hot
  }
}
</script>