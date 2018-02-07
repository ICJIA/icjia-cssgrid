<template>
    <section>
        <div class="page-wrapper-dark">
            <div class="ticker-wrap">
                <div class="ticker">

                    <div v-for="(item, index) in tickerItem" :key="index" class="ticker__item">
                        <span ref="tickerItem">{{item}}</span>
                    </div>




                </div>

            </div>
            <button v-on:click="addTickerItem" class="mt-8 ml-8 bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
                Add item +
            </button>
        </div>
    </section>
</template>

<script>
    let faker = require("faker/locale/en");
    let uuidv1 = require('uuid/v1');

    export default {
        name: "Vertical",
        mounted: function () {
            setInterval(function () {
                this.addTickerItem();
            }.bind(this), 1500);
        },
        data: function () {
            return {
                drawer: false,
                tickerItem: [],
                totalTickerItems: 35
            };
        },
        methods: {
            addTickerItem: function () {
                if (this.tickerItem.length > this.totalTickerItems - 1) {
                    this.tickerItem.shift();
                    console.log('shifted')
                }
                this.tickerItem.push('Added item ')
                console.log('added')
            }


        }
    };
</script>

<style>
    .page-wrapper-dark {

        background: #fff;
    }



    @-webkit-keyframes ticker {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            visibility: visible;
        }
        100% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
    }

    @keyframes ticker {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            visibility: visible;
        }
        100% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
    }

    .ticker-wrap {

        width: 100%;
        overflow: hidden;
        height: 3rem;
        background-color: rgba(0, 0, 0, 0.9);
        padding-left: 100%;
    }

    .ticker {
        display: inline-block;
        height: 3rem;
        line-height: 2.5rem;
        white-space: nowrap;
        padding-right: 100%;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-name: ticker;
        animation-name: ticker;
        -webkit-animation-duration: 35s;
        animation-duration: 35s;
    }

    .ticker__item {
        display: inline-block;
        padding: 0 2rem;
        font-size: 2rem;
        color: white;
        font-size: 12px;
    }
</style>