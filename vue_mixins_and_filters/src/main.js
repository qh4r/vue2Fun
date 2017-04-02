import Vue from 'vue'
import App from './App.vue'

// nie jest to good practice
Vue.mixin({
  created() {
    console.log("globalny mixin ktory teraz odpala sie przy create KAŻDEGO komponentu w aplikacji!")
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
