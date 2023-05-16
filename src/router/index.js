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
    },
    {
      path:'/vaccination',
      name:'vaccination',
      component:()=>import('../pages/Vaccination.vue')
    },
    {
      path:'/advices',
      name:'advices',
      component:()=>import('../pages/Advices.vue')
    },
    {
      path:'/thanks',
      name:'thanks',
      component:()=>import('../pages/Thanks.vue')
    },
    {
      path:'/:pathMatch(.*)*',
      name:'notFound',
      component:()=>import('../pages/NotFound.vue')

    }
  ]
})

export default router
