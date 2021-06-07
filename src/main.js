import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import moment from 'moment';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import firebase from 'firebase'
import 'firebase/auth'
import firebaseConfig from './utils/config.js'
firebase.initializeApp(firebaseConfig);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUsers, faBus, faHeartbeat, faUniversity, faCoins, faLightbulb, faQrcode, faBreadSlice, faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add([faUserSecret,faUsers, faBus, faHeartbeat, faUniversity, faCoins, faLightbulb, faQrcode, faBreadSlice, faTimes, faExclamationCircle])
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(moment);
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
