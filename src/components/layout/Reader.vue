<template>
  <div class="spotlight inner">
    <div class="reader paragraph">
      <h1>{{ news.title }}</h1>
      <div v-html="news.paragraph"></div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        news: {}
      }
    },
    mounted () {
      this.getNews()
    },
    methods: {
      ...mapActions(['getNewsByID']),
      async getNews () {
        try {
          const res = await this.getNewsByID(this.$route.params.id)
          if (res.data) {
            this.news = res.data
            document.title = `${this.news.title} - 李梅樹紀念館`
          } else {
            this.$router.push(`/error/${res.code}`)
          }
        } catch (err) {
          console.log(new Error(err))
        }
      }
    }
  }
</script>

<style scoped>

</style>