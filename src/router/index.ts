import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/main.vue"),
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("@/views/HomeView.vue"),
          meta: { isAuth: false },
        },
      ],
    },
  ]
})

export default router
