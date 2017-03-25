import Vue from 'vue'
import App from './App.vue'
// alternatywna dla deklaracji w komponencie
// import Start from "./Start.vue";
// Vue.component('start-view', Start)
new Vue({
  el: '#app',
  render: h => h(App)
})
