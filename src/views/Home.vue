<template>
  <div id="home">
    <div class="spotlight helf">
      <h1>最新消息</h1>
      <carousel :autoplay="true" :scrollPerPage="true" :perPage="2" :autoplayHoverPause="true" :navigationEnabled="true" class="slider-container">
        <slide class="slide" v-for="news in news">
          <div class="image" :style="{ 'background-image': `url(${news.meta.image})` }"></div>
          <div class="content">
            <h2>{{ news.title }}</h2>
            <hr>
            <p>{{ `${news.content.substring(0, 100)}...` }}</p>
            <router-link :to="`/culture/news/${news._id}`" class="button"><span>了解更多</span><font-awesome-icon icon="angle-right" /></router-link>
          </div>
        </slide>
      </carousel>
    </div>
    <div class="spotlight right">
      <div class="image" :style="{ 'background-image': `url(${require('../assets/images/gallery.jpg')})` }"></div>
      <div class="content" v-html="intro.zh_TW"></div>
    </div>
    <div class="spotlight left">
      <div class="image" :style="{ 'background-image': `url(${require('../assets/images/hend.jpg')})` }"></div>
      <div class="content" v-html="artics.zh_TW"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      intro: {
        zh_TW: '<h1>關於紀念館</h1><p>本館初設於1990年，原名為「劉清港醫師李梅樹教授昆仲紀念館」；1995年4月遷入現址：新北市三峽區中華路43巷10號，並正式定名為「李梅樹紀念館」。</p><p>紀念館設立之宗旨在紀念前輩畫家李梅樹教授。於三峽（三角湧）土生土長的李梅樹教授（1902-1983），生前致力於藝術創作，美術運動，一輩子堅持以東京美術學校習得的寫實路線，擁抱台灣鄉土之美，被稱為台灣美術運動中的「萬里長城」。</p><p>1947年開始，李梅樹教授將畢生的精力投入三峽祖師廟的重建工程上，以創作藝術品的精神，完成結合民間藝術與學院藝術的「東方藝術殿堂」。</p><p>此外，熱心公益的李梅樹教授，於1935至1958年間，陸續以三峽街庄協議員，縣議員等身分服務鄉里。日後並於藝專(現國立台灣藝術學院)、文化、師大等校任教。終其一生，李氏身兼藝術家，教育家，政治家與廟宇建築家，81年多采多姿的藝術生涯，在台灣美術史上寫下燦爛傳奇的一頁。</p><p>本館除了展出李梅樹教授不同時期的畫作，另一方面，李梅樹生前的書信文件，畫具和畫稿等，也於館內的文物陳列室一一展出；期盼透過本館的展覽，不僅使參觀者得以體會藝術家創作生涯的心路歷程，更能進一步明瞭，李梅樹的一生正是台灣美術走向本土化的縮影。</p>'
      },
      artics: {
        zh_TW: '<h1>認識李梅樹</h1><p>李梅樹（1902～1983）早年就讀總督府國語學校師範部，深受西洋繪畫的薰染，習畫的意念油然興起。早期畫作1927《靜物》；1928《三峽的町裡》先後入選第一、二屆臺展。1928年赴東京，奔波習畫於川端、同舟社及本鄉三個繪畫研究所。翌年，通過東京美術學校（東京藝大前身）入學試，師事畫壇大師長原孝太郎、小林萬吾及岡田三郎助等，奠定其後寫實風格的深厚基礎。1934年與友陳澄波、顏水龍、楊三郎、廖繼春、陳清汾、李石樵、立石鐵臣共創《臺陽美術協會》。1935年《小憩之女》獲第九屆臺展特選第一席，受頒「臺灣總督獎」。1939年，《紅衣》入選第三屆文展（原日本帝展）。1940年《花與女》入選第四屆文展（奉祝展），自此奠定其為臺灣傑出之西洋美術家的歷史地位。1946年應聘首屆省展審查委員，參展之《星期日》由省府購呈蔣總統。1948年《黃昏》、《郊遊》等大幅畫作被視為具代表性之作品。1945年臺灣光復後，除涉足三峽地方政治，並於1947年受公推主持長福巖清水祖師廟重建工作。此後畫作題材、風格日益趨向鄉土寫實，表現其特立獨行，傲視群倫的大家風範。1962年以後歷任文化大學、國立藝專、師大等美術教授、主任等教職。指導藝專等雕塑科學生參與三峽祖師廟金屬浮雕工程，將學院專業技藝投注於傳統寺廟建築實務中，乃臺灣藝術教育史之創舉。李教授對美術教育推廣的貢獻，除學院正規教育外，並以嚴謹、精湛的美學素養，指導祖師廟聘請的諸多傳統木石雕刻師，造就祖師廟成為雕刻精品推砌而成的「東方藝術殿堂」，為臺灣現代寺廟建築的經典名作。晚年受美術界推選歷任油畫學會理事長、美協理事長、油畫學會榮譽理事長等崇高之職位。</p>'
      },
      news: ''
    }
  },
  created () {
    this.getNews()
  },
  methods: {
    next () {
      this.$refs.flickity.next()
    },
    previous () {
      this.$refs.flickity.previous()
    },
    getNews () {
      this.$http.get(`/api/news`)
      .then(res => {
        this.news = res.data.doc
      })
    }
  }
}
</script>

