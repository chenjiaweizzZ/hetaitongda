<template>
  <div class="c-footer">
    <img src="@/assets/images/logo_png.png" class="footer-img" />
    <div class="ban">
      <div>鲁ICP备2023040145号</div>
      <div>菏海通大教育</div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'cFooter',
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.c-footer {
  background: #252422;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.footer-img {
  height: 60px;
  width: 60px;
}

.ban {
  font-size: 10px;
  color: aliceblue;
}
</style>