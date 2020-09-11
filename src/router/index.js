import Vue from 'vue'
import Router from 'vue-router'
import ToDoApp from '@/pages/ToDoApp'
import ToDoDetail from '@/pages/ToDoDetail'

Vue.use(Router)//VUE어플리케이션에 Router플러그인 추가하는 함수

export default new Router({//라우터객체 생성
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
    //정의되지 않은 경로로 컴포넌트를 이어주려면 밑에처럼 (콤포넌트도 따로 생성해줘야함 아마?)
    // { 
    //   path: "*",
    //   component: NotFound
    // }
  ]
})
