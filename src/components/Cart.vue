<template>
    <div class="cart">
      <h2>Cart</h2>
      <div v-if="cart.items.length === 0">Cart is empty</div>
      <div v-else>
        <div v-for="item in cart.items" :key="item.id">
          <p>{{ item.name }} - ${{ item.price }} x {{ item.quantity }}</p>
        </div>
        <p>Total: ${{ total }}</p>
        <button @click="showCheckout = true" v-if="!showCheckout">Proceed to Checkout</button>
        <div v-if="showCheckout" class="checkout-form">
          <h3>Enter Your Details</h3>
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
            <button type="button" @click="showCheckout = false">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '@/stores/cart';
  import axios from 'axios';
  
  export default {
    setup() {
      const cartStore = useCartStore();
      return { cart: cartStore };
    },
    data() {
      return {
        showCheckout: false,
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
      async placeOrder() {
        try {
          await axios.post('https://<YOUR_API_GATEWAY_URL>/orders', {
            items: this.cart.items,
            total: this.total,
            customer: this.form,
          });
          this.cart.items = [];
          this.showCheckout = false;
          this.form = { name: '', address: '', phone: '' };
          this.$router.push('/success');
        } catch (error) {
          console.error('Order error:', error);
          alert('Failed to place order');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .cart {
    padding: 20px;
  }
  .checkout-form {
    margin-top: 20px;
    border: 1px solid #ddd;
    padding: 15px;
  }
  label {
    display: block;
    margin: 10px 0;
  }
  input, textarea {
    width: 100%;
    padding: 5px;
  }
  button {
    margin: 10px 5px;
  }
  </style>