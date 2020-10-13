<template>
    <div class="recommendcontent">
        <div v-for="(ite, index) in rccontent" :key="index">
            <!-- 推荐小黄块 -->
            <div class="rd-smallbox">推荐</div>

            <!-- 用户头像昵称 -->
            <div class="rd-user">
                <!-- 用户头像 -->
                <div class="rdu-userbox"></div>
                <!-- 用户昵称 -->
                <div class="rdu-username">
                    <p class="rduu-p1">{{ite.id}}<span class="iconfont icon-xingbienan"></span></p>
                    <p class="rduu-p2">{{ite.timer}}</p>
                </div>
                <!-- 加好友 -->
                <div class="rdu-addfriend">
                    <span class="iconfont icon-yaoqinghaoyou"></span>
                </div>
                <!-- 更多 -->
                <div class="rdu-more">
                    <span class="iconfont icon-daohanggengduo"></span>
                </div>
            </div>

            <!-- 用户发送的文字信息 -->
            <div class="rd-text" v-for="(itt, index) in ite.text" :key="index">{{itt}}</div>

            <!-- 图片之后用v-if渲染 -->
            <div class="rd-img" v-if="ite.img">
                <img :src="ite.img" alt="">
            </div>

            <!-- 音频之后用v-if渲染 -->
            <div class="rd-tidings" v-if="ite.tidings"></div>

            <!-- 音频下面关注 -->
            <div class="rd-attention" v-if="ite.atention">
                <div v-for="(iitt, inx) in ite.atention" :key="inx">
                    <span class="rda-span1">{{iitt}}</span>
                    <span class="rda-span2">关注</span>
                </div>
            </div>

            <!-- 不知名链接 -->
            <div class="rd-link" v-if="ite.rdlink">
                <img src="@/assets/image/icontv.png" alt="">
                <span>{{ite.rdlink}}></span>
            </div>

            <!-- 点赞转发评论 -->
            <div class="fc-praise">
                <div class="fcp-assist">
                    <span class="iconfont icon-aixin"><span class="fcp-iconaixin">{{ite.lovenum}}</span></span>
                    <span class="iconfont icon-qipao"></span>
                    <span class="iconfont icon-fenxiang"></span>
                    <span class="iconfont icon-hua"><span class="fcp-iconhua">{{ite.flower}}</span></span>
                </div>
                <div class="fcp-input">
                    <input type="text" placeholder="说点什么...">
                    <button>发送</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['rccontent'],
   data () {
     return {

     }
   }
}
</script>

<style lang = "stylus">
.recommendcontent{
        width 350px
        margin 0 auto
        display flex
        flex-direction column
        justify-content space-between
    /* 推荐小黄块 */
    .rd-smallbox{
        width 35px
        height 25px
        background yellow 
        border-radius 6px
        font-size 13px
        text-align center
        line-height 25px
        margin-top 30px
    }

    /* 用户头像昵称 */
    .rd-user{
        margin-top 15px
        width 100%
        height 80px
        /* 用户头像 */
        .rdu-userbox{
            width 60px
            height 60px
            background #eaeaea
            border-radius 50%
            margin-top 10px
            float left
        }
        /* 用户昵称 */
        .rdu-username{
            width 130px
            float left
            margin 10px 0 0 10px
            p{
                margin-top 10px
            }
            .rduu-p1{
                font-size 15px
                font-weight 600
                .icon-xingbienan{
                    width 15px
                    height 15px
                    background #c4fffb
                    border-radius 50%
                    margin-left 6px
                }
            }
            .rduu-p2{
                font-size 12px
                color #666
            }
        }
        /* 加好友 */
        .rdu-addfriend{
            width 50px
            height 30px
            background yellow
            border-radius 6px
            float left 
            margin 25px 0 0 70px
            .icon-yaoqinghaoyou{
                display block
                text-align center
                line-height 30px
            }
        }
        /* 更多 */
        .rdu-more{
            float right
            margin 10px 10px 0 0
        }
    }

    /* 用户发送的文字信息 */
    .rd-text{
        margin-top 15px
        font-size 19px
    }

    /* 图片之后用v-if渲染 */
    .rd-img{
        margin 0 auto
        margin-top 30px
        img{
            display block
            width 350px
            height 350px
        }
    }

    /* 音频之后用v-if渲染 */
    .rd-tidings{
        width 200px
        height 50px
        background #2aedab
        border-radius 40px
        margin-top 30px
    }
    /* 音频下面关注 */
    .rd-attention{
        width 100%
        height 30px
        margin-top 20px
        display flex
        justify-content start
        align-items center
        >div{
            width 140px
            height 20px
            background #f7f8fa
            border-radius 15px
            display flex
            justify-content start
            align-items center
            margin-right 6px
            span{
                font-size 12px
            }
            .rda-span1{
                margin-left 10px
                padding-right 6px
                border-right 1px solid #999
            }
            .rda-span2{
                margin-left 6px
                color #23c891
            }
        }
    }

    /* 不知名链接 */
    .rd-link{
        height 20px
        font-size 13px
        color #21da9e
        margin-top 15px
        display flex
        justify-content start
        img{
            width 13px
            height 13px
            display block
            margin-left 10px
        }
        span{
            margin-left 6px
        }
    }

    /* 点赞转发评论 */
    .fc-praise{
        margin-top 15px
        .fcp-assist{
            .icon-aixin{
                .fcp-iconaixin{
                    margin-left 4px
                    color #666
                    font-size 13px
                }
            }
            .icon-qipao{
                margin-left 30px
            }
            .icon-fenxiang{
                margin-left 45px
            }
            .icon-hua{
                margin-left 95px
                .fcp-iconhua{
                    margin-left 4px
                    font-size 13px
                }
            }
        }
        .fcp-input{
            margin-top 15px
            >input{
                width 250px
                height 35px
                background #f7f8fa
                border-radius 6px
                border none
                float left
                font-size 15px
                padding-left 6px
            }
            >button{
                width 35px
                height 35px
                margin-left 15px 
                float left
                border none 
                background #fff
                font-size 15px
                color #999
            }
        }
    }
} 
</style>
