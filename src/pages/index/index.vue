<template>
  <div>
    <v-header>
      <h1 class="header-title">主页</h1>
    </v-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="tabs">
      <div class="tab-item">
        <router-link to="/home">主页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/lotter">购彩大厅</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/recharge">充值</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/myinfo">我的</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import header from "../../component/header/header";
export default {
  components: {
    "v-header": header
  }
};
</script>

<style lang="scss" scoped>
.header-title {
  text-align: center;
}
.tabs {
  position: fixed;
  bottom: 0;
  background: pink;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  line-height: 40px;
  .tab-item {
    flex: 1;
    text-align: center;
  }
}
</style>