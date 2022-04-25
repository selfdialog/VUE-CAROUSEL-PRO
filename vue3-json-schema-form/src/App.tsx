import { createApp, defineComponent, h, reactive, ref } from "vue";
const img = require('./assets/logo.png') // eslint-disable-line
import HelloWorld from './components/HelloWorld'

function renderHelloWorld(num: number){
  return <HelloWorld age={num}></HelloWorld>
}

export default defineComponent({
  // setup返回render函数的用法,js闭包的使用
  setup() {
    const state=reactive({
      name:'jockey'
    })

    const numberRef= ref(1)
    console.log('垃圾');
    /* setInterval(() => {
      state.name+='1'
      numberRef.value+=1
    },1000) */

    // const number=numberRef.value //放到return外面无效，因为只执行一次
    return ()=>{
      const number=numberRef.value
      console.log(state.name);
      return <div id="app">
        <img src={img} alt="Vue logo" />
        <p>{state.name+number}</p>
        <input type="text"  v-model={state.name}/>
        {renderHelloWorld(13)}
      </div>
      /* return h('div', {id: 'app'},[
        h('img',{
          alt: 'Vue logo',
          src: img
        }),
        h('p', state.name+number)
      ]) */
    }
  }
})