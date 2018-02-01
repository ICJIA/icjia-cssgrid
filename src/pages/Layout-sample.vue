<template>

    <section>

        <div class="container-grid">
            <div class="header">HEADER</div>
            <div class="menu">MENU</div>
            <div class="content">CONTENT</div>
            <div class="footer">FOOTER</div>
        </div>


    </section>
</template>

<style scoped>
    /* grid styles ------------------------------------ */

    .container-grid {
        height: 100vh;
        display: grid;
        grid-gap: 3px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 40px auto 40px;
        grid-template-areas: "h h h h h h h h h h h h" "m m c c c c c c c c c c" "f f f f f f f f f f f f";
    }

    .header {
        grid-area: h;
    }

    .menu {
        grid-area: m;
    }

    .content {
        grid-area: c;
    }

    .footer {
        grid-area: f;
    }

    .container-grid>div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        color: #fff;
    }

    /* section {
            box-sizing: border-box;
            background-color: #ffeead;
            height: 100%;
            padding: 10px;
            margin: 0px;
        } */

    .container-grid>div:nth-child(1n) {
        background-color: #4e4e4e;
    }

    .container-grid>div:nth-child(3n) {
        background-color: #2e2e2e;
    }

    .container-grid>div:nth-child(2n) {
        background-color: #ccc;
    }

    .container-grid>div:nth-child(4n) {
        background-color: #aaa;
    }
</style>