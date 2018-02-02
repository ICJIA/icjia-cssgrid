<template>
    <section class="page-wrapper">
        <div :class="{ ' open ': drawer}" class="overlay">
            <div class="outer-close toggle-overlay">
                <a class="close">
                    <span></span>
                </a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a @click.prevent>About Us</a>
                    </li>
                    <li>
                        <a @click.prevent>Contact</a>
                    </li>
                    <li>
                        <a href="https://github.com/ICJIA/icjia-demo-grid-tailwind">GitHub Source</a>
                    </li>

                </ul>
            </nav>
        </div>


        <div class="burger">
            <button class="hamburger hamburger--collapse" :class="{ ' is-active ': drawer}" type="button" @click.stop="toggleDrawer">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
        <div class="container xl mx-auto mb-8 pt-4">

            <div class="body-content">
                <div class="latest shadow-md pt-8 pl-8 pr-8 pb-8">
                    <div class="main-header">
                        <h2>Latest</h2>
                        <a @click.prevent class="link">archive</a>
                    </div>
                    <div v-for="index in 15" class="pb-4 mt-4 main-item text-base" :key="index">
                        <a @click.prevent class="link">
                            <h4 v-dummy="10"></h4>
                        </a>

                        <div ref="datetime" class="text-sm mt-1"></div>

                    </div>

                </div>
                <div class="top shadow-md pt-8 pl-8 pr-8 pb-8">
                    <div class="main-header">
                        <h2>Top Stories</h2>
                        <a @click.prevent class="link">archive</a>
                    </div>
                    <div v-for="index in 5" class="" :key="index">

                        <div class="card mt-4 rounded overflow-hidden shadow-lg">
                            <img class="w-full" v-dummy:800X600>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2 card-text" v-dummy="6"></div>
                                <p class="text-grey-darker text-base" v-dummy="30">
                                </p>
                            </div>
                            <div class="px-6 py-4">
                                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2" v-dummy="1">#</span>
                                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2" v-dummy="1">#</span>
                                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker" v-dummy="1">#</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-2 text-sm">Inspired by
                <a href="http://www.axios.com" class="link">Axios</a>
            </div>
        </div>

    </section>
</template>

<script>
    let faker = require('faker/locale/en');
    var differenceInDays = require('date-fns/difference_in_days')
    var differenceInCalendarWeeks = require('date-fns/difference_in_calendar_weeks')


    export default {
        name: "Vertical",
        mounted: function () {

            let latestPostTime = this.$refs.datetime
            let dateArray = [];
            let now = new Date();
            let pastText;
            for (let i = 0; i < latestPostTime.length; i++) {
                dateArray.push(faker.date.past())
            }
            let sortedDates = dateArray.sort(function (a, b) {
                return b - a
            });
            latestPostTime.map(function (el, idx) {
                let pastDate = sortedDates[idx];
                let weeksAgo = differenceInCalendarWeeks(
                    now,
                    pastDate
                )

                let daysAgo = differenceInDays(
                    now,
                    pastDate
                )
                /**
                 * TODO: Check for 'day' or 'days', etc.
                 *
                 */

                if (weeksAgo < 2) {
                    pastText = daysAgo + ' days ago'
                } else {
                    pastText = weeksAgo + ' weeks ago'
                }

                el.innerHTML = pastText;
            })


        },
        data: function () {
            return {
                drawer: false
            }
        },
        methods: {

            toggleDrawer: function (e) {
                this.drawer = !this.drawer;
                this.drawer ? document.getElementsByClassName("overlay")[0].style.height = "100%" : document.getElementsByClassName("overlay")[0].style.height = "0%"
                return;
            },
            showDropdown: function () {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }

            }

        }
    };
</script>

