<template>
  <p>{{mainStore.count}}</p>

  <hr>

  <p>{{count}}</p>

  <hr>

  <p>
    <button @click="handleChangeState">修改数据</button>
  </p>
</template>

  <script lang="ts" setup>
  import {storeToRefs} from 'pinia'
  //默认加载index
  import {useMainStore} from '../store'

  const mainStore = useMainStore()
  console.log(mainStore.count);

  // 这是有问题的，因为这样拿到的数据不是响应式的，是一次性的
  // Pinia其实把state的数据做了reactive处理了
  // const {count}=mainStore

  // 解决办法
  // 把解构出来的数据做 ref 响应式代理
  const {count}=storeToRefs(mainStore)
  console.log(count.value);

  const handleChangeState=() => {
    // 数据修改最简单的方式
    mainStore.count++
  }
  </script>
  