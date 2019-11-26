import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'
import 'lib-flexible'
import './assets/css/index.css'
import './assets/css/normalize.css'

import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import Mint from 'mint-ui'
import './filter'
Vue.config.productionTip = false
fastclick.attach(document.body)// body内所有click 300毫秒延迟都将去掉
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
