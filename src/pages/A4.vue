<template>
    <div>
        <div class="wrapper">
            <div class="box main">main</div>
            <div class="box feature-1">
                feature-1
            </div>
            <div class="box feature-2">feature-2</div>
            <div class="box feature-3">feature-3</div>
            <div class="box news-1">news-1</div>
            <div class="box news-2">news-2</div>
            <div class="box">7</div>
            <div class="box">8</div>
            <div class="box">9</div>
            <div class="box">10</div>
            <div class="box">11</div>
            <div class="box">12</div>
            <div class="box ">13</div>
            <div class="box ">14</div>
            <div class="box">15</div>
            <div class="box">16</div>
            <div class="box">17</div>
            <div class="box">18</div>
            <div class="box">19</div>
            <div class="box">20</div>
            <div class="box">21</div>
            <div class="box">22</div>
            <div class="box">23</div>
            <div class="box">24</div>
        </div>

        <h1>Remaining content</h1>
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

    .box:nth-child(even) {
        background-color: #ccc;
        color: #000;
    }

    .wrapper {
        width: 100%;
        display: grid;
        grid-gap: 4px;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(75px, auto);

    }
</style>