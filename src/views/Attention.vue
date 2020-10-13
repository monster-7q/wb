<template>
    <div class="wrap">
        <div class="attentionheader"></div>
        <attention-content :attention="attentions"></attention-content>
    </div>
</template>

<script>
import AttentionContent from "../components/attention/AttentionContent";

export default {
   data () {
     return {
         attentions: [
            {
                icon: 'iconfont icon-mn_remen',
                title: '热门',
                contents: [
                    {
                        content: '# 六一儿童节',
                        state: '5771动态'
                    },
                    {
                        content: '# 五一劳动节',
                        state: '4567动态'
                    },
                    {
                        content: '# 十一国庆节',
                        state: '1564动态'
                    }
                ]
            },
            {
                icon: 'iconfont icon-xiaolian',
                title: '颜值',
                contents: [
                    {
                        content: '# 帅哥集中营',
                        state: '5771动态'
                    },
                    {
                        content: '# 我是盐系少女',
                        state: '4567动态'
                    },
                    {
                        content: '# 每天一张...',
                        state: '1564动态'
                    }
                ]
            },
            {
                icon: 'iconfont icon-aixin1',
                title: '恋爱',
                contents: [
                    {
                        content: '# 帅哥集中营',
                        state: '5771动态'
                    },
                    {
                        content: '# 我是盐系少女',
                        state: '4567动态'
                    },
                    {
                        content: '# 每天一张...',
                        state: '1564动态'
                    }
                ]
            },
            {
                icon: 'iconfont icon-xinbaniconshangchuan-',
                title: '扩列',
                contents: [
                    {
                        content: '# 帅哥集中营',
                        state: '5771动态'
                    },
                    {
                        content: '# 我是盐系少女',
                        state: '4567动态'
                    },
                    {
                        content: '# 每天一张...',
                        state: '1564动态'
                    }
                ]
            },
            {
                icon: 'iconfont icon-shengkong',
                title: '声控',
                contents: [
                    {
                        content: '# 帅哥集中营',
                        state: '5771动态'
                    },
                    {
                        content: '# 我是盐系少女',
                        state: '4567动态'
                    },
                    {
                        content: '# 每天一张...',
                        state: '1564动态'
                    }
                ]
            }
         ]
     }
   },
   components: {
       AttentionContent
   }
}
</script>

<style lang = "stylus">
.attentionheader{
    height 50px
}
.attentionbox{
    width 100%
    height 1000px
    background #000
}
</style>