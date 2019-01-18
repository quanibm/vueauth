import Vue from 'vue';
import App from './App.vue';
import router from './router/routes';
import 'index.scss'

new Vue({
  el: '#root',
  components: {
    App
  },
  router,
  template: '<App />'
});
