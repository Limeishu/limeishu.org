<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
import { Navbar, mainFooter } from './components/layout'
export default {
  components: {
    Navbar,
    mainFooter
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
