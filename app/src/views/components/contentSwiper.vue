<template>
    <div class="contentSwiper">
        <van-swipe class="my-swipee" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
</template>
  
<script>
export default {
    name: 'contentSwiper',
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.contentSwiper {
    margin-top: 90px;
    padding-left: 200px;
    padding-right: 200px;
}
@media (max-width: 1200px) {
    .contentSwiper {
    padding-left: 0px;
    padding-right: 0px;
}
}
</style>
<style>
  .my-swipee .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 500px;
    text-align: center;
    background-color: #39a9ed;
  }
  @media (max-width: 1200px) {
    .my-swipee .van-swipe-item {
        line-height: 300px;
    }
}
  
</style>