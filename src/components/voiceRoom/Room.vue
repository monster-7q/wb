<template>
  <div class="room">
    <!-- 推荐组件 -->
    <recommend :recommend="roomRecommend"/>
    <!-- banner组件 -->
    <banner-img :bannerImg="BannerImg1"/>
    <!-- 榜单组件 -->
    <top :roomtoptitle="roomtoptitle"/>
    <!-- 人气组件 -->
    <hot :hotdata="popularity" />
    <!-- 音乐组件 -->
    <room-music :roomData="roomMusicData" />
    <!-- 人气组件 -->
    <hot :hotdata="music"/>
    <!-- banner组件 -->
    <banner-img :bannerImg="BannerImg2"/>
    <!-- 人气组件 -->
    <hot :hotdata="music1"/>
    <!-- 音乐组件 -->
    <room-music :roomData="roomMusichop" />
    <!-- 人气组件 -->
    <hot :hotdata="music2"/>
  </div>
</template>
<script>

// 推荐组件
import Recommend from "@/components/Recommend"
// banner图组件
import BannerImg from "@/components/BannerImg"
// 榜单组件
import Top from "@/components/Top"
// 人气组件
import Hot from "@/components/Hot"
// 音乐标题组件
import RoomMusic from "@/components/RoomMusic"

export default {
  data(){
    return{
      popularity:[{
        top:"人气Top1",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"SD.百里`",
        sex:"1"
      },{
        top:"拍卖",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"SD.百里`",
        sex:"1"
      }],
      music:[{
        top:"唱歌",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"SD.百里`",
        sex:"1",
        mai:true
      },{
        top:"音乐",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"SD.百里`",
        sex:"1"
      }],
      music1:[{
        top:"唱歌",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"SD.百里`",
        sex:"1"
      },{
        top:"音乐",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"SD.百里`",
        sex:"1"
      }],
      music2:[{
        top:"唱歌",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"SD.百里`",
        sex:"1"
      },{
        top:"音乐",
        num:124,
        title:"饺饺尧尧告别演唱...",
        name:"SD.百里`",
        sex:"1"
      }],
      roomMusicData:{
        img:require("@/assets/img/yin.png"),
        title:"音乐",
        more:"true"
      },
      roomMusichop:{
        img:require("@/assets/img/huo.png"),
        title:"热门"
      },
      roomtoptitle:{
        title:"今日排行榜"
      },
      roomRecommend:["推荐","转角","互动","音乐","游戏"],
      BannerImg1:require("@/assets/img/roombanner1.png"),
      BannerImg2:require("@/assets/img/roombanner2.png")
    }
  },
  components: {
    Recommend,
    Hot,
    Top,
    RoomMusic,
    BannerImg
  }
}
</script>
<style lang="less">
.room{
  width: 100%;
}
</style>