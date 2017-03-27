<template>
    <div class="quote-body">
        {{quote}}
    </div>
</template>

<script>
    export default {
        props: {
            quote: {
                type: String,
                required: true
            }
        },
        data () {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .quote-body {
        font-family: 'Arizonia', cursive;
        font-size: 32px;
        border: 1px solid black;
        border-radius: 4px;
        padding: 1%;
        margin: 1%;
        display: flex;
        text-align: center;
        justify-content: center;
        flex-grow: 1;
        box-sizing: border-box;
        width: 23%;
        max-width: 23%;
        min-width: 200px;
    }
</style>
