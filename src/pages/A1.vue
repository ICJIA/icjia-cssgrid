<template>
    <div>
        <div class="wrapper">
            <div class="box main">
                <h3 v-dummy="3"></h3>
                <p v-dummy="4" class="text-grey"></p>
            </div>
            <div class="box feature-1">
                <h3 v-dummy="3"></h3>
                <p v-dummy="4"></p>
            </div>
            <!-- <div class="box feature-2">
                <h3>Feature-2</h3>
                <p v-dummy="4"></p>
            </div>
            <div class="box feature-3">
                <h3>Feature-3</h3>
                <p v-dummy="4"></p>
            </div> -->
            <div class="box news-1">
                <h3 v-dummy="3"></h3>
                <p v-dummy="4"></p>
            </div>
            <div class="box news-2">
                <h3 v-dummy="4"></h3>
                <p v-dummy="4"></p>
            </div>

        </div>

        <h1 class="mt-8 ml-4">Remaining page content</h1>
    </div>
</template>

<script>
    export default {
        name: "A4",
        mounted: function () { }
    };
</script>

<style>
    :root {}

    .box {
        background-color: #4e4e4e;
        color: #fff;
        padding: 20px;
        font-size: 150%;


    }

    .box.main {
        display: flex;
        flex-direction: column;
    }



    .wrapper {
        width: 100%;
        display: grid;
        grid-gap: 1px;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(75px, auto);
        grid-template-areas: "m f1 n1" "m f1 n1" "m f1 n1" "m f1 n2" "m f1 n2" "m f1 n2";
    }


    .wrapper>* {
        padding: 30px;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #333;
        color: #fff;
    }

    .main {
        grid-area: m;
        background-image: url(../assets/TRC.jpg);
        background-position: bottom right;

    }

    .feature-1 {
        grid-area: f1;
        background-image: url(../assets/VSPNeeds_photo.jpg);
        background-position: top left;

    }

    /* .feature-2 {
        grid-area: f2
    }

    .feature-3 {
        grid-area: f3
    } */

    .box h3 {
        display: inline-block;
        background: #fff;
        color: #333 !important;
        padding: 5px 3px 5px 10px;
        margin-bottom: 5px;
    }

    .box h3:after {
        content: " ";
        white-space: pre;
    }



    .box p {
        display: inline-block;
        background: #fff;
        color: #333 !important;
        padding: 5px;

    }

    .news-1 {
        grid-area: n1;
        background-image: url(../assets/Photo-Delivery-Report.jpg);
        background-position: top left;
    }

    .news-2 {
        grid-area: n2;
        background-image: url(../assets/assess.jpg);
        background-position: top left;
    }
</style>