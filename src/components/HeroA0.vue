<template>

    <section class="hero">
        <div class="message">

            <div class="title">Sample Article Layout</div>
            <br>
            <div class="title">With Tailwind and CSS Grid</div>

        </div>
        <div class="award">

            <blockquote>"Vitae viverra a sit
                <br /> ipsum auctor adipiscing."
                <br />
                <cite>-libero a nunc amet</cite>
            </blockquote>
        </div>

    </section>



</template>

<style scoped>
.hero {
    width: 100%;
    height: 750px;
    padding: 45px 12% 0 12%;
    background-image: url("../assets/hero02-min.jpg");
    z-index: -1;
    background-size: cover;
    background-position: center;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    grid-template-areas: "message       .  ." ". .  .    " ".       .  award   ";
}

.hero {
    padding: 15px 5% 0 0%;
}

.message {
    grid-area: message;
}

.award {
    grid-area: award;
}

.message {
    grid-area: message;

    padding-top: 110px;
}

/* .message p {
        color: white;
        text-shadow: 2px 2px black;
        line-height: 1;
        font-size: 42px;
    } */

.title {
    background: #fff;
    opacity: 0.9;
    padding: 8px 4px 8px 4px;
    /* text-shadow: 1px 1px #aaa; */
    font-size: 40px;
    margin-left: 5px;
    display: inline-block;
    font-weight: 700;
    font-family: "Rubik", sans-serif;
    margin-bottom: 8px;
    color: #111;
}

/* .message span:first-child {
        font-size: 42px;
    }

    .message span:last-child {
        font-size: 67px;
    } */

.message-button {
    background-color: #c8825b;
    margin-top: 25px;
}

.award {
    grid-area: award;
    text-align: center;
    color: white;
}

.award blockquote {
    font-size: 28px;
}

.award cite {
    display: block;
    text-align: right;
    font-style: italic;
    font-size: 18px;
}

@media (max-width: 1600px) {
    .hero {
        padding: 55px 2% 0 2%;
    }
}

@media (max-width: 1050px) {
    .hero {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        grid-template-areas: "message" "award";
        justify-content: center;
        padding: 55px 2%;
    }
    .message {
        background: none;
        height: auto;
        width: auto;
        padding-top: 25px;
    }
    .award {
        padding-top: 20px;
    }
}
</style>
