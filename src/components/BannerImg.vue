<template>
    <div class="roomimg">
      <img :src="bannerImg" alt="">
    </div>
</template>
<script>
export default {
  props:["bannerImg"]
}
</script>
<style lang="less">
.roomimg{
  width: 100%;
  padding:0 10px;
  >img{
    width: 100%;
    display: block
  }
}
</style>