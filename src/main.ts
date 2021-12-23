import { createApp } from 'vue';

import { App } from '@/views/App/App';
import router from './router';
import store from './store';

import './assets/scss/main.scss';
import './assets/tailwind.css';


createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
