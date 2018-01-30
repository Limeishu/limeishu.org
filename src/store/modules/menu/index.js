import * as types from '../../mutation-types'
import lazyLoader from './lazyLoader'

const state = {
  items: [
    {
      name: 'Home',
      path: '/',
      meta: {
        label: {
          'zh-TW': '首頁',
          'en-US': 'Home',
          'ja': 'ホーム'
        },
        link: 'Home.vue'
      },
      components: lazyLoader('Home')
    },
    {
      name: 'Culture',
      path: '/culture',
      meta: {
        label: {
          'zh-TW': '文化活動',
          'en-US': 'Culture',
          'ja': '文化活動'
        },
        link: 'Culture.vue'
      },
      components: lazyLoader('Culture'),
      children: [
        {
          name: 'News',
          path: '/culture/news',
          meta: {
            label: {
              'zh-TW': '最新消息',
              'en-US': 'What\'s News',
              'ja': '最新ニュース'
            }
          }
        },
        {
          name: 'Reports',
          path: '/culture/reports',
          meta: {
            label: {
              'zh-TW': '相關報導',
              'en-US': 'Reports',
              'ja': 'ニュース'
            }
          }
        },
        {
          name: 'Mei-shu Month',
          path: '/msm',
          meta: {
            label: {
              'zh-TW': '梅樹月',
              'en-US': 'Mei-Shu Month',
              'ja': '梅樹月'
            }
          },
          beforeEnter: (to, from, next) => {
            window.open('https://msm.limeishu.org.tw', '_blank')
          }
        },
        {
          name: 'Sanxia Master Temple',
          path: '/culture/temple',
          meta: {
            label: {
              'zh-TW': '三峽祖師廟',
              'en-US': 'Sanxia Zushi Temple',
              'ja': '三峡祖師廟'
            }
          }
        }
      ]
    },
    {
      name: 'About',
      path: '/about',
      meta: {
        label: {
          'zh-TW': '關於我們',
          'en-US': 'About',
          'ja': '私たちに関しては'
        },
        link: 'About.vue'
      },
      components: lazyLoader('About'),
      children: [
        {
          name: 'About Gallery',
          path: '/about/gallery',
          meta: {
            label: {
              'zh-TW': '關於紀念館',
              'en-US': 'Gallery',
              'ja': '記念館について'
            }
          }
        },
        {
          name: 'Cooperation',
          path: '/about/cooperation',
          meta: {
            label: {
              'zh-TW': '與我們合作',
              'en-US': 'Cooperation',
              'ja': 'ご協力'
            }
          }
        },
        {
          name: 'Privacy Notice',
          path: '/about/privacy',
          meta: {
            label: {
              'zh-TW': '隱私權政策',
              'en-US': 'Privacy Notice',
              'ja': 'プライバシー通知'
            }
          }
        },
        {
          name: 'Cookie',
          path: '/about/privacy#cookie',
          meta: {
            label: {}
          }
        }
      ]
    },
    {
      name: 'Li-Mei Shu',
      path: '/intro',
      meta: {
        label: {
          'zh-TW': '認識李梅樹',
          'en-US': 'Li-Mei Shu',
          'ja': '李梅樹'
        },
        link: 'Intro.vue'
      },
      components: lazyLoader('About'),
      children: [
        {
          name: 'Introduction Article',
          path: '/intro/article',
          meta: {
            label: {
              'zh-TW': '畫家介紹',
              'en-US': 'Introduction to Artist',
              'ja': '画家の紹介'
            }
          }
        },
        {
          name: 'Personal Statement of the Artist',
          path: '/intro/statement',
          meta: {
            label: {
              'zh-TW': '畫家自述',
              'en-US': 'Personal Statement',
              'ja': '画家の言葉'
            }
          }
        },
        {
          name: 'History',
          path: '/about/history',
          meta: {
            label: {
              'zh-TW': '年度大記事',
              'en-US': 'Annual Chronicles',
              'ja': '画家年表'
            }
          }
        }
      ]
    },
    {
      name: 'Open Source & Culture',
      path: '/open',
      meta: {
        label: {
          'zh-TW': '開源 × 文史',
          'en-US': 'Open Source × Culture',
          'ja': 'オープンソース × 文化活動'
        }
      },
      beforeEnter: (to, from, next) => {
        window.open('https://open.limeishu.org.tw', '_blank')
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
