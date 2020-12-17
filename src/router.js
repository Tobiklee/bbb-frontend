import { createWebHistory, createRouter } from "vue-router";

import RegistrationView from "./views/RegistrationView.vue";
import FightsView from "./views/FightsView.vue";

const history = createWebHistory();

const routes = [
  { path: "/", component: RegistrationView },
  { path: "/fights", component: FightsView },
];

const router = createRouter({ history, routes });

export default router;
