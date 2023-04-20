import { createRouter, createWebHistory } from 'vue-router';
import HeroCard from './components/Hero/HeroCard.vue'


const routes = [
  { path: "/", name: "HeroCard", component: HeroCard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router ;
