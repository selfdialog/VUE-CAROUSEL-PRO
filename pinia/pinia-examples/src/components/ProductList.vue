<template>
  <ul>
    <li v-for="product in productsStore.all" :key="product.id">
      {{product.title}} - {{product.price}}
      <br>
      <button 
        :disabled="!product.inventory"
        @click="cartStore.addProductToCart(product)">
        添加到购物车
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {useProductsStore} from '../store/products'
import {useCartStore} from '../store/cart'
const productsStore = useProductsStore()
const cartStore = useCartStore()

// 加载所有的数据
productsStore.loadAllProducts()
</script>