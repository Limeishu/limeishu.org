<template>
  <div id="app">
    <header id="header">
      <div v-if="!isChild" class="image" :style="{ 'background-image': `url(${bannerBG[bannerAt - 1]})` }"></div>
      <div v-if="!isChild" id="logo">
        <img src="./assets/images/icons/logo.svg" alt="李梅樹紀念館 Logo">
        <h1 class="ming">{{ slogen[language] }}</h1>
      </div>
      <Navbar :class="{ 'toggle': toggle }"></Navbar>
    </header>
    <router-view></router-view>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
  import * as BG from './assets/images/BG'
  import {
    Navbar,
    mainFooter
  } from './components/layout'
  export default {
    data () {
      return {
        bannerBG: [BG.BG1, BG.BG2, BG.BG3, BG.BG4],
        bannerAt: 1,
        toggle: false,
        isChild: false,
        slogen: {
          zh_TW: '用藝術，說土地的故事',
          en_US: 'Telling the stories of land through art'
        },
        language: window.navigator.language.replace('-', '_')
      }
    },
    components: {
      Navbar,
      mainFooter
    },
    mounted () {
      this.changeBanner()
      window.addEventListener('scroll', this.scroll)
    },
    methods: {
      changeBanner () {
        setInterval(() => {
          this.bannerAt = this.bannerAt++ % 4
          this.bannerAt++
        }, 10000)
      },
      scroll () {
        let scrolled = document.querySelector('#app').getBoundingClientRect().y
        if (scrolled < -(document.querySelector('#header').clientHeight - 64)) {
          this.toggle = true
        } else {
          this.toggle = false
        }
      }
    },
    watch: {
      $route (route) {
        route.name !== 'Home' ? this.isChild = true : this.isChild = false
        window.scrollTo(0, 0)
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
