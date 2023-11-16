<template>
    <div class="menu">
        <div class="menu-list">
            <div class="menu-logo">
                <img src="@/assets/images/logo1.jpg" />
            </div>
            <div class="menu-group">
                <span class="menu-item" @click="toPage('home')"><i class="el-icon-discount"></i>首页</span>
                <!-- <span class="menu-item"><i class="el-icon-office-building"></i>课程</span> -->
                <span class="menu-item" @click="toPage('school')"><i class="el-icon-school"></i>院校信息</span>
                <!-- <span class="menu-item"><i class="el-icon-coordinate"></i>招生简章</span>
                <span class="menu-item"><i class="el-icon-office-building"></i>院校查询</span>
                <span class="menu-item"><i class="el-icon-folder-checked"></i>招考信息</span> -->
                <span class="menu-item" @click="toPage('aboutUs')"><i class="el-icon-position"></i>关于我们</span>
                <!-- <span class="menu-item"><el-button type="danger" plain>联系我们</el-button></span> -->
                <van-icon name="apps-o" size="40" class="phoneMenu" @click="popShow" />
            </div>
        </div>
        <van-popup v-model="show" position="right" style="width: 55%; height: 100%;">
            <div class="phoneMenu-list">
                <div class="phoneMenu-list-item">
                    <img src="@/assets/images/logo_iphone.jpg" />
                </div>
                <div class="phoneMenu-list-item phoneMenu-list-item2" @click="toPage('home')">
                    <van-icon name="home-o" size="25px" />
                    <span class="phoneMenu-list-item-fnt">首页</span>
                </div>
                <div class="phoneMenu-list-item phoneMenu-list-item2" @click="toPage('school')">
                    <van-icon name="hotel-o" size="25px" />
                    <span class="phoneMenu-list-item-fnt">院校信息</span>
                </div>
                <div class="phoneMenu-list-item phoneMenu-list-item2" @click="toPage('aboutUs')">
                    <van-icon name="guide-o" size="25px" />
                    <span class="phoneMenu-list-item-fnt">关于我们</span>
                </div>
            </div>
        </van-popup>
    </div>
</template>
  
<script>
export default {
    name: 'MenuU',
    data() {
        return {
            show: false,
        }
    },
    methods: {
        popShow() {
            this.show = true;
        },
        toPage(name) {
            this.show = false;
            this.$router.push({
                name
            })
        }
    }
}
</script>
<style scoped>
.menu {
    background: #fff;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
}



.menu-list {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    max-width: 66vw;
    width: 100%;
    justify-content: space-between;
}

.menu-group {
    font-size: 14px;
    /* line-height: 1.6; */
    margin: 15px 3px;
    padding: 10px 15px;
    opacity: .8;
    text-transform: uppercase;
    font-weight: 600;
    color: #66615b;
    display: flex;
    align-items: center;
}

.menu-logo {
    height: 80px;
}

.menu-logo img {
    width: 200px;
    height: 80px;
}

.phoneMenu {
    display: none;
}

.menu-item {
    cursor: pointer;
    margin: 15px 3px;
    padding: 10px 15px;
}



.phoneMenu-list-item {
    display: flex;
}

.phoneMenu-list-item2 {
    margin-left: 20px;
    height: 40px;
    align-items: center;
}

.phoneMenu-list-item-fnt {
    font-size: 16px;
    font-weight: 600;
    margin-left: 10px;
}

.phoneMenu-list img {
    height: 150px;
    width: 200px;
}

@media (max-width: 1200px) {
    .menu-item {
        display: none;
    }

    .phoneMenu {
        display: block;
        margin-right: 30px;
    }

    .menu-list {
        max-width: 100vw
    }
}
</style>

