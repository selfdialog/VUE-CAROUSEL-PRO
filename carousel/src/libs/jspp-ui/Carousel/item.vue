<!--  -->
<template>
  <div class="car-item" v-if="selfIndex === currentIndex">
    <slot> </slot>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {getCurrentInstance, reactive, toRefs} from 'vue'
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "CarItem",
  setup() {
    const instance = getCurrentInstance();
    console.log(instance);
    
    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex
    });
    return {
      ...toRefs(state)
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.car-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
}
</style>