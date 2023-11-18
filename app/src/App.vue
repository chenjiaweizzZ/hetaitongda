<template>
  <div id="app">
    <Menu v-if="isMenuShow" :class="{ 'header--hidden': headerHidden, 'header--show': !headerHidden }"></Menu>
    <!-- <div @click="test()" class="ttt">123</div> -->
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
      isMenuShow: true,
      headerHidden: false,
      lastScrollTop: 0
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll(e) {
      let scrollTop = e.target.scrollTop;
      // console.log(scrollTop,this.lastScrollTop)
      if (scrollTop > 100) {
        if (scrollTop > this.lastScrollTop) {
          this.headerHidden = true
        } else {
          this.headerHidden = false
        }
        this.lastScrollTop = scrollTop;
      } else {
        this.headerHidden = false
      }

    },
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
  /* overflow-y: scroll; */
}

.ttt {
  position: fixed;
  top: 80px;
  z-index: 999;
}

.header--hidden {
  animation-name: fadeOut;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  /* 调整动画时间以改变透明度变化的速度 */
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.header--show {
  animation-name: fadeShow;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  /* 调整动画时间以改变透明度变化的速度 */
}

@keyframes fadeShow {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

