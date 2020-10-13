<template>
    <div class="friend-content-small">
        <div class="fcs-user">
            <div class="fcsu-boll"></div>
            <div class="fcsu-text">
                <p class="fcsut-p1">小总管</p>
                <p class="fcsut-p2">19小时前</p>
            </div>
        </div>
        <div class="fcs-img">
            <img src="../../assets/image/fcs.png" alt="">
            <p class="fcsi-p1">Answer is too long.</p>
            <p class="fcsi-p2">-二环第一浪</p>
        </div>
    </div>
</template>

<style lang="stylus">
.friend-content-small{
    width 350px
    height 250px
    margin-left 13px
    margin-top 15px
    .fcs-user{
        width 100%
        height 75px
        display flex
        align-items center
        .fcsu-boll{
            width 50px
            height 50px
            border-radius 50%
            background #eaeaea
        }
        .fcsu-text{
            margin-left 10px
            .fcsut-p1{
                margin-top 5px
                font-size 15px
                font-weight 600
            }
            .fcsut-p2{
                font-size 12px
                margin-top 6px
            }
        }
    }
    .fcs-img{
        width 100%
        height 200px
        background #f7f8fa
        border-radius 6px
        img{
            width 100%
            height 75px
            display block
            border-radius 6px 6px 0 0
        }
        .fcsi-p1{
            font-size 17px
            margin-top 25px
            margin-left 20px
        }
        .fcsi-p2{
            margin-top 25px
            margin-left 240px
            font-size 15px
        }
    }
}
</style>
