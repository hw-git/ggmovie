import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'
Vue.use(VueRouter);

// 添加路由
const routes = [
  movieRouter,
  mineRouter,
  cinemaRouter,
  {
    path: "/*",
    redirect: "/movie"
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
