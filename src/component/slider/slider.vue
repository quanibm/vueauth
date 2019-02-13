<template>
  <div class="slider" ref="slider">
    <div class="slider-group">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot"></span>
    </div>
  </div>
</template>

<script>
export default {};
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
      a{
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
        img{
          width: 100%;
          display: block;
        }
      }
    }
  }
}
</style>