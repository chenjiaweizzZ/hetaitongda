<template>
  <div class="swiperA">
    <el-upload class="avatar-uploader" action="http://localhost:8000/file/pic" :show-file-list="false"
      :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"
      :http-request="uploadFile">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
  
<script>
import { swiperAdd } from '@/service/home'
export default {
  name: 'swiperA',
  data() {
    return {
      imageUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res, file)
    },
    beforeAvatarUpload(file) {
      console.log(file)
    },
    uploadFile(file) {
      const form = new FormData()
      form.append('pic', file.file)
      swiperAdd(form).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped></style>