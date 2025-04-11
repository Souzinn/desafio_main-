import { createRouter, createWebHistory } from "vue-router";

import Main from "../views/main.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/pokemons",
    name: "pokemons",
    component: () => import("../views/pokemons.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
