<template>
  <div>
    <friend-header />
    <friend-content />
    <friend-content-small />
    <friend-content-small />
    <friend-content />
    <friend-content />
    <friend-content />
    <friend-content-small />
    <div class="fcbox"></div>
  </div>
</template>

<script>
import FriendHeader from "./FriendHeader";
import FriendContent from "./FriendContent";
import FriendContentSmall from "./FriendContentSmall";

export default {
   data () {
     return {}
   },
   components: {
     FriendHeader,
     FriendContent,
     FriendContentSmall
   }
}
</script>

<style lang = "stylus">
.fcbox{
  height 35px
}
</style>