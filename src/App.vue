<template>
  <div id="app">
    <header id="header">
      <div v-if="!isChild" class="image" v-for="(img, i) in bannerBG" v-show="i === bannerAt % 4" :style="{ 'background-image': `url(${img})` }" :key="i">
        <div class="next" v-scroll-to="'#home, 0'"><img src="./assets/images/down-arrow.svg" alt=""></div>
      </div>
      <div v-if="!isChild" id="logo">
        <img src="./assets/images/icons/banner.svg" alt="">
        <img src="./assets/images/icons/logo-min.svg" alt="李梅樹紀念館 Logo">
        <h1 class="ming">{{ slogen[language] }}</h1>
      </div>
      <Navbar :class="{ 'toggle': device.isMobile ? navbar.opened : toggle, 'is-child': isChild }"></Navbar>
    </header>
    <router-view></router-view>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as BG from './assets/images/BG'
  import {
    Navbar,
    mainFooter
  } from './components/layout'
  export default {
    data () {
      return {
        bannerBG: [BG.BG1, BG.BG2, BG.BG3, BG.BG4],
        bannerAt: 0,
        toggle: false,
        isChild: false,
        slogen: {
          'zh-TW': '用藝術，說土地的故事',
          'en-US': 'Telling the stories of land through art',
          'ja': '芸術からこの地の物語をつむぐ'
        },
        height: 0
      }
    },
    components: {
      Navbar,
      mainFooter
    },
    computed: {
      ...mapGetters(['language', 'navbar', 'device'])
    },
    mounted () {
      this.childDetect()
      this.changeBanner()
      window.addEventListener('scroll', this.scroll)
      window.onresize = () => {
        this.rwdDetect()
      }
      this.rwdDetect()
    },
    methods: {
      ...mapActions(['toggleDevice', 'toggleNavbar']),
      changeBanner () {
        setInterval(() => {
          this.bannerAt++
        }, 5000)
      },
      rwdDetect () {
        this.toggleDevice(document.querySelector('#app').offsetWidth <= 768 ? 'mobile' : null)
      },
      scroll () {
        let scrolled = document.querySelector('#app').getBoundingClientRect().y
        if (scrolled < this.height) {
          this.toggle = true
        } else {
          this.toggle = false
        }
      },
      childDetect () {
        if (this.$route.name !== 'Home') {
          this.isChild = true
          this.height = -64
        } else {
          this.height = -(document.querySelector('#header').clientHeight - 64)
          this.isChild = false
        }
      }
    },
    watch: {
      $route (route) {
        this.childDetect()
        this.toggleNavbar({ opened: false })
        window.scrollTo(0, 0)
        document.title = `${route.meta.label ? route.meta.label[this.language] + ' - ' : ''}李梅樹紀念館`
      },
      language () {
        this.$ua.changeSessionLanguage(this.language)
      }
    }
  }
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
@font-face {
  font-family: 'FontAwesome';
  src: url('./assets/fonts/fontawesome-webfont.eot');
  src: url('./assets/fonts/fontawesome-webfont.eot') format('embedded-opentype'), url('./assets/fonts/fontawesome-webfont.woff2') format('woff2'), url('./assets/fonts/fontawesome-webfont.woff') format('woff'), url('./assets/fonts/fontawesome-webfont.ttf') format('truetype'), url('./assets/fonts/fontawesome-webfont.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}
</style>
