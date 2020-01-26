import bearer from "@websanova/vue-auth/drivers/auth/bearer";
import axios from "@websanova/vue-auth/drivers/http/axios.1.x";
import router from "@websanova/vue-auth/drivers/router/vue-router.2.x";
// Auth base configuration some of this options
// can be override in method calls
const config = {
  auth: bearer,
  http: axios,
  router: router,
  tokenDefaultName: "customerToken",
  tokenStore: ["localStorage"],
  rolesVar: "role",

  registerData: {
    url: `${process.env.VUE_APP_API_GATEWAY_URL}/register`, 
    method: 'POST', 
    redirect: '/profile',
    fetchUser: true
  },

  loginData: {
    url: `${process.env.VUE_APP_API_GATEWAY_URL}/ipartners/login`,
    method: "POST",
    redirect: "/dashboard",
    fetchUser: true
  },

  logoutData: {
    url: `${process.env.VUE_APP_API_GATEWAY_URL}/ipartners/logout`,
    method: "POST",
    redirect: "/",
    makeRequest: true
  },
  fetchData: {
    url: `${process.env.VUE_APP_API_GATEWAY_URL}/ipartners/me`,
    method: "GET",
    enabled: true
  },
  // refreshData: {
  //   url: `${process.env.VUE_APP_API_GATEWAY_URL}/ipartners/refresh`,
  //   method: "GET",
  //   enabled: true,
  //   interval: 30
  // },
  authRedirect: { path: "/login" },
  forbiddenRedirect: { path: "/pages/500" }, 

  parseUserData: data => {
    return data.data || {};
  }
};
export default config;
