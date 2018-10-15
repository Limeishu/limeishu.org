<template>
  <div id="footer">
    <div class="icon">
      <div class="logo">
        <img src="../../assets/images/icons/logo-min.svg" alt="">
      </div>
      <ul>
        <li v-for="(link, i) in socialLink" :key="i"><a target="_blank" :href="link.href"><font-awesome-icon :icon="link.icon" /></a></li>
      </ul>
      <div class="policy">
        <router-link v-for="item in policy[language]" :to="item.link" :key="item.name">{{ item.name }}</router-link>
        <p>
          <font-awesome-icon icon="globe" />
          <select name="" id="" v-model="selectLang">
            <option :value="i" v-for="(lang, i) in langLocalize" :key="i">{{ lang }}</option>
          </select>
        </p>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; 1995 - {{`${new Date().getFullYear()} ${title}`}}</p>
      <p v-html="copyright[language]"></p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      selectLang: '',
      langLocalize: {
        'zh': '繁體中文',
        'en': 'English',
        'ja': '日本語',
        'ko': '한국어'
      },
      socialLink: [
        {
          icon: ['fab', 'facebook-f'],
          name: 'Facebook 粉絲專頁',
          href: 'https://fb.com/limeishu.org'
        },
        {
          icon: ['fas', 'phone'],
          name: '電話',
          href: 'tel:0226732333'
        },
        {
          icon: ['fas', 'fax'],
          name: '傳真',
          href: 'tel:0226736077'
        },
        {
          icon: ['fas', 'envelope'],
          name: '電子郵件',
          href: 'mailto:limeishugallery@gmail.com'
        },
        {
          icon: ['fab', 'github'],
          name: 'GitHub',
          href: 'https://github.com/Limeishu'
        },
        {
          icon: ['fab', 'youtube'],
          name: 'YouTube',
          href: 'https://www.youtube.com/channel/UCJNhAJ83HO8rTeJHdoMtZJQ'
        }
      ],
      policy: {
        'zh': [
          {
            name: '隱私權政策',
            link: '/about/privacy'
          },
          {
            name: 'Cookies',
            link: '/about/privacy#cookie'
          }
        ],
        'en': [
          {
            name: 'Privacy Notice',
            link: '/about/privacy'
          },
          {
            name: 'Cookies',
            link: '/about/privacy#cookie'
          }
        ],
        'ja': [
          {
            name: 'プライバシー通知',
            link: '/about/privacy'
          },
          {
            name: 'Cookies',
            link: '/about/privacy#cookie'
          }
        ],
        'ko': [
          {
            name: '개인 정보 보호 알림',
            link: '/about/privacy'
          },
          {
            name: 'Cookies',
            link: '/about/privacy#cookie'
          }
        ]
      },
      copyright: {
        'zh': `本著作係採用 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0 授權條款</a> 授權.</p><p>我們推薦使用 <a href="https://www.mozilla.org/firefox/" target="_blank">Firefox Quantum</a> 瀏覽以獲得更好的瀏覽體驗。`,
        'en': `This work is licensed under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0 License</a>.</p><p>We recommend <a href="https://www.mozilla.org/firefox/" target="_blank">Firefox Quantum</a> for a better browsing experience.`,
        'ja': `この作品は、<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0 ライセンス</a> の下でライセンスされています。</p><p>より良いブラウジングエクスペリエンスのために <a href="https://www.mozilla.org/firefox/" target="_blank">Firefox Quantum</a> をお勧めします。`,
        'ko': `이 작품은 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0 라이센스</a> 하에서 허가 된입니다.</p><p>더 좋은 브라우징 경험을 위해 <a href="https://www.mozilla.org/firefox/" target="_blank">Firefox Quantum</a> 권장합니다.`
      }
    }
  },
  computed: {
    ...mapGetters(['language', 'title'])
  },
  created () {
    if (Object.keys(this.langLocalize).find(e => (e === this.$route.query.lang))) {
      this.selectLang = this.$route.query.lang
    } else {
      this.selectLang = this.language
    }
  },
  methods: {
    ...mapActions(['changeLang'])
  },
  watch: {
    selectLang: function (lang) {
      this.changeLang(lang)
    }
  }
}
</script>
