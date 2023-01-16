import NotFound from "../views/NotFound.vue";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const historyMode = import.meta.env.PROD
  ? createWebHashHistory
  : createWebHistory;

const router = createRouter({
  history: historyMode(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/show/:id",
      name: "show",
      component: () => import("../views/SlideView.vue"),
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
