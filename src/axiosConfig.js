import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production' ? 'https://food-delivery-web-app-sand.vercel.app' : '/';
