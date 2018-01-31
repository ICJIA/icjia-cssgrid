<template>

    <div>

        <hero />


    </div>
</template>

<script>

    import Hero from "@/components/HeroA1-a";


    export default {
        name: "A1",
        mounted: function () { },
        data() {
            return {

                sample01,
                sample02
            };
        },
        metaInfo: {
            // title: 'My Awesome Webapp',
            // override the parent template and just use the above title only
            // titleTemplate: null
        },
        components: {


            Hero
        }
    };
</script>

<style scoped>
</style>