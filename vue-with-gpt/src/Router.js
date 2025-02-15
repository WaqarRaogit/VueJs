import { createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Dashboard from './components/Dashboard.vue';
import NotFound from './components/NotFound.vue';

const isAuthenticated = () => {
    return localStorage.getItem('auth') === 'true';
}

const routes = [
    { path: '/', component: Home },
    {  path: '/about', component: About},
    {
        path: '/dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if(!isAuthenticated){
                next('/login');
            }
            else{
                next();
            }
        }
    },
    {path: '/:pathMatch(.*)*', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;