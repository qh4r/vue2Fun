export const routeIdMixin = {
    data () {
        return {
            id: this.$route.params.id
        }
    },
    // dzieki temu property zmieniaja sie nawet jesli komponent pozostaje mountet
    // mozna by uzyc zamiast tego computed property
    watch: {
        $route(newRoute, oldRoute){
            this.id = newRoute.params.id
        }
    }
};