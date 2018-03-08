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
      components: lazyLoader('views/Home')
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
      components: lazyLoader('views/Culture'),
      children: [
        {
          name: 'News',
          path: '/culture/news',
          meta: {
            label: {
              'zh-TW': '活動消息',
              'en-US': 'News',
              'ja': 'ニュース'
            }
          },
          components: lazyLoader('components/Culture/News')
        },
        {
          name: 'Report',
          path: '/culture/report',
          meta: {
            label: {
              'zh-TW': '相關報導',
              'en-US': 'Reports',
              'ja': 'ニュース'
            }
          },
          components: lazyLoader('components/Culture/Report')
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
          name: 'Sanxia Zushi Temple',
          path: '/culture/temple',
          meta: {
            label: {
              'zh-TW': '三峽祖師廟',
              'en-US': 'Sanxia Zushi Temple',
              'ja': '三峡祖師廟'
            }
          },
          components: lazyLoader('components/Culture/Temple')
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
      components: lazyLoader('views/About'),
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
          },
          components: lazyLoader('components/About/Gallery')
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
          },
          components: lazyLoader('components/About/Cooperation')
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
          },
          components: lazyLoader('components/About/Privacy')
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
      components: lazyLoader('views/Intro'),
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
          },
          components: lazyLoader('components/Intro/Article')
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
          },
          components: lazyLoader('components/Intro/Statement')
        },
        {
          name: 'History',
          path: '/intro/history',
          meta: {
            label: {
              'zh-TW': '年度大記事',
              'en-US': 'Annual Chronicles',
              'ja': '画家年表'
            }
          },
          components: lazyLoader('components/Intro/History')
        },
        {
          name: 'Museum',
          path: '/intro/museum',
          meta: {
            label: {
              'zh-TW': '線上美術館',
              'en-US': 'Online Museum',
              'ja': 'デジタル美術館'
            }
          },
          components: lazyLoader('components/Intro/Museum')
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
