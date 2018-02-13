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
    <div class="copyright" v-html="copyright[language]"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      selectLang: '',
      langLocalize: {
        'zh-TW': '繁體中文',
        'en-US': 'English',
        'ja': '日本語'
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
          href: 'mailto:limeishu@gmail.com'
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
        'zh-TW': [
          {
            name: '隱私權政策',
            link: '/about/privacy'
          },
          {
            name: 'Cookies',
            link: '/about/privacy#cookie'
          }
        ],
        'en-US': [
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
        ]
      },
      copyright: {
        'zh-TW': `<p>© 1995 - ${new Date().getFullYear()} 李梅樹紀念館</p><p>本著作係採用 <a href="https://raw.githubusercontent.com/Limeishu/limeishu.org/beta/LICENSE" target="_blank">MIT 授權條款</a> 授權.</p><p>我們推薦使用 <a href="https://www.mozilla.org/firefox/" target="_blank">Firefox Quantum</a> 瀏覽以獲得更好的瀏覽體驗。</p>`,
        'en-US': `<p>© 1995 - ${new Date().getFullYear()} Li Mei-shu Memorial Gallery</p><p>This work is licensed under the <a href="https://raw.githubusercontent.com/Limeishu/limeishu.org/beta/LICENSE" target="_blank">MIT License</a>.</p><p>We recommend <a href="https://www.mozilla.org/firefox/" target="_blank">Firefox Quantum</a> for a better browsing experience.</p>`,
        'ja': `<p>© 1995 - ${new Date().getFullYear()} 李梅樹記念館</p><p>この作品は、<a href="https://raw.githubusercontent.com/Limeishu/limeishu.org/beta/LICENSE" target="_blank">MIT ライセンス</a> の下でライセンスされています。</p><p>より良いブラウジングエクスペリエンスのために <a href="https://www.mozilla.org/firefox/" target="_blank">Firefox Quantum</a> をお勧めします。</p>`
      }
    }
  },
  computed: {
    ...mapGetters(['language'])
  },
  created () {
    this.selectLang = this.language
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
