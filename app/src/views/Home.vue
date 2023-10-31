<template>
    <div class="home-wrapper">
        <div class="home">
            <div class="section">
                <h1 class="title1">班级设置</h1>
                <h4 class="title2">我们坚持聘请本科高校教师授课，并根据每位同学的情况和需求定制不同的学习计划和方案。</h4>
            </div>
            <div class="card-group">
                <div class="card-client client1">
                    <div class="social-media">
                        <div class="card-title1">HFOAJJFA</div>
                        <div class="crad-title2">冲刺班</div>
                        <div class="crad-title2">全日制半封闭集训营</div>
                        <div>【2个月】</div>
                        <div>公共英语+2门专业课</div>
                        <div>本科高校教师授课、全程干货</div>
                        <div>英语专八班主任24小时在线答疑</div>
                        <div>外地学员协助安排住宿</div>
                        <div>适合同学利用暑期查缺补漏、强化巩固，精准掌握考试题型、重难点解析，真题模拟，应试技巧等，集训提升快，弯道超车。</div>
                    </div>
                </div>
                <div class="card-client client2">
                    <div class="social-media">
                        <div class="card-title1">HFOAJJFA</div>
                        <div class="crad-title2">冲刺班</div>
                        <div class="crad-title2">全日制半封闭集训营</div>
                        <div>【2个月】</div>
                        <div>公共英语+2门专业课</div>
                        <div>本科高校教师授课、全程干货</div>
                        <div>英语专八班主任24小时在线答疑</div>
                        <div>外地学员协助安排住宿</div>
                        <div>适合同学利用暑期查缺补漏、强化巩固，精准掌握考试题型、重难点解析，真题模拟，应试技巧等，集训提升快，弯道超车。</div>
                    </div>
                </div>
                <div class="card-client client3">
                    <div class="social-media">
                        <div class="card-title1">HFOAJJFA</div>
                        <div class="crad-title2">冲刺班</div>
                        <div class="crad-title2">全日制半封闭集训营</div>
                        <div>【2个月】</div>
                        <div>公共英语+2门专业课</div>
                        <div>本科高校教师授课、全程干货</div>
                        <div>英语专八班主任24小时在线答疑</div>
                        <div>外地学员协助安排住宿</div>
                        <div>适合同学利用暑期查缺补漏、强化巩固，精准掌握考试题型、重难点解析，真题模拟，应试技巧等，集训提升快，弯道超车。</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Home',
    data() {
        return {
        }
    }
}
</script>
<style scoped>
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
}

.card-client {
    width: 18rem;
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
}</style>