<template>
  <div id="app">
    <navigation />
    <router-view/>

    <!-- <my-footer /> -->
  </div>
</template>

<script>

  import MyFooter from '@/components/Footer'
  import Navigation from '@/components/Navigation'
  import metaInfo from './meta'
  import router from "./router";
  import { EventBus } from "@/utils/event-bus.js";


  router.beforeEach((to, from, next) => {
    let routeObj = { to: to.path, from: from.path };
    EventBus.$emit("routed", routeObj);
    next();
  });

  import '@/assets/styles/main.css'
  export default {
    mounted: function () {
      EventBus.$emit("init");
    },
    metaInfo,
    name: 'App',
    data() {
      return {
        current: this.$route.path

      }
    },
    components: {
      MyFooter,
      Navigation

    }
  }
</script>

<style>
  #app {
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


  }
</style>