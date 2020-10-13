<template>
    <div class="wrap">
        <div class="friendsheader"></div>
        <friend-ciecle />
    </div>
</template>

<script>
import FriendCiecle from "../components/friend/FriendCiecle";

export default {
   data () {
     return {

     }
   },
   components: {
       FriendCiecle
   }
}
</script>

<style lang = "stylus">
.friendsheader{
    height 50px
}
/* .wrap{
    position absolute
    top 45px
    left 0
    right 0
    bottom 50px
} */
.friendsbox{
    width 100%
    height 1000px
    background #000
}
</style>