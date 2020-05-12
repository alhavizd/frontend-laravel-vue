import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Layout = () => import('./views/layouts/Layout').then(m => m.default || m)
const Login = () => import('./views/auth/Login').then(m => m.default || m)
const SignUp = () => import('./views/auth/SignUp').then(m => m.default || m)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: { name: 'login' },
    children: [
      { path: '/login', name: 'login', component: Login },
      { path: '/signup', name: 'signup', component: SignUp }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// router.beforeEach(async(to, from, next) => {
//
// })

// router.afterEach((to, from) => {
//
// })

export default router
