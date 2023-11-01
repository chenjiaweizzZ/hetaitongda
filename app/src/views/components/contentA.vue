<template>
    <div class="contentA">
        <div class="section">
            <h1 class="title1">班级设置</h1>
            <h4 class="title2">我们坚持聘请本科高校教师授课，并根据每位同学的情况和需求定制不同的学习计划和方案。</h4>
        </div>
        <div class="card-group">
            <div class="card-client client1">
                <div class="social-media">
                    <div class="card-title1">HFOAJJFA</div>
                    <div class="card-title2">冲刺班</div>
                    <div class="card-title2">全日制半封闭集训营</div>
                    <div>【2个月】</div>
                    <div>公共英语+2门专业课</div>
                    <div>本科高校教师授课、全程干货</div>
                    <div>英语专八班主任24小时在线答疑</div>
                    <div>外地学员协助安排住宿</div>
                    <div>适合同学利用暑期查缺补漏、强化巩固，精准掌握考试题型、重难点解析，真题模拟，应试技巧等，集训提升快，弯道超车。</div>
                    <button class="card-btn">立即定制报考计划</button>
                </div>
            </div>
            <div class="card-client client2">
                <div class="social-media">
                    <div class="card-title1">HFOAJJFA</div>
                    <div class="card-title2">冲刺班</div>
                    <div class="card-title2">全日制半封闭集训营</div>
                    <div>【2个月】</div>
                    <div>公共英语+2门专业课</div>
                    <div>本科高校教师授课、全程干货</div>
                    <div>英语专八班主任24小时在线答疑</div>
                    <div>外地学员协助安排住宿</div>
                    <div>适合同学利用暑期查缺补漏、强化巩固，精准掌握考试题型、重难点解析，真题模拟，应试技巧等，集训提升快，弯道超车。</div>
                    <button class="card-btn">立即定制报考计划</button>
                </div>
            </div>
            <div class="card-client client3">
                <div class="social-media">
                    <div class="card-title1">HFOAJJFA</div>
                    <div class="card-title2">冲刺班</div>
                    <div class="card-title2">全日制半封闭集训营</div>
                    <div>【2个月】</div>
                    <div>公共英语+2门专业课</div>
                    <div>本科高校教师授课、全程干货</div>
                    <div>英语专八班主任24小时在线答疑</div>
                    <div>外地学员协助安排住宿</div>
                    <div>适合同学利用暑期查缺补漏、强化巩固，精准掌握考试题型、重难点解析，真题模拟，应试技巧等，集训提升快，弯道超车。</div>
                    <button class="card-btn">立即定制报考计划</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.contentA {
    margin-top: 100px;
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
}

.card-client {
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 10px;
    margin-right: 10px;
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