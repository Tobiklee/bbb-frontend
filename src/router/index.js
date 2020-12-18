import Vue from 'vue'
import VueRouter from 'vue-router'
import RegistrationView from "../views/RegistrationView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Anmeldung',
    component: RegistrationView
  },
  {
    path: '/fights',
    name: 'Kämpfe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FightsView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
