<template>
    <div class="end-container">
        <h2>{{message}}</h2>
        <h3>{{rightAnswers}} / {{questionsAsked}}</h3>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                types: String,
                required: true
            },
            questionsAsked: {
                type: Number,
                required: true
            },
            rightAnswers: {
                type: Number,
                required: true
            }
        },
        data () {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    @import "common";
    .end-container {
        @extend .card-container-base;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background-color: #eeeaef;
    }

    h2 {
        @extend .card-normal-text
    }

    h3 {
        @extend .card-normal-text;
        font-size: 1.6em;
        font-weight: 700;
    }

</style>
