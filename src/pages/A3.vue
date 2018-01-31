<template>
    <div>
        <section>
            <div class="container-grid container-grid-equal">
                <div class="split left">
                    <h1>The Designer</h1>
                    <a href="#" class="left-button button">Read More</a>
                </div>
                <div class="split right">
                    <h1>The Programmer</h1>
                    <a href="#" class="right-button button">Read More</a>
                </div>
            </div>
        </section>

        <section>
            <div class="mt-8 text-center">
                <p>A CSS grid version of:
                    <a href="">https://codepen.io/bradtraversy/pen/dJzzdB</a>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "A0",
    mounted: function() {}
};
</script>

<style>
:root {
    --container-bg-color: #ccc;
    --left-button-hover-color: rgba(161, 11, 11, 0.3);
    --right-button-hover-color: rgba(92, 92, 92, 0.3);
}

.container-grid {
    width: 100%;
    display: grid;
    grid-gap: 1px;
    height: 400px;
    background: var(--container-bg-color);
}

.container-grid-equal {
    grid-template-columns: 1fr 1fr;
}

.split {
    filter: grayscale(0%);
    z-index: 1;
}

.split.left {
    left: 0;
    background: url("https://image.ibb.co/m56Czw/designer.jpg") center center no-repeat;
    background-size: cover;
    display: grid;
    grid-template-columns: 1fr;
}

.split > h1 {
    justify-self: center;
    padding-top: 30px;
    z-index: 1;
    color: #fff;
}

.button {
    height: 3rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
    width: 15rem;
    text-align: center;
    color: #fff;
    border: #fff solid 0.2rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
}

.left-button,
.right-button {
    justify-self: center;
}

.split.left .button:hover {
    background-color: var(--left-button-hover-color);
    border-color: var(--left-button-hover-color);
}

.split.right .button:hover {
    background-color: var(--right-button-hover-color);
    border-color: var(--right-button-hover-color);
}

.split.right {
    right: 0;
    background: url("https://image.ibb.co/m3ZbRb/programmer.png") center center no-repeat;
    background-size: cover;
    display: grid;
}

.split:hover {
    filter: grayscale(100%);
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
    opacity: 1;
}
</style>
