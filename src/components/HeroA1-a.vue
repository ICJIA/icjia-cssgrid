<template>

    <section class="hero">
        <div class="wrapper">
            <div class="home-hero">
                <div class="main square">
                    <h3>Main</h3>
                    <p v-dummy="6"></p>
                </div>
                <div class="feature-1 square">
                    <h3>feature-1</h3>
                    <p v-dummy="6"></p>

                </div>
                <div class="feature-2 square">
                    <h3>Feature-2</h3>
                    <p v-dummy="6"></p>
                </div>
                <div class="publication-1 square">
                    <h3>publication-1</h3>
                    <p v-dummy="7"></p>
                </div>
                <div class="publication-2 square">
                    <h3>publication-2</h3>
                    <p v-dummy="6"></p>
                </div>
                <div class="publication-3">
                    <h3>Modified from:</h3>
                    <p>
                        <a style="color: #ccc; text-transform: lowercase;" href="https://codepen.io/rachelandrew/pres/QKwvxJ">http://bit.ly/2DQ98nQ</a>
                    </p>

                </div>



            </div>
        </div>




    </section>

</template>

<style scoped>
    .wrapper {
        width: 100%;
        margin: 0px auto;
        background-color: #000;
    }

    .home-hero {
        display: grid;
        height: 50vh;
        grid-gap: 1px;
        grid-auto-rows: minmax(150px, auto);
    }

    .home-hero>* {
        padding: 20px;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #333;
        color: #fff;

    }

    .home-hero>.square h3,
        {
        font-family: ' Lato ', sans-serif;
        text-transform: uppercase;
    }

    .home-hero>.square p {
        color: #aaa;
        font-size: 14px;
    }

    .home-hero {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: minmax(100px, auto) minmax(100px, auto);
        grid-auto-rows: minmax(100px, auto);
    }

    .main {
        grid-column: 2;
        grid-row: 1 / 6;
    }

    .feature-1 {
        grid-column: 1;
        grid-row: 1 / 4;
    }

    .feature-2 {
        grid-column: 1;
        grid-row: 4 / 6;

    }

    .main {}

    .publication-1 {
        grid-column: 3;
        grid-row: 1 / 3;
        background-image: url(../assets/1human_trafficking.jpg);
    }

    .publication-2 {
        background-image: url(../assets/VSPNeeds_photo.jpg);
        grid-column: 3;
        grid-row: 3 / 5;
    }

    .publication-3 {
        grid-column: 3;
        grid-row: 5 / 6;

    }

    .main {
        background-image: url(../assets/TRC.jpg);
        background-position: bottom left;
        color: #fff;
        display: flex;
        flex-direction: column;
    }

    .feature-1 {
        background-image: url(../assets/Continuum.jpg);

        color: #fff;
        display: flex;
        flex-direction: column;
    }

    .feature-2 {
        background-image: url(../assets/drug-court-judge.jpg);

        color: #fff;
    }


    .square:hover {
        box-shadow: 0px 0px 150px #000000;
        z-index: 2;
        -webkit-transition: all 200ms ease-in;
        -webkit-transform: scale(1.1);
        -ms-transition: all 200ms ease-in;
        -ms-transform: scale(1.1);
        -moz-transition: all 200ms ease-in;
        -moz-transform: scale(1.1);
        transition: all 200ms ease-in;
        transform: scale(1.05);
        cursor: pointer;
    }

    @media (max-width: 500px) {
        .home-hero {
            grid-template-columns: 1fr;
            grid-auto-rows: minmax(50px, auto);

        }

        .main {
            grid-column: 1;
            grid-row: 1/3;



        }

        .feature-1 {
            grid-column: 1;
            grid-row: 3/6;



        }
        .feature-2 {
            grid-column: 1;
            grid-row: 6 / 9;
        }

        .publication-1 {
            grid-column: 1;
            grid-row: 9 / 11;
        }
        .publication-2 {
            grid-column: 1;
            grid-row: 11 / 13;
        }
        .publication-3 {
            grid-column: 1;
            grid-row: 13 / 15;
        }
    }
</style>