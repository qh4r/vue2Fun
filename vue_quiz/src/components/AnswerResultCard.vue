<template>
    <div class="answer-container" :class="success ? 'answer-success' : 'answer-error'">
        <h2>{{message}}</h2>
        <p v-if="!success">{{rightAnswer}}</p>
        <button @click="next" class="btn">{{nextButtonText}}</button>
    </div>
</template>

<script>
    export default {
        props: {
            nextButtonText: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true
            },
            question: {
                type: Object,
                required: true
            },
            success: {
                type: Boolean,
                required: true
            }
        },
        data () {
            return {}
        },
        methods: {
            next() {
                this.$emit("next-question")
            }
        },
        computed: {
            rightAnswer() {
                return `${this.question.right}: ${this.question.answers[this.question.right]}`
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "common";

    .answer-container {
        @extend .card-container-base;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;

        &.answer-success {
            @include answer-coloring($success-color);
        }

        &.answer-error {
            @include answer-coloring($error-color);
        }
    }

    p {
        font-size: 1.8em;
    }

    h2 {
        @extend .card-normal-text;
        color: white;
    }
</style>
