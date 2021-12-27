<template>
  <div class="carousel">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.carousel {
  width: 100%;
  height: 100%;

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
