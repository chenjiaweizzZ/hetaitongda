<template>
  <div class="c-footer">
    <img src="@/assets/images/logo1.jpg" class="footer-img" />
    <div class="ban">
      <div>苏ICP备:2020056290号</div>
      <div>菏海通大教育</div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'cfooter',
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.c-footer {
  /* background: #252422; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-img {
  height: 120px;
  width: 230px;
}

.ban {
  font-size: 10px;
}
</style>