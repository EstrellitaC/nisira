import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import PrimeVue from 'primevue/config';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, Axios)
Vue.use(PrimeVue)


import 'bootstrap/dist/css/bootstrap.css'


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')