<template>
    <div class="contentSpecial">
        <h1 class="title1">核心优势</h1>
        <div class="section">
            <h4 class="title2">1.小班化教学，教室不超过35人，保持绝对的教学质量</h4>
            <h4 class="title2">2.全程面授，每周六周天其中一天开课</h4>
            <h4 class="title2">3.人性化教育，专车接送，爱心早餐</h4>
            <h4 class="title2">4.价格低，后续住宿价格低至1块一天</h4>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'contentSpecial',
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.section {
    text-align: center;
    /* margin-left: 80px;
    margin-right: 80px; */
    display: flex;
    justify-content: space-around;
}

.title1 {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
}

.title2 {
    font-size: 1.6em;
    font-weight: bold;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
}

.contentSpecial {
    background-color: #151f20;
    color: #fff;
    }
</style>
  