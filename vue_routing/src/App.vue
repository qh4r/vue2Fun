<template>
    <div class="container">
        <div class="row">
            <header-component></header-component>
            <hr>
            <router-view name="test-top"></router-view>
            <router-view></router-view>
            <router-view name="test-bottom"></router-view>
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
