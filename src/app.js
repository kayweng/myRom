// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';
import ColorStyles from './css/colors.css';

// Import App Component
import App from './app.vue';
import { store } from './stores/index'
import PreLoader from './pages/components/loading.vue'
import GlobalMixin from './mixins/globalMixin.js'

const fb = require('./configs/firebaseConfig.js')
const util = require('./scripts/util.js')

// Init F7 Vue Plugin
Framework7.use(Framework7Vue)

Vue.config.productionTip = false

Vue.component('pre-loader',PreLoader)
Vue.use(util)
Vue.use(IconsStyles)
Vue.use(AppStyles)
Vue.use(ColorStyles)
Vue.mixin(GlobalMixin)

// Init App
// handle page reloads
let app
fb.auth.onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            el: '#app',
            template: '<app/>',
            store,
            components:{
              app: App
            }
        })
    }
})