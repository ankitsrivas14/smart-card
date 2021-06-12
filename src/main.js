// Basic Vue Installation
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Moment for date and time
import moment from 'moment';

// Sweet Alerts for Alert Popups
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//Vue Bootstrap Installation
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Firebase Installation for Authentication
import firebase from 'firebase'
import 'firebase/auth'
import firebaseConfig from './utils/config.js'
firebase.initializeApp(firebaseConfig);

//Font Awesome for Fonts
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUsers, faBus, faHeartbeat, faUniversity, faCoins, faLightbulb, faQrcode, faBreadSlice, faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add([faUserSecret,faUsers, faBus, faHeartbeat, faUniversity, faCoins, faLightbulb, faQrcode, faBreadSlice, faTimes, faExclamationCircle])
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(moment);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
