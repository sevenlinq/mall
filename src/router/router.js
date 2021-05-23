import vue from 'vue'
import Router from 'vue-router'

const home = () => import("views/home/home")
const cart = () => import("views/cart/cart")
const category = () => import("views/category/category")
const profile = () => import("views/profile/profile")

vue.use(Router)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/cart",
    component: cart
  },
  {
    path: "/category",
    component: category
  },
  {
    path: "/profile",
    component: profile
  }
]

const router = new Router({
  routes,
  mode: "history"
})

export default router
