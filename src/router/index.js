import { createRouter, createWebHistory } from "vue-router";


import MainComp from "../views/HomeView.vue";
import AboutComp from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import BooksView from "../views/BooksView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",        
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",    
    name: "About",
    component: AboutComp,
  },
  {
    path: "/contact",
    name: "/Contact",
    component: ContactView,

  },
  {
    path: "/books",
    name: "/Books",
    component: BooksView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
