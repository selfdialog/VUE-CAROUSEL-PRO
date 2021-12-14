<template>
  <div class="wrapper">
    <magnifier
      :link="link"
      :blank="blank"
      :imgAlt="imgAlt"
      :imgUrl="imgUrl"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"
import Magnifier from "./libs/jsppui/components/Magnifier.vue"
export default {
  components: { Magnifier },
  name: "App",
  setup(props) {
    const state = reactive({
      imgUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01694a5c1b444da80121df900dc106.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642055563&t=e4a437d4a1de1a947001a6854f7ab4c4",
      link: "https://www.baidu.com",
      imgAlt: "某宝图片",
      blank: true,
      imgWidth: 375,
      imgHeight: 481,
      magWidth: 100,
      magHeight: 100,
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss">
.wrapper {
  width: 375; //481
  margin: 100px auto;
}
</style>
