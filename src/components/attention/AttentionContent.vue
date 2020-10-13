<template>
    <div>
        <div class="attentioncontent">
            <div class="ac-header">
                <span class="ach-span1">选择感兴趣的话题</span>
                <span class="ach-span2">为你推荐了一些可能会喜欢的话题</span>
            </div>
            <div class="ac-conent">
                <div class="acc-box" v-for="(item, index) in attention" :key="index">
                    <div class="accb-icon"><span :class="item.icon"></span>{{item.title}}</div>
                    <div class="accb-conent">
                        <div class="accbc-one" v-for="(itm, iex) in item.contents" :key="iex">
                            <div class="accbc-boxheader"></div>
                            <p class="accbc-p1">{{itm.content}}</p>
                            <p class="accbc-p2">{{itm.state}}</p>
                            <div class="accbc-add">+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['attention'],
   data () {
     return {

     }
   }
}
</script>

<style lang="stylus">
.attentioncontent{
    width 320px
    margin 0 auto
    margin-top 40px
    .ac-header{
        width 100%
        height 100px
        background yellow
        border-radius 6px 6px 0 0
        .ach-span1{
            font-weight 600
            font-size 20px
            margin 25px 0 0 25px
            float left
        }
        .ach-span2{
            font-size 15px
            margin 15px 0 0 25px
            float left
        }
    }
    .ac-conent{
        width 100%
        .acc-box{
            width 100%
            .accb-icon{
                font-size 20px
                margin-top 30px
                margin-left 9px
                >span{
                    margin-right 10px
                }
            }
            .accb-conent{
                width 100%
                display flex
                justify-content space-between
                align-items center
                margin-top 20px
                .accbc-one{
                    font-size 15px

                    .accbc-boxheader{
                        width 70px
                        height 70px
                        background #bfbfbf
                        margin 0 auto
                        border-radius 6px
                    }
                    p{
                        margin-top 15px
                    }
                    .accbc-p2{
                        text-align center
                    }
                    .accbc-add{
                        width 60px
                        height 30px
                        background #f7f8fa
                        text-align center
                        line-height 25px
                        border-radius 6px
                        margin 15px auto
                    }
                }
            }
        }
    }
}
</style>
