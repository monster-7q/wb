<template>
    <div class="headerbox">
        <div class="boll boll1"></div>

        <div class="boll boll2"></div>

        <p class="text1">
        白离
        <span class="iconfont icon-xingbienan"></span>
        </p>

        <p class="text2">
        <span class="textsp1">真情告白</span>
        伊人
        <span class="iconfont icon-xingbienv"></span>
        </p>

        <p class="text3">
        希望你的可爱，可以治愈一切不可爱。
        <span class="textsp2">cp</span>
        <span></span>
        </p>

        <p class="text4">
        更多表白
        <span class="iconfont icon-arrow-right"></span>
        </p>
    </div>
</template>

<style lang = "stylus" scoped>
.headerbox{
    width 350px
    height 200px
    background #4f4f4f
    border-radius 10px
    position relative
    margin-top 60px
    margin-left 13px
    .boll{
      width 80px
      height 80px
      border 3px solid #fff
      border-radius 50%
      background yellow
      position absolute 
    }
    .boll1{
      top -25px
      left 20px
    }
    .boll2{
      top -25px
      left 80px
    }
    p{
      color #fff
      position absolute
    }
    .text1{
      font-size 15px
      top 15px
      left 180px
      .icon-xingbienan{
        width 15px
        height 15px
        border-radius 50%
        background #c4fffb 
      }
    }
    .text2{
       font-size 12px
       top 40px
       left 177px
      .textsp1{
        color #666
      }
      .icon-xingbienv{
        width 15px
        height 15px
        border-radius 50%
        background pink 
      }
    }
    .text3{
      top 120px
      left 30px
      font-size 15px
      .textsp2{
        margin-left 15px
      }
    }
    .text4{
      top 170px
      right 15px
      font-size 15px
    }
    
}
</style>