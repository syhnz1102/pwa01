// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' //App이라는 파일안의 App이라는 컴포넌트를 가져온다? <- 가 맞는지?
import router from './router' //router라는 폴더 안의 router라는 객체 가져옴

Vue.config.productionTip = false //모듈안에있는 Vue인터페이스 안의 config인터페이스 안의 productionTip = false -> 무슨말인지 모르겠다.

/* eslint-disable no-new */
new Vue({
  el: '#app', //
  router, //라우터사용
  template: '<App/>', //템플릿은 App안에있는 template을 사용
  components: { App }
})
