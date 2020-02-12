import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

Vue.use(KeenUI);

new Vue({
  render: h => h(App),
}).$mount('#app');
