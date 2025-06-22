import { createWebHistory, createRouter } from 'vue-router'

import LoginView from '../pages/LoginView.vue'
import AddMessageView from '../pages/AddMessageView.vue'
import MessagesView from '../pages/MessagesView.vue'
import AddGuestView from '../pages/AddGuestView.vue'
import UnauthorizedView from '../pages/UnauthorizedView.vue'
import store from "remote_app/store"
import NotFoundView from '../pages/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            component: LoginView,
        },
        {
            path: '/unauthorized',
            component: UnauthorizedView,
        },
        {
            path: '/',
            component: MessagesView,
            meta: {
                needsAuth: true
            }
        },
        {
            path: '/add-message',
            component: AddMessageView,
            meta: {
                needsAuth: true,
                role: 'user'
            }
        },
        {
            path: '/add-guest',
            component: AddGuestView,
            meta: {
                needsAuth: true,
                role: 'admin'
            }
        },
        {
            path: '/:pathMatch(.*)*', // Route 404 harus paling bawah
            component: NotFoundView
        }
    ],
})

router.beforeEach((to, from, next) => {
    if (to.meta.needsAuth) {
        const token = store.state.accessToken;
        if (token) {
            const userRole = store.state.user.role;
            if (to.meta.role && to.meta.role !== userRole) {
                return next('/unauthorized');
            }
            return next();
        } else {
            return next('/login');
        }
    }
    next();
})

export default router