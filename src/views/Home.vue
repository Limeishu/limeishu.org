<template>
  <div id="home">
    <div class="spotlight half">
      <h1>最新消息</h1>
      <carousel :autoplay="true" :loop="true" :autoplayTimeout="3000" :perPage="3" :autoplayHoverPause="true" :navigationEnabled="true" class="slider-container">
        <slide class="slide" v-for="news in news" :key="news">
          <img :src="news.meta.image">
          <div class="content">
            <h2>{{ news.title }}</h2>
            <hr>
            <p>{{ `${news.content.substring(0, 100)}...` }}</p>
            <router-link :to="`/culture/news/${news._id}`" class="button"><span>了解更多</span><font-awesome-icon icon="angle-right" /></router-link>
          </div>
        </slide>
      </carousel>
    </div>
    <div class="spotlight right bg-light">
      <div class="image" :style="{ 'background-image': `url(${require('../assets/images/gallery.jpg')})` }"></div>
      <div class="content">
        <div v-html="intro[language]"></div>
        <router-link to="/about" class="button"><span>了解更多</span><font-awesome-icon icon="angle-right" /></router-link>
      </div>
    </div>
    <div class="spotlight left bg-light">
      <div class="image" :style="{ 'background-image': `url(${require('../assets/images/hend.jpg')})` }"></div>
      <div class="content">
        <div v-html="artics[language]"></div>
        <router-link to="/intro" class="button"><span>了解更多</span><font-awesome-icon icon="angle-right" /></router-link>
      </div>
    </div>
    <div class="spotlight bg-gray">
      <div class="list" v-html="notice.zh_TW"></div>
    </div>
    <div class="spotlight bg-light"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      language: window.navigator.language.replace('-', '_'),
      intro: {
        // eslint-disable-next-line
        zh_TW: '<h1>關於紀念館</h1>\
                <p>本館初設於1990年，原名為「劉清港醫師李梅樹教授昆仲紀念館」；1995年4月遷入現址：新北市三峽區中華路43巷10號，並正式定名為「李梅樹紀念館」。</p>\
                <p>紀念館設立之宗旨在紀念前輩畫家李梅樹教授。於三峽（三角湧）土生土長的李梅樹教授（1902-1983），生前致力於藝術創作，美術運動，一輩子堅持以東京美術學校習得的寫實路線，擁抱台灣鄉土之美，被稱為台灣美術運動中的「萬里長城」。</p>\
                <p>1947年開始，李梅樹教授將畢生的精力投入三峽祖師廟的重建工程上，以創作藝術品的精神，完成結合民間藝術與學院藝術的「東方藝術殿堂」。</p>\
                <p>此外，熱心公益的李梅樹教授，於1935至1958年間，陸續以三峽街庄協議員，縣議員等身分服務鄉里。日後並於藝專(現國立台灣藝術學院)、文化、師大等校任教。終其一生，李氏身兼藝術家，教育家，政治家與廟宇建築家，81年多采多姿的藝術生涯，在台灣美術史上寫下燦爛傳奇的一頁。</p>\
                <p>本館除了展出李梅樹教授不同時期的畫作，另一方面，李梅樹生前的書信文件，畫具和畫稿等，也於館內的文物陳列室一一展出；期盼透過本館的展覽，不僅使參觀者得以體會藝術家創作生涯的心路歷程，更能進一步明瞭，李梅樹的一生正是台灣美術走向本土化的縮影。</p>',
        // eslint-disable-next-line
        en_US: '<h1>About the Memorial Gallery</h1>\
                <p>The gallery was established in 1990  and previously named as “Liu Qing Gang Physician and Professor Li Mei-Shu Memorial Hall.” In April 1995, the galley was relocated to the current location: No. 10, LN. 43, Zhonghua Road., Sanxia Dist., New Taipei City and officially renamed to “Li Mei-Shu Memorial Gallery.”</p>\
                <p>The purpose of establishing the memorial gallery was in commemoration of predecessor artist, Professor Li Mei-Shu. Professor Li Mei-Shu was born and raised in Sanxia (Sanjiaoyong) locally (1902-1983) who was committed to art creation before his death, art movement and lifelong persistence in the realism style acquired from Tokyo University of the Arts, embracing the rustic beauty of Taiwan and is known as the “Great Wall” in the art movement of Taiwan.</p>\
                <p>Starting from 1947, Professor Li Mei-Shu committed his lifelong devotion into the reconstruction project of Sanxia Zushi Temple, in order to complete the “oriental art palace” combining civil arts and academic arts through creative art pieces.</p>\
                <p>Moreover, Professor Li Mei-Shu showed much enthusiasm in charity. Between 1935 and 1958, Professor Li served as the reconciliation staff for Sanxia Street and county councilman to provide services to the township. Later he instructed in National Art College (now known as the National Taiwan University of Arts), Chinese Culture University, National Normal University and many other universities. In his lifelong career, Li has been an artist, educator, politician, and temple architect whose 81 years of remarkable art career opened up a brilliant and legendary chapter in the art history of Taiwan.</p>\
                <p>Apart from exhibiting Professor Li Mei –Shu’s paintings during different stage, the letters written, painting tools and sketches before Li’s death, were also displayed at the cultural display room of the gallery.</p>\
                <p>The gallery expects to help visitors experience the course of the creation career as an artist through the exhibition but also further understand the life of Li Mei-Shu was a miniature of the progress of Taiwan’s art towards localization.</p>'
      },
      artics: {
        // eslint-disable-next-line
        zh_TW: '<h1>認識李梅樹</h1>\
                <p>李梅樹（1902～1983）早年就讀總督府國語學校師範部，深受西洋繪畫的薰染，習畫的意念油然興起。早期畫作1927《靜物》；1928《三峽的町裡》先後入選第一、二屆臺展。1928年赴東京，奔波習畫於川端、同舟社及本鄉三個繪畫研究所。翌年，通過東京美術學校（東京藝大前身）入學試，師事畫壇大師長原孝太郎、小林萬吾及岡田三郎助等，奠定其後寫實風格的深厚基礎。1934年與友陳澄波、顏水龍、楊三郎、廖繼春、陳清汾、李石樵、立石鐵臣共創《臺陽美術協會》。1935年《小憩之女》獲第九屆臺展特選第一席，受頒「臺灣總督獎」。1939年，《紅衣》入選第三屆文展（原日本帝展）。1940年《花與女》入選第四屆文展（奉祝展），自此奠定其為臺灣傑出之西洋美術家的歷史地位。1946年應聘首屆省展審查委員，參展之《星期日》由省府購呈蔣總統。1948年《黃昏》、《郊遊》等大幅畫作被視為具代表性之作品。1945年臺灣光復後，除涉足三峽地方政治，並於1947年受公推主持長福巖清水祖師廟重建工作。此後畫作題材、風格日益趨向鄉土寫實，表現其特立獨行，傲視群倫的大家風範。1962年以後歷任文化大學、國立藝專、師大等美術教授、主任等教職。指導藝專等雕塑科學生參與三峽祖師廟金屬浮雕工程，將學院專業技藝投注於傳統寺廟建築實務中，乃臺灣藝術教育史之創舉。李教授對美術教育推廣的貢獻，除學院正規教育外，並以嚴謹、精湛的美學素養，指導祖師廟聘請的諸多傳統木石雕刻師，造就祖師廟成為雕刻精品推砌而成的「東方藝術殿堂」，為臺灣現代寺廟建築的經典名作。晚年受美術界推選歷任油畫學會理事長、美協理事長、油畫學會榮譽理事長等崇高之職位。</p>',
        // eslint-disable-next-line
        en_US: '<h1>Introduction to Artist</h1>\
                <p>Li Mei-Shu (1902～1983) studied at Teacher Training Department Taiwan Governor-General’s National Language in the early days and grew interest in painting under the profound influence from western painting. His early painting, 1927 “Still Life” and 1928 “Street of Sanxia” entered the first and second Taiwan Exhibition. In 1928 he went to Tokyo and studied painting with three painting graduate institutes, namely Kawabata, 同舟社 and Hongo. In the following year, he passed the admission examination of Tokyo Art School (former Tokyo University of the Arts) and studied from maters Koutarou Hara, Kobayashi Mango and Saburosuke Okada from the painting industry, solidifying his profound foundation for realism style later. In 1934, Li Mei-Shu co-established the “Taoyang Arts Association” with his friends Chen Cheng-Po, Yen Shui-Long, Yang San-Lang, Liao Ji-Chun, Chen Qing-Pan, Li Shi-Chiao, and Tetsuomi Tateishi. In 1935, “The Lady in Rest” won the first place in the 9th Taiwan Exhibition and was presented with “Taiwan Governor General’s Award.” In 1939, the “Girl in The Red Dress” was selected in the Third Japanese Ministry of Education‘s Art Exhibition (previously known as Japanese Emperor Exhibition). His “Girl with Flowers” was selected in the Fourth Culture Exhibition (State founding of Japan) in 1940, where his position as outstanding Taiwan western artist was defined in history since then. In 1946, Li was appointed as the first Provincial Exhibition Review Committee member and his work “Sunday” participating in the exhibition was purchased by the Provincial Governor and given to President Chiang at the time. In 1948, large-scale paintings such as “Dusk” and “Field Trip” were regarded as the representative works of Li Mei-Shu. By 1945 and after Taiwan Retrocession, Li not only involved in the local politics of Sanxia but was also recommended to host the reconstruction work of Changfuyen Qingshui Zushi Temple. From then on, the topics and styles of his painting approached rustic realism and exhibited his unique style and exceptionality. In 1962, he also served as the art professor and director for Chinese Culture University, National Art College and National Normal University. He advised students of sculpture department from National Art College to participate in the metal relief project of Sanxia Zushi Temple, projecting the professional techniques of academic school to the building practice of traditional temple, which was the first in the art education history of Taiwan. Professor Li’s contribution in promoting art education not only comprised standard education of the academy but also applied rigorous and splendid aesthetic quality in supervising many traditional wood and stone sculpture masters employed by Zushi Temple. These masters have built Zushi Temple into an “Oriental Art Palace” consisting carving boutiques and Zushi Temple became the classic masterpiece of modern temple building in Taiwan. In his late years, he was recommended by the Art Industry and selected as the Oil Painting Association Director, Art Association Director, Oil Painting Association Honorary Director, and may esteemed positions. </p>'
      },
      notice: {
        // eslint-disable-next-line
        zh_TW: '<h1>參觀須知</h1>\
                <li>本館採收費參觀制，清潔費每位100元、敬老/學生/軍警每位80元、嬰幼兒免費。</li>\
                <li>開放參觀時間:每週六、日，10:00AM ~ 05:00PM。其餘時段，歡迎團體預約參觀。(團體預約參觀時間，可提早自上午九點開始，詳情請洽詢本館)</li>\
                <li>可安排團體導覽三峽祖師廟、李梅樹紀念館、三峽老街及海山學文物展覽館，共需時約三小時。(若要參觀海山學文物展覽館，需提前兩週預約)</li>\
                <li>額外行程視情況酌收額外導覽費。</li>\
                <li>入館參觀請勿攝影，請勿飲食，請勿吸煙。</li>\
                <li>未滿12歲兒童請由家長陪伴參觀。</li>\
                <p>其他參觀細則請洽 <a href="tel:0226732333">(02)2673-2333</a> 或 E-mail : <a href="malito:limeishu@gmail.com">limeishu@gmail.com</a></p>'
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
      this.$http.get(`https://api.limeishu.org.tw/news`)
      .then(res => {
        this.news = res.data.data
      })
    }
  }
}
</script>

