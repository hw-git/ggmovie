export default {
  path: "/movie",
  // @ 指向src目录  在指向views下的对应组件
  component: () => import("@/views/Movie"),
  // 二级路由配置
  children: [
    {
      path: "city",//此处不能加/
      component: () => import("@/components/City")
    },
    {
      path: "nowPlaying",
      component: () => import("@/components/NowPlaying")
    },
    {
      path: "comingSoon",
      component: () => import("@/components/ComingSoon")
    },
    {
      path: "search",
      component: () => import("@/components/Search")
    },
    {
      path: "/",
      redirect: "nowPlaying"
    }
  ]
}