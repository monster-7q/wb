import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 初始化样式
import './assets/css/reset.css'

// 引入移动端适配
import "amfe-flexible"

// vant插件
import { Tabbar, TabbarItem,Icon,Grid, GridItem} from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')