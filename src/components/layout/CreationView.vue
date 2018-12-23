<template>
  <div class="spotlight inner">
    <div class="paragraph independence-title" v-if="creation.meta">
      <h1>{{ creation.name }}</h1>
      <p>
        <img :src="`https://image.limeishu.org.tw/images/museum/${creation.image}.jpg`" :alt="`${creation.name}, 李梅樹`" copyright="cc-by-sa Li Mei-Shu">
      </p>
      <ul>
        <li>{{ creation.category }}</li>
        <li>{{ `${creation.meta.type} ${creation.meta['size-cm']} (${creation.meta.size})` }}</li>
        <li>李梅樹, {{ creation.date }}</li>
      </ul>
      <p v-for="(content, i) in creation.content[language]" :key="i">{{ content }}</p>
      <ul v-if="creation.meta.wikiLink">
        <li v-if="creation.meta.wikiLink.commons"><a :href="creation.meta.wikiLink.commons" target="_blank" class="button">至維基共享資源查看或取用資源</a></li>
        <li v-if="creation.meta.wikiLink.dataID">WikiData ID： <a :href="`https://www.wikidata.org/wiki/${creation.meta.wikiLink.dataID}`" target="_blank">{{ creation.meta.wikiLink.dataID }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        creation: {}
      }
    },
    computed: {
      ...mapGetters(['language'])
    },
    mounted () {
      this.getCreation()
    },
    methods: {
      ...mapActions(['getCreationByID']),
      async getCreation () {
        try {
          const res = await this.getCreationByID(this.$route.params.id)
          if (res.data) {
            this.creation = res.data
            document.title = `${this.creation.name} - 李梅樹紀念館`
            let head = document.querySelectorAll('head>meta')
            head[4].content = head[10].content = res.data.content[this.language]
            head[5].content = document.title
            head[7].content = `https://limeishu.org.tw${document.location.pathname}`
            head[8].content = `https://image.limeishu.org.tw/images/museum/${res.data.image}.jpg`
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
