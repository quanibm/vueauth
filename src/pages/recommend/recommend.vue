<template>
  <div class="recommend">
    <div class="slider-wrapper" v-if="recommends.length">
      <v-slider>
        <div v-for="(item, index) in recommends" :key="index">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt>
          </a>
        </div>
      </v-slider>
    </div>
  </div>
</template>

<script>
import slider from "../../component/slider/slider";
import { getRecommend } from "../../api/recommend.js";
import { ERR_OK } from "../../api/config.js";
export default {
  data() {
    return {
      recommends: []
    };
  },
  components: {
    "v-slider": slider
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

<style scoped lang="scss">
.recommend {
  position: fixed;
  width: 100%;
  top: vw(88);
  bottom: 0;
  background-color: #fff;
  .slider-wrapper {
    position: relative;
    width: 100%;
    height: vw(200);
  }
}
</style>