<template>
  <div id="nav" class="menu">
    <div class="mobile">
      <div class="toggle-btn" @click="toggle({ opened: !navbar.opened })">
        <font-awesome-icon icon="bars" v-show="!navbar.opened" />
        <font-awesome-icon icon="angle-right" v-show="navbar.opened" />
      </div>
      <img src="../../assets/images/icons/logo.svg" alt="">
    </div>
    <ul>
      <li v-for="(item, i) in menu" :key="i" :class="{'active': selected[0] === i}" @click="selected= [i, null]">
        <router-link :to="item.children ? '' : item.path" v-if="item.path">
          <span class="uppercase">{{ item.meta.label[language] || item.name }}</span><span class="icon"><font-awesome-icon v-if="device.isMobile && item.children" icon="angle-right" /></span>
        </router-link>
        <ul v-if="item.children">
          <li v-for="(item, j) in item.children" :key="j" :class="{'active': selected[0] === i && selected[1] === j}">
            <router-link :to="item.path" v-if="item.path">
              <span class="uppercase">{{ item.meta.label[language] || item.name }}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <div class="page-nav" v-for="(item, i) in menu" :key="i" v-if="selected[0] === i && item.children && !device.isMobile && $route.name !== 'Error'">
      <div class="parent"><span>{{ item.meta.label[language] || item.name }}</span><font-awesome-icon icon="angle-right" /></div>
      <li v-for="(item, j) in item.children" :key="j" :class="{ 'active': selected[1] === j }">
        <router-link :to="item.path">
          <span>{{ item.meta.label[language] || item.name }}</span>
        </router-link>
      </li>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      selected: [...Array(2)]
    }
  },
  computed: {
    ...mapGetters({ menu: 'menuitems' }),
    ...mapGetters(['navbar', 'language', 'device'])
  },
  mounted () {
    this.pageDetect()
  },
  methods: {
    ...mapActions({ toggle: 'toggleNavbar' }),
    pageDetect () {
      this.menu.forEach((item, i) => {
        if (item.children) {
          item.children.forEach((element, j) => {
            if (this.$route.name === this.menu[i].children[j].name) {
              this.selected = [i, j]
            }
          })
        }
      })
    }
  },
  watch: {
    $route (route) {
      if (route.path === '/') this.selected = [...Array(2)]
      this.pageDetect()
    }
  }
}
</script>
