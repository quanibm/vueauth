<template>
  <div class="header">
    <div class="icon"></div>
    <h1 class="text">Quan Music</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  background: $color-background-g;
  height: vw(40);
  line-height: vw(40);
  display: flex;
  justify-content: center;
  .icon {
    width: vw(30);
    height: vw(32);
    vertical-align: top;
    margin: 6px 9px 0 0;
    @include bg-image("111logo");
    background-size: vw(30) vw(32);
  }
  .text {
    vertical-align: top;
    line-height: vw(44);
    font-size: vw(16);
  }
}
</style>