<template>
  <div>
    <v-header>
      <h1 class="header-title" v-text="header_title"></h1>
    </v-header>
    <router-view></router-view>
    <v-tabs @handleClick="handleClick"></v-tabs>
  </div>
</template>

<script>
import header from "../../component/header/header";
import tabs from "../../component/tabs/tabs";
export default {
  data() {
    return {
      header_title: "主页"
    };
  },
  methods: {
    handleClick({name, index}) {
      this.header_title = name;
    }
  },
  components: {
    "v-header": header,
    "v-tabs": tabs
  }
};
</script>

<style lang="scss" scoped>
.header-title {
  text-align: center;
  font-size: vw(18);
}
</style>