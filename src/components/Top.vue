<template>
  <div class="ranking">
    <ul>
      <li>
        <img src="@/assets/img/roomranking.png" alt="">
        <span>{{roomtoptitle.title}}</span>
      </li>
      <li>
        <div class="headImg1"></div>
        <div class="headImg2"></div>
        <div class="headImg3"></div>
        <span>></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:["roomtoptitle"],
  data() {
    return {

    }
  },
}
</script>

<style lang="less">
  .ranking{
    width: 100%;
    padding: 10px;
    >ul{
      height: 50px;
      overflow: hidden;
      background-color: #fafbfc;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      >li{
        display: flex;
        align-items: center;
        >img{
          width: 25px;
        }
        >span{
          font-size: 15px;
          padding: 0 10px;
        }
        >div{
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-left: -3px;
          border: 1px solid #fafbfc;
          background-color: #fff234;
        }
      }
    }
  }
</style>