<style scoped>
    .page-wrapper {
        height: 100%
    }

    .body-content {
        display: grid;
        grid-auto-rows: minmax(200px, auto);
        grid-template-columns: 1fr 2fr;
        grid-gap: 5px;

    }

    .latest {
        background: #fff;

    }

    .top {
        background: #fff;
    }

    .main-header {
        border-bottom: 1px solid #ccc;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }

    .main-item p {
        display: inline;
    }

    .main-header a {

        margin: 5px;

    }

    .card img {
        min-height: 400px;
    }

    a.link {
        color: #333;
        transition: all 250ms linear;
    }

    a.link:hover {
        cursor: pointer;
        color: red;
    }

    .card:hover {
        filter: grayscale(100%);
        box-shadow: 0px 0px 50px #000000;
        z-index: 200;
        -webkit-transition: all 200ms ease-in;
        -webkit-transform: scale(1.05);
        -ms-transition: all 200ms ease-in;
        -ms-transform: scale(1.05);
        -moz-transition: all 200ms ease-in;
        -moz-transform: scale(1.05);
        transition: all 300ms ease-in;
        transform: scale(1.05);
        cursor: pointer;
        opacity: 1;

    }



    .topnav {
        overflow: hidden;
        background-color: #fff;
        top: 0;
        z-index: 100;
        position: fixed;
        width: 100%;
        border-bottom: 1px solid #ccc;
        -webkit-box-shadow: 2px 5px 8px -2px rgba(156, 154, 156, 0.47);
        -moz-box-shadow: 2px 5px 8px -2px rgba(156, 154, 156, 0.47);
        box-shadow: 2px 5px 8px -2px rgba(156, 154, 156, 0.47);
        display: flex;
    }


    .burger {
        background: #eee;
        width: 50px;
        vertical-align: middle;
        position: fixed;
        top: 10px;
        left: 10px;

        z-index: 20;
    }

    .burger,
    .burger *,
    button {
        outline: none !important;
    }

    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
        width: 30px;
        height: 4px;
        background-color: #555;
        border-radius: 4px;
        position: absolute;
        -webkit-transition-property: -webkit-transform;
        transition-property: -webkit-transform;
        transition-property: transform;
        transition-property: transform, -webkit-transform;
        -webkit-transition-duration: .15s;
        transition-duration: .15s;
        -webkit-transition-timing-function: ease;
        transition-timing-function: ease;
    }

    /* The Overlay (background) */

    .overlay {
        position: fixed;
        width: 100%;
        height: 0%;
        top: 0;
        left: 0;
        background: linear-gradient(200deg, rgb(23, 23, 24), rgb(42, 42, 43), rgb(110, 109, 110));
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all .5s ease;
        transition: all .5s ease;
        z-index: 0;

    }

    .open {
        opacity: .98;
        visibility: visible;
    }

    nav {
        text-align: center;
        height: 100vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    nav ul li {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        line-height: 8vh;

    }

    nav ul li a {
        font-size: 2em;
        font-weight: 900;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        display: block;
        text-decoration: none;
        color: #fff;
        opacity: 1;
        display: inline-block;
        cursor: pointer;


    }

    nav ul li a:hover {
        color: rgb(245, 1, 1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);

    }

    .noscroll {
        overflow: hidden;
    }

    @media screen and (min-width: 600px) {
        nav ul li a {
            font-size: 2em;
        }
    }



    @media screen and (max-width: 700px) {
        .topnav a:not(:first-child) {
            display: none;
        }
        .topnav a.icon {
            float: right;
            display: block;
        }
    }

    @media screen and (max-width: 700px) {
        .topnav.responsive {
            position: relative;

        }
        .topnav.responsive .icon {
            position: absolute;
            right: 0;
            top: 0;
        }
        .topnav.responsive a {
            float: none;
            display: block;
            text-align: left;

        }

    }

    @media (max-width: 700px) {
        .body-content {
            display: grid;
            grid-auto-rows: minmax(200px, auto);
            grid-template-columns: 1fr;
            grid-gap: 5px;
            padding-left: 15px;
            padding-right: 15px;

        }
    }
</style>