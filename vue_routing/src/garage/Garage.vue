<template>
    <div class="container">
        <h2>Zawartość Garażu</h2>
        <ul>
            <li :key="i" v-for="(car, i) in cars" @click="carClick(i)">{{car}}</li>
        </ul>
        <label>query msg:</label>
        <input type="text" v-model="query_params">
        <hr>
        <router-view></router-view>
        <hr>
        <h3>params:</h3>
        <!--key value odrwrotnie !!!!-->
        <ul v-if="params && Object.keys(params).length  ">
            <li v-for="value, key in params">{{key}} -> {{value}} </li>
        </ul>
        <p v-else>
            brak parametrow
        </p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                cars: ["Audi", "Toyota", "Opel", "Skoda", "Łada"],
                query_params: ""
            }
        },
        methods: {
            carClick(index){
//                this.$router.push({path:`/cars/${index}`})

                //lepiej
                this.$router.push(Object.assign({name: 'user_details', params: {id: index}}, this.query_params.length ? {query: {msg: this.query_params}} : {}));
            }
        },
        computed: {
            params(){
                return this.$route.query;
            }
        }
    }
</script>

<style scoped lang="scss">
    li {
        cursor: pointer;
        transition: transform 0.5s;

        &:hover {
            transform: translateX(-10px) scaleY(1.1) ;
        }
    }
</style>
