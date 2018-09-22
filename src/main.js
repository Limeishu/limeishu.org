import Vue          from 'vue'
import axios        from 'axios'
import VueAxios     from 'vue-axios'
import { sync }     from 'vuex-router-sync'
import vueScrollTo  from 'vue-scroll-to'
import VueCookie    from 'vue-cookie'
import VueCarousel  from 'vue-carousel'
import VueAnalytics from 'vue-ua'

// Fontawesome
import { FontAwesomeIcon }  from '@fortawesome/vue-fontawesome'
import { library }          from '@fortawesome/fontawesome-svg-core'
import { fab }              from '@fortawesome/free-brands-svg-icons'
import { fas }              from '@fortawesome/free-solid-svg-icons'

import App          from './App'
import router       from './router'
import store        from './store'
import * as pkgInfo from '../package.json'

Vue.router = router
Vue.use(VueAxios, axios)

Vue.use(vueScrollTo)
Vue.use(VueCarousel)
Vue.use(VueCookie)

Vue.use(VueAnalytics, {
  appName: 'limeishu.org',
  appVersion: pkgInfo.version,
  trackingId: 'UA-97328395-1',
  vueRouter: router
})

require('./assets/images/favicon.ico')

library.add(fab)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Enable devtools
Vue.config.devtools = true

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app')

export { app }
