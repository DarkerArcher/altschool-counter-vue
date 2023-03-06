import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import CounterComponent from './components/CounterComponent.vue';
import PageNotFound from './components/PageNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeComponent
        },
        {
            path: '/counter',
            name: 'Counter',
            component: CounterComponent
        },
        {
            path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFound,
        }
    ]
})

createApp(App).use(router).mount('#app')
