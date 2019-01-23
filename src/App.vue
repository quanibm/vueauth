<template>
  <div id="app">
    <v-header></v-header>
    <v-tabs></v-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./component/header/header";
import tabs from './component/tabs/tabs';
export default {
  components: {
    "v-header": header,
    'v-tabs': tabs
  }
};
</script>
