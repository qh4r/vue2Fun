<template>
    <div class="board-wrapper">
        <!--v-bind pozwala bindowac caly boiekt jak spread-->
        <component :is="activeCard" v-bind="cardProps[activeCard]"></component>
    </div>
</template>

<script>
    import StartGameCard from './StartGameCard.vue';
    export default {
        props: {

        },
        components: {
          "start-game-card": StartGameCard
        },
        data () {
            return {
                activeCard: "start-game-card",
                cardProps: {
                    "start-game-card": {
                        startMessage: "Witamy w grze!",
                        startButtonText: "Start!"
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .board-wrapper {
        height: 50vh;
        width: 60%;
    }
</style>
