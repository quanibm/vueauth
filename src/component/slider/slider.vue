<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot"></span>
    </div>
  </div>
</template>

<script>
import { addClass } from "../../common/js/dom.js";
import BScroll from "better-scroll";
import { clearTimeout } from 'timers';
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted() {
    setTimeout(() => {
      this._setSliderWidth();
      this._initSlider();
    }, 20);
  },
  methods: {
    _setSliderWidth() {
      this.children = this.$refs.sliderGroup.children;
      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth;
      console.log(this.children, Array.isArray(this.children));
      for (let i = 0, len = this.children.length; i < len; i++) {
        let child = this.children[i];
        addClass(child, "slider-item");
        child.style.width = sliderWidth + "px";
        width += sliderWidth;
        console.log(child, width);
      }
      if (this.loop) {
        width += 2 * sliderWidth;
      }
      this.$refs.sliderGroup.style.width = width + "px";
    },
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        },
        click: true
      });

    }
  }
};
</script>

<style scoped lang="scss">
.slider {
  min-height: vw(1);
  position: relative;
  .slider-group {
    overflow: hidden;
    white-space: nowrap;
    .slider-item {
      float: left;
      box-shadow: border-box;
      overflow: hidden;
      text-align: center;
      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }
}
</style>