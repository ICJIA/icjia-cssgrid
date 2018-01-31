<template>



    <div>





        <article class="px-1 text-grey-darkest leading-normal">




            A2




        </article>
    </div>
</template>

<script>
import Prism from "vue-prism-component";
import { sample01, sample02 } from "@/code";

export default {
    name: "A2",
    data() {
        return {
            sample01,
            sample02
        };
    },
    components: {
        Prism
    }
};
</script>

<style>
pre {
    margin-top: 25px !important;
    margin-bottom: 25px !important;
}

article {
    display: grid;
    grid-template-columns: 250px 1fr 250px;
    grid-column-gap: 10px;
    /* font-family: 'Libre Baskerville', serif; */
}

article > h1,
article > h2 {
    margin-top: 35px;
    justify-self: center;
    /* font-family: 'Rubik', sans-serif !important; */
}

article > * {
    grid-column: 2;
    min-width: 0;
}

article > figure {
    grid-column: 1 / -1;
    margin: 20px 0;
}

/* article>code {
          margin-top: 25px;
          margin-bottom: 25px;
        } */

article > .aside {
    grid-column: 3;
    color: #666;
    font-size: 0.8em;
}

article > blockquote {
    grid-column: 1 / -1;
}

article > p img.left {
    float: left !important;
    padding-right: 2em !important;
    padding-left: 1em;
}

article > p img.right {
    float: right !important;
    padding-left: 2em !important;
    padding-right: 1em;
}

article > p {
    margin-top: 20px;
}

article > p:first-of-type {
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

    article > figure {
        grid-column: -1;
        margin: 20px 0;
    }
}
</style>
