<template>
    <div class="container">
        <div class="row">
            <header-component></header-component>
            <hr>
            <router-view></router-view>

        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';
    export default {
        components: {
            'header-component': Header
        },
        data () {
            return {}
        }
    }
</script>

<style lang="scss">

</style>
