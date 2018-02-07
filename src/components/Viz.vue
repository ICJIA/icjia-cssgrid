<template>
    <div>

        <div :id="generateId('divElement')" @click="displayViz()" class="viz-hover">
            <div :id="generateId('vizElement')" style="width: 100%" class="viz"></div>
            <div :id="generateId('thumb')">
                <img :src="thumbnail" :id="generateId('vizThumb')">
            </div>
        </div>
    </div>
</template>

<script>

    export default {




        name: "Viz",
        mounted: function () {


        },
        props: [
            'uuid', 'thumbnail', 'viz'
        ],
        methods: {
            generateId: function (el) {
                return el + '-' + this.uuid
            },
            displayViz: function (e) {
                //console.log(this.uuid)
                var thumb = document.getElementById('vizThumb-' + this.uuid);
                thumb.remove();
                var divElement = document.getElementById('divElement-' + this.uuid);
                divElement.classList.remove('viz-hover')
                var vizElement = document.getElementById("vizElement-" + this.uuid);
                var url = this.viz
                let options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };

                if (divElement.offsetWidth > 800) {
                    vizElement.style.width = '1000px';
                    vizElement.style.height = '827px';
                } else if (divElement.offsetWidth > 500) { vizElement.style.width = '1000px'; vizElement.style.height = '827px'; }
                else { vizElement.style.width = '100%'; vizElement.style.height = '1294px'; }

                // Create a viz object and embed it in the container div.

                var viz = new tableau.Viz(vizElement, url, options);
            }
        },
        data() {
            return {


            };
        },

    };
</script>
<style scoped>
    .viz {
        margin-top: 25px;
        margin-bottom: 25px
    }

    .viz-hover:hover {

        box-shadow: 0px 0px 50px #000000;
        z-index: 2000;
        -webkit-transition: all 200ms ease-in;
        -webkit-transform: scale(1.05);
        -ms-transition: all 200ms ease-in;
        -ms-transform: scale(1.05);
        -moz-transition: all 200ms ease-in;
        -moz-transform: scale(1.05);
        transition: all 300ms ease-in;
        transform: scale(1.01);
        cursor: pointer;
        opacity: 1;
    }
</style>