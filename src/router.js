import Vue from 'vue'
import Router from 'vue-router'
import MenuItem2 from './views/MenuItem2.vue'
import MenuItem3 from './views/MenuItem3.vue'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/menuItem2',
      name: 'menuItem2',
      component: MenuItem2
    },

    {
      path: '/menuItem3',
      name: 'menuItem3',
      component: MenuItem3
    },
    {
      path: '/menuItem1',
      name: 'menuItem1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/MenuItem1.vue')
    }
  ]
})
