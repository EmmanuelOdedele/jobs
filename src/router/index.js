import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import JobView from '@/views/JobView.vue'
import JobDetailsView from '@/views/JobDetailsView.vue'
import NotFoundVue from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/job',
    name: 'job',
    component: JobView
  },
  {
    path: '/job/:id',
    name: 'jobdetail',
    component: JobDetailsView,
    props: true
  },
  // redirect
  {
    path: '/all-job',
    redirect: '/job'
  },
  // catchall 404
  
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFoundVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
