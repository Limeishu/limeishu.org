<template>
  <div id="nav" class="menu">
    <div class="mobile">
      <div class="toggle-btn" :class="{ hidden: navbar.hidden }" @click="toggle({ opened: !navbar.opened })">
        <font-awesome-icon icon="bars" v-show="!navbar.opened" />
        <font-awesome-icon icon="angle-right" v-show="navbar.opened" />
      </div>
      <img src="../../assets/images/icons/logo.svg" alt="">
    </div>
    <ul>
      <li v-for="(item, i) in menu">
        <router-link :to="item.children ? '' : item.path" v-if="item.path">
          <span class="uppercase">{{ item.meta.label[language] || item.name }}</span>
        </router-link>
        <ul v-if="item.children">
          <li v-for="item in item.children">
            <router-link :to="item.path" v-if="item.path">
              <span class="uppercase">{{ item.meta.label[language] || item.name }}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({ menu: 'menuitems' }),
    ...mapGetters(['navbar', 'language'])
  },
  methods: {
    ...mapActions({ toggle: 'toggleNavbar' })
  }
}
</script>
