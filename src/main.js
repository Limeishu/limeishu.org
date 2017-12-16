import Vue          from 'vue'
import axios        from 'axios'
import VueAxios     from 'vue-axios'
import { sync }     from 'vuex-router-sync'
import vueScrollTo  from 'vue-scroll-to'
import VueCookie    from 'vue-cookie'

import App          from './App'
import router       from './router'
import store        from './store'

import FontAwesomeIcon                from '@fortawesome/vue-fontawesome'
import FontAwesome                    from '@fortawesome/fontawesome'
import {
  faFacebookF, faTwitter, faGithubAlt, faYoutube, faGithub
}                                     from '@fortawesome/fontawesome-free-brands'
import {
         faAngleLeft,
         faAngleRight,
         faCircle,
         faCircleNotch,
         faHome,
         faCaretDown,
         faHeart,
         faCartPlus,
         faPlus,
         faMinus,
         faCreditCard,
         faTruck,
         faEnvelope,
         faKey,
         faTimes,
         faCheckCircle,
         faExclamationCircle,
         faCheck,
         faGift,
         faShareAlt,
         faFax,
         faPhone
       }            from '@fortawesome/fontawesome-free-solid'

FontAwesome.library.add(faFacebookF, faFax, faPhone, faYoutube, faGithub, faAngleLeft, faGithubAlt, faAngleRight, faCircle, faCircleNotch, faHome, faCaretDown, faHeart, faCartPlus, faPlus, faMinus, faCreditCard, faTruck, faEnvelope, faKey, faTimes, faCheckCircle, faExclamationCircle, faCheck, faGift, faShareAlt, faTwitter)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.router = router
Vue.use(VueAxios, axios)

Vue.use(vueScrollTo)

Vue.use(VueCookie)

// require('./assets/images/favicon.ico')
// Enable devtools
Vue.config.devtools = true

sync(store, router)

// const { state } = store
const app = new Vue({
  router,
  store,
  ...App
}).$mount('#LMS')

export { app, router, store, FontAwesome }
