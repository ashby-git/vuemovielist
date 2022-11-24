import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import AuthView from "../views/AuthView.vue";
import ProfileView from "../views/ProfileView.vue";
import { auth } from "../firebase/firebaseConfig";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "Search",
    component: SearchView,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthView,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
    meta: {
      authRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (auth.currentUser) {
      next();
    } else {
      alert("You must be logged in to see this page");
      next({
        path: "/auth",
      });
    }
  } else {
    next();
  }
});

export default router;
