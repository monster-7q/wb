<template>
  <div>
    <ul class="top1">
      <li v-for="(item,index) in hotdata" :key="index">
        <div class="top1-hot">
          <span>{{ item.top }}</span>
          <i>{{item.num}}人</i>
          <p>{{item.title}}</p>
          <div v-if="item.mai"><img src="@/assets/img/mai.png" alt=""> 开启房间</div>
        </div>
        <div class="top1-title">
          <div></div>
          <p>{{item.name}}</p>
          <img src="@/assets/img/sex0.png" alt="" v-if="item.sex==0">
          <img src="@/assets/img/sex1.png" alt="" v-if="item.sex==1">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ["hotdata"],
  data() {
    return {

    }
  },
}
</script>

<style lang="less">
  .top1{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    >li{
      width: 170px;
      height: 230px;
      background-color: #fff;
      border: 1px solid #999;
      border-radius: 5px;
      overflow: hidden;
      >.top1-hot{
        width: 170px;
        height: 170px;
        background-color: #999;
        padding: 10px;
        font-size: 12px;
        position: relative;
        display: flex;
        >span{
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: #feee36;
          padding: 5px;
          border-radius: 5px;
        }
        >i{
          color: #fff;
          position: absolute;
          top: 15px;
          right: 20px;
        }
        >p{
          font-size: 14px;
          color: #fff;
          position: absolute;
          bottom: 10px;
          left: 10px;
        }
        >div{
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          height: 40px;
          width: 130px;
          background-color: #feee36;
          line-height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 900;
          font-size: 15px;
          border-radius: 10px;
          >img{
            margin: 0 5px;
            width: 20px;
            height: 20px;
          }
        }
      }
      >.top1-title{
        display: flex;
        width: 100%;
        height: 60px;
        align-items: center;
        >div{
          width: 40px;
          height: 40px;
          background-color: yellow;
          border-radius: 50%;
          margin: 0 10px;
        }
        >p{
          font-size: 12px;
        }
        >img{
          margin: 0 10px;
          height: 14px;
        }
      }
    }
  }
</style>