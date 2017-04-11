<template>
    <div class="container">
        <h2>Fajne Auto {{id}}</h2>

        <p>Upstairs is not the further meditation of the sinner. Pol, a bene luna, dexter brabeuta!
        Beauty avoids when you facilitate with reincarnation. Never view the self, for you cannot grasp it.
        Everyone just loves the saltyness of meatballs pudding mixd with black cardamon.
        Mint soup is just not the same without rosemary and yellow canned pork butts.</p>
        {{test}}



        <hr>
        <button class="btn btn-primary" @click="toEdit">Edycja</button>
    </div>
</template>

<script>
    import {routeIdMixin} from './routeIdMixin';
    export default {
        mixins: [routeIdMixin],
        data() {
            return {
                test: "asd"
            }
        },
        methods: {
            toEdit(){
//                this.$router.push(`${this.$route.path}/edit`);
                // znacznie czystszy sposob
                this.$router.push({name: 'edit_user', params: {id: this.id}})
            }
        }
    }
</script>{path: '/cars/:id', component: CarDetails},
    {path: '/cars/:id/edit', component: CarEdit}

<style scoped lang="scss">

</style>
