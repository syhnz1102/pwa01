import Vue from 'vue'
import Router from 'vue-router'
import to_do_app from '@/pages/to_do_app'
// import Hello2 from '@/components/Hello2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'to_do_app',
      component: to_do_app
    }
  ]
})
