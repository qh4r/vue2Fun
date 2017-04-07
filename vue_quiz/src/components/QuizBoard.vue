<template>
    <div class="board-wrapper">
        <!--v-bind pozwala bindowac caly boiekt jak spread-->
        <transition name="squash" mode="out-in" type="animation">
            <component
                    @start-game="startGame"
                    @answer="onAnswer"
                    @next-question="nextQuestion"
                    :is="activeCard" v-bind="cardProps[activeCard]"></component>
        </transition>
    </div>
</template>

<script>
    import StartGameCard from './StartGameCard.vue';
    import QuestionCard from './QuestionCard.vue';
    import AnswerResultCard from './AnswerResultCard.vue';
    export default {
        props: {
            questions: {
                type: Array
            },
            startMessage: {
                type: String
            },
            startButtonText: {
                type: String
            },
            nextButtonText: {
                type: String
            },
            successMessage: {
                type: String
            },
            failMessage: {
                type: String
            }
        },
        components: {
            "start-game-card": StartGameCard,
            "question-card": QuestionCard,
            'answer-result-card': AnswerResultCard
        },
        data () {
            return {
                activeCard: "start-game-card",
                questionNumber: 1,
                score: 0,
                lastAnswer: ''
            }
        },
        methods: {
            startGame(){
                this.activeCard = "question-card"
            },
            onAnswer(selectedKey){
                this.lastAnswer = selectedKey;
                if (this.activeQuestion.right === selectedKey) {
                    this.score++;
                }
                this.activeCard = 'answer-result-card'
            },
            nextQuestion(){
                console.log("next plz")
            }
        },
        computed: {
            cardProps() {
                return {
                    "start-game-card": {
                        startButtonText: this.startButtonText,
                        startMessage: this.startMessage
                    },
                    "question-card": Object.assign({}, this.activeQuestion),
                    "answer-result-card": {
                        nextButtonText: this.nextButtonText,
                        message: this.lastAnswer === this.activeQuestion.right ? this.successMessage : this.failMessage,
                        success: this.lastAnswer === this.activeQuestion.right,
                        question: this.activeQuestion
                    }
                }
            },
            activeQuestion(){
                return this.questions[this.questionNumber - 1]
            }
        }
    }
</script>

<style scoped lang="scss">
    .board-wrapper {
        overflow: hidden;
        height: 50vh;
        width: 60%;
    }

    @keyframes squash {
        from {
            width: 100%;
        }
        to {
            width: 0;
        }
    }

    @keyframes restore {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    .squash-enter {
        opacity: 0;
    }

    .squash-enter-active {
        animation: restore 1s ease-out forwards;
        transition: opacity 0.7s;
        opacity: 1;
    }

    .squash-leave {
        opacity: 1;
    }

    .squash-leave-active {
        animation: squash 1s ease-out forwards;
        transition: opacity 0.7s;
        opacity: 0;
    }

</style>
