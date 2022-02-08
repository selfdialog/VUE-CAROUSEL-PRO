import { buyProducts } from './../api/shop';
import { useProductsStore } from './products';
import { IProduct } from '../api/shop';
import { defineStore } from 'pinia';

type CartProduct = {
  quantity: number
} & Omit<IProduct,'inventory'> // 购物车不需要库存inventory，过滤掉
export const useCartStore = defineStore('cart',{
  state:() => {
    return {
      cartProducts: [] as CartProduct[],  // 购物车商品列表
      checkoutStatus: null as null | string
    }
  },

  getters:{
    totalPrice(state){
      return state.cartProducts.reduce((total,item)=>{
        return total+item.price*item.quantity
      },0)
    }
  },
  actions:{
    addProductToCart (product:IProduct) {
      console.log('addProductToCart', product);
      // 查看商品有没有库存
      if(product.inventory<1){
        return
      }
      // 检查购物车中是否有该商品
      const cartItem = this.cartProducts.find(item => item.id === product.id)
      if(cartItem){
        // 如果有则商品数量 + 1
        cartItem.quantity++
      }else{
        // 如果没有则添加到购物车列表中

        this.cartProducts.push({
          id: product.id,
          title:product.title,
          price:product.price,
          quantity: 1 // 第一次添加到购物车的数量就是1
        })
      }


      // 更新商品的库存
      // 不建议这么做，不要相信函数的参数,不一定是响应式数据
      // product.inventory--

      const productStore = useProductsStore()
      // product作为参数不是响应式的，所以要在productStore容器模块里面做相应的操作
      productStore.decrementProduct(product)
      
    },
    async checkout(){
      const ret = await buyProducts()
      this.checkoutStatus = ret ? '成功':'失败'
      if(ret){
        //清空购物车
        this.cartProducts=[]
      }
    }
  }
})