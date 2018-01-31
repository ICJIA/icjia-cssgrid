import Vue from "vue";
import Router from "vue-router";
import A0 from "@/pages/A0";
import A1 from "@/pages/A1";
import A2 from "@/pages/A2";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/A0"
    },
    {
      path: "/A0",
      name: "A0",
      component: A0
    },
    {
      path: "/A1",
      name: "A1",
      component: A1
    },
    {
      path: "/A2",
      name: "A2",
      component: A2
    },
    { path: "/*", redirect: A0 }
  ]
});
