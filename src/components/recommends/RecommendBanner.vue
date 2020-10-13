<template>
    <div class="recommendbanner">
        <div>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black" :height="250">
                <van-swipe-item>
                    <div class="rbh-item" v-for="(item, index) in rbrender" :key="index">
                        <div class="rbhi-img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="rbhi-text">
                            <p class="rbhi-p1">{{item.title}}</p>
                            <p class="rbhi-p2"><span v-if="item.links" :style="{ 'color': item.color }">{{item.links}}</span>{{item.text}}</p>
                        </div>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="rbh-item" v-for="(item, index) in rbrender" :key="index">
                        <div class="rbhi-img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="rbhi-text">
                            <p class="rbhi-p1">{{item.title}}</p>
                            <p class="rbhi-p2"><span v-if="item.links" :style="{ 'color': item.color }">{{item.links}}</span>{{item.text}}</p>
                        </div>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="rbh-item" v-for="(item, index) in rbrender" :key="index">
                        <div class="rbhi-img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="rbhi-text">
                            <p class="rbhi-p1">{{item.title}}</p>
                            <p class="rbhi-p2"><span v-if="item.links" :style="{ 'color': item.color }">{{item.links}}</span>{{item.text}}</p>
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
export default {
    props: ['rbrender'],
   data () {
     return {

     }
   }
}
</script>

<style lang = "stylus">
.recommendbanner{
    margin-top 24px
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #fff;
        display flex
        justify-content space-between
        flex-wrap wrap
        .rbh-item{
            width 187px
            height 50px
            line-height 18px
            display flex
            justify-content start
            align-items center
            .rbhi-img{
                width 45px
                height 45px
                border-radius 6px
                background pink
                margin-left 10px
                img{
                    display block
                    width 45px
                    height 45px
                    border-radius 6px
                }
            }
            .rbhi-text{
                margin-left 6px
                p{
                    text-align left
                }
                .rbhi-p1{
                    font-size 13px
                    margin-top 4px
                    font-weight 600
                    color black 
                }
                .rbhi-p2{
                    font-size 10px
                    color #666
                }
            }
        }
    }
}
.van-swipe__indicator--active{
    width 15px
    border-radius 0 
}
</style>
