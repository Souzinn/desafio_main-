import { createRouter, createWebHistory } from "vue-router";

import Main from "../views/main.vue";
import Pokemons from "../views/pokemons.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/pokemons",
    name: "pokemons",
    component: Pokemons,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
