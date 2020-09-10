import Vue from 'vue'
import Router from 'vue-router'
import ToDoApp from '@/pages/ToDoApp'
import ToDoDetail from '@/pages/ToDoDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ToDoApp',
      component: ToDoApp
    },
    {
      path: '/ToDoDetail',
      name: 'ToDoDetail',
      component: ToDoDetail
    }
  ]
})
