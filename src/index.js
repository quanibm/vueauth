import Vue from 'vue';
import App from './App.vue';
import router from './router/routes';
import fastclick from 'fastclick';
import 'common/scss/index.scss';

fastclick.attach(document.body);

new Vue({
  el: '#root',
  router,
  render: h => h(App)
});
