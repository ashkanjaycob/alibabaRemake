import { createRouter, createWebHistory } from 'vue-router';
import HeroCard from './components/Hero/HeroCard.vue'
import Train from './components/Hero/TrainCard.vue'
import Bus from './components/Hero/BusCard.vue'
import Hotel from './components/Hero/HotelCard.vue'
import Tour from './components/Hero/TourCard.vue'


const routes = [
  { path: "/", name: "HeroCard", component: HeroCard , meta: { transition: 'slide-left' } },
  { path: "/train", name: "Train", component: Train },
  { path: "/bus", name: "Bus", component: Bus },
  { path: "/hotel", name: "Hotel", component: Hotel },
  { path: "/tour", name: "Tour", component: Tour },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router ;
