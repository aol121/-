import Vue from 'vue';
import App from './App.vue';
import router from './router'

/*import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import 'vant/lib/vant-css/icon-local.css';*/

import axios from 'axios'
Vue.prototype.$axios = axios;

//全局封装axios请求
/*import api from './api/axios';
Vue.prototype.$api = api;*/


Vue.config.productionTip = false
//Vue.use(Vant);


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
