import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import MovieDetailPage from '@/views/MovieDetailPage.vue';
import UserProfilePage from '@/views/UserProfilePage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/movie/:id', component: MovieDetailPage, props: true },
    { path: '/user/:username', component: UserProfilePage, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;