import * as types from '../../mutation-types'
import lazyLoader from './lazyLoader'

const state = {
  items: [
    {
      name: 'Home',
      path: '/',
      meta: {
        label: ['首頁'],
        link: 'Home.vue'
      },
      components: lazyLoader('Home')
    },
    {
      name: 'Culture',
      path: '/culture',
      meta: {
        label: ['文化活動'],
        link: 'Culture.vue'
      },
      components: lazyLoader('Culture'),
      children: [
        {
          name: 'News',
          path: '/culture/news',
          meta: {
            label: ['最新消息']
          }
        },
        {
          name: 'Reports',
          path: '/culture/reports',
          meta: {
            label: ['相關報導']
          }
        },
        {
          name: 'Mei-shu Month',
          path: '/msm',
          meta: {
            label: ['梅數月']
          }
        },
        {
          name: 'Sanxia Master Temple',
          path: '/culture/temple',
          meta: {
            label: ['三峽祖師廟']
          }
        }
      ]
    },
    {
      name: 'About',
      path: '/about',
      meta: {
        label: ['關於我們'],
        link: 'About.vue'
      },
      components: lazyLoader('About'),
      children: [
        {
          name: 'About Gallery',
          path: '/about/gallery',
          meta: {
            label: ['關於紀念館']
          }
        },
        {
          name: 'Cooperation',
          path: '/about/cooperation',
          meta: {
            label: ['與我們合作']
          }
        }
      ]
    },
    {
      name: 'Li-Mei Shu',
      path: '/intro',
      meta: {
        label: ['李梅樹'],
        link: 'Intro.vue'
      },
      components: lazyLoader('About'),
      children: [
        {
          name: 'Introduction Article',
          path: '/intro/article',
          meta: {
            label: ['畫家介紹']
          }
        },
        {
          name: 'History',
          path: '/about/history',
          meta: {
            label: ['年度大記事']
          }
        }
      ]
    },
    {
      name: 'Open Source & Culture',
      path: '/open',
      meta: {
        label: ['開源 x 文史']
      }
    }
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  mutations
}
