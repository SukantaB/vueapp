import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import Login from '../views/Login/Login.vue';
import Signup from '../views/Signup/Signup.vue';
import Task from '../views/Task/Task.vue';
import Chat from "../views/Chat/Chat.vue";

const routes = [
  {
    path: '/',
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
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;