import Vue from "vue";
import Router from "vue-router";

import DefaultContainer from "../container/DefaultContainer.vue";
import Dashboard from "../Dashboard.vue";
import Documentation from "../Documentation.vue";

//Pages
import Home from "../views/pages/Home.vue";
import Login from "../views/pages/Login.vue";
import Page404 from "../views/pages/Page404.vue";
import Page403 from "../views/pages/Page403.vue";
import Page500 from "../views/pages/Page500.vue";
import ForgotPassword from "../views/pages/ForgotPassword.vue"
import ResetPassword from "../views/pages/ResetPassword.vue"

//About
import About from "../views/about/About.vue";
import AboutCreate from "../views/about/AboutCreate.vue";

//Contact
import Contact from "../views/pages/Contact.vue";

//Portfolio
import Portfolio from "../views/portfolio/Portfolio.vue";
import PortfolioCreate from "../views/portfolio/PortfolioCreate.vue";
import PortfolioList from "../views/pages/portfolio/Portfolios.vue";

//Resume
import Resume from "../views/resume/Resume.vue";
import ResumeCreate from "../views/resume/ResumeCreate.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: 'home',
      name: 'Default',
      meta: {
        auth: false
      },
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },

        {
          path: 'contact',
          name: 'Contact',
          component: Contact
        },

        {
          path: 'portfolios',
          name: 'PortfolioList',
          component: PortfolioList
        },

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
          path: 'documentation',
          name: 'Documentation',
          component: Documentation
        },

        {
          path: 'about',
          name: 'About',
          redirect: '/',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/',
              name: 'AboutIndex',
              component: About
            },

            {
              path: 'create',
              name: 'AboutCreate',
              component: AboutCreate
            }
          ]
        },

        {
          path: 'portfolio',
          name: 'Portfolio',
          redirect: '/',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/',
              name: 'PortfolioIndex',
              component: Portfolio
            },

            {
              path: 'create',
              name: 'PortfolioCreate',
              component: PortfolioCreate
            }
          ]
        },

        {
          path: 'resume',
          name: 'Resume',
          redirect: '/',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/',
              name: 'ResumeIndex',
              component: Resume
            },

            {
              path: 'create',
              name: 'ResumeCreate',
              component: ResumeCreate
            }
          ]
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
