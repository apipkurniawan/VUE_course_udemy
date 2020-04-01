import Vue from 'vue'
import App from './App.vue'

/* global filters */
Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
});

/* global mixin */
Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
