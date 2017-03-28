<template>
    <div class="container app-container">
        <new-quote :canAddMore="canAddMore" @newQuoteAdded="addQuote"></new-quote>
        <quotes-list :maxQuotes="maxQuotes" @deleteQuote="onDeleteQuote" :quotes="quotes"></quotes-list>
    </div>
</template>

<script>
    import QuotesList from "./components/QuotesList.vue";
    import NewQuote from "./components/NewQuote.vue";

    export default {
        components: {
            "quotes-list": QuotesList,
            "new-quote": NewQuote
        },
        data () {
            return {
                maxQuotes: 10,
                quotes: ['asd test test', 'asd test test', 'asd test test', 'jeszcze jedna', 'i jezcze']
            }
        },
        methods: {
            addQuote(text){
                if (this.canAddMore) {
                    this.quotes.push(text);
                }
            },
            onDeleteQuote(index){
                console.log('app ', index)
                this.quotes.splice(index, 1);
            }
        },
        computed: {
            canAddMore() {
                return this.maxQuotes > this.quotes.length;
            }
        }
    }
</script>

<style scoped lang="scss">
    .app-container {
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .arizonia {
        font-family: 'Arizonia', cursive;
        font-size: 40px;
    }

</style>
