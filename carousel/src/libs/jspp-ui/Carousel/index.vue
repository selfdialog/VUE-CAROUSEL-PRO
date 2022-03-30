<template>
  <div class="carousel">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  onMounted, //挂载
  onBeforeUnmount //在组件卸载之前
  } from 'vue'
export default {
  name: "Carousel",
  props:{
    /**
     * 是否自动滚动
     */
    autoplay: {
      type: Boolean,
      default: true
    },
    /**
     * 轮播间隔时间
     */
    duration:{
      type:Number,
      default: 3000
    },
    /**
     * 初始图片索引
     */
    initial:{
      type: Number,
      default: 0
    },
    /**
     * 是否显示小圆点
     */
    hasDot:{
      type: Boolean,
      default: true
    },
    /**
     * 是否显示左右的指示按钮
     */
    hasDirector:{
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const state = reactive({
      currentIndex: props.initial
    });

    let t = null;
    const autoPlay = () => {
      if(props.autoplay){
        t = setInterval(() => {
          
        }, props.duration)
      }
    }
    return {
      ...toRefs(state)
    }
  }
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
