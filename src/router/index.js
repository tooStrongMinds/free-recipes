import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Explore from '../views/Explore.vue'
import Contact from '../views/Contact.vue'

import RecipeDetails from '../components/Recipes/RecipeDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: Contact
  },
  {
    path: '/recipe/:id',
    name: 'RecipeDetails',
    component: RecipeDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
