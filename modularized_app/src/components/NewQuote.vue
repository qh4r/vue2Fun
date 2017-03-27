<template>
    <div class="new-quote-container">
        <div class="new-quote-input-controls">
            <textarea placeholder="Wpisz tu cytat" :value="newQuoteText" @change="onQuoteUpdate"></textarea>
            <button @click="newQuoteCallback" class="btn btn-primary">Dodaj</button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                newQuoteText: ""
            }
        },
        methods: {
            newQuoteCallback(){
//                this.$emit("newQuote", this.newQuote);
                console.log(this.newQuoteText);
                this.$emit("newQuoteAdded", this.newQuoteText);
                this.newQuoteText = "";
            },
            onQuoteUpdate({target: {value}}){
                console.log(value);
                this.newQuoteText = value;
            }
        }
    }
</script>

<style scoped lang="scss">
    .new-quote-container {
        width: 100%;
        flex-grow: 1;
        .new-quote-input-controls {
            width: 70%;
            margin: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            textarea {
                flex-grow: 4;
                resize: none;
            }
            button {
                flex-grow: 1;
            }
        }
    }
</style>
