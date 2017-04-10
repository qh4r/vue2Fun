import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './rotues';

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
