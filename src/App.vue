<template>
  <div id="app">
    <img :src="require('./生命周期.png')" alt srcset>
    <div id="main"></div>

    <router-view></router-view>
  </div>
</template>

<script>
import echarts from "echarts";
export default {};
</script>