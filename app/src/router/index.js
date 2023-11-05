import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/schools',
      name: 'School',
      component: () => import('@/views/School.vue')
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: () => import('@/views/AboutUs.vue')
    },
  ]
})
