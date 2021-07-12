import Vue from "vue";
import VueRouter from "vue-router";
import userRoutes from "./modules/user";

Vue.use(VueRouter);

const routes = [userRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
