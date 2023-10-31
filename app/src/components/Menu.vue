<template>
    <div class="menu">
        <div class="menu-list">
            <div class="menu-logo">
                <img src="@/assets/images/logo1.jpg" />
            </div>
            <div class="menu-group">
                <span class="menu-item"><i class="el-icon-discount"></i>首页</span>
                <span class="menu-item"><i class="el-icon-office-building"></i>课程</span>
                <span class="menu-item"><i class="el-icon-school"></i>院校信息</span>
                <span class="menu-item"><i class="el-icon-coordinate"></i>招生简章</span>
                <span class="menu-item"><i class="el-icon-office-building"></i>院校查询</span>
                <span class="menu-item"><i class="el-icon-folder-checked"></i>招考信息</span>
                <span class="menu-item"><i class="el-icon-position"></i>关于我们</span>
                <el-button type="danger" plain>联系我们</el-button>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'Menu',
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.menu {
    background: #fff;
    display: flex;
    justify-content: center;
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
    line-height: 1.6;
    margin: 15px 3px;
    padding: 10px 15px;
    opacity: .8;
    text-transform: uppercase;
    font-weight: 600;
    color: #66615b;
}

.menu-logo {
    height: 80px;
}

.menu-logo img {
    width: 200px;
    height: 80px;
}
.menu-item {
    cursor: pointer;
    margin: 15px 3px;
    padding: 10px 15px;
}
</style>