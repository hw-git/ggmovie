import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
/*  给Vue函数添加一个原型属性$axios 指向Axios
这样做的好处是在vue实例或组件中不用再去重复引用Axios
直接用this.$axios就能执行axios 方法了 */

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
//在vue中提供了Vue.filter('flterName',fn)来定义一个过滤器，过滤器可以在HTML代码中使用，如对动态拿到的数据进行过滤，
Vue.filter("updateWH", function (url, arg) {
  return url.replace(/w\.h/, arg);
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
