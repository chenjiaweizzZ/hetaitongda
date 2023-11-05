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
}
</style>
<style>
  .my-swipee .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 300px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>