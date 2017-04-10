<template>
        <ul class="nav nav-pills">
            <li role="presentation"><router-link activeClass="active" :to="'/'">Home</router-link></li>
            <li role="presentation"><router-link activeClass="active" :to="'/cars'">Garage</router-link></li>
        </ul>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<style scoped lang="scss">

</style>
