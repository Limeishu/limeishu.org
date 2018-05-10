<template>
  <div id="home">
    <div class="spotlight half">
      <h1 v-show="language === 'zh-TW'">最新消息</h1>
      <h1 v-show="language === 'en-US'">What's New</h1>
      <h1 v-show="language === 'ja'">最新ニュース</h1>
      <carousel class="slider-container"
      :loop="true"
      :autoplayTimeout="3000"
      :perPage="device.isMobile ? 1 : 3"
      :autoplayHoverPause="true"
      :navigationEnabled="true"
      navigationNextLabel="<svg aria-hidden='true' data-fa-processed='' data-prefix='fas' data-icon='angle-right' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' class='svg-inline--fa fa-angle-right fa-w-8'><path fill='currentColor' d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'></path></svg>"
      navigationPrevLabel="<svg aria-hidden='true' data-fa-processed='' data-prefix='fas' data-icon='angle-left' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' class='svg-inline--fa fa-angle-left fa-w-8'><path fill='currentColor' d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z' class=''></path></svg>">
        <slide v-for="(news, i) in news.data" :key="i" v-if="i <= 6">
          <div class="slider">
            <img :src="news.meta.image">
            <div class="content">
              <h2>{{ news.title }}</h2>
              <hr>
              <p>{{ `${news.content.substring(0, 100)}...` }}</p>
              <router-link :to="`/culture/news/${news._id}/index.html`" class="button">
                <span>了解更多</span>
                <font-awesome-icon icon="angle-right" />
              </router-link>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <div class="spotlight right bg-light">
      <div class="image" :style="{ 'background-image': `url(${require('../assets/images/gallery.jpg')})` }"></div>
      <div class="content" v-show="language === 'zh-TW'">
        <h1>關於紀念館</h1>
        <p>本館初設於 1990 年，原名為「劉清港醫師李梅樹教授昆仲紀念館」；1995 年 4 月遷入現址：新北市三峽區中華路 43 巷 10 號，並正式定名為「李梅樹紀念館」。</p>
        <p>紀念館設立之宗旨在紀念前輩畫家李梅樹教授。於三峽（三角湧）土生土長的李梅樹教授（1902-1983），生前致力於藝術創作，美術運動，一輩子堅持以東京美術學校習得的寫實路線，擁抱台灣鄉土之美，被稱為台灣美術運動中的「萬里長城」。</p>
        <p>1947 年開始，李梅樹教授將畢生的精力投入三峽祖師廟的重建工程上，以創作藝術品的精神，完成結合民間藝術與學院藝術的「東方藝術殿堂」。</p>
        <p>此外，熱心公益的李梅樹教授，於 1935 至 1958 年間，陸續以三峽街庄協議員，縣議員等身分服務鄉里。日後並於藝專 (現國立台灣藝術學院)、文化、師大等校任教。終其一生，李氏身兼藝術家，教育家，政治家與廟宇建築家，81 年多采多姿的藝術生涯，在台灣美術史上寫下燦爛傳奇的一頁。</p>
        <p>本館除了展出李梅樹教授不同時期的畫作，另一方面，李梅樹生前的書信文件，畫具和畫稿等，也於館內的文物陳列室一一展出；期盼透過本館的展覽，不僅使參觀者得以體會藝術家創作生涯的心路歷程，更能進一步明瞭，李梅樹的一生正是台灣美術走向本土化的縮影。</p>
        <p>期盼透過本館的展覽，不僅使參觀者得以體會藝術家創作生涯的心路歷程，更能進一步明瞭，李梅樹的一生正是台灣美術走向本土化的縮影。</p>
        <router-link to="/about/gallery" class="button">
          <span>了解更多</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
      <div class="content" v-show="language === 'en-US'">
        <h1>About the Memorial Gallery</h1>
        <p>The gallery was established in 1990 and previously named as “Liu Qing Gang Physician and Professor Li Mei-Shu Memorial
          Hall.” In April 1995, the galley was relocated to the current location: No. 10, LN. 43, Zhonghua Road., Sanxia
          Dist., New Taipei City and officially renamed to “Li Mei-Shu Memorial Gallery.”</p>
        <p>The purpose of establishing the memorial gallery was in commemoration of predecessor artist, Professor Li Mei-Shu.
          Professor Li Mei-Shu was born and raised in Sanxia (Sanjiaoyong) locally (1902-1983) who was committed to art creation
          before his death, art movement and lifelong persistence in the realism style acquired from Tokyo University of
          the Arts, embracing the rustic beauty of Taiwan and is known as the “Great Wall” in the art movement of Taiwan.</p>
        <p>Starting from 1947, Professor Li Mei-Shu committed his lifelong devotion into the reconstruction project of Sanxia
          Zushi Temple, in order to complete the “oriental art palace” combining civil arts and academic arts through creative
          art pieces.</p>
        <p>Moreover, Professor Li Mei-Shu showed much enthusiasm in charity. Between 1935 and 1958, Professor Li served as the
          reconciliation staff for Sanxia Street and county councilman to provide services to the township. Later he instructed
          in National Art College (now known as the National Taiwan University of Arts), Chinese Culture University, National
          Normal University and many other universities. In his lifelong career, Li has been an artist, educator, politician,
          and temple architect whose 81 years of remarkable art career opened up a brilliant and legendary chapter in the
          art history of Taiwan.</p>
        <p>Apart from exhibiting Professor Li Mei –Shu’s paintings during different stage, the letters written, painting tools
          and sketches before Li’s death, were also displayed at the cultural display room of the gallery.</p>
        <p>The gallery expects to help visitors experience the course of the creation career as an artist through the exhibition
          but also further understand the life of Li Mei-Shu was a miniature of the progress of Taiwan’s art towards localization.</p>
        <router-link to="/about/gallery" class="button">
          <span>Read More</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
      <div class="content" v-show="language === 'ja'">
        <h1>記念館について</h1>
        <p>本館は1990年に設置され、当初は「劉清港医師李梅樹教授昆仲記念館」といいましたが、1995年4月に現在地である新北市三峡区中華路43巷10号に移転し、名称を「李梅樹記念館」と正式に定めました。</p>
        <p>記念館の設立趣旨は、台湾第一世代の近代画家・李梅樹を記念するものです。三峡（三角湧）の地に生まれ育った李梅樹（1902-1983）は、生前芸術制作や美術運動に力を注ぎ、東京美術学校で習得した写実的な画風を生涯に渡って貫きながら、台湾郷土の美を愛し、台湾の美術運動における「万里の長城」と称されました。</p>
        <p>1947年より、李梅樹は三峡の祖師廟再建工事に生涯の精力を傾け、芸術作品を創作しようという意識の下、民間芸術とアガデミックな美術を結合させた「東方芸術の殿堂」を完成させました。</p>
        <p>また、公共活動にも熱心であった李梅樹は、1935年から1958年の間、三峡街庄協議員、県議員等の役職に就いて郷里のために尽くしました。その後、国立台湾芸術専科学校(現在の国立台湾芸術大学)、文化大学、師範大学でも教壇に立ちました。その一生に渡って、李梅樹は芸術家・教育家・政治家・寺廟建築家といった身分を兼ね備え、81年間の多彩で多様なその芸術の生涯は、台湾美術史上において輝かしい一ページを残しました。</p>
        <p>本館では李梅樹の様々な時期の作品を展示しているほか、李梅樹の生前の書簡、絵画道具、画稿などを館内の文物陳列室にともに展示しています。</p>
        <p>本館の展示を通じ、ご来館の皆様にこの芸術家の画家人生における心の旅路を感じて頂くとともに、李梅樹の一生が台湾美術の本土化への縮図であったことを理解して頂くことを願っております。</p>
        <router-link to="/about/gallery" class="button">
          <span>詳細</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
    </div>
    <div class="spotlight left">
      <div class="image" :style="{ 'background-image': `url(${require('../assets/images/hend.jpg')})` }"></div>
      <div class="content" v-show="language === 'zh-TW'">
        <h1>認識李梅樹</h1>
        <p>李梅樹（1902～1983）早年就讀總督府國語學校師範部，深受西洋繪畫的薰染，習畫的意念油然興起。早期畫作 1927《靜物》；1928《三峽的町裡》先後入選第一、二屆臺展。1928 年赴東京，奔波習畫於川端、同舟社及本鄉三個繪畫研究所。翌年，通過東京美術學校（東京藝大前身）入學試，師事畫壇大師長原孝太郎、小林萬吾及岡田三郎助等，奠定其後寫實風格的深厚基礎。1934 年與友陳澄波、顏水龍、楊三郎、廖繼春、陳清汾、李石樵、立石鐵臣共創《臺陽美術協會》。1935 年《小憩之女》獲第九屆臺展特選第一席，受頒「臺灣總督獎」。1939 年，《紅衣》入選第三屆文展（原日本帝展）。1940 年《花與女》入選第四屆文展（奉祝展），自此奠定其為臺灣傑出之西洋美術家的歷史地位。1946 年應聘首屆省展審查委員，參展之《星期日》由省府購呈蔣總統。1948 年《黃昏》、《郊遊》等大幅畫作被視為具代表性之作品。1945 年臺灣光復後，除涉足三峽地方政治，並於 1947 年受公推主持長福巖清水祖師廟重建工作。此後畫作題材、風格日益趨向鄉土寫實，表現其特立獨行，傲視群倫的大家風範。1962 年以後歷任文化大學、國立藝專、師大等美術教授、主任等教職。指導藝專等雕塑科學生參與三峽祖師廟金屬浮雕工程，將學院專業技藝投注於傳統寺廟建築實務中，乃臺灣藝術教育史之創舉。李教授對美術教育推廣的貢獻，除學院正規教育外，並以嚴謹、精湛的美學素養，指導祖師廟聘請的諸多傳統木石雕刻師，造就祖師廟成為雕刻精品推砌而成的「東方藝術殿堂」，為臺灣現代寺廟建築的經典名作。晚年受美術界推選歷任油畫學會理事長、美協理事長、油畫學會榮譽理事長等崇高之職位。</p>
        <router-link to="/intro/statement" class="button">
          <span>了解更多</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
      <div class="content" v-show="language === 'en-US'">
        <h1>Introduction to Artist</h1>
        <p>Li Mei-Shu (1902～1983) studied at Teacher Training Department Taiwan Governor-General’s National Language in the
          early days and grew interest in painting under the profound influence from western painting. His early painting,
          1927 “Still Life” and 1928 “Street of Sanxia” entered the first and second Taiwan Exhibition. In 1928 he went to
          Tokyo and studied painting with three painting graduate institutes, namely Kawabata, Tongzhou-She (同舟社) and Hongo. In the following
          year, he passed the admission examination of Tokyo Art School (former Tokyo University of the Arts) and studied
          from maters Koutarou Hara, Kobayashi Mango and Saburosuke Okada from the painting industry, solidifying his profound
          foundation for realism style later. In 1934, Li Mei-Shu co-established the “Taoyang Arts Association” with his
          friends Chen Cheng-Po, Yen Shui-Long, Yang San-Lang, Liao Ji-Chun, Chen Qing-Pan, Li Shi-Chiao, and Tetsuomi Tateishi.
          In 1935, “The Lady in Rest” won the first place in the 9th Taiwan Exhibition and was presented with “Taiwan Governor
          General’s Award.” In 1939, the “Girl in The Red Dress” was selected in the Third Japanese Ministry of Education‘s
          Art Exhibition (previously known as Japanese Emperor Exhibition). His “Girl with Flowers” was selected in the Fourth
          Culture Exhibition (State founding of Japan) in 1940, where his position as outstanding Taiwan western artist was
          defined in history since then. In 1946, Li was appointed as the first Provincial Exhibition Review Committee member
          and his work “Sunday” participating in the exhibition was purchased by the Provincial Governor and given to President
          Chiang at the time. In 1948, large-scale paintings such as “Dusk” and “Field Trip” were regarded as the representative
          works of Li Mei-Shu. By 1945 and after Taiwan Retrocession, Li not only involved in the local politics of Sanxia
          but was also recommended to host the reconstruction work of Changfuyen Qingshui Zushi Temple. From then on, the
          topics and styles of his painting approached rustic realism and exhibited his unique style and exceptionality.
          In 1962, he also served as the art professor and director for Chinese Culture University, National Art College
          and National Normal University. He advised students of sculpture department from National Art College to participate
          in the metal relief project of Sanxia Zushi Temple, projecting the professional techniques of academic school to
          the building practice of traditional temple, which was the first in the art education history of Taiwan. Professor
          Li’s contribution in promoting art education not only comprised standard education of the academy but also applied
          rigorous and splendid aesthetic quality in supervising many traditional wood and stone sculpture masters employed
          by Zushi Temple. These masters have built Zushi Temple into an “Oriental Art Palace” consisting carving boutiques
          and Zushi Temple became the classic masterpiece of modern temple building in Taiwan. In his late years, he was
          recommended by the Art Industry and selected as the Oil Painting Association Director, Art Association Director,
          Oil Painting Association Honorary Director, and may esteemed positions. </p>
        <router-link to="/intro/statement" class="button">
          <span>Read More</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
      <div class="content" v-show="language === 'ja'">
        <h1>画家の紹介</h1>
        <p>李梅樹（1902～1983）は、早年に総督府国語学校師範部に学び、そこで西洋絵画の薫陶を受けて、絵画を学びたいという願いが湧き起こりました。初期の作品である1927年の《静物》、1928年の《三峡の町裏》は、第一回、第二回台湾美術展覧会にそれぞれ入選。1928年には東京に渡り、川端美術学校、同舟社、本郷美術学校の三ヵ所の絵画研究所で絵を学びました。翌年、東京美術学校（東京芸大の前身）の入学試験に合格し、長原孝太郎、小林萬吾、岡田三郎助ら当時の画壇の重鎮に師事、その後に続く写実的スタイルの基礎を固めました。1934年に友人の陳澄波、顔水龍、楊三郎、廖継春、陳清汾、李石樵、立石鉄臣らとともに「台陽美術協会」を創設。1935年に《憩ふ女》が第九回台展の特選第一等となり、「台湾総督賞」を受賞します。1939年には、《赤い衣》が日本で第三回新文展に入選、1940年に《花と女》が第三回新文展（奉祝展）に入選するなど、以後台湾の優れた西洋美術家としての歴史地位を確かなものとしました。1946年、第一回台湾省美術展覧会の審査委員となり、出品した《星期日（日曜日）》は台湾省政府から蒋介石総統に贈呈されました。1948年の《黄昏》、《郊遊（ピクニック）》といった大作は、画家の代表作とされています。1945年の台湾光復後、三峡の地方政治に足を踏み入れたほか、1947年には長福巌清水祖師廟再建工事の責任者に推挙されました。その後から、作品の題材やスタイルはしだいに郷土の写実へと向かい、その表現は独自の道を歩み、傑出した大家としての風格を帯びて行きます。1962年以後は、文化大学、国立芸術専科学校、師範大学などの美術教授や主任などの教職を歴任。芸専等の雕塑科学生を指導して三峡祖師廟の金属浮雕工事に参加させ、アカデミックな専門技術を伝統寺廟建築の現場に投入したことは、台湾芸術教育史において初めての試みでした。李梅樹による美術教育推進への貢献は、大学での正規教育以外にも、厳粛で精緻な美的素養でもって、祖師廟に招いた多くの伝統的木彫・石彫師らを指導し、祖師廟は彫刻の名品がつまった「東方芸術の殿堂」へと作り上げられ、現代台湾寺廟建築の古典的名作となりました。晩年には、美術界からの推薦により、油画学会理事長、美協理事長、油画学会栄誉理事長等の職を歴任しました。</p>
        <router-link to="/intro/statement" class="button">
          <span>詳細</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
    </div>
    <div class="spotlight bg-gray half">
      <div class="list" v-show="language === 'zh-TW'">
        <h1>參觀須知</h1>
        <ul>
          <li>本館採收費參觀制，清潔費每位 100 元、敬老 / 學生 / 軍警每位 80 元，身心障礙者及其必要陪伴者一人每人清潔費50元；嬰幼兒免費</li>
          <li>開放參觀時間: 每週六、日，10:00AM ~ 05:00PM。其餘時段，歡迎團體預約參觀（團體預約參觀時間，可提早自上午九點開始，詳情請洽詢本館）</li>
          <li>可安排團體導覽三峽祖師廟、李梅樹紀念館、三峽老街，共需時約三小時</li>
          <li>額外行程視情況酌收額外導覽費</li>
          <li>入館參觀請勿攝影、飲食、吸煙</li>
          <li>未滿 12 歲兒童請由家長陪伴參觀</li>
          <p>其他參觀細則請洽
            <a href="tel:0226732333">(02)2673-2333</a> 或 E-mail :
            <a href="malito:limeishu@gmail.com">limeishu@gmail.com</a>
          </p>
        </ul>
      </div>
      <div class="list" v-show="language === 'en-US'">
        <h1>Instructions for Visit</h1>
        <ul>
          <li>The gallery admission charges each person with a cleaning fee of NT100 and NT80 for elderly/student/military and police. The gallery admission for infants and babies are free.</li>
          <li>Opening hours for visits are Saturdays and Sundays, from 10:00AM to 05:00PM. In other times, group reservation for visit is encouraged (The visit time for group reservation starts as early at 9A.M. Please consult with the gallery for more information).</li>
          <li>A group tour on Sanxia Zushi Temple, Li Mei-Shu Memorial Gallery, Sanxia Old Street can be arranged for a total of 3 hours.</li>
          <li>Additional itinerary might charge additional guide fees depending on the situation.</li>
          <li>入Do not film the gallery when admitted for visit. Food, drinks and smoking are prohibited.</li>
          <li>Children visiting under 12 years old require the company of parents.</li>
            <p>Please contact
              <a href="tel:0226732333">(02)2673-2333</a> or E-mail :
              <a href="malito:limeishu@gmail.com">limeishu@gmail.com</a>for more information on the visit.
            </p>
        </ul>
      </div>
      <div class="list" v-show="language === 'ja'">
        <h1>参観案内</h1>
        <ul>
          <li>本館は有料参観制で、清掃費として以下の料金を頂いております。一般 NTD 100元、敬老／学生／軍警 NTD 80元、乳幼児無料。</li>
          <li>開館時間:毎週土・日祝、午前10:00-午後5:00。その他の時間については、団体予約による参観をお待ちしています。(団体予約の参観時間は午前9時開始も可能です。詳細は本館にお問合せ下さい。)</li>
          <li>三峡祖師廟、李梅樹記念館、三峡老街の団体ガイドツアーを組むことも可能です。総時間は約三時間です。</li>
          <li>これ以外のコースについては、状況により追加ガイド費を徴収する場合があります。</li>
          <li>入館時における、写真撮影・飲食・喫煙はご遠慮下さい。</li>
          <li>12歳未満の児童の参観には、保護者の方の付き添いが必要です。</li>
          <p>その他、参観に関することについては、こちらまでお問合せ下さい。<br>電話 : <a href="tel:0226732333">(02)2673-2333</a>、E-mail : <a href="malito:limeishu@gmail.com">limeishu@gmail.com</a></p>
        </ul>
      </div>
    </div>
    <div class="spotlight bg-light">
      <div class="traffic">
        <div class="contants">
          <div class="container">
            <div class="header">
              <h1 v-show="language === 'zh-TW'">交通資訊</h1>
              <h1 v-show="language === 'en-US'">Traffic Information</h1>
              <h1 v-show="language === 'ja'">交通信息</h1>
              <div class="bar">
                <div class="item" v-for="(item, i) in map.bar" :class="{ 'active': i === map.choosed }" @click="map.choosed = i" :key="i">
                  <div class="icon">
                    <font-awesome-icon :icon="item.icon" />
                  </div>
                  <span>{{ item[language] }}</span>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="block" v-for="(info, i) in map.data[map.choosed][language]" :key="i">
                <div class="syb">{{ i+1 }}</div><p>{{ info }}</p>
              </div>
            </div>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0443806157864!2d121.37067131500416!3d24.93055798402082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681bec4aab9289%3A0x19406de61e70b2d4!2z5p2O5qKF5qi557SA5b-16aSo!5e0!3m2!1szh-TW!2stw!4v1516105422004" frameborder="0" class="map" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      map: {
        bar: [
          {
            'en-US': 'HSR & TRA',
            'zh-TW': '高鐵＆火車',
            'ja': '高鉄＆鉄道',
            icon: ['fas', 'train']
          },
          {
            'en-US': 'MRT',
            'zh-TW': '捷運',
            'ja': 'MRT（捷運）',
            icon: ['fas', 'subway']
          },
          {
            'en-US': 'Bus',
            'zh-TW': '公車',
            'ja': '路線バス',
            icon: ['fas', 'bus']
          },
          {
            'en-US': 'Drive',
            'zh-TW': '自行開車',
            'ja': '自家用車',
            icon: ['fas', 'car']
          }
        ],
        data: [
          {
            'zh-TW': [
              '搭乘臺鐵或高鐵至板橋火車站',
              '循站內指標前往板橋公車站',
              '搭乘公車（台北客運 910 ）至安溪國小站（李梅樹紀念館）下車',
              '下車後步行約2分鐘內可到達李梅樹紀念館'
            ],
            'en-US': [
              'Take Taiwan Railway or HSR to Banqiao Train Station.',
              'Follow in-station signs to proceed to Banqiao Bus Stop.',
              'Take bus (910) to get off at Anxi Elementary School Stop (Li Mei-Shu Memorial Gallery).',
              'Get off the bus and walk for two minutes to arrive to Li Mei-Shu Memorial Gallery.'
            ],
            'ja': [
              '台湾高速鉄道または台湾鉄道で板橋駅へ',
              '駅内の表示に従い、板橋バスターミナル（板橋公車站）へ',
              '路線バス910で「安渓国小」駅（李梅樹記念館）にて下車',
              '下車後、徒歩約2分で李梅樹記念館に到着'
            ]
          },
          {
            'zh-TW': [
              '乘坐臺北捷運BL藍線（板南線）。',
              '於新埔站、板橋站、永寧站及頂埔站皆可下車，循站內指標前往公車站。',
              '搭乘公車至李梅樹紀念館（參考「公車」路線標籤）。'
            ],
            'en-US': [
              'Take Taipei MRT BL Blue Line (Bannan Line).',
              'Get off the bus from Xinpu Stop, Banqiao Stop, Yongning Stop, and Dingpu Stop. Follow the sign for proceeding to bus stop.',
              'Take the bus to get to Li Mei-shi Memorial Gallery (refer to “Bus” Route Label).'
            ],
            'ja': [
              '台北MRT（捷運）の青いライン（板南線）に乗車',
              '新埔駅、板橋駅、永寧駅、頂埔駅のいずれかにて下車、駅内の表示に従いバス停へ',
              '路線バスで李梅樹記念館へ（「路線バス」での交通案内を参照）'
            ]
          },
          {
            'zh-TW': [
              '板橋、新埔的朋友，你可以搭乘 910、940 路線公車到安溪國小（李梅樹紀念館）站下車，再步行約 3 分鐘就可到達',
              '土城、頂埔，可搭乘 705、706 公車到礁溪里站步行約 10 分鐘；或搭 916 公車到三峽老街站步行約 10 分鐘',
              '台北市東區，可搭 939 公車到台北大學三峽校區站，步行約 20 分鐘',
              '樹林、新莊，可搭 885、802 公車，到三峽老街站，再步行約 10 分',
              '中、永和，可搭 908 公車到三峽國小站，再步行約 15 分'
            ],
            'en-US': [
              'Take bus 910 and 940 from Banqiao and Xinpu to Anxi Elementary School (Li Mei-Shu Memorial Gallery) Stop to get off the bus and then walk for 3 minutes.',
              'Take Bus 705 and 706 from Tucheng and Dingpu to Jiaoxi Village Stop and then walk for about 10 minutes. Or take Bus 916 to Sanxia Old Street Stop and walk for about 10 minutes.',
              'Take Bus 939 from Eastern District of Taipei City and arrive to National Taipei University Sanxia Campus Stop. Walk for about 20 minutes.',
              'Take Bus 885 and 802 from Shulin and Xinzhuang to Sanxia Old Street Stop, then walk for about 10 minutes.',
              'Take Bus 908 from Zhonghe and Yonghe to Sanxia Elementary School Stop, then walk for 15 minutes.'
            ],
            'ja': [
              '板橋・新埔より、路線バス 910、940 で「安渓国小」駅（李梅樹記念館）下車、徒歩約 3 分',
              '土城・頂埔より、路線バス 705、706 で「礁渓里」駅下車、徒歩約 10 分鐘。または、路線バス 916 で「三峡老街」駅下車、徒歩約 10 分',
              '台北市東区より、路線バス 939 で「台北大学三峡校区」駅下車、徒歩約 20 分',
              '樹林・新荘より、路線バス 885、802 で「三峡老街」駅下車、徒歩約 10 分',
              '中和・永和より、路線バス 908 で「三峡国小」下車、徒歩約 15 分'
            ]
          },
          {
            'zh-TW': [
              '行駛國道三號並於三峽交流道離開高速公路。',
              '下交流道後轉 110 縣道（復興路）並沿路直行。',
              '右轉中華路直行後在安溪國小前路口右轉。',
              '於長福停車場停車（長福停車場位於光明路右測）。'
            ],
            'en-US': [
              'Take National Highway No. 3 and get off Sanxia Interchange.',
              'After getting off the interchange, turn to County Road 110 (Fuxing Road) and go straight along the road.',
              'Turn right to Zhonghua Road and go straight. Turn right at the front intersection of “Anxi Elementary School”.',
              'Park at Changfu Parking Lot (Changfu Parking Lot is located on the right of Guangming Road).'
            ],
            'ja': [
              '国道三号線「三峡」インターチェンジより一般道へ',
              'インターチェンジを降りた後、市道110（復興路）を道沿いに直進',
              '中華路を右折し直進した後、「安渓国民小学校」前の道を右折',
              '長福駐車場に駐車（長福駐車場は光明路の右側にあります）'
            ]
          }
        ],
        choosed: 0
      }
    }
  },
  computed: {
    ...mapGetters(['language', 'device', 'news'])
  },
  mounted () {
    this.getNews()
  },
  methods: {
    ...mapActions({ getNews: 'getAllNews' }),
    next () {
      this.$refs.flickity.next()
    },
    previous () {
      this.$refs.flickity.previous()
    }
  }
}
</script>

