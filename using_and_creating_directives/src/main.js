import Vue from 'vue'
import App from './App.vue'

// custom directives (global directives)
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    /* not using dynamic */
    // el.style.backgroundColor = 'green'
    /* using dynamic */
    // el.style.backgroundColor = binding.value;
    /* using modifier */
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 4000;
    }
    setTimeout(() => {
      /* using argument */
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay);
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
