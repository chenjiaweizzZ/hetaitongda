<template>
    <div class="contentB">
        <div class="section">
            <h1 class="title1">河海通大教育体系紧跟企业需求</h1>
            <h4 class="title2">想提升技能？想转行？想加薪？达内课程涵盖IT全行业</h4>
        </div>
        <div class="card-group">
            <div class="card card2">
                <div class="card__content_title">
                    <h3>C++</h3>
                    <p>具备多种语言优点</p>
                </div>
                <div class="card__content">
                    <p class="card__title">C++
                    </p>
                    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.</p>
                </div>
            </div>
            
            
            
            <div class="card card2">
                <div class="card__content_title">
                    <h3>Java</h3>
                    <p>具备多种语言优点</p>
                </div>
                <div class="card__content">
                    <p class="card__title">C++
                    </p>
                    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.</p>
                </div>
            </div>
            
            
            <div class="card card2">
                <div class="card__content_title">
                    <h3>python</h3>
                    <p>具备多种语言优点</p>
                </div>
                <div class="card__content">
                    <p class="card__title">C++
                    </p>
                    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.</p>
                </div>
            </div>
            <div class="card card2">
                <div class="card__content_title">
                    <h3>web前端开发</h3>
                    <p>具备多种语言优点</p>
                </div>
                <div class="card__content">
                    <p class="card__title">C++
                    </p>
                    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.</p>
                </div>
            </div>
            <div class="card card2">
                <div class="card__content_title">
                    <h3>C++</h3>
                    <p>具备多种语言优点</p>
                </div>
                <div class="card__content">
                    <p class="card__title">C++
                    </p>
                    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.</p>
                </div>
            </div>
            <div class="card card2">
                <div class="card__content_title">
                    <h3>C++</h3>
                    <p>具备多种语言优点</p>
                </div>
                <div class="card__content">
                    <p class="card__title">C++
                    </p>
                    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'contentB',
    data() {
        return {
        }
    }
}
</script>
<style scoped>
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

.card__content_title {
    color: #fff;
}

.card-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}





.card {
    position: relative;
    width: 300px;
    height: 200px;

    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card2 {
    /* background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%); */
    background: #86d9ab;
}



.card:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
}

.card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
}

.card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
}

.card:hover svg {
    scale: 0;
    transform: rotate(-45deg);
}


</style>