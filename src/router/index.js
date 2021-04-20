import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import Login from '../views/Login/Login.vue';
import Signup from '../views/Signup/Signup.vue';
import Task from '../views/Task/Task.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },  
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/task/:id',
    name: 'task',
    component: Task,
  },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
//   },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;