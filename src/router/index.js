import Vue        from 'vue'
import Router     from 'vue-router'
import menuModule from '../store/modules/menu'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      name: 'News',
      path: '/culture/news/:id',
      component: (resolve) => { require(['@/components/layout/Newspaper.vue'], resolve) }
    },
    {
      name: 'Post',
      path: '/culture/post/:id',
      component: (resolve) => { require(['@/components/layout/Reader.vue'], resolve) }
    },
    {
      name: 'Museum',
      path: '/intro/museum/:id',
      component: (resolve) => { require(['@/components/layout/CreationView.vue'], resolve) }
    },
    {
      name: 'Error',
      path: '/error/:status',
      component: (resolve) => { require(['@/components/layout/Error.vue'], resolve) }
    },
    {
      name: 'Post',
      path: '/culture/post/:id/index.html',
      component: (resolve) => { require(['@/components/layout/Reader.vue'], resolve) }
    },
    {
      name: 'News',
      path: '/culture/news/:id/index.html',
      component: (resolve) => { require(['@/components/layout/Newspaper.vue'], resolve) }
    },
    {
      path: '*',
      redirect: '/error/404'
    }
  ],
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
  }
  return routes
}

export default router
