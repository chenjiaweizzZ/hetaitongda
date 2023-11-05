<template>
  <div id="app">
    <Menu></Menu>
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu"
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

}
</style>
