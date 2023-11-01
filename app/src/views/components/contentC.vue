<template>
    <div class="contentC">
        <div class="section">
            <h1 class="title1">河海通大·成就金色前程</h1>
            <h4 class="title2">
                河海通大（上海河海通大教育培训有限公司，前身为上海金程国际金融专修学院）是一家以财经培训为核心的专业机构，秉承“专业来自101%的投入”的理念，河海通大教育致力于成为学员与客户可信赖的财经培训专家，打造财经教育领域的匠心品牌。
                河海通大教育以客户为中心，坚持不断提升产品品质，先后推出了包括：国内外金融证书考试培训（CFRM、AQF、CFA、FRM、证券从业、基金从业、银行从业）、国内外财会证书考试培训（CPA、CMA、ACCA、会计职称）、国内外理财证书考试培训（RFP、理财实务）、研究生入学考试辅导培训（考研数学、考研英语、考研政治、金融硕士、会计硕士、经济学、其他），以及企业咨询和机构定制培训服务。坚持“专业•创新•增值”的经营理念，河海通大教育借助互联网技术平台，汇聚优质教育资源，为学员、企业和行业提供教学产品、智能学习系统、人才培训和职业发展等多个领域的解决方案。助力实现财经精英梦想，成为客户与学员成功路上的事业伙伴，共同铸就金色前程！
                “河海通大”寓意金色前程，它以专业的金融教育助力从事金融的企业和个人拥有金色前程。金程始终秉承“专业来自101%的投入”的理念，坚持每天进步一点点。坚持以客户、学员为中心，以101%的投入，想学员所想，急学员所急。
            </h4>
        </div>
        <div class="job">
            <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <p>职业技能培训</p>
                    </div>
                    <div class="card-back">
                        <p>B厨子 会计 计算机证书  。。。。。。。。</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <p>企业培训</p>
                    </div>
                    <div class="card-back">
                        <p>B厨子 会计a计算机证书  。。。。。。。。</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <p>金程考研</p>
                    </div>
                    <div class="card-back">
                        <p>专升本。。。。。。。。。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'contentC',
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.job {
    display: flex;
    justify-content: space-around;
    flex: 0 1 30%;
}
.section {
    text-align: center;
}

.title1 {
    font-size: 2em;
    font-weight: bold;
}

.title2 {
    font-size: 0.5em;
    font-weight: bold;
    font-family: Montserrat, Helvetica, Arial, sans-serif;

}

.card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #6A2C70;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #6A2C70;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(0deg);
}

.card-back {
  background-color: #F08A5D;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #F08A5D;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}

@media (max-width: 1200px) {
    .job {
        flex-wrap: wrap;
    }
}
</style>
  