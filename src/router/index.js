import Vue from "vue";
import Router from "vue-router";
import article from "@/pages/Article";
import mosaic from "@/pages/Mosaic";
import layoutSample from "@/pages/Layout-sample";
import splitLanding from "@/pages/Split-landing";

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
      path: "/layout-sample",
      name: "layoutSample",
      component: layoutSample
    },
    {
      path: "/split-landing",
      name: "splitLanding",
      component: splitLanding
    },

    { path: "/*", redirect: article }
  ]
});
