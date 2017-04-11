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

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
