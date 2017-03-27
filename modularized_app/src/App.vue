<template>
    <div class="container">
        <quotes-list :quotes="quotes"></quotes-list>
    </div>
</template>

<script>
    import QuotesList from "./components/QuotesList.vue"
    export default {
        components: {
            "quotes-list": QuotesList
        },
        data () {
            return {
                maxQuotes: 10,
                quotes: ['asd test test', 'asd test test', 'asd test test', 'jeszcze jedna', 'i jezcze']
            }
        }
    }
</script>

<style scoped lang="scss">
    .arizonia {
        font-family: 'Arizonia', cursive;
        font-size: 40px;
    }

</style>
