<template>
    <div class="contact">
        <div class="section">
            <h1 class="title1">乘风破浪会有时</h1>
            <h1 class="title1">直挂云帆济沧海</h1>
            <h4 class="title2">菏海通大培训中心，是一所专注于山东三年制大专专升本的培训学校，是山东省专升本教育行业中发展快、通过率高的行业领跑者，有着丰富的办学经验，已助力上千名学子考上理想的本科院校</h4>
        </div>
        <div class="card">
            <p class="title">如何联系我们</p>
            <div class="user__container">
                <div class="user">
                    <div class="image">菏泽</div>
                    <div class="user__content">
                        <div class="text">
                            <span class="name">菏泽校区</span>
                            <p class="username">手机/微信</p>
                            <p class="username username2">18552368052</p>
                        </div>
                        <button class="follow" @click="copyToClipboard(18552368052)">点击复制</button>
                    </div>

                </div>
                <div class="user">
                    <div class="image">菏泽</div>
                    <div class="user__content">
                        <div class="text">
                            <span class="name">单县校区</span>
                            <p class="username">手机/微信</p>
                            <p class="username username2">15554029003</p>
                        </div>
                        <button class="follow" @click="copyToClipboard(15554029003)">点击复制</button>
                    </div>

                </div>
                <div class="user">
                    <div class="image">济宁</div>
                    <div class="user__content">
                        <div class="text">
                            <span class="name">济宁校区</span>
                            <p class="username">手机/微信</p>
                            <p class="username username2">18552368052</p>
                        </div>
                        <button class="follow" @click="copyToClipboard(18552368052)">点击复制</button>
                    </div>

                </div>
                <div class="user">
                    <div class="image">临沂</div>
                    <div class="user__content">
                        <div class="text">
                            <span class="name">临沂校区</span>
                            <p class="username">手机/微信</p>
                            <p class="username username2">15554029003</p>
                        </div>
                        <button class="follow" @click="copyToClipboard(15554029003)">点击复制</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { Toast } from 'vant';
export default {
    name: 'contact',
    data() {
        return {
        }
    },
    methods: {
        copyToClipboard(num) {
            const text = num;
            navigator.clipboard.writeText(text).then(function () {
                Toast({
                message: '复制成功',
                icon: 'like-o',
                });
            }).catch(function (err) {
                console.error('复制失败:', err);
            });
        }
    }
}
</script>
<style scoped>
.section {
    text-align: center;
    /* margin-left: 80px;
    margin-right: 80px; */
    margin: 0px 20px;
}

.title1 {
    font-size: 2em;
    font-weight: bold;
}

.title2 {
    font-size: 1em;
    font-weight: bold;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    width: 240px;
}

.contact {
    display: flex;
    justify-content: center;
    margin: 10px 20px;
}

.card {
    width: 350px;
    height: 400px;
    background: #E8EAEA;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.title,
.more {
    padding: 10px 15px;
}

.user {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
}

.user__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
}

.user__container {
    display: flex;
    flex-direction: column;
}

.title {
    font-weight: 900;
    font-size: 1.3em;
}

.name {
    font-weight: 800;
}

.username {
    font-size: .9em;
    color: #64696e;
    margin: 1px;
}

.username2 {
    font-size: 1.1em;
    color: #333;
    margin: 1px;
}

.image {
    width: 60px;
    height: 60px;
    background: rgb(22, 19, 70);
    background: linear-gradient(295deg, rgba(22, 19, 70, 1) 41%, rgba(89, 177, 237, 1) 100%);
    border-radius: 50%;
    margin-right: 15px;
}

.follow {
    border: none;
    border-radius: 25px;
    background-color: #0f1113;
    color: white;
    padding: 8px 15px;
    font-weight: 700;
}

.more {
    display: block;
    text-decoration: none;
    color: rgb(29, 155, 240);
    font-weight: 800;
}

.user:hover {
    background-color: #b3b6b6;
}

.more:hover {
    background-color: #b3b6b6;
    border-radius: 0px 0px 15px 15px;
}

.follow:hover {
    background-color: #2c3136;
}

.image {
    display: flex;
    justify-content: center;
    align-content: center;
    color: #E8EAEA;
    font-weight: 600;
    font-size: 20px;
    line-height: 60px;
}

@media (max-width: 1200px) {
    .contact {
        flex-wrap: wrap;
    }
}
</style>
  