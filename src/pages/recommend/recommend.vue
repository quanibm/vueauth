<template>
  <div class="recommend">
    <div class="slider-wrapper" v-if="recommends.length">
      <div v-for="(item, index) in recommends" :key="index">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommend } from "../../api/recommend.js";
import { ERR_OK } from "../../api/config.js";
export default {
  data() {
    return {
      recommends: []
    };
  },
  created() {
    this._getRecomend();
  },
  methods: {
    _getRecomend() {
      getRecommend().then(res => {
        console.log(res);
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>