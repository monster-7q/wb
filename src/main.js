import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vant from 'vant'

import './assets/css/reset.stylus';
import 'amfe-flexible';
import './assets/css/iconfont.css';

Vue.config.productionTip = false

import { NavBar, Tabbar, TabbarItem, Swipe, SwipeItem} from 'vant';

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
