export default {
  path: "/movie",
  name: 'movie',
  // @ 指向src目录  在指向views下的对应组件
  component: () => import("@/views/Movie")
}