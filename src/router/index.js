import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Portals from  '../views/Portals'
import SignIn from  '../views/SignIn'
import SignUp from  '../views/SignUp'

import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: false
    }
  },
  {
    path: '/portals',
    name: 'Portals',
    component: Portals,
    meta: {
      auth: true
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SignIn,
    meta: {
      auth: false
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp,
    meta: {
      auth: false
    }
  },
  {
    path: '/:catchAll(.*)',
    component: Home,
    meta: {
      auth: false
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if(to.meta.auth  && !store.getters.isAuth){
    next('/signin');
  }
  next({to});
})

export default router
