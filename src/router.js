import { createWebHistory, createRouter } from 'vue-router';
import HomePage from './Pages/HomePage.vue';
import AboutPage from './Pages/AboutPage.vue';
import NotFoundPage from './Pages/NotFoundPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/about', component: AboutPage, name: 'AboutPage' },
  { path: '/:pathMatch(.*)*', component: NotFoundPage, name: 'NotFound' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
