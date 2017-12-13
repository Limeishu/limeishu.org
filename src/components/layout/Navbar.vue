<template>
  <div id="nav" class="menu">
    <ul>
      <li v-for="(item, i) in menu">
        <router-link :to="item.path" v-if="item.path">
          <span class="uppercase">{{ item.meta.label[0] || item.name }}</span>
        </router-link>
        <ul v-if="item.children">
          <li v-for="item in item.children">
            <router-link :to="item.path" v-if="item.path">
              <span class="uppercase">{{ item.meta.label[0] || item.name }}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ menu: 'menuitems' })
  }
}
</script>
