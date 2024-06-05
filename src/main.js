import './assets/main.css'
import './index.css'


import Headerpage from './pages/Headerpage.vue'
import Productspage from './pages/Productspage.vue'
import FullProductsPg from './pages/FullProducts.vue'
import FullProduct from './pages/Productpage.vue'

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        component: Headerpage
    },
    {
        path: '/:Products',
        name: 'Products',
        component: Productspage
    },
    {
        path: '/Catalog',
        name: 'Catalog',
        component: FullProductsPg
    },
    {
        path: '/:ProductCategory/:Product',
        name: 'Product',
        component: FullProduct
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app');