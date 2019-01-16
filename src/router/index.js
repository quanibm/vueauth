import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/index/index.vue'
import Login from '../pages/login/login.vue';
import Account from '../pages/account/account.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component : Index,
      children: [
        {
          path: '',
          redirect: '/account'
        },
        {
          path: '/account',
          component: Account
        }
      ]
    }
  ]
});
