import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/iframe",
    name: "iframe",
    component: () =>
      import( "../views/IframeView.vue"),
  },
  {
    path: "/script",
    name: "script",
    component: () =>
      import("../views/ScriptView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
