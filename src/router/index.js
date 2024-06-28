import Vue from 'vue'
import VueRouter from 'vue-router'
import Increment from '../views/IncrementView.vue'
import Decrement from '../views/DecrementView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'increment',
    component: Increment
  },
  {
    path: '/decrement',
    name: 'decrement',
    component:Decrement
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
