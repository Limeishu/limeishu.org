<template>
  <div id="app">
    <header id="header">
      <div v-if="!isChild" class="image" :style="{ 'background-image': `url(${bannerBG[bannerAt % 4]})` }">
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
  import {
    Navbar,
    mainFooter
  } from './components/layout'
  export default {
    data () {
      return {
        bannerBG: ['https://image.limeishu.org.tw/images/BG1.jpg', 'https://image.limeishu.org.tw/images/BG2.jpg', 'https://image.limeishu.org.tw/images/BG3.jpg', 'https://image.limeishu.org.tw/images/BG4.jpg'],
        bannerAt: 0,
        toggle: false,
        isChild: false,
        slogen: {
          'zh': '用藝術，說土地的故事',
          'en': 'Telling the stories of land through art',
          'ja': '芸術からこの地の物語をつむぐ',
          'ko': '예술로 향토를 이야기하다'
        },
        height: 0,
        keyListCode: '',
        masterKeyCodeString: '38384040373937396665'
      }
    },
    created () {
      console.info('%c尼想幹嘛 (ˊ。ω。ˋ)', 'font-size: 100px;')
      console.info('%c李梅樹紀念館資訊組歡迎你的加入！請來信：limeishugallery@gmail.com', 'color: #040487; background-color: #ffffff;')
    },
    components: {
      Navbar,
      mainFooter
    },
    computed: {
      ...mapGetters(['language', 'navbar', 'device', 'title'])
    },
    mounted () {
      this.childDetect()
      this.changeBanner()
      window.addEventListener('scroll', this.scroll)
      document.addEventListener('keydown', this.eggHandler)
    },
    methods: {
      ...mapActions(['toggleNavbar']),
      changeBanner () {
        setInterval(() => {
          this.bannerAt++
        }, 7500)
      },
      scroll () {
        let scrolled = document.querySelector('#app').getBoundingClientRect().y
        this.toggle = scrolled < this.height
      },
      childDetect () {
        this.isChild = this.$route.name !== 'Home'
      },
      getTitle (route) {
        const head = document.querySelectorAll('head>meta')
        head[5].content = document.title = `${route.meta.label ? route.meta.label[this.language] + ' - ' : ''}${this.title}`
        head[7].content = `https://limeishu.org.tw${document.location.pathname}`
      },
      eggHandler (event) {
        this.keyListCode += event.keyCode
        if (this.keyListCode.indexOf(this.masterKeyCodeString) > -1) {
          let script = document.createElement('script')
          let body = document.getElementsByTagName('body')[0]

          script.src = 'https://anohito.tw/thisUnitIsAFlippinPlatelet/flippin_platelet.js'
          body.appendChild(script)
        }
      }
    },
    watch: {
      $route (route) {
        this.childDetect()
        this.toggleNavbar({ opened: false })
        this.getTitle(route)
      },
      language () {
        this.$ua.changeSessionLanguage(this.language)
        this.getTitle(this.$route)
      }
    }
  }
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
