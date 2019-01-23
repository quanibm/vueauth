import Vue from 'vue';
import Router from 'vue-router';
import index from '../pages/index/index.vue';
import home from '../pages/home/home.vue';
import lotter from '../pages/lotter/lotter.vue';
import recharge from '../pages/recharge/recharge.vue';
import myinfo from '../pages/myinfo/myinfo.vue';
import game from '../component/game/game.vue';

import Recommend from '../pages/recommend/recommend.vue';
import Singer from '../pages/singer/singer.vue'
import Rank from '../pages/rank/rank.vue'
import Search from '../pages/search/search.vue'



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
});

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       component: index,
//       children: [
//         {
//           path: '',
//           redirect: '/home'
//         },
//         {
//           path: 'home',
//           component: home
//         },
//         {
//           path: 'lotter',
//           component: lotter
//         },
//         {
//           path: 'recharge',
//           component: recharge
//         },
//         {
//           path: 'myinfo',
//           component: myinfo
//         }
//       ]
//     },
//     {
//       path: '/game',
//       component: game
//     }
//   ]
// });
