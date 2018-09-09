<template>
  <div class="paragraph">
    <h1>{{ $route.meta.label[language] }}</h1>
    <div class="card-container">
      <div class="card" v-for="(creation, i) in creation.data" :key="i">
        <div class="image" :style="{ 'background-image': `url(https://image.limeishu.org.tw/images/museum/${creation.image}.jpg)` }">
        </div>
        <div class="content">
          <h1>{{ creation.name }}</h1>
          <span class="date">{{ `${creation.date}, ${creation.meta.type} ${creation.meta['size-cm']}` }}</span>
          <p>{{ `${creation.content[language][0].substring(0, 50)}...` }}</p>
          <router-link :to="`/intro/museum/${creation._id}`" class="button">
            <span>詳細內容</span>
            <font-awesome-icon icon="angle-right" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['language', 'creation'])
    },
    mounted () {
      if (!this.creation.data) {
        this.getAllCreation()
      }
    },
    methods: {
      ...mapActions(['getAllCreation'])
    }
  }
</script>