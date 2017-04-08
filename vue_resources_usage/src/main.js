import Vue from 'vue'
import App from './App.vue'
import Resource from 'vue-resource'

Vue.use(Resource);

new Vue({
  el: '#app',
  render: h => h(App)
})
