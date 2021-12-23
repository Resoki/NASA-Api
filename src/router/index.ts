import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Home from '../views/Home/Home';
import MarsRoverPage from '@/views/MarsRoverPage/MarsRoverPage';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mars-rover',
    name: 'MarsRoverPage',
    component: MarsRoverPage,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
