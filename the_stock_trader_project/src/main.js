import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// konfigurasi vuex
import store from './store/store'

// konfigurasi routing
import VueRouter from 'vue-router'
import {
  routes
} from './routes'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://vue-stock-trader-538fe.firebaseio.com/';
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});


const router = new VueRouter({
  mode: 'history', // hilangkan hashtag
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
