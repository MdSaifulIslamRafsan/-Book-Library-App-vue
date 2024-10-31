import { createWebHistory, createRouter } from 'vue-router';
import HomePage from './Pages/HomePage.vue';
import AboutPage from './Pages/AboutPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/about', component: AboutPage, name: 'AboutPage' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
