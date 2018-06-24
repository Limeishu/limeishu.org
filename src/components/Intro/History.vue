<template>
  <div>
    <div class="paragraph">
      <h1>{{ $route.meta.label[language] }}</h1>
    </div>
    <div class="timeline-container">
      <div class="timeline" v-for="(doc, i) in docs[language]" :key="i">
        <div class="date"><span>{{ doc.date }}</span></div>
        <div class="content">
          <div v-for="(item, j) in doc.content" :key="j">
            <h3 v-if="doc.content[j].length > 0">{{ tagTranslated[j][language] }}</h3>
            <p v-for="(item, k) in item" :key="k">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        docs: {},
        tagTranslated: {
          centry: {
            'zh': '百年紀要',
            'en': 'Centennial Chronicles',
            'ja': '百年紀要'
          },
          art: {
            'zh': '國內外藝壇',
            'en': '',
            'ja': '国内外美術関係事項'
          },
          event: {
            'zh': '國內外社會重要記事',
            'en': '',
            'ja': '国内外社会重要事項'
          }
        }
      }
    },
    computed: {
      ...mapGetters(['language'])
    },
    mounted () {
      this.getDocs()
    },
    methods: {
      ...mapActions(['getDocsByType']),
      async getDocs () {
        this.docs = await this.getDocsByType('limeishu-chronicles')
      }
    }
  }
</script>