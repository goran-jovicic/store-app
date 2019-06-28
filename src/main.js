import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import AppCustomers from '@/components/AppCustomers'
import AppProducts from '@/components/AppProducts'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/customers', component: AppCustomers },
  { path: '/products', component: AppProducts }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
