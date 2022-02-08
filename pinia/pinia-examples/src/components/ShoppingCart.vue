<template>
  <div class="cart">
    <h2>你的购物车</h2>
    <p>
      <i>Please add some products to cart.</i>
    </p>
    <ul>
      <li v-for="cartProduct in cartStore.cartProducts" :key="cartProduct.id">{{cartProduct.title}} - {{cartProduct.price}} × {{cartProduct.quantity}}</li>
    </ul>
    <p>Total: {{cartStore.totalPrice}}</p>
    <p><button @click="cartStore.checkout">Checkout</button></p>
    <p v-show="cartStore.checkoutStatus">Checkout {{cartStore.checkoutStatus}}.</p>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "../store/cart";

const cartStore = useCartStore()
</script>