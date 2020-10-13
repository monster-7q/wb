<template>
  <div class="attention">
    <div class="fans-club">
      <span>只看粉丝团</span>
    </div>
    <ul class="song-list">
      <li v-for="i in 5" :key="i">
        <div class="song-left"></div>
        <ol class="song-right">
          <li class="song-top">
            <span>华语歌单</span>
            <p>我很容易满足</p>
            <i>46人</i>
          </li>
          <li class="song-bottom">
            <span></span>
            <p>电台情歌</p>
            <img src="@/assets/img/sex1.png" alt="">
          </li>
        </ol>
      </li>
    </ul>
    <div class="mai-open"><img src="@/assets/img/mai.png" alt=""> 开启房间</div>
  </div>
</template>
<style lang="less">
.attention{
  width: 100%;
  font-size: 10px;
  >.fans-club{
    width: 100%;
    padding: 10px 10px 0;
    overflow: hidden;
    span{
      line-height: 25px;
      padding: 0 5px;
      font-weight: 900;
      float: right;
      height: 25px;
      border-radius: 5px;
      background-color: #ffde00;
    }
  }
  >.song-list{
    width: 100%;
    padding: 0 10px;
    >li{
      width: 100%;
      height: 100px;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      >.song-left{
        width: 80px;
        height: 80px;
        border-radius: 10px;
        background-color: #ffde00;
      }
      >.song-right{
        display: flex;
        flex-direction:column;
        margin-left: 10px;
        font-size: 16px;
        font-weight: 900;
        height: 70px;
        >.song-top{
          width: 260px;
          overflow: hidden;
          height: 20px;
          position: relative;
          display: flex;
          margin-bottom:10px;
          >span{
            font-size: 10px;
            line-height: 20px;
            padding: 0 5px;
            height: 20px;
            border-radius: 5px;
            background-color: #ffde00;
            margin-right: 10px;
          }
          >i{
            font-weight: 500;
            position: absolute;
            right: 0;
            top: 0;
            line-height: 20px;
            font-size: 10px;
            color: #50aaf0;
          }
        }
        >.song-bottom{
          font-weight: 500;
          display: flex;
          align-items: center;
          padding-top: 10px ;
          >span{
            font-size: 10px;
            width:25px;
            height: 25px;
            border-radius: 50%;
            background-color: #fff234;
          }
          >p{
            font-size: 14px;
            padding: 0 10px;
            color: #666;
          }
          >img{
            width: 15px;
          }
        }
      }
    }
  }
  >.mai-open{
    position: fixed;
    left: 0;
    bottom: 100px;
    height: 50px;
    width: 130px;
    background-color: #feee36;
    line-height: 50px;
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
</style>
