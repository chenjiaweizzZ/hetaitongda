<template>
  <div class="homeAdmin">
    <!-- 头部 -->
    <div class="header">
      <div class="header-left">
        <div class="logo"></div>
        <div class="title">菏海通大后台管理系统</div>
      </div>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-picture"></i>轮播图管理</span>
        <swiper-a></swiper-a>
      </el-tab-pane>
      <el-tab-pane label="消息中心">消息中心</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
  
<script>
import swiperA from './components/swiperA.vue'
export default {
  components: { swiperA },
  name: 'homeAdmin',
  created() {
    console.log(this.$route)
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.homeAdmin {
  margin: 20px;
}

.titie {
  font-size: 80px;
}

.header {
  height: 30px;
  display: flex;
  justify-content: center;
}
</style>
  