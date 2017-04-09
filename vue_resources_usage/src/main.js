import Vue from 'vue'
import App from './App.vue'
import Resource from 'vue-resource'

Vue.use(Resource);

// domyslny url bazowy - tak ustawiamy dla calej apki
Vue.http.options.root = 'https://vue-fun.firebaseio.com/data.json';

// mozna przechwytywac i modyfikowac requesty (przed wyslaniem)
Vue.http.interceptors.push((request, next) => {
    console.log("nowy request : ", request);
    next(response => {
        console.log(response);
        //tu mozna modyfikowac response

        // response.json = function () {
        //     return Promise.resolve({
        //         cukierki: {},
        //         slodkosci: {}
        //     });
        // }
    });
})

new Vue({
    el: '#app',
    render: h => h(App)
})
