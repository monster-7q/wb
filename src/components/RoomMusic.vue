<template>
  <ul class="room-music">
    <li><img :src="roomData.img" alt="">{{roomData.title}}</li>
    <li v-show="roomData.more">更多 ></li>
  </ul>
</template>

<script>

export default {
  props: ["roomData"],
  data() {
    return {

    }
  },
}
</script>

<style lang="less">
.room-music{
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  >li{
    padding: 0 10px;
    font-size: 16px;
    font-weight: 900;
    display: flex;
    align-items: center;
    >img{
      margin: 0 5px;
      width: 15px;
    }
  }
}
</style>