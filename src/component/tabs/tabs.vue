<template>
  <div class="tabs">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
import { jsonp } from "../../common/js/jsonp.js";
export default {
  created() {
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.tabs {
  background: $color-background-g;
  font-size: vw(16);
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: vw(40);
  line-height: vw(40);
  .tab-item {
    flex: 1;
    text-align: center;
    .tab-link {
      padding-bottom: vw(5);
      color: $color-text;
    }
    &.router-link-active {
      .tab-link {
        color: $color-text-l;
        border-bottom: 1px solid $color-text-l;
      }
    }
  }
}
</style>