import { createRouter, createWebHistory } from 'vue-router'
const home = () => import(/* webpackChunkName: 'dashboard' */ '@/views/home')
const dashboard = () => import(/* webpackChunkName: 'dashboard' */ '@/views/dashboard')
const login = () => import(/* webpackChunkName: 'login' */ '@/views/login')
const projects = () => import(/* webpackChunkName: 'projects' */ '@/views/projects')
const contacts = () => import(/* webpackChunkName: 'contacts' */ '@/views/contacts')

const routes = [
  {
    name: 'home',
    path: '/',
    component: home
  },
  {
    path: '/login',
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
