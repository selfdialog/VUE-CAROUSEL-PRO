<!--  -->
<template>
  <div
    class="img-wrap"
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px',
    }"
  >
    <a
      class="mag-wrap"
      :href="link"
      :target="blank ? '_blank' : ''"
      :style="{
        width: magWidth + 'px',
        height: magHeight + 'px',
      }"
    >
      <img
        class="mag-img"
        :src="imgUrl"
        :alt="imgAlt"
        :style="{
          width: imgWidth + 'px',
          height: imgHeight + 'px',
        }"
      />
    </a>

    <a class="img-lk" :href="link">
      <img class="static-img" :src="imgUrl" :alt="imgAlt" />
    </a>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "Magnifier",
  props: {
    imgWidth: {
      type: Number,
      default: 375,
    },
    imgHeight: {
      type: Number,
      default: 500,
    },
    magWidth: {
      type: Number,
      default: 150,
    },
    magHeight: {
      type: Number,
      default: 150,
    },
    blank: {
      type: Boolean,
      default: false,
    },
    link: String,
    imgUrl: String,
    imgAlt: String,
  },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.img-wrap {
  position: relative;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;

  .static-img {
    width: 100%;
  }

  .mag-wrap {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 0 3px #ccc;
    cursor: move;
    overflow: hidden;

    &.show {
      //增加了一个类名
      display: block;
      transform: scale(1.5);
    }

    .mag-img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
