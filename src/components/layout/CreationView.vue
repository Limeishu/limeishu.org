<template>
  <div class="spotlight inner">
    <div class="paragraph" v-if="creation.meta">
      <h1>{{ creation.name }}</h1>
      <img :src="`https://image.limeishu.org.tw/images/museum/${creation.image}.jpg`" :alt="`${creation.name}, 李梅樹`">
      <ul>
        <li>{{ creation.category }}</li>
        <li>{{ `${creation.meta.type} ${creation.meta['size-cm']} (${creation.meta.size})` }}</li>
        <li>李梅樹, {{ creation.date }}</li>
      </ul>
      <p v-for="(content, i) in creation.content[language]" :key="i">{{ content }}</p>
      <p v-if="creation.meta.wikiLink">本畫作同時以 CC BY-SA 4.0 方式授權並分享於維基媒體。<a :href="creation.meta.wikiLink" target="_blank" class="button"><span>點此前往查看</span><font-awesome-icon icon="angle-right" /></a></p>
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