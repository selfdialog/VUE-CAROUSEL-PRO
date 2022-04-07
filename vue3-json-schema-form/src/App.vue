<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <p>{{name}}:{{name2}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent,PropType, reactive, ref, computed,watchEffect } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup(props, { slots, attrs, emit}){
    // let name = 'jokcy'
    /* const state=reactive({
      name:'jokcy'
    }) */

    // {value: xxx}
    const nameRef = ref('jokcy')
    
    
    setInterval(() => {
      // state.name += '1'
      nameRef.value += '1'
    },1000)

    const computedNameRef = computed(() => {
      return (nameRef.value + '2')
    })

    watchEffect(() => {
      // 监测变化的值
      console.log(nameRef.value)
    })

    return {
      name: nameRef,
      name2: computedNameRef,
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
