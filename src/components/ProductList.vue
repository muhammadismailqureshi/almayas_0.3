<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>PKR.{{ product.price }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        { id: '1', name: 'T-Shirt', description: 'Cotton shirt', price: 1999 },
        { id: '2', name: 'Mug', description: 'Ceramic mug', price: 999 },
        { id: '3', name: 'Tillu', description: 'This is a great product', price: 800 }
      ],
    };
  },
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
  methods: {
    addToCart(product) {
      this.cartStore.addItem(product);
    },
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}
.product {
  flex: 1 1 200px;
  max-width: 200px;
  border: 1px solid #e0e0e0;
  padding: 12px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  box-sizing: border-box;
}
.product h3 {
  margin: 0 0 8px;
  font-size: 1.1em;
  color: #333;
}
.product p {
  margin: 4px 0;
  color: #666;
  font-size: 0.9em;
}
.product button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
}
.product button:hover {
  background-color: #218838;
}
@media (max-width: 600px) {
  .product {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
@media (min-width: 601px) and (max-width: 900px) {
  .product {
    flex: 1 1 45%;
    max-width: 45%;
  }
}
</style>
