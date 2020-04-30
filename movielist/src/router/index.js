import Vue from 'vue'

import VueRouter from 'vue-router'

import MovieList from '../views/MovieList.vue'

import SignUp from '../views/SignUp.vue'

import SignIn from '../views/SignIn.vue'


Vue.use(VueRouter)


let router = new VueRouter({

  routes: [

    {

      path: '/',

      redirect: '/signin'

    },

    {

      path: '*',

      redirect: '/signin'

    },

    {

      path: '/signin',

      name: SignIn,

      component: SignIn

    },

    {

      path: '/signup',

      name: SignUp,

      component: SignUp

    },

    {

      path: '/movie',

      name: MovieList,

      component: MovieList,

      meta: {

        requireAuth: true

      }

    }

  ]

})


router.beforeEach((to, from, next) => {

  let currentUser = firebase.auth().currentUser

  let requireAuth = to.matched.some(record => record.meta.requireAuth)

  if (requireAuth && !currentUser) {

    next('signin')

  } else if (!requireAuth && currentUser) {

    next('movie')

  } else {

    next()

  }

})

// const router = new VueRouter({

// routes

// })


export default router