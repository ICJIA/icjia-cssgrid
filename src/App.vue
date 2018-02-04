<template>
  <div id="app">
    <github />
    <navigation />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- <my-footer /> -->
  </div>
</template>

<script>
import MyFooter from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Github from "@/components/Github";
import metaInfo from "./meta";
import router from "./router";
import { EventBus } from "@/utils/event-bus.js";

router.beforeEach((to, from, next) => {
  let routeObj = { to: to.path, from: from.path };
  EventBus.$emit("routed", routeObj);
  next();
});

import "@/assets/styles/main.css";
export default {
  mounted: function() {
    EventBus.$emit("init");
  },
  metaInfo,
  name: "App",
  data() {
    return {
      current: this.$route.path
    };
  },
  components: {
    MyFooter,
    Navigation,
    Github
  }
};
</script>

<style>
#app {
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #eee;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
