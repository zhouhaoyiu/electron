import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import PromptGenerator from '../views/PromptGenerator.vue';

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/prompt-generator',
      name: 'PromptGenerator',
      component: PromptGenerator
    },
    {
      path:'/GapAutoRecognition',
      name:'GapAutoRecognition',
      component: () => import('../views/GapAutoRecognition.vue')
    }
  ]
});

export default router;