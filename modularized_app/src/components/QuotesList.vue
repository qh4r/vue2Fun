<template>
    <div class="quotes-container">
        <quote-item :quote="quote" v-for="quote in quotes"></quote-item>
    </div>
</template>

<script>
    import Quote from "./Quote.vue"
    export default {
        components: {
            "quote-item": Quote
        },
        props: {
            quotes: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data () {
            return {}
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
