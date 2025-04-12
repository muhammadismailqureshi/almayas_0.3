<template>
  <div class="cart">
    <h1>Cart</h1>
    <div v-if="cart.items.length === 0">Cart is empty</div>
    <div v-else>
      <div v-for="item in cart.items" :key="item.id" class="cart-item">
        <p>{{ item.name }} - ${{ item.price }} x {{ item.quantity }}</p>
      </div>
      <p>Total: ${{ total }}</p>
      <router-link to="/checkout">
        <button>Proceed to Checkout</button>
      </router-link>
    </div>
    <router-link to="/">Back to Shopping</router-link>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart';

export default {
  name: 'CartView',
  setup() {
    const cartStore = useCartStore();
    return { cart: cartStore };
  },
  computed: {
    total() {
      return this.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
.cart-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}
p {
  margin: 10px 0;
}
button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
a {
  display: inline-block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
