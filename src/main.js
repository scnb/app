import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由：底下的写法是kv一致省略v，注意router小写的
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route和$router
  router
}).$mount('#app')
