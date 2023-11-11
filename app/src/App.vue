<template>
  <div id="app">
    <Menu v-if="isMenuShow"></Menu>
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu"
export default {
  name: 'App',
  components: {
    Menu
  },
  data() {
    return {
      isMenuShow: false
    }
  },
  created() {

  },
  watch: {
    $route(to) {
      if (to.path === '/' || to.path === '/home' || to.path === '/schools' || to.path === '/aboutus') {
        this.isMenuShow = true
      } else {
        this.isMenuShow = false
      }
    }

  },

}
</script>

<style>
#app {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
}
</style>

