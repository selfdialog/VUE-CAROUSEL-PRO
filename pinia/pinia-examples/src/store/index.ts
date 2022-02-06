import {defineStore} from 'pinia'

// 1. 定义容器
// 参数1：容器的id，必须唯一，将来Pinia会将所有的容器挂载到根容器
// 参数2：选项对象
// 返回值：一个函数，调用得到容器实例
export const useMainStore = defineStore('main', {
  /**
   * 类似于组件的data对象，用来存储全局状态的
   * 1. 必须是函数：为了避免服务端渲染的时候避免交叉请求导致的数据状态污染
   * 2. 必须是箭头函数：为了更好的ts类型推导
   * @returns
   */
  state: () => {
    return {
      count:100,
      arr:[1,2,3]
    }
  },

  /**
   * 类似于组件的computed，用来封装计算属性，有缓存的功能
   */
  getters: {
    // 函数参数的可选对象：state状态对象
    // count10(state){
    //   // 有缓存功能
    //   console.log('调用了');
    //   return state.count + 10
    // }

    // 如果使用了this则必须指定返回值的类型，否则推导不出来
    count10():number{
      // 有缓存功能
      console.log('调用了');
      return this.count + 10
    }
  },

  /**
   * 类似于组件的methods，封装业务逻辑，修改state
   */
  actions: {
    // 注意：不能使用箭头函数定义action，因为箭头函数绑定外部this
    changeState(num: number){
      this.count+=num
      this.arr.push(4)

      // this.$patch({})
      // this.$patch(state=>{})
    }
  }
})


// 2。使用容器的 state

// 3. 修改 state

// 4. 容器中 action 的使用