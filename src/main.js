import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import AppCustomers from '@/components/AppCustomers'
import AppProducts from '@/components/AppProducts'
import LatestPurchases from '@/components/LatestPurchases'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { 
    path: '/products', 
    component: AppProducts
  },
  { 
    path: '/customers', 
    component: AppCustomers,
    children : [
      {
      path: ':id', 
      component: LatestPurchases
      }
    ]
  },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
