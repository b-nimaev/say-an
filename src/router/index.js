import { createRouter, createWebHistory } from 'vue-router'
const home = () => import(/* webpackChunkName: 'dashboard' */ '@/views/home')
const dashboard = () => import(/* webpackChunkName: 'dashboard' */ '@/views/dashboard')
const login = () => import(/* webpackChunkName: 'login' */ '@/views/Login.vue')
const projects = () => import(/* webpackChunkName: 'projects' */ '@/views/projects')
const contacts = () => import(/* webpackChunkName: 'contacts' */ '@/views/contacts')

const routes = [
  {
    name: 'home',
    path: '/',
    component: home
  },
  {
    path: '/auth',
    component: login
  },
  {
    path: '/dashboard',
    component: dashboard
  },
  {
    path: '/projects',
    component: projects
  },
  {
    path: '/contacts',
    component: contacts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'nav-link active',
  routes,
})

export default router
