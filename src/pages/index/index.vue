<template>
  <div>
    <v-header>
      <h1 class="header-title" v-text="header_title"></h1>
    </v-header>
    <router-view></router-view>
    <div class="tabs">
      <div
        class="tab-item"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="handleClick(tab.name, index)"
      >
        <router-link :to="tab.url" v-text="tab.name"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import header from "../../component/header/header";
export default {
  data() {
    return {
      header_title: "主页",
      tabs: [
        {
          name: "主页",
          url: "/home"
        },
        {
          name: "购彩大厅",
          url: "/lotter"
        },
        {
          name: "充值",
          url: "/recharge"
        },
        {
          name: "我的",
          url: "/myinfo"
        }
      ]
    };
  },
  methods: {
    handleClick(name, index) {
      this.header_title = name;
    }
  },
  components: {
    "v-header": header
  }
};
</script>

<style lang="scss">
.header-title {
  text-align: center;
  font-size: vw(18);
}
.tabs {
  position: fixed;
  bottom: 0;
  background: $color;
  font-size: vw(16);
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: vw(80);
  line-height: vw(80);
  .tab-item {
    flex: 1;
    text-align: center;
  }
}
</style>