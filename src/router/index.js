import Vue from "vue";
import Router from "vue-router";

import DefaultContainer from "../container/DefaultContainer.vue";
import Login from "../views/pages/Login.vue";
import Page404 from "../views/pages/Page404.vue";
import Page403 from "../views/pages/Page403.vue";
import Page500 from "../views/pages/Page500.vue";
import ForgotPassword from "../views/pages/ForgotPassword.vue"
import ResetPassword from "../views/pages/ResetPassword.vue"


import Dashboard from "../Dashboard.vue";
import Finance from "../views/finance/Finance.vue"
import Reports from "../views/reports/Reports.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: 'login',
      name: 'Default',
      meta: {
        auth: false
      },
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        },

        {
          path: 'forgot-password',
          name: 'ForgotPassword',
          component: ForgotPassword
        },

        {
          path: 'reset-password',
          name: 'ResetPassword',
          component: ResetPassword
        },
      ]
    },

    {
      path: '*',
      redirect: '/dashboard',
      meta: {
        auth: true
      }
    },

    {
      path: '/dashboard',
      redirect: '/',
      name: 'Dashboard',
      meta: {
        auth: true
      },
      component: DefaultContainer,
      children: [
        {
          path: '/',
          name: 'index',
          component: Dashboard
        },

        {
          path: 'finance',
          name: 'Finance',
          component: Finance
        },

        {
          path: 'reports',
          name: 'Reports',
          component: Reports
        },

      ]
    },

    {
      path: '*',
      redirect: '/pages/404',
      name: 'Pages',
      meta: {
        auth: false
      },
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },

        {
          path: '403',
          name: 'Page403',
          component: Page403
        },

        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
      ]
    }
  ]
});
