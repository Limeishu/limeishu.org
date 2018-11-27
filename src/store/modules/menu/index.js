import * as types from '../../mutation-types'
import lazyLoader from './lazyLoader'

const state = {
  items: [
    {
      name: 'Home',
      path: '/',
      meta: {
        label: {
          'zh': '首頁',
          'en': 'Home',
          'ja': 'ホーム',
          'ko': '홈'
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
          'zh': '文化活動',
          'en': 'Culture',
          'ja': '文化活動',
          'ko': '문화 활동'
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
              'zh': '活動消息',
              'en': 'News',
              'ja': 'ニュース',
              'ko': '뉴스'
            }
          },
          components: lazyLoader('components/Culture/News')
        },
        {
          name: 'Post',
          path: '/culture/post',
          meta: {
            label: {
              'zh': '推薦閱讀',
              'en': 'Recommended Reading',
              'ja': 'お勧めの読書',
              'ko': '추천 독서'
            }
          },
          components: lazyLoader('components/Culture/Post')
        },
        {
          name: 'Mei-shu Month',
          path: '/msm',
          meta: {
            label: {
              'zh': '梅樹月',
              'en': 'Mei-Shu Month',
              'ja': '梅樹月',
              'ko': '梅樹月'
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
              'zh': '三峽祖師廟',
              'en': 'Sanxia Zushi Temple',
              'ja': '三峡祖師廟',
              'ko': '삼협 소시 묘'
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
          'zh': '關於我們',
          'en': 'About',
          'ja': '私たちに関しては',
          'ko': '우리 관해서는'
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
              'zh': '關於紀念館',
              'en': 'Gallery',
              'ja': '記念館について',
              'ko': '기념관 대해'
            }
          },
          components: lazyLoader('components/About/Gallery')
        },
        {
          name: 'Cooperation',
          path: '/about/cooperation',
          meta: {
            label: {
              'zh': '與我們合作',
              'en': 'Cooperation',
              'ja': 'ご協力',
              'ko': '협력'
            }
          },
          components: lazyLoader('components/About/Cooperation')
        },
        {
          name: 'Privacy Notice',
          path: '/about/privacy',
          meta: {
            label: {
              'zh': '隱私權政策',
              'en': 'Privacy Notice',
              'ja': 'プライバシー通知',
              'ko': '개인 정보 보호 알림'
            }
          },
          components: lazyLoader('components/About/Privacy')
        },
        {
          name: 'Sponsor',
          path: '/about/sponsor',
          meta: {
            label: {
              'zh': '支持我們',
              'en': 'Sponsor',
              'ja': 'スポンサー',
              'ko': '스폰서'
            }
          },
          components: lazyLoader('components/About/Sponsor')
        }
      ]
    },
    {
      name: 'Li-Mei Shu',
      path: '/intro',
      meta: {
        label: {
          'zh': '認識李梅樹',
          'en': 'Li-Mei Shu',
          'ja': '李梅樹',
          'ko': '李梅 나무'
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
              'zh': '畫家介紹',
              'en': 'Introduction to Artist',
              'ja': '画家の紹介',
              'ko': '화가의 소개'
            }
          },
          components: lazyLoader('components/Intro/Article')
        },
        {
          name: 'Personal Statement of the Artist',
          path: '/intro/statement',
          meta: {
            label: {
              'zh': '畫家自述',
              'en': 'Personal Statement',
              'ja': '画家の言葉',
              'ko': '화가의 말'
            }
          },
          components: lazyLoader('components/Intro/Statement')
        },
        {
          name: 'History',
          path: '/intro/history',
          meta: {
            label: {
              'zh': '年度大記事',
              'en': 'Annual Chronicles',
              'ja': '画家年表',
              'ko': '화가 연표'
            }
          },
          components: lazyLoader('components/Intro/History')
        },
        {
          name: 'Museum',
          path: '/intro/museum',
          meta: {
            label: {
              'zh': '線上美術館',
              'en': 'Online Museum',
              'ja': 'デジタル美術館',
              'ko': '디지털 미술관'
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
          'zh': '開源 × 文史',
          'en': 'Open Source × Culture',
          'ja': 'オープンソース × 文化活動',
          'ko': '오픈 소스 × 문화 활동'
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
