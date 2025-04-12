<template>
  <div class="checkout">
    <h1>Checkout</h1>
    <div v-if="cart.items.length === 0">
      <p>Cart is empty. Please add items to proceed.</p>
      <router-link to="/">Back to Shopping</router-link>
    </div>
    <div v-else>
      <h2>Order Summary</h2>
      <div v-for="item in cart.items" :key="item.id" class="cart-item">
        <p>{{ item.name }} - ${{ item.price }} x {{ item.quantity }}</p>
      </div>
      <p>Total: ${{ total }}</p>
      <h2>Shipping Details</h2>
      <form @submit.prevent="placeOrder">
        <label>
          Name:
          <input v-model="form.name" required />
        </label>
        <label>
          Address:
          <textarea v-model="form.address" required></textarea>
        </label>
        <label>
          Phone:
          <input v-model="form.phone" type="tel" required />
        </label>
        <button type="submit">Place Order (Cash on Delivery)</button>
        <router-link to="/cart">Back to Cart</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart';

export default {
  name: 'CheckoutView',
  setup() {
    const cartStore = useCartStore();
    return { cart: cartStore };
  },
  data() {
    return {
      form: {
        name: '',
        address: '',
        phone: '',
      },
    };
  },
  computed: {
    total() {
      return this.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
  methods: {
    placeOrder() {
      // Temporary mock success for testing
      this.cart.clearCart();
      this.form = { name: '', address: '', phone: '' };
      this.$router.push('/success');
    },
  },
};
</script>

<style scoped>
.cancel-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;
}
.cancel-btn:hover {
  background-color: #c82333;
}
.checkout {
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
form {
  margin-top: 20px;
}
label {
  display: block;
  margin: 15px 0;
  text-align: left;
}
input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}
textarea {
  height: 100px;
}
button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 10px 10px 0;
}
button:hover {
  background-color: #218838;
}
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
