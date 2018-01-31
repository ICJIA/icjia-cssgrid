<template>

    <div>

        <hero />

        <article class="px-1 text-grey-darkest leading-normal">


            <p v-dummy="50"></p>

            <p v-dummy="100"></p>




            <prism language="javascript">{{ sample01 }}</prism>




            <p v-dummy="200">
            </p>

            <p v-dummy="300">
                <img v-dummy="200" class="right" />
            </p>

            <code>
        <prism language="javascript">{{ sample02 }}</prism>
      </code>

            <h2 v-dummy="10"></h2>



            <p v-dummy="100">
            </p>

            <p v-dummy="100">
            </p>

            <figure>
                <img src="../assets/hero01.jpg" />
            </figure>
            <h2 v-dummy="10"></h2>
            <p v-dummy="100">
            </p>

            <p v-dummy="100">
            </p>

        </article>
    </div>
</template>

<script>
    import Prism from "vue-prism-component";
    import Hero from "@/components/Hero";
    import { sample01, sample02 } from "@/code";

    export default {
        name: "A0",
        mounted: function () { },
        data() {
            return {
                title: 'Version 1',
                sample01,
                sample02
            };
        },
        metaInfo: {
            title: 'My Awesome Webapp',
            // override the parent template and just use the above title only
            // titleTemplate: null
        },
        components: {
            Prism,

            Hero
        }
    };
</script>

<style scoped>
    pre {
        margin-top: 25px !important;
        margin-bottom: 25px !important;
    }

    article {
        display: grid;
        grid-template-columns: 250px 1fr 250px;
        grid-column-gap: 10px;
        font-family: "Libre Baskerville", serif;
    }

    article>h1,
    article>h2 {
        margin-top: 35px;
        justify-self: center;
        font-family: "Rubik", sans-serif !important;
    }

    article>* {
        grid-column: 2;
        min-width: 0;
    }

    article>figure {
        grid-column: 1 / -1;
        margin: 20px 0;
    }


    article>.aside {
        grid-column: 3;
        color: #666;
        font-size: 0.8em;
    }

    article>blockquote {
        grid-column: 1 / -1;
    }

    article>p img.left {
        float: left !important;
        padding-right: 2em !important;
        padding-left: 1em;
    }

    article>p img.right {
        float: right !important;
        padding-left: 2em !important;
        padding-right: 1em;
    }

    article>p {
        margin-top: 20px;
    }

    article>p:first-of-type {
        margin-top: 25px;
    }

    .floated {
        float: left;
        width: 150px;
        background: red;
    }

    @media (max-width: 1050px) {
        article {
            grid-template-columns: auto;
            grid-column-gap: 10px;
        }

        article>figure {
            grid-column: -1;
            margin: 20px 0;
        }
    }
</style>