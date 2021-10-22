import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('./layouts/MainLay.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('./components/home/Home.vue')
      },
      {
        path: '/apoc',
        name: 'apoc',
        props: true,
        component: () => import('./components/apoc/Apoc.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
