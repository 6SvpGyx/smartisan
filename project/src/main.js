// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index.js'
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
import MintUI from 'mint-ui'
import './assets/css/reset.css'
import 'mint-ui/lib/style.css'

import apis from './serve/api'
Vue.use(apis)
Vue.config.productionTip = false

import cookie from './cookie/cookie'
Vue.use(cookie)

Vue.use(MintUI)
Vue.prototype.$http = axios

Vue.use(Lazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
