<template>
    <div class="quotes-container">
        <progress-bar :current="quotesCount" :max="maxQuotes"></progress-bar>
        <quote-item @deleteQuote="onDeleteQuote" :id="index" :quote="quote" v-for="(quote, index) in quotes"></quote-item>
    </div>
</template>

<script>
    import Quote from "./Quote.vue";
    import ProgressBar from "./ProgressBar.vue";
    export default {
        components: {
            "quote-item": Quote,
            ProgressBar
        },
        props: {
            quotes: {
                type: Array,
                default() {
                    return [];
                },
                required: true
            },
            maxQuotes: {
                type: Number,
                required: true
            }
        },
        data () {
            return {}
        },
        methods: {
            //eventy sa handlowane tylko przez rodzicowwiec ponowny po 1 event nie babelkuje
            // , po 2 ponowny call tego samego eventa wywla go u rodzica
            onDeleteQuote(index){
                console.log('list ', index)
                this.$emit("deleteQuote",index);
            }
            // eventy nie babelkuja w ogole przez wiele poziomow wiec trzeba je lapac i wolac!
        },
        computed: {
            quotesCount(){
                return this.quotes.length
            }
        }
    }
</script>

<style scoped lang="scss">
    .quotes-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
    }

</style>
