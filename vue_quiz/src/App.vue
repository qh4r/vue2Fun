<template>
    <div class="container">
        <quiz-board></quiz-board>
    </div>
</template>

<script>
    import QuizBoard from './components/QuizBoard.vue'
    export default {
        components: {
            'quiz-board': QuizBoard
        },
        data () {
            return {}
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
