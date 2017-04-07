<template>
    <div class="start-container">
        <h2>{{startMessage}}</h2>
        <button @click="startCallback" class="btn">{{startButtonText}}</button>
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
            startCallback() {
                this.$emit("start-game")
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "common";
    .start-container {
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
</style>
