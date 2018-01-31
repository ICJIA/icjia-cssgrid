<template>

    <div>

        <hero />


    </div>
</template>

<script>
    import Hero from "@/components/HeroA2";

    export default {
        name: "A2",
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