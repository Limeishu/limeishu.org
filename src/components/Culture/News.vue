<template>
  <div class="paragraph">
    <h1>{{ $route.meta.label[language] }}</h1>
    <div class="card-container">
      <div class="card" v-for="(news, i) in news.data" :key="i">
        <div class="image" :style="{ 'background-image': `url(${news.meta.image})` }">
          <h2>{{ news.title }}</h2>
        </div>
        <div class="content">
          <span class="date">{{ new Date(news.date).toLocaleDateString() }}</span>
          <p>{{ `${news.content.substring(0, 50)}...` }}</p>
          <router-link :to="`/culture/news/${news._id}`" class="button" alt="點一下來閱讀全文">
            <span>閱讀全文</span>
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
      ...mapGetters(['news', 'language'])
    },
    mounted () {
      if (!this.news.data) {
        this.getAllNews()
      }
    },
    methods: {
      ...mapActions(['getAllNews'])
    }
  }
</script>