<template>
    <div class="contentSwiper">
        <van-swipe class="my-swipee" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img class="swiper-img" src="@/assets/images/swiper1.jpg" />
            </van-swipe-item>
            <van-swipe-item>
                <img class="swiper-img" src="@/assets/images/swiper2.jpg" />
            </van-swipe-item>
            <van-swipe-item>
                <img class="swiper-img" src="@/assets/images/swiper4.jpg" />
            </van-swipe-item>
            <van-swipe-item>
                <img class="swiper-img" src="@/assets/images/swiper5.jpg" />
            </van-swipe-item>
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
    line-height: 500px;
}

.my-swipee .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 500px;
    text-align: center;
    background-color: #39a9ed;
}

.swiper-img {
    width: 100%;
    height: 100%;
}

.van-swipe__track {
    height: 500px;
}

@media (max-width: 1200px) {
    .my-swipee .van-swipe-item {
        line-height: 250px;
    }

    .my-swipee .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 250px;
        text-align: center;
        background-color: #39a9ed;
    }

    .swiper-img {
        width: 100%;
        height: 100%;
    }

    .van-swipe__track {
        height: 250px;
    }
}</style>