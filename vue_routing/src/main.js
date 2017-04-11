import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './rotues';

const router = new VueRouter({
    routes,
    // pozwala scrolowac do elementu
    scrollBehavior(to, from, savedPosition){
        return {selector: '#test'}
    }
});

router.beforeEach((to, from, next) => {
    console.log("before each tu mozna walidaowac access - nie wymaga mounta komponentu - wywoluje sie zawsze");
    next();
//     jak do next podamy sciezke to przekieruje, jak false to anuluje
});

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
