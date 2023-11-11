import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant'
import 'vant/lib/index.css';
import "normalize.css";
import clipboard from 'clipboard'
Vue.prototype.clipboard = clipboard;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vant);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
