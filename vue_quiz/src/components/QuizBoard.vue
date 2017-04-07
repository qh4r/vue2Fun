<template>
    <div class="board-wrapper">
        <!--v-bind pozwala bindowac caly boiekt jak spread-->
        <transition name="squash" mode="out-in" type="animation">
            <component
                    @start-game="nextQuestion"
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
    import EndResultCard from './EndResultCard.vue';
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
            },
            endMessage: {
                type: String
            }
        },
        components: {
            "start-game-card": StartGameCard,
            "question-card": QuestionCard,
            "answer-result-card": AnswerResultCard,
            "end-result-card": EndResultCard
        },
        data () {
            return {
                activeCard: "start-game-card",
                questionNumber: 0,
                score: 0,
                lastAnswer: ''
            }
        },
        methods: {
            onAnswer(selectedKey){
                this.lastAnswer = selectedKey;
                if (this.activeQuestion.right === selectedKey) {
                    this.score++;
                }
                this.activeCard = 'answer-result-card'
            },
            nextQuestion(){
                if(this.questionNumber < this.questions.length){
                    ++this.questionNumber;
                    return this.activeCard = "question-card";
                }
                this.activeCard = "end-result-card";
            }
        },
        computed: {
            cardProps() {
                return  {
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
                    },
                    "end-result-card": {
                        message: this.endMessage,
                        questionsAsked: this.questions ? this.questions.length : 0,
                        rightAnswers: this.score
                    }
                }
            },
            activeQuestion(){
                return this.questions && this.questions.length ? this.questions[Math.max(this.questionNumber - 1, 0)] : {}
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

    /*y odwraca majac za srodek oś y, rotateX z osia x jako srodek a rotateZ z osia Z*/
    @keyframes squash {
        from {
            transform: rotateY(0)
        }
        to {
            transform: rotateY(90deg)
        }
    }

    @keyframes restore {
        from {
            transform: rotateY(90deg)
        }
        to {
            transform: rotateY(0)
        }
    }

    .squash-enter {
    }

    .squash-enter-active {
        animation: restore 0.5s ease-out forwards;
    }

    .squash-leave {
    }

    .squash-leave-active {
        animation: squash 0.5s ease-out forwards;
    }

</style>
