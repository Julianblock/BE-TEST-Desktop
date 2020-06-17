import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/login/Home.vue'
import Phones from '../views/Tables/Phone.vue';
import Email from '../views/Tables/Email.vue';
import Calendar from '../views/Tables/Calendar.vue';
import Comms from '../views/Tables/Comms.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/phones',
    name: 'Phones',
    component: Phones
  },
  {
    path: '/email',
    name: 'Email',
    component: Email
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/communications',
    name: 'Communications',
    component: Comms
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
