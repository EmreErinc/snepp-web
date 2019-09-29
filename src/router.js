import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import LoginPage from './views/LoginPage.vue'
import RegisterPage from './views/RegisterPage.vue'
import MySneppListPage from './views/MySneppListPage.vue'
import AddSneppPage from './views/AddSneppPage.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: MySneppListPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/list',
      name: 'list',
      component: MySneppListPage
    },
    {
      path: '/add',
      name: 'add',
      component: AddSneppPage
    }
  ]
})