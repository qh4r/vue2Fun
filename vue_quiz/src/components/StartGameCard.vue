<template>
    <div class="start-container">
        <h2>{{startMessage}}</h2>
        <button class="btn">{{startButtonText}}</button>
    </div>
</template>

<script>
    export default {
        props: {
            startMessage: {
                type: String,
                required: true
            },
            startButtonText: {
                type: String,
                required: true
            }
        },
        data () {
            return {}
        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    @import "common";
    .start-container {
        @extend .card-container-base;
        background-color: #eeeaef;
    }

    h2 {
        @extend .card-normal-text
    }
</style>
