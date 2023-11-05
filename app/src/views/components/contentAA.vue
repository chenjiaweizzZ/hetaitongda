<template>
    <div class="contentA">
        <div class="section">
            <h1 class="title1">乘风破浪会有时</h1>
            <h1 class="title1">直挂云帆济沧海</h1>
            <h4>菏海通大培训中心，是一所专注于山东三年制大专专升本的培训学校，是山东省专升本教育行业中发展快、通过率高的行业领跑者，有着丰富的办学经验，已助力上千名学子考上理想的本科院校</h4>
        </div>
        <div class="card-group">
            <div class="card-client client1">
                <div class="social-media">
                    <div class="card-title1">菏泽</div>
                    <div class="card-title2"> &nbsp; </div>
                    <div class="card-title2">菏泽校区</div>
                    <div class="card-title2">手机/微信</div>
                    <div class="card-title2">18552368052</div>
                    <button class="card-btn" data-clipboard-text="18552368052" @click="getCopy()">复制号码</button>
                </div>
            </div>
            <div class="card-client client2">
                <div class="social-media">
                    <div class="social-media">
                        <div class="card-title1">菏泽</div>
                        <div class="card-title2"> &nbsp; </div>
                        <div class="card-title2">单县校区</div>
                        <div class="card-title2">手机/微信</div>
                        <div class="card-title2">15554029003</div>
                        <button class="card-btn" data-clipboard-text="15554029003" @click="getCopy()">复制号码</button>
                    </div>
                </div>
            </div>
            <div class="card-client client4">
                <div class="social-media">
                    <div class="card-title1">济宁</div>
                    <div class="card-title2"> &nbsp; </div>
                    <div class="card-title2">济宁校区</div>
                    <div class="card-title2">手机/微信</div>
                    <div class="card-title2">18552368052</div>
                    <button class="card-btn" data-clipboard-text="18552368052" @click="getCopy()">复制号码</button>
                </div>
            </div>
            <div class="card-client client3">
                <div class="social-media">
                    <div class="card-title1">临沂</div>
                    <div class="card-title2"> &nbsp; </div>
                    <div class="card-title2">临沂校区</div>
                    <div class="card-title2">手机/微信</div>
                    <div class="card-title2">15554029003</div>
                    <button class="card-btn" data-clipboard-text="15554029003" @click="getCopy()">复制号码</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { Toast } from 'vant';
export default {
    name: 'contentAA',
    data() {
        return {
        }
    },
    mounted() {

    },
    methods: {

        getCopy() {
            //使用main.js内注册的vue原型，用class绑定将数据存储到clipboard中
            let clipboard = new this.clipboard('.card-btn');
            clipboard.on('success', e => {
                Toast.success('复制成功');
                //清除选中
                e.clearSelection();
                //释放内存，以防重复复制
                clipboard.destroy();
            });
            clipboard.on('error', () => {
                Toast.fail('复制失败，请手动选择复制');
            });
        }
    }
}
</script>
<style scoped>
.section {
    padding-left: 20px;
    padding-right: 20px;
}

.contentA {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-title2 {
    font-size: 20px;
    margin: 5px 0px;
}

.card-title1 {
    font-size: 42px;
}

.home-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.home {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    width: 66vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.section {
    text-align: center;
    /* margin-left: 80px;
    margin-right: 80px; */
}

.title1 {
    font-size: 2em;
    font-weight: bold;
}

.title2 {
    font-size: 1.6em;
    font-weight: bold;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
}

.card-group {
    display: flex;
    justify-content: space-around;
    flex: 0 1 30%;
    width: 90vw;
}

.card-client {
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    /* border: 4px solid #7cdacc; */
    box-shadow: 0 6px 10px rgba(207, 212, 222, 1);
    border-radius: 10px;
    text-align: center;
    color: #fff;
    font-family: "Poppins", sans-serif;
    transition: all 0.3s ease;
}

.client1 {
    background: #86d9ab;
}

.client2 {
    background: #f7765f;
}

.client3 {
    background: #6ec7e0;
}

.client4 {
    background: #ffc0cb;
}

.card-client:hover {
    transform: translateY(-10px);
}

.name-client {
    margin: 0;
    margin-top: 20px;
    font-weight: 600;
    font-size: 18px;
}

.social-media a:last-child {
    margin-right: 0;
}

.social-media a .tooltip-social:after {
    border-top-color: #262626;
}

.social-media a:hover .tooltip-social {
    opacity: 1;
    transform: translate(-50%, -130%);
}

.card-btn {
    margin-top: 20px;
    position: relative;
    font-size: 17px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1em 2.5em;
    display: inline-block;
    border-radius: 6em;
    transition: all .2s;
    border: none;
    font-family: inherit;
    font-weight: 500;
    color: black;
    background-color: white;
}

.card-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.card-btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.card-btn::after {
    background-color: #fff;
}

.card-btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}

@media (max-width: 1200px) {
    .card-group {
        flex-wrap: wrap;
    }
}
</style>