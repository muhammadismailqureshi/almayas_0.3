import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CheckoutSuccess from '../views/CheckoutSuccess.vue';
import CheckoutCancel from '../views/CheckoutCancel.vue';
import CartView from '@/views/CartView.vue';
import CheckoutView from '@/views/CheckoutView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/cart', name: 'cart', component: CartView },
  { path: '/checkout', name: 'checkout', component: CheckoutView },
  { path: '/success', name: 'success', component: CheckoutSuccess },
  { path: '/cancel', name: 'cancel', component: CheckoutCancel },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
