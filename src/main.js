import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as VeeValidate from 'vee-validate';
import VueAuth from '@websanova/vue-auth'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueToastr from '@deveodk/vue-toastr'
import VuejsDialog from 'vuejs-dialog';

import router from './router'
import auth from './guard/auth'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@/assets/scss/style.scss'

window._ = require('lodash');
window.moment = require('moment');

Vue.router = router;
Vue.use(VuejsDialog);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios)
Vue.use(VeeValidate, {fieldsBagName: 'formFields'});
Vue.use(VueAuth, auth);

Vue.use(VueToastr, {
  defaultPosition: 'toast-bottom-right',
  defaultType: 'success',
  defaultTimeout: 6000
})

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, (error) => {
  const code = parseInt(error.response && error.response.status)
  if(code == 403) {
    Vue.router.push({path: '/pages/403'})
  } else if(code == 401) {
    Vue.router.push({path: '/login'})
  } else {
    return Promise.reject(error);
  }
});

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router: Vue.router,
  template: '<App/>',
  components: {
    App
  }
})
