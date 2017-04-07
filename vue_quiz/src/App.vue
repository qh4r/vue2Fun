<template>
    <div class="container">
        <quiz-board
                :startMessage="startMessage"
                :startButtonText="startButtonText"
                :nextButtonText="nextButtonText"
                :successMessage="successMessage"
                :failMessage="failMessage"
                :endMessage="endMessage"
                :questions="questions"></quiz-board>
    </div>
</template>

<script>
    import QuizBoard from './components/QuizBoard.vue'
    export default {
        components: {
            'quiz-board': QuizBoard
        },
        data () {
            return {
                questions: [
                    {
                        question: "Podaj stolicę Grecji",
                        answers: {
                            A: "Konstantynopol",
                            B: "Kostrzyn nad Odrą",
                            C: "Ateny",
                            D: "Staliningrad"
                        },
                        right: "C"
                    },
                    {
                        question: "Ile to 2 x 2?",
                        answers: {
                            A: "4",
                            B: "7",
                            C: "3",
                            D: "-3"
                        },
                        right: "A"
                    }, {
                        question: "Ile to 12 x 12?",
                        answers: {
                            A: "148",
                            B: "128",
                            C: "144",
                            D: "112"
                        },
                        right: "C"
                    }, {
                        question: "Ile to 13 x 13?",
                        answers: {
                            A: "187",
                            B: "169",
                            C: "167",
                            D: "175"
                        },
                        right: "B"
                    },
                ],
                startMessage: "Witamy w grze!",
                startButtonText: "Start!",
                nextButtonText: "Następne Pytanie",
                successMessage: "Brawo, dobra Odpowiedź!",
                failMessage: "Błąd, poprawna odpowiedź to:",
                endMessage: "Koniec gry! Twój wynik to:"
            }
        }
    }
</script>

<style lang="scss">
    .container {
        font-family: 'Lato', sans-serif;
        height: 100vh;
        display: flex;
        align-items: center;
        /*align items ustawia alignment w linii a align content ustawia alignment w wielu liniach*/
        justify-content: center;
    }
</style>
