<template>
    <div>
        <div class="centered-right" style="opacity: .7; z-index: 10">
            <a v-on:click.stop="goNext">
                <i class="fa fa-arrow-right fa-4x arrow" aria-hidden="true" style="color: #000;"></i>
            </a>

        </div>

        <div class="centered-left" style="opacity: .7; z-index: 10">

            <a v-on:click.stop="goPrevious">
                <i class="fa fa-arrow-left fa-4x arrow" aria-hidden="true" style="color: #000;"></i>
            </a>
        </div>


    </div>
</template>

<script>

    import router from "@/router";
    import { EventBus } from "@/utils/event-bus.js";

    export default {
        name: "Navigation",
        methods: {
            goNext: function () {
                this.$router.push(this.next);
            },
            goPrevious: function () {
                this.$router.push(this.previous);
            },
            setNextAndPrevious: function (currentPage, routes) {

                let next, previous

                routes.map((route, idx) => {
                    if (route === currentPage) {
                        // let position = idx
                        if (idx === 0) {
                            next = routes[idx + 1]
                            previous = routes[routes.length - 1]
                        } else if (idx === routes.length - 1) {
                            next = routes[0]
                            previous = routes[idx - 1]
                        } else {
                            next = routes[idx + 1]
                            previous = routes[idx - 1]
                        }
                    }
                })

                this.next = next;
                this.previous = previous
                console.log(`Next: ${this.next} Previous: ${this.previous}`)
            }
        },
        mounted: function () {

            this.routesArray.map(a => {
                if (a.path !== "*" && a.path !== "/" && a.path !== "/*") this.activeRoutes.push(a.path);
            });

            EventBus.$on("routed", routeObj => {
                if (routeObj.from !== "/") {
                    console.log("Routed: ", routeObj);
                    this.currentPage = routeObj.to;
                }
                this.setNextAndPrevious(this.currentPage, this.activeRoutes);
            });

            EventBus.$on("init", routeObj => {
                this.currentPage = this.$route.path;
                this.setNextAndPrevious(this.currentPage, this.activeRoutes);
            });

        },
        data() {
            return {
                routesArray: router.history.router.options.routes,
                currentPage: "",
                next: "",
                previous: "",
                activeRoutes: []
            };
        },
        components: {}
    };
</script>

<style>
    .centered-right {
        position: fixed;
        top: 50%;
        left: 97%;
        /* bring your own prefixes */
        transform: translate(-50%, -50%);
    }

    .centered-left {
        position: fixed;
        top: 50%;
        left: 3%;
        /* bring your own prefixes */
        transform: translate(-50%, -50%);
    }

    .arrow {
        background: #ccc;
        padding: 10px;
    }
</style>