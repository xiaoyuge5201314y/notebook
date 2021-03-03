import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/note'
}, {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/home/Home.vue')
}, {
  path: '/note',
  name: 'Note',
  component: () => import('@/views/note/Note.vue'),
  children: [{
    path: '/',
    redirect: 'git',
  }, {
    path: 'git',
    name: 'Git',
    component: () => import('@/views/note/Git.vue'),
  }, {
    path: 'gitHub',
    name: 'GitHub',
    component: () => import('@/views/note/GitHub.vue'),
  }]
}]

const router = new VueRouter({
  routes
})

export default router