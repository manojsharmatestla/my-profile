import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import Resume from '../views/Resume.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "About Me",
    component: AboutMe,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
