import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import './assets/css/base.css'

// 使用vue-router
Vue.use(VueRouter)

// 引入组件
import HomeBar from './components/HomeBar.vue'
import AboutBar from './components/AboutBar.vue'
import AccountBar from './components/AccountBar.vue'

// 创建一个路由实例
const routes = [
  { path: '/', component: HomeBar },
  { path: '/about', component: AboutBar },
  { path: '/account', component: AccountBar }
]

// 使用相关组件

const router = new VueRouter({
  routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
}).$mount('#app')
