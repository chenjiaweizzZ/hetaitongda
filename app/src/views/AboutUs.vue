<template>
    <div class="school">
        <content-AA/>
    </div>
  </template>
  
  <script>
import contentAA from './components/contentAA.vue'
  export default {
  components: { contentAA },
    name: 'AboutUs',
    data () {
      return {
      }
    }
  }
  </script>
  <style scoped>
  .school {
    margin-top: 120px;
  }
  </style>