<template>
    <div class="contentDiffA">
        <div class="section">
            <h1 class="title1">专套本和专升本有什么区别</h1>
        </div>
        <div class="card-box">
            <div class="card">
                <div class="bg bg1">
                    <h1>专套本</h1>
                    <h3>含金量低</h3>
                    <h3>自学</h3>
                    <h3>业余</h3>
                    <h3>考试科目学校安排</h3>
                    <h3>非全日制学历</h3>
                    <h3>考公考编等受限制</h3>
                </div>
                <!-- <div class="blob"></div> -->
            </div>
            <div class="card">
                <div class="bg bg2">
                    <h1>专升本</h1>
                    <h3>含金量高</h3>
                    <h3>进入本科学校进读</h3>
                    <h3>语数外计算机</h3>
                    <h3>全日制学历</h3>
                    <h3>获得毕业证以及学士学位证书</h3>
                    <h3>考公考编无限制</h3>
                </div>
                <div class="blob"></div>
            </div>
            <div class="card">
                <div class="bg bg1">
                    <h1>自考本</h1>
                    <h3>含金量很低</h3>
                    <h3>函授</h3>
                    <h3>业余学习</h3>
                    <h3>修满学分</h3>
                    <h3>非全日制学历</h3>
                    <h3>考公考编等受限制</h3>
                </div>
                <!-- <div class="blob"></div> -->
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'contentDiffA',
    data() {
        return {
        }
    }
}
</script>
<style scoped>

.contentDiffA {
    display: flex;
    flex-direction: column;
    align-items: center;
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

.card-box {
    /* position: relative; */
    display: flex;
    flex: 0 1 30%;
    justify-content: space-around;
    margin-bottom: 40px;
    width: 90vw;
}

.card {
    position: relative;
    width: 400px;
    height: 500px;
    border-radius: 14px;
    z-index: 10;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 390px;
    height: 490px;
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    /* backdrop-filter: blur(24px); */
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bg1 {
    background: rgb(202, 202, 202);
}

.bg2 {
    background: #151f20;
    color: white;
}

.blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #ff0000;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
}

@keyframes blob-bounce {
    0% {
        transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
        transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
        transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
        transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
        transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
}

@media (max-width: 1200px) {
    .card-box {
        flex-wrap: wrap;
    }
}
</style>