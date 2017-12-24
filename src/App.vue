<template>
  <div id="app">
    <header id="header">
      <div class="image" :style="{ 'background-image': `url(${bannerBG[bannerAt - 1]})` }"></div>
      <div id="logo">
        <img src="./assets/images/icons/logo.svg" alt="">
      </div>
      <Navbar></Navbar>
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
        bannerAt: 1
      }
    },
    components: {
      Navbar,
      mainFooter
    },
    mounted () {
      this.changeBanner()
    },
    methods: {
      changeBanner () {
        setInterval(() => {
          this.bannerAt = this.bannerAt++ % 4
          this.bannerAt++
        }, 10000)
      }
    }
  }
</script>∏

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
