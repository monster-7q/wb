<template>
  <div class="party">
    <ul>
      <li v-for="i in 6" :key="i">
        <span>交友派对</span>
        <p>涵三岁开启了派对</p>
        <div class="touxiang">
          <div></div>
        </div>
        <div class="partysex">
          <img src="@/assets/img/sex11.png" alt="">1
          <img src="@/assets/img/sex00.png" alt="">0
        </div>
        <div class="duihua">
          <div class="qipao">蹲cp</div>
          <div class="jiantou"></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
.party{
  width: 100%;
  >ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    justify-content: space-between;
    >li{
      width: 170px;
      height: 220px;
      margin-top: 10px;
      border-radius: 10px;
      position: relative;
      font-size: 12px;
      >.touxiang{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #b0b0b0;
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        div{
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #b0b0b0;
          position: absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          opacity: 0.2;
        }
      }
      >span{
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: #feee36;
        padding: 5px;
        border-radius: 5px;
      }
      >p{
        font-size: 14px;
        width: 100%;
        position: absolute;
        top: 170px;
        text-align: center;
        color: #fff;
      }
      >.partysex{
        position: absolute;
        bottom: 10px;
        width: 100%;
        color: #fff;
        display: flex;
        padding: 0 10px;
        >img{
          width: 15px;
          margin: 0 10px;
        }
      }
      >.duihua{
        width: 100%;
        position: absolute;
        top: 40px;
        text-align: center;
        line-height: 40px;
        >.qipao{
          width: 100px;
          height: 40px;
          margin: 0 auto;
          background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.5),rgba(255,255,255,0.8));
          border-radius: 10px;
        }
        >.jiantou{
          position: absolute;
          top: 45;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-width: 10px 10px 0px;
          border-style: solid;
          border-color:rgba(255,255,255,0.8) transparent transparent;
        }
      }
    }
    li:nth-child(1){
      background-image: linear-gradient(#ffef8f, #ffd660);
    }
    li:nth-child(2){
      background-image: linear-gradient(#5bf1b1, #34e384);
    }
    li:nth-child(3){
      background-image: linear-gradient(#ff6f86, #fe4557);
    }
    li:nth-child(4){
      background-image: linear-gradient(#a3effc, #6ee0fb);
    }
    li:nth-child(5){
      background-image: linear-gradient(#6cbdff, #4091ff);
    }
    li:nth-child(6){
      background-image: linear-gradient(#9677ff, #7551ff);
    }
  }
}
</style>