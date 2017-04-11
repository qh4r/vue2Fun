<template>
    <div class="container">
        <h2>Zawartość Garażu</h2>
        <ul>
            <li :key="i" v-for="(car, i) in cars" @click="carClick(i)">{{car}}</li>
        </ul>
        <label>query msg:</label>
        <input type="text" v-model="query_params">
        <hr>
        <transition name="swap" mode="out-in">
            <router-view :key="id"></router-view>
        </transition>
        <hr>
        <h3>params:</h3>
        <!--key value odrwrotnie !!!!-->
        <ul v-if="params && Object.keys(params).length  ">
            <li v-for="value, key in params">{{key}} -> {{value}} </li>
        </ul>
        <p id="test" v-else>
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
                this.$router.push(Object.assign({
                    name: 'user_details',
                    params: {id: index}
                }, this.query_params.length ? {query: {msg: this.query_params}} : {}));
            }
        },
        computed: {
            params(){
                return this.$route.query;
            },
            id(){
                return this.$route.params.id;
            }
        },
        beforeRouteEnter(to, from, next){
            console.log("przed zaladowaniem komponentu garaz");
            next(vm => {
                console.log("juz po zaladowaniu przed mountem z dostepem do komponentu w vm")
            })
        },
        beforeRouteLeave(to, from, next) {
            console.log("before leave dziala jak before enter");
            next();
        }
    }
</script>

<style scoped lang="scss">
    li {
        cursor: pointer;
        transition: transform 0.5s;

        &:hover {
            transform: translateX(-10px) scaleY(1.1);
        }
    }

    @keyframes swap-in {
        from {
            transform: rotateX(90deg);
        }
        to {
            transform: rotateX(0);
        }
    }

    @keyframes swap-out {
        from {
            transform: rotateX(0);
        }
        to {
            transform: rotateX(90deg);
        }
    }

    .swap-enter {

    }

    .swap-enter-active {
        animation: swap-in 0.7s ease-out forwards;
        /*z jakiegos powodu transition nie dzialal....*/
    }

    .swap-leave {
    }

    .swap-leave-active {
        animation: swap-out 0.7s ease-out forwards;
    }
</style>
