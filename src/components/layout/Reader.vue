<template>
  <div class="spotlight inner">
    <div class="reader paragraph">
      <h1>{{ post.title }}</h1>
      <div v-html="post.paragraph"></div>
      <div class="share">
        <div class="icon"><font-awesome-icon icon="share-alt" /><span>{{ share[language] }}</span></div>
        <div class="icon facebook" @click="shareWindow('https://www.facebook.com/sharer/sharer.php?u=')"><font-awesome-icon :icon="['fab', 'facebook-f']" /><span>Facebook</span></div>
        <div class="icon twitter" @click="shareWindow('https://twitter.com/intent/tweet?url=')"><font-awesome-icon :icon="['fab', 'twitter']" /><span>twitter</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        post: {},
        share: {
          'zh': '分享至',
          'ja': 'シェア',
          'en': 'Share To'
        }
      }
    },
    computed: {
      ...mapGetters(['language', 'title'])
    },
    mounted () {
      this.getPost()
    },
    methods: {
      ...mapActions(['getPostByID']),
      shareWindow (url, social) {
        window.open(`${url}${window.location.href}`, '', 'height=480,width=640,toolbar=no,status=no,location=no')
      },
      async getPost () {
        try {
          const res = await this.getPostByID(this.$route.params.id)
          if (res.data) {
            this.post = res.data
            document.title = `${this.post.title} - ${this.title}`
            let head = document.querySelectorAll('head>meta')
            head[4].content = head[10].content = res.data.content
            head[5].content = document.title
            head[7].content = `https://limeishu.org.tw${document.location.pathname}}`
            head[8].content = res.data.meta.video ? '' : res.data.meta.image
            head[11].content = res.data.meta.video || ''
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