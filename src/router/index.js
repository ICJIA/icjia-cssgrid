import Vue from "vue";
import Router from "vue-router";
import article from "@/pages/Article";
import mosaic from "@/pages/Mosaic";
import vertical from "@/pages/Vertical";
import tableau from "@/pages/tableau";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      redirect: "/vertical"
    },
    {
      path: "/vertical",
      name: "vertical",
      component: vertical
    },
    {
      path: "/tableau",
      name: "tableau",
      component: tableau
    },

    {
      path: "/mosaic",
      name: "mosaic",
      component: mosaic
    },

    {
      path: "/article",
      name: "article",
      component: article
    },


    { path: "/*", redirect: "/vertical" }
  ]
});
