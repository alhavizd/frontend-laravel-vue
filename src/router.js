import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '@/store/index'

Vue.use(VueRouter)

const Layout = () => import('./views/layouts/Layout').then(m => m.default || m)
const Login = () => import('./views/auth/Login').then(m => m.default || m)
const SignUp = () => import('./views/auth/SignUp').then(m => m.default || m)
const Admin = () => import('./views/layouts/Admin').then(m => m.default || m)
const Dashboard = () => import('./views/dashboard/Index').then(m => m.default || m)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: { name: 'login' },
    children: [
      { path: '/login', name: 'login', component: Login },
      { path: '/signup', name: 'signup', component: SignUp },
      {
        path: '/admin',
        name: 'admin',
        component: Admin,
        redirect: { name: 'dashboard' },
        children: [
          { path: 'dashboard', name: 'dashboard', component: Dashboard }
        ]
      }
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

router.beforeEach(async(to, from, next) => {
  store.state.loading_page = true
  next()
})

router.afterEach((to, from) => {
  setTimeout(function() { store.state.loading_page = false }, 1000)
})

export default router
