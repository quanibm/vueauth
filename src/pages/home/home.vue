<template>
  <div>
      <h1>111111111</h1>
    <div id="canvas"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  activated() {
    let mychart = echarts.init(document.getElementById("canvas"));
    mychart.setOption({
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          data: [
            { value: 235, name: "视频广告" },
            { value: 274, name: "联盟广告" },
            { value: 310, name: "邮件营销" },
            { value: 335, name: "直接访问" },
            { value: 400, name: "搜索引擎" }
          ]
        }
      ]
    });
  }
};
</script>

<style lang="scss" scoped>
#canvas {
    height: vw(200);
}
</style>