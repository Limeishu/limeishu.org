import Vue          from 'vue'
import axios        from 'axios'
import VueAxios     from 'vue-axios'
import { sync }     from 'vuex-router-sync'
import vueScrollTo  from 'vue-scroll-to'
import VueCookie    from 'vue-cookie'
import VueCarousel  from 'vue-carousel'
import VueAnalytics from 'vue-ua'

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
         faPhone,
         faTrain,
         faBus,
         faSubway,
         faCar,
         faBars,
         faGlobe
       }            from '@fortawesome/fontawesome-free-solid'

FontAwesome.library.add(faFacebookF, faFax, faPhone, faTrain, faGlobe, faBus, faSubway, faCar, faYoutube, faGithub, faBars, faAngleLeft, faGithubAlt, faAngleRight, faCircle, faCircleNotch, faHome, faCaretDown, faHeart, faCartPlus, faPlus, faMinus, faCreditCard, faTruck, faEnvelope, faKey, faTimes, faCheckCircle, faExclamationCircle, faCheck, faGift, faShareAlt, faTwitter)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.router = router
Vue.use(VueAxios, axios)

Vue.use(vueScrollTo)
Vue.use(VueCarousel)
Vue.use(VueCookie)

Vue.use(VueAnalytics, {
  // [Required] The name of your app as specified in Google Analytics.
  appName: 'Beta',
  // [Required] The version of your app.
  appVersion: 'v1.0.0',
  // [Required] Your Google Analytics tracking ID.
  trackingId: 'UA-97328395-2',
  // If you're using vue-router, pass the router instance here.
  vueRouter: router
})

require('./assets/images/favicon.ico')

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
