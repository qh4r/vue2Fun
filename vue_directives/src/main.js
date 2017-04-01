import Vue from 'vue'
import App from './App.vue'


Vue.directive('mark', {
  bind(el, binding, vnode){
    console.log("dane", binding)
    let hexVal = binding.value.replace("#","0x");
    let counter_value = 0xFFFFFF - Number.parseInt(hexVal);
    el.style.backgroundColor = binding.value;
    let coutnter_string  = `0x${counter_value.toString(16)}`;
    el.style.color = coutnter_string;
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
