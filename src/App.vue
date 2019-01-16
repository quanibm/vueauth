<template>
  <div id="app">
    hello111 world
    <h1 >我是谁</h1>
    <img :src="require('./生命周期.png')" alt srcset>
    <div id="main">{{data}}</div>

    <router-view></router-view>
  </div>
</template>

<script>
import echarts from 'echarts'
console.log(echarts);
export default {
  data: {
    data: echarts
  }
};
</script>