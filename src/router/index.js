import Vue from "vue";
import Router from "vue-router";
import article from "@/pages/Article";
import mosaic from "@/pages/Mosaic";
import vertical from "@/pages/Vertical";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/article"
    },
    {
      path: "/article",
      name: "article",
      component: article
    },
    {
      path: "/mosaic",
      name: "mosaic",
      component: mosaic
    },
    {
      path: "/vertical",
      name: "vertical",
      component: vertical
    },

    { path: "/*", redirect: "/article" }
  ]
});
