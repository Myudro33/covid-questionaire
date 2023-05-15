import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../pages/Landing.vue')
    },
    {
      path:'/personal',
      name:'personal',
      component: ()=>import('../pages/Personal.vue')
    },
    {
      path:'/covid-questions',
      name:'covid',
      component:()=>import('../pages/CovidQuestions.vue')
    }
  ]
})

export default router
