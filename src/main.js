import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import Vuex from 'vuex'
Vue.use(Vuex)

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

var Cookies = require('js-cookie');

// import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify, {
  iconfont: 'mdi' || 'fa' || 'fas' || 'fab',
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(Cookies.get("session") == null & to.path !== '/login' & to.path !== '/register'){
    next({
      path: '/login'
    })
  }else {
    next();
  }
})

new Vue({
  el: "#app",
  vuetify,
  router,
  store,
  components: { App },
  template: "<App/>",
  render: h => h(App)
}).$mount('#app')
