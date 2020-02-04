export default {
  path: "/cinema",
  component: () => import("@/views/Cinema"),
  children: [
    {
      path: "week",//此处不能加/
      component: () => import("@/components/WeekList")
    },
    {
      path: "europe",
      component: () => import("@/components/EuropeList")
    },
    {
      path: "new",
      component: () => import("@/components/NewList")
    },
    {
      path: "/",
      redirect: "week"
    }
  ]
}