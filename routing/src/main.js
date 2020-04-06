import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {
  routes
} from './routes'; // untuk .js kasih kurung kurawal

// register route
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', //untuk menghilangkan hashtag di url
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {
      x: 0,
      y: 0
    }
  }
});

// before-enter guard
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
