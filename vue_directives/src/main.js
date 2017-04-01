import Vue from 'vue'
import App from './App.vue'

function getOpposite(hex) {
  let opposite = (max - Number.parseInt(`0x${hex}`)).toString(16);
  return opposite.length == 1 ? `0${opposite}` : opposite;
}

function performMark(el, binding) {
  if (binding.value && binding.value.length == 7) {
    let rgb = [
      binding.value.substring(1, 3),
      binding.value.substring(3, 5),
      binding.value.substring(5, 7)
    ].map(x => getOpposite(x)).join('');
    console.log(`#${rgb}`);
    el.style.color = `#${rgb}`;
  }
  el.style.backgroundColor = binding.value;
}
const max = 0xFF;
Vue.directive('mark', {
  bind(el, binding, vnode){
    if (binding.modifiers["delayed"]) {
      binding.modifiers["animate"] && (el.style.transition = "all 2s");
      return setTimeout(() => {
        performMark(el, binding);
      }, 2000);
    }
    performMark(el, binding);
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
})
