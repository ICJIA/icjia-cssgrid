<template>
    <section class="page-wrapper">
        <div class="container xl mx-auto">

            <div class="body-content">
                <div class="latest shadow-md pt-8 pl-8 pr-8 pb-8">
                    <div class="main-header">
                        <h2>Latest</h2>
                        <a @click.prevent class="link">archive</a>
                    </div>
                    <div v-for="index in 15" class="pb-4 mt-4 main-item" :key="index">
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
                console.log(el)
                el.innerHTML = pastText;
            })


        },
        data: function () {
            return {

            }
        },
        methods: {



        }
    };
</script>

<style>
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

    @media (max-width: 700px) {
        .body-content {
            display: grid;
            grid-auto-rows: minmax(200px, auto);
            grid-template-columns: 1fr;
            grid-gap: 5px;

        }
    }
</style>