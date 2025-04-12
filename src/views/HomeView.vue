<template>
  <div class="home">
    <h1>Almayas E-commerce</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'HomeView',
  components: { ProductList },
};
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
