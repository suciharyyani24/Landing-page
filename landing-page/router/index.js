import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HeroSection.vue'; // Halaman home
import ProductDetail from '../components/ProductDetail.vue'; // Halaman detail produk

const routes = [
  { path: '/', component: Home },
  { path: '/product-detail', component: ProductDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;