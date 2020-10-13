<template>
    <div>
        <div class="findnav">
            <ul class="findul">
                <li class="liMenu" 
                    :class="{ active: isActive === index }" 
                    @click="son(index, item.url)" 
                    v-for="(item,index) in menu"                 
                    :key="index"
                >{{ item.title }}
                </li>
            </ul>

            <span class="iconfont icon-yinle findspan"></span>
            
            <button class="findbtn">发布</button>
        </div>
    </div>
</template>

<script>
export default {
   data () {
     return {
         isActive: sessionStorage.getItem('getindex') | 0,
        //  menu:['朋友圈','推荐','关注']
         menu:[
             {
                 title:'朋友圈',
                 url:'/friends'
             },
             {
                 title:'推荐',
                 url:'/recommend'
             },
             {
                 title:'关注',
                 url:'/attention'
             }
         ]
     }
   },
   methods: {
       son(i,url){
          sessionStorage.setItem('url', url);
          sessionStorage.setItem('getindex', i);
            // console.log(i);
        //   console.log(this.isActive);
          this.isActive = sessionStorage.getItem('getindex') | 0;
          this.$router.push(url);
        //   this.isActive = i;
       }
   }
}
</script>

<style lang = "stylus">
.findnav{
    width 100%
    height 45px
    background #c7c7c7
    display flex
    justify-content space-around
    position fixed
    top 0
    left 0
    z-index 999
    .findul{
        height 100%
        list-style none
        margin-right 25px
        .liMenu{
            float left
            font-size 15px
            margin 15px 11px 11px 11px
        }
        .active{
            margin-top 9px
            font-weight 600
            font-size 25px
        }
    }
    .findspan{
        margin-top 6px
    }
    .findbtn{
        width 60px
        height 30px
        background #fff234
        border none 
        border-radius 5px
        margin-top 8px
        font-weight 600
        font-size 15px

    }
}
</style>
