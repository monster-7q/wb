<template>
    <div class="wrap">
        <div class="recommendhbox"></div>
        <recommend-banner :rbrender="rbrenders"></recommend-banner>
        <recommend-content :rccontent="rccontents"></recommend-content>
    </div>
</template>

<script>
import RecommendBanner from "../components/recommends/RecommendBanner";
import RecommendContent from "../components/recommends/RecommendContent";

export default {
   data () {
     return {
         rbrenders: [
             {
                 img: require('../assets/image/recommendbanner1.png'),
                 title: '话题广场',
                 text: '搜索更多话题'
             },
             {
                 img: require('../assets/image/recommendbanner2.png'),
                 title: '扩列墙',
                 text: '扩列交友处cp'
             },
             {
                 img: require('../assets/image/recommendbanner3.png'),
                 title: '#六一儿童节',
                 links: '节日',
                 text: '4968条动态',
                 color: 'purple'
             },
             {
                 img: require('../assets/image/recommendbanner4.png'),
                 title: '#儿歌大赛',
                 links: '活动',
                 text: '4968条动态',
                 color: 'green'
             },
             {
                 img: require('../assets/image/recommendbanner5.png'),
                 title: '#童年信以为真的事',
                 links: 'NEW',
                 text: '4968条动态',
                 color: 'red'
             },
             {
                 img: require('../assets/image/recommendbanner6.png'),
                 title: '#做个每天开...',
                 text: '4968条动态'
             }
         ],
         rccontents: [
             {
                 id: 'Witchhhhhhh.',
                 timer: '5小时前推荐',
                 text: ['紧赶慢赶还是晚了些，祝我的可彳亍@行昼生日快乐 女人工人带你飞'],
                 img: require('../assets/image/recommendcontentimg.png'),
                 atention: ['# 大家正在画'],
                 rdlink: 'Witchhhhhhh.的画廊',
                 lovenum: '505k',
                 flower: '157'
             },
             {
                 id: '不知名男网友',
                 timer: '2小时前推荐',
                 text: ['不管几岁','千山万水过尽童心未泯'],
                 tidings: '',
                 atention: ['# 六一儿童节','# 听声音猜年纪'],
                 lovenum: '505k',
                 flower: '157'
             },
             {
                 id: '跳跳啊跳跳',
                 timer: '2小时前推荐',
                 text: ['有人祝我儿童节快乐吗？'],
                 lovenum: '505k',
                 flower: '3'
             }
         ]
     }
   },
   components: {
       RecommendBanner,
       RecommendContent
   }
}
</script>

<style lang = "stylus">
.recommendhbox{
    height 50px
}
.recommendbox{
    width 100%
    height 1000px
    background #000
}
</style>