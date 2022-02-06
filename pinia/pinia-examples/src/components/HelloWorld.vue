<template>
  <p>{{mainStore.count}}</p>
  <p>{{mainStore.arr}}</p>
  <p>{{mainStore.count10}}</p>
  <p>{{mainStore.count10}}</p>
  <p>{{mainStore.count10}}</p>

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
    // 方式一：数据修改最简单的方式
    // mainStore.count++

    // 方式二：使用$patch批量更新
    // mainStore.$patch({
    //   count: mainStore.count+1,
    //   arr: [...mainStore.arr, 4]
    // })

    // 方式三：更好的批量更新方式：$patch 一个函数
    // mainStore.$patch(state=>{
    //   state.count++
    //   state.arr.push(4)
    // })

    // 方式四：逻辑多的话封装到action做处理
    mainStore.changeState(10)
  }
  </script>
  