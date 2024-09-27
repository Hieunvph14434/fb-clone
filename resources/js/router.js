import { createRouter, createWebHistory } from "vue-router";
import { watch } from 'vue'

const routes = [
  {
    path: "/",
    // component: () => import("layouts/AppLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        meta: { titlePage: "Home page" },
        component: () => import("pages/IncrementCounter.vue"),
      },
    ],
  },
  {
    path: "/login",
    children: [
      {
        path: "",
        name: "login",
        meta: { titlePage: "Login page" },
        component: () => import("pages/Login.vue"),
      },
    ],
  },
  {
    path: "/register",
    children: [
      {
        path: "",
        name: "register",
        meta: { titlePage: "Register page" },
        component: () => import("pages/Register.vue"),
      },
    ],
  },
  {
    path: "/home2",
    children: [
      {
        path: "",
        name: "home2",
        meta: { titlePage: "Home page" },
        component: () => import("pages/Home.vue"),
      },
    ],
  },
  // {
  //   path: "/404",
  //   children: [
  //     {
  //       path: "",
  //       name: "pageNotFound",
  //       meta: { titlePage: "404" },
  //       component: () => import("pages/PageNotFound.vue"),
  //     },
  //   ],
  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   redirect: to => {
  //     return "/404";
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const authStore = authPinia();
//   if (!authStore.authenticated && !authStore.fromLogout) {
//     // Fetch user when page reload
//     try {
//       let fetchUserResponse = await AuthService.fetchUser();
//       authStore.setAuth(
//         fetchUserResponse.axiosResponse.data.data.user,
//         fetchUserResponse.axiosResponse.data.data.dental_name === undefined
//           ? null
//           : fetchUserResponse.axiosResponse.data.data.dental_name,
//         fetchUserResponse.axiosResponse.data.data.labo_name === undefined
//           ? null
//           : fetchUserResponse.axiosResponse.data.data.labo_name
//       );
//     } catch (error) {
//       debugLogApiError(error, [ 401 ]);
//     }
//   }

//   // User access page login when not author
//   if (!authStore.authenticated && to.name === 'login') {
//     next();
//     return;
//   }

//   // User access page that is not login when not author
//   if (!authStore.authenticated && to.name !== 'login') {
//     next({ name: 'login' });
//     return;
//   }

//   // User access page login when author
//   if (authStore.authenticated && to.name === 'login') {
//     next({ name: 'progressManagement' });
//     return;
//   }

//   // User access page user management (userIndex/userCreate) when don't have permission
//   if ([ 'userIndex', 'userCreate', ].includes(to.name) && authStore.adminRole !== true) {
//     next({ name: 'pageNotFound' });
//     return;
//   }

//   if ([ 'dentalClinicCreate' ].includes(to.name) && authStore.user.category != COMMON_CATEGORY.MASTER ) {
//     next({ name: 'pageNotFound' });
//     return;
//   }

//   document.body.style.removeProperty('overflow-y')
//   document.body.style.overflowX = 'hidden'
//   if ([ 'userIndex', 'userCreate', 'userEdit', 'dentalClinicIndex' ].includes(to.name)) {
//     document.body.style.overflowY = 'auto'
//   }
//   if ([ 'consentStatusInquiry', 'patientAnalysisDataInquiry' ].includes(to.name)) {
//     document.body.style.overflowY = 'hidden'
//   }

//   document.title = to.meta.titlePage;
//   next();
//   return;
// });

// router.afterEach((to, from) => {
//   if (to.name === from.name) {
//     return;
//   }
//   document.body.scrollTop = document.documentElement.scrollTop = 0;
//   updateTitlePage(to)
// });


export default router;
