// Dans ce fichier on va lister toutes les routes de notre application
import { createRouter, createWebHistory } from 'vue-router'
//! Cette route HOME (qui est un composant vue) on importe ici et on va l'utiliser dans notre routeur
import Home from '../views/Home.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Cette route n'est pas en lazy loading, elle est directement importée en haut du fichier
        {
            path: '/home',
            alias: '/',
            component: Home
        },
        // ! Ces routes sont en lazy loading, elle sera chargée uniquement quand on ira sur la page /about
        {
            path: '/about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/contact',
            component: () => import('../views/Contact.vue')
        },
            // Route spéciale pour gérer les pages non trouvées
        // Si la route sur laquelle on est ne Match pas nos autre routes (path)
        // On redirige vers une page avec un template style page 404
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../views/not-found.vue'),
        },

        /////   LESSONS   /////
        {
            path: '/lesson-setup',
            component: () => import('../views/lessons/lesson-setup.vue')
        },
        {
            path: '/lesson-introduction',
            component: () => import('../views/lessons/lesson-introduction.vue')
        },
        {
            path: '/lesson-syntax',
            component: () => import('../views/lessons/lesson-syntax.vue')
        },
        {
            path: '/lesson-text-interpolation',
            component: () => import('../views/lessons/lesson-text-interpolation.vue')
        },
        {
            path: '/lesson-attribute-binding',
            component: () => import('../views/lessons/lesson-attribute-binding.vue')
        },
        {
            path: '/lesson-event-binding',
            component: () => import('../views/lessons/lesson-event-binding.vue')
        },
        {
            path: '/lesson-dynamic-styling',
            component: () => import('../views/lessons/lesson-dynamic-styling.vue')
        },
        {
            path: '/lesson-two-way-binding',
            component: () => import('../views/lessons/lesson-two-way-binding.vue')
        },
        {
            path: '/lesson-conditional-rendering',
            component: () => import('../views/lessons/lesson-conditional-rendering.vue')
        },
        {
            path: '/lesson-list-rendering',
            component: () => import('../views/lessons/lesson-list-rendering.vue')
        },

        /////  EXERCICES  /////
        {
            path: '/text-interpolation',
            component: () => import('../views/exercices/text-interpolation.vue')
        },
        {
            path: '/attribute-binding',
            component: () => import('../views/exercices/attribute-binding.vue')
        },
        {
            path: '/event-binding',
            component: () => import('../views/exercices/event-binding.vue')
        },
        {
            path: '/dynamic-styling',
            component: () => import('../views/exercices/dynamic-styling.vue')
        },
        {
            path: '/watchers',
            component: () => import('../views/exercices/watchers.vue')
        },

        //// TP ////
        {
            path: '/data-binding',
            component: () => import('../views/tp/data-binding.vue')
        },
        {
            path: '/style-dynamic',
            component: () => import('../views/tp/style-dynamic.vue')
        },
        {
            path: '/watcher-computed',
            component: () => import('../views/tp/watcher-computed.vue')
        },
        {
            path: '/api-onmounted',
            component: () => import('../views/tp/api-onmounted.vue')
        },
    
        
        
    ]
})
export default router