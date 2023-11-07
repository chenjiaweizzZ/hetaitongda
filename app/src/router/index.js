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
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/schools',
      name: 'school',
      component: () => import('@/views/School.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutUs',
      component: () => import('@/views/AboutUs.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/Admin.vue')
    },
    {
      path: '/logina',
      name: 'logina',
      component: () => import('@/views/AdminLogin.vue')
    },
    {
      path: '/homea',
      name: 'homea',
      component: () => import('@/views/HomeAdmin.vue')
    },
  ]
})
