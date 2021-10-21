import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./layouts/MainLay.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('./components/home/Home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
