<template>
    <div class="question-container">
        <h2>{{question}}</h2>
        <div class="answers-container">
            <button @click="answerQuestion(key)" :key="key"  v-for="(answer, key) in answers">
                <span>{{key}} :</span>
                <span class="answer-text">{{answer}}</span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            question: {
                type: String
            },
            right: {
                type: String
            },
            answers: {
                type: Object
            }
        },
        data () {
            return {}
        },
        methods: {
            answerQuestion(selectedKey) {
                this.$emit('answer', selectedKey)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "common";

    .question-container {
        @extend .card-container-base;
        background-color: #eeeaef;
    }

    .answers-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        justify-content: space-between;

        > button {
            @extend .btn;
            width: 40%;
            margin: 5%;
            display: inline-flex;
            align-items: center;
            >*:first-child {
                margin-right: 5px;
                min-width: 30px;
            }

            .answer-text {
                margin: 0 auto;
                text-wrap: normal;
                word-break: break-all;
                word-wrap: break-word;
            }
        }
    }

    h2 {
        @extend .card-normal-text;
        text-align: center;
        margin: 10px 0;
    }
</style>
