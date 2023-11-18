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
    padding-top: 120px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow-y: scroll;
  }
  </style>