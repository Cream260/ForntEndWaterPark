import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Register.vue')
    },
    {
      path: '/BuyTicket',
      name: 'BuyTicket',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Ticket_Buy.vue')
    },
    {
      path: '/Event',
      name: 'event',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EventView.vue')
    },
    {  
      path: '/BuyPromotion',
      name: 'BuyPromotion',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Promotion_Buy.vue')
    },
    {
      path: '/BuyPackage',
      name: 'BuyPackage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Package_Buy.vue')
    },
    {
      path: '/EventDetail',
      name: 'eventDetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EventDetailView.vue')
    },
    {
      path: '/LifeGuard',
      name: 'lifeGuard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LifeGuardView.vue')
      }  ,
    {
      path: '/filldetail',
      name: 'filldetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Fill_Detail.vue')
    },
    {
      path: '/sumdetail/:id',
      name: 'sumdetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Sum_Detail.vue')
    },
    {
      path: '/CreditCard',
      name: 'creditcard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreditCard.vue')
    },
    {
      path: '/TrueWallet',
      name: 'truewallet',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TrueWallet.vue')
    },
    {
      path: '/PromptPay',
      name: 'promptpay',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PromptPay.vue')
    },
    {
      path: '/FillDetailEvent',
      name: 'fillDetailEvent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FillDetailEvent.vue')
    },
    {
      path: '/CheckRequire/:id',
      name: 'checkrequire',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/checkRequire.vue')
    },
    {
      path: '/CheckRequire2',
      name: 'checkrequire2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/checkRequire2.vue')
    },
    {
      path: '/Receipt',
      name: 'receipt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ReceiptView.vue')

    },
    {
      path: '/FirstAid',
      name: 'firstAid',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FirstAidView.vue')
    },
    {
      path: '/Swim',
      name: 'swim',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SwimView.vue')
    },
    {
      path: '/FillDetailEventFirstAid',
      name: 'fillDetailEventFirstAid',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FillDetailEventFirstAid.vue')
    },
    {
      path: '/FillDetailEventSwim',
      name: 'fillDetailEventSwim',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FillDetailEventSwim.vue')
    }
    ,
    {
      path: '/review',
      name: 'review',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/review.vue')
    }
    
  ]
})

export default router
