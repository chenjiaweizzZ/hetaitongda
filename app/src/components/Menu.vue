<template>
    <div class="menu">
        <div class="menu-list">
            <div class="menu-logo">
                <img src="@/assets/images/logo1.jpg" />
            </div>
            <div class="menu-group">
                <span class="menu-item"><i class="el-icon-discount"></i>首页</span>
                <!-- <span class="menu-item"><i class="el-icon-office-building"></i>课程</span> -->
                <span class="menu-item"><i class="el-icon-school"></i>院校信息</span>
                <!-- <span class="menu-item"><i class="el-icon-coordinate"></i>招生简章</span>
                <span class="menu-item"><i class="el-icon-office-building"></i>院校查询</span>
                <span class="menu-item"><i class="el-icon-folder-checked"></i>招考信息</span> -->
                <span class="menu-item"><i class="el-icon-position"></i>关于我们</span>
                <!-- <span class="menu-item"><el-button type="danger" plain>联系我们</el-button></span> -->
                <el-dropdown trigger="click">
                    <span class="phoneMenu">
                        <i class="el-icon-s-grid"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">首页</el-dropdown-item>
                        <!-- <el-dropdown-item icon="el-icon-circle-plus">课程</el-dropdown-item> -->
                        <el-dropdown-item icon="el-icon-circle-plus-outline">院校信息</el-dropdown-item>
                        <!-- <el-dropdown-item icon="el-icon-check">招生简章</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-check">院校查询</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-check">招考信息</el-dropdown-item> -->
                        <el-dropdown-item icon="el-icon-circle-check">关于我们</el-dropdown-item>
                        <!-- <el-dropdown-item icon="el-icon-circle-check">联系我们</el-dropdown-item> -->
                    </el-dropdown-menu>
                </el-dropdown>
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

@media (max-width: 1200px) {
    .menu-item {
        display: none;
    }

    .phoneMenu {
        display: block;
    }

    .menu-list {
        max-width: 100vw
    }
}
</style>

<style>
.menu .phoneMenu  {
    font-size: 30px;
}
</style>