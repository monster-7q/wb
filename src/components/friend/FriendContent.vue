<template>
    <div class="friend-content">
        <div class="fc-header">
            <div class="fch-boll"></div>
            <div class="fch-text">
                <span class="fcht-span1">
                    玩吧搞事君
                    <span class="iconfont icon-xingbienan"></span>
                </span>
                <span class="fcht-span2">7小时前</span>
            </div>
        </div>
        <div class="fc-details1">小朋友就该有小朋友的样子，在广场话题#儿歌翻唱大赛里，唱出你小时候经常唱的儿歌吧，</div>
        <div class="fc-details2">抓紧时间参赛，秀出你可爱嗓音</div>
        <div class="fc-box1">
            <div class="fcb-link1">
                <img src="../../assets/image/fcb-link1.png" alt="">
                <div>
                    <p class="fcbl-p1">儿歌翻唱大赛</p>
                    <p class="fcbl-p2">发布语音动态，赢取逗豆等大礼</p>
                </div>
            </div>
            <div class="fcb-link2">
                <span class="fcbl-span1">#</span>
                <span class="fcbl-span2">儿歌翻唱大赛</span>
                <span class="fcbl-span3">关注</span>
            </div>
        </div>
        <div class="fc-praise">
            <div class="fcp-assist">
                <span class="iconfont icon-aixin"><span class="fcp-iconaixin">505k</span></span>
                <span class="iconfont icon-qipao"></span>
                <span class="iconfont icon-fenxiang"></span>
                <span class="iconfont icon-hua"><span class="fcp-iconhua">157</span></span>
            </div>
            <div class="fcp-input">
                <input type="text" placeholder="说点什么...">
                <button>发送</button>
            </div>
        </div>
    </div>
</template>


<style lang = "stylus" scoped>
.friend-content{
    margin-top 20px
    width 350px
    height 450px
    margin-left 13px
    display flex
    flex-direction column
    justify-content space-between
    align-items flex-start
    .fc-header{
        width 100%
        height 60px
        display flex
        align-items center
        .fch-boll{
            width 50px
            height 50px
            border-radius 50%
            background #eaeaea
            float left
        }
        .fch-text{
            height 60px
            float left
            margin-left 15px
            .fcht-span1, .fcht-span2{
                display block
            }
            .fcht-span1{
                margin-top 12px
                font-size 15px
                font-weight 600
                .icon-xingbienan{
                    width 15px
                    height 15px
                    border-radius 50%
                    background #c4fffb
                }
            }
            .fcht-span2{
                font-size 12px
                margin-top 6px 
                padding-right 48px
                color #666
            }
        }
    }
    .fc-details1{
        width 100%
        font-size 17px
        text-align left 
    }
    .fc-details2{
        width 100%
        font-size 17px
        text-align left 
    }
    .fc-box1{
        width 100%
        height 155px
        margin-top 15px
        padding-top 15px
        display flex
        flex-direction column
        justify-content space-between
        .fcb-link1{
            width 100%
            height 80px
            background #f7f8fa
            border-radius 6px
            padding-left 5px
            display flex
            align-items center
            >img{
                display block
                width 70px
                height 70px
                border-radius 6px
            }
            >div{
                height 80px
                margin-left 10px
                .fcbl-p1{
                    font-size 16px
                    font-weight 600
                    text-align left 
                    margin-top 22px
                }
                .fcbl-p2{
                    margin-top 12px
                    font-size 12px
                    color #666
                }
            }
        }
        .fcb-link2{
            width 200px
            height 30px
            background #f7f8fa
            border-radius 20px
            display flex
            align-items center
            justify-content space-around
            span{
                font-size 15px
            }
            .fcbl-span1{
                margin-left 15px
            }
            .fcbl-span2{
                border-right 1px solid #999
                padding-right 12px
                font-weight 600
            }
            .fcbl-span3{
                padding-right 15px
                color #23c891
            }
        }
    }
    .fc-praise{
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