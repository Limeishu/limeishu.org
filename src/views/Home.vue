<template>
  <div id="home">
    <div class="spotlight half">
      <h1 v-show="language === 'zh'">最新消息</h1>
      <h1 v-show="language === 'en'">What's New</h1>
      <h1 v-show="language === 'ja'">最新ニュース</h1>
      <h1 v-show="language === 'ko'">최신 뉴스</h1>
      <carousel class="slider-container"
      :loop="true"
      :autoplayTimeout="3000"
      :perPage="device.isMobile ? 1 : 3"
      :autoplayHoverPause="true"
      :navigationEnabled="true"
      navigationNextLabel="<svg aria-hidden='true' data-fa-processed='' data-prefix='fas' data-icon='angle-right' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' class='svg-inline--fa fa-angle-right fa-w-8'><path fill='currentColor' d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'></path></svg>"
      navigationPrevLabel="<svg aria-hidden='true' data-fa-processed='' data-prefix='fas' data-icon='angle-left' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' class='svg-inline--fa fa-angle-left fa-w-8'><path fill='currentColor' d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z' class=''></path></svg>">
        <slide v-for="(news, i) in news.data" :key="i" v-if="device.isMobile ? i < 5 : i <= 6">
          <div class="slider" @click="$router.push(`/culture/news/${news._id}`)">
            <img :src="news.meta.image" :alt="news.meta.imageAlt ? news.meta.imageAlt : news.title">
            <div class="content">
              <h2>{{ news.title }}</h2>             
              <p>{{ `${news.content.substring(0, 100)}...` }}</p>
              <router-link :to="`/culture/news/${news._id}`" class="button" alt="點一下來了解更多">
                <span>了解更多</span>
                <font-awesome-icon icon="angle-right" />
              </router-link>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <div class="spotlight right bg-light">
      <img class="image" src="https://image.limeishu.org.tw/images/gallery.jpg" alt="圖片：這是一張李梅樹紀念館大門口的照片">
      <div class="content" v-show="language === 'zh'">
        <h1>關於紀念館</h1>
        <p>本館初設於 1990 年，原名為「劉清港醫師李梅樹教授昆仲紀念館」；1995 年 4 月遷入現址：新北市三峽區中華路 43 巷 10 號，並正式定名為「李梅樹紀念館」。</p>
        <p>紀念館設立之宗旨在紀念前輩畫家李梅樹教授。於三峽（三角湧）土生土長的李梅樹教授（1902-1983），生前致力於藝術創作，美術運動，一輩子堅持以東京美術學校習得的寫實路線，擁抱台灣鄉土之美，被稱為台灣美術運動中的「萬里長城」。</p>
        <p>1947 年開始，李梅樹教授將畢生的精力投入三峽祖師廟的重建工程上，以創作藝術品的精神，完成結合民間藝術與學院藝術的「東方藝術殿堂」。</p>
        <p>此外，熱心公益的李梅樹教授，於 1935 至 1958 年間，陸續以三峽街庄協議員，縣議員等身分服務鄉里。日後並於藝專 (現國立台灣藝術學院)、文化、師大等校任教。終其一生，李氏身兼藝術家，教育家，政治家與廟宇建築家，81 年多采多姿的藝術生涯，在台灣美術史上寫下燦爛傳奇的一頁。</p>
        <p>本館除了展出李梅樹教授不同時期的畫作，另一方面，李梅樹生前的書信文件，畫具和畫稿等，也於館內的文物陳列室一一展出；期盼透過本館的展覽，不僅使參觀者得以體會藝術家創作生涯的心路歷程，更能進一步明瞭，李梅樹的一生正是台灣美術走向本土化的縮影。</p>
        <p>期盼透過本館的展覽，不僅使參觀者得以體會藝術家創作生涯的心路歷程，更能進一步明瞭，李梅樹的一生正是台灣美術走向本土化的縮影。</p>
        <router-link to="/about/gallery#more" class="button" alt="點一下來了解更多">
          <span>了解更多</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
      <div class="content" v-show="language === 'en'">
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
        <router-link to="/about/gallery" class="button" alt="Click to know more">
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
        <router-link to="/about/gallery" class="button" alt="もっと知るためにクリック">
          <span>詳細</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
      <div class="content" v-show="language === 'ko'">
        <h1>기념관에 대해서</h1>
        <p>본 기념관은 1990년에 설립되었으며,  원래 이름은 리우칭강(劉清港)의사와 리메이수(李梅樹)교수의 곤중기념관(昆仲紀念館)이였는데 1995년 4월 현재의 신베이시싼샤구중화로43항10호로 이전하고, 정식명칭을 리메이수(李梅樹)기념관으로 개칭하였습니다.</p>
        <p>기념관의 설립 취지는 대만 제1세대 화가 리메이수(李梅樹)교수를 기념하고, 싼샤에서 태어나고 자란  리메이수(李梅樹)교수(1902~1983)는 일생을 예술창작활동과 미술운동에 주력하였고, 평생동안 도쿄미술학교(東京美術學校) 에서 습득한 사실주의로, 대만 향토의 아름다움을 표현하였습니다. 이는 대만미술운동의 만리장성「萬里長城」이라고 불리웁니다.</p>
        <p>1947년을 시작으로 리메이수(李梅樹)교수는 싼샤주스절(三峽祖師廟)의 재건사업에 일생을 바쳤고,  창작예술의 정신과 민간예술및 아카데미미술을 결합하여 동방예술전당「東方藝術殿堂」을 완성시켰습니다.</p>
        <p>이외에 공익활동에도 열정적이셨던 리메이수(李梅樹)교수는 1935년~1958년까지 싼샤(三峽)가장(街庄)협의원(協議員)과 현(縣)의원의 직책을 맡고, 고향을 위해 봉사하였습니다. 일제시대이후에는 예술전문대학(현 국립대만예술대학) , 문화대학,사범대학등에서 교수를 역임하였고, 그는 평생에 걸쳐 예술가, 교육자, 정치인및 사원재건건축가등의 신분으로 81 년간 다채롭고 다양한 예술로 평생을 대만 미술 사상에 빛나는 한 페이지 장식하였습니다.</p>
        <p>본 기념관은 리메이수(李梅樹)교수의 시기별로 그림작품들이 전시되어 있을뿐만 아니라, 리메이수(李梅樹)생전의 편지와 그림도구와 초고(草稿)등이 기념관내의 유물 전시실에 함께 전시하고 있습니다.</p>
        <p>본 기념관의 전시를 통해서, 관람객여러분들이 예술가의 창작생애를 좀 더 깊이 이해하고 , 리메이수(李梅樹)의 일생은 대만예술의 본토화를 상징함을 알아주셨으면 합니다.</p>
        <router-link to="/about/gallery" class="button" alt="더 알기 위해 클릭">
          <span>더 읽기</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
    </div>
    <div class="spotlight left">
      <img class="image" src="https://image.limeishu.org.tw/images/hend.jpg" alt="圖片：李梅樹教授黑白照片，上半身">
      <div class="content" v-show="language === 'zh'">
        <h1>認識李梅樹</h1>
        <p>李梅樹（1902～1983）早年就讀總督府國語學校師範部，深受西洋繪畫的薰染，習畫的意念油然興起。早期畫作 1927《靜物》；1928《三峽的町裡》先後入選第一、二屆臺展。1928 年赴東京，奔波習畫於川端、同舟社及本鄉三個繪畫研究所。翌年，通過東京美術學校（東京藝大前身）入學試，師事畫壇大師長原孝太郎、小林萬吾及岡田三郎助等，奠定其後寫實風格的深厚基礎。</p>
        <p>1934 年與友陳澄波、顏水龍、楊三郎、廖繼春、陳清汾、李石樵、立石鐵臣共創《臺陽美術協會》。1935 年《小憩之女》獲第九屆臺展特選第一席，受頒「臺灣總督獎」。1939 年，《紅衣》入選第三屆文展（原日本帝展）。</p>
        <p>1940 年《花與女》入選第四屆文展（奉祝展），自此奠定其為臺灣傑出之西洋美術家的歷史地位。1946 年應聘首屆省展審查委員，參展之《星期日》由省府購呈蔣總統。1948 年《黃昏》、《郊遊》等大幅畫作被視為具代表性之作品。1945 年臺灣光復後，除涉足三峽地方政治，並於 1947 年受公推主持長福巖清水祖師廟重建工作。此後畫作題材、風格日益趨向鄉土寫實，表現其特立獨行，傲視群倫的大家風範。</p>
        <p>1962 年以後歷任文化大學、國立藝專、師大等美術教授、主任等教職。指導藝專等雕塑科學生參與三峽祖師廟金屬浮雕工程，將學院專業技藝投注於傳統寺廟建築實務中，乃臺灣藝術教育史之創舉。</p>
        <p>李教授對美術教育推廣的貢獻，除學院正規教育外，並以嚴謹、精湛的美學素養，指導祖師廟聘請的諸多傳統木石雕刻師，造就祖師廟成為雕刻精品推砌而成的「東方藝術殿堂」，為臺灣現代寺廟建築的經典名作。晚年受美術界推選歷任油畫學會理事長、美協理事長、油畫學會榮譽理事長等崇高之職位。</p>
        <router-link to="/intro/statement" class="button" alt="點一下來了解更多">
          <span>了解更多</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
      <div class="content" v-show="language === 'en'">
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
        <router-link to="/intro/statement" class="button" alt="Click to know more">
          <span>Read More</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
      <div class="content" v-show="language === 'ja'">
        <h1>画家の紹介</h1>
        <p>李梅樹（1902～1983）は、早年に総督府国語学校師範部に学び、そこで西洋絵画の薫陶を受けて、絵画を学びたいという願いが湧き起こりました。初期の作品である1927年の《静物》、1928年の《三峡の町裏》は、第一回、第二回台湾美術展覧会にそれぞれ入選。1928年には東京に渡り、川端美術学校、同舟社、本郷美術学校の三ヵ所の絵画研究所で絵を学びました。翌年、東京美術学校（東京芸大の前身）の入学試験に合格し、長原孝太郎、小林萬吾、岡田三郎助ら当時の画壇の重鎮に師事、その後に続く写実的スタイルの基礎を固めました。1934年に友人の陳澄波、顔水龍、楊三郎、廖継春、陳清汾、李石樵、立石鉄臣らとともに「台陽美術協会」を創設。1935年に《憩ふ女》が第九回台展の特選第一等となり、「台湾総督賞」を受賞します。1939年には、《赤い衣》が日本で第三回新文展に入選、1940年に《花と女》が第三回新文展（奉祝展）に入選するなど、以後台湾の優れた西洋美術家としての歴史地位を確かなものとしました。1946年、第一回台湾省美術展覧会の審査委員となり、出品した《星期日（日曜日）》は台湾省政府から蒋介石総統に贈呈されました。1948年の《黄昏》、《郊遊（ピクニック）》といった大作は、画家の代表作とされています。1945年の台湾光復後、三峡の地方政治に足を踏み入れたほか、1947年には長福巌清水祖師廟再建工事の責任者に推挙されました。その後から、作品の題材やスタイルはしだいに郷土の写実へと向かい、その表現は独自の道を歩み、傑出した大家としての風格を帯びて行きます。1962年以後は、文化大学、国立芸術専科学校、師範大学などの美術教授や主任などの教職を歴任。芸専等の雕塑科学生を指導して三峡祖師廟の金属浮雕工事に参加させ、アカデミックな専門技術を伝統寺廟建築の現場に投入したことは、台湾芸術教育史において初めての試みでした。李梅樹による美術教育推進への貢献は、大学での正規教育以外にも、厳粛で精緻な美的素養でもって、祖師廟に招いた多くの伝統的木彫・石彫師らを指導し、祖師廟は彫刻の名品がつまった「東方芸術の殿堂」へと作り上げられ、現代台湾寺廟建築の古典的名作となりました。晩年には、美術界からの推薦により、油画学会理事長、美協理事長、油画学会栄誉理事長等の職を歴任しました。</p>
        <router-link to="/intro/statement" class="button" alt="もっと知るためにクリック">
          <span>詳細</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
      <div class="content" v-show="language === 'ko'">
        <h1>화가소개</h1>
        <p>리메이수（ 李梅樹, 1902～1983）어려서 일본총독부 중국어(國語)학교사범부에서 교육을 받았으며, 서양화에 깊은 영향을 받아 , 그림을 배우고 싶다는 생각을 자연스럽게  가지게 되었습니다. 초기작품 1927년 "정물「靜物」",1928년 "싼샤읍내「三峽的町裡」"제 1 회, 제 2 회 대만미술대전(臺灣美術展覽會)에서 각각 입선하였습니다. 1928 년에 도쿄로 건너가 가와바타미술학교(川端畵學校), 도슈샤(同舟社 ), 혼고양화연구소(本鄕洋画硏究所) 세 군데 회화 연구소에서 그림을 배웠습니다. 다음해에  도쿄미술대학 입시시험에 합격하였고, 일본 화단의 거장 나가하라 고타로 (長原孝太郎) , 고바야시 만고 (小林 萬吾 ),오카다 사부로스케(岡田三郎助)등에게 그림을 배워서 사실주의의 기초를 다졌습니다. 1934년 천청보(陳澄波)、옌쉐이롱(顏水龍)、양산랑(楊三郎)、랴오지춘(廖繼春)、천칭펀(陳清汾)、리스차오(李石樵)、다테이시 데쯔오미 (立石鐵臣)가 모여 타이양미술협회(臺陽美術協會)를 결성하였습니다.  1935년 작품 " 휴식을 취하는 여성「小憩之女」"은 제 9회 대만미술대전에서 특1등에 당선되었으며 ,  대만총독부상(臺灣總督獎)을 수상하였습니다. 1939년  작품 "빨간옷「紅衣」"제3회 일본미술전람회(日本美術展覽會, 이전의 제국미술전람회)에서 입선하였습니다. 1940년 작품 "꽃과여인「花與女」" 제 4회 일본미술전람회(日本美術展覽會)에서 입선함으로써 대만의 걸출한 서양미술가의 역사적인 지위를 확고히 했습니다. 1946년 제1회 대만성전람회「省展」 심사위원으로 참여하였고, 작품 "일요일「星期日」" 을 출품하였는데 , 이 작품은 지방정부관료가 구입하여 장제스 (蔣介石 )총통에게 증여하였습니다.  1948년 작품" 황혼「黃昏」"、"야유회「郊遊」"같은 대작은 화가의 대표작이 되었습니다. 1945 년 대만광복 한 후에  싼샤(三峽)의 지방 정치에 발을 들여 놓은 것 이외에 1947 년에는 싼샤주스절(三峽祖師廟)재건사업의 책임자로 추대되었습니다. 이때부터 작품의 소재와 스타일은 점차 향토를 주제로 사실적으로 표현하는 독자적인 스타일을 만들어 사실주의 거장이 되었습니다.  1962 년 이후 문화대학, 국립예술학교, 사범 대학 등의 미술학과교수 및 주임 등의 교직을 역임하였습니다. 자신이 지도한  국립예술학교 조소학과 학생들을  싼샤주스절(三峽祖師廟) 금속부조작업 공정에 참여시켰습니다. 이는 학술적 기술을 전통 사찰 건축 현장에 투입 한 것으로  대만 예술교육사에서는 처음 시도되는 것이였습니다.  리메이수(李梅樹)교수가 대만미술교육에 공헌한것으로는 대학의 정규 교육 뿐만 아니라 엄격하고 심도 깊은 미적 소양을 가지고, 싼샤주스절(三峽祖師廟)의  초대 많은 전통 목조 • 석조조각가들을 지도하여, 싼샤주스절(三峽祖師廟) 는  조각 명품이 걸린 '동방 예술의 전당'으로 탄생시켰습니다.  현대 대만 사찰건축의 고전 명작이되었습니다. 노년에는 대만화단의 유화학회이사장, 미술협회 이사장, 유화학회 명예이사장등의 고위직에 추대 되었습니다.</p>
        <router-link to="/intro/statement" class="button" alt="더 알기 위해 클릭">
          <span>더 읽기</span>
          <font-awesome-icon icon="angle-right" />
        </router-link>
      </div>
    </div>
    <div class="spotlight bg-gray half">
      <h1 v-show="language === 'zh'">參觀須知</h1>
      <div class="rules-container" v-show="language === 'zh'">
        <div class="rule">
          <div class="title">
            <div class="icon"><font-awesome-icon icon="dollar-sign" /></div>
            <h3>本館採收費參觀制</h3>
          </div>
          <div class="content">
            <p><span>成人</span><span>100 元 / 每位</span></p>
            <p><span>敬老 / 學生 / 軍警</span><span>80 元 / 每位</span></p>
            <p><span>身心障礙者<br />及其必要陪伴者一位</span><span>50 元 / 每位</span></p>
            <p><span>嬰幼兒</span><span>免費</span></p>
            <p>酌收之參觀費用，本館將作為清潔費用途使用</p>
          </div>
        </div>
        <div class="rule">
          <div class="title">
            <div class="icon"><font-awesome-icon icon="clock" /></div>
            <h3>開放時間</h3>
          </div>
          <div class="content">
            <p><span>每週六、日</span><span>10:00 AM ～ 05:00 PM</span></p>
            <p>
              其餘時段歡迎團體預約參觀<br />
              （團體預約參觀時間，可提早自上午九點開始，詳情請洽詢本館）
            </p>
          </div>
        </div>
        <div class="rule">
          <div class="title">
            <div class="icon"><font-awesome-icon icon="exclamation" /></div>
            <h3>注意事項</h3>
          </div>
          <div class="content merge">
            <p>額外行程視情況酌收額外導覽費</p>
            <p>入館參觀請勿攝影、飲食、吸煙</p>
            <p>未滿 12 歲兒童請由家長陪伴參觀</p>
            <p>其他參觀細則請洽 <a href="tel:0226732333">(02)2673-2333</a><br />
              E-mail : <a href="malito:limeishu@gmail.com">limeishu@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div class="list" v-show="language === 'en'">
        <h1>Instructions for Visit</h1>
        <ul>
          <li>The gallery admission charges each person with a cleaning fee of NT100 and NT80 for elderly/student/military and police. The gallery admission for infants and babies are free.</li>
          <li>Opening hours for visits are Saturdays and Sundays, from 10:00AM to 05:00PM. In other times, group reservation for visit is encouraged (The visit time for group reservation starts as early at 9A.M. Please consult with the gallery for more information).</li>
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
          <li>これ以外のコースについては、状況により追加ガイド費を徴収する場合があります。</li>
          <li>入館時における、写真撮影・飲食・喫煙はご遠慮下さい。</li>
          <li>12歳未満の児童の参観には、保護者の方の付き添いが必要です。</li>
          <p>その他、参観に関することについては、こちらまでお問合せ下さい。<br>電話 : <a href="tel:0226732333">(02)2673-2333</a>、E-mail : <a href="malito:limeishu@gmail.com">limeishu@gmail.com</a></p>
        </ul>
      </div>
      <div class="list" v-show="language === 'ko'">
        <h1>관람안내</h1>
        <ul>
          <li>관람비용:  유료관람제이며,  일반인 대만달러100원, 경로/학생/군경 대만달러80원 ,유아무료입니다.</li>
          <li>개관시간: 매주 토요일과 일요일 오전10시~오후 5시, 평일 단체예약관람을 환영합니다. 단체예약관람시간은 오전9시부터 가능하고 ,기타문의사항은 기념관에 문의바랍니다.</li>
          <li>이외 일정은 소액의 가이드비용이 추가됩니다. </li>
          <li>본 기념관내에서는 촬영 및 음식물섭취를 금지하고 있으며, 금연구역입니다.</li>
          <li>12세미만아동은 보호자가 동행하여야만 관람이 가능합니다.</li>
          <p>기타관람문의는<br>전화： <a href="tel:0226732333">(02)2673-2333</a>, 혹은 이메일：<a href="malito:limeishu@gmail.com">limeishu@gmail.com</a>로 문의 바랍니다.</p>
        </ul>
      </div>
    </div>
    <div class="spotlight half">
      <h1 v-show="language === 'zh'">推薦閱讀</h1>
      <h1 v-show="language === 'en'">Recommended Reading</h1>
      <h1 v-show="language === 'ja'">お勧めの読書</h1>
      <h1 v-show="language === 'ko'">추천 독서</h1>
      <carousel class="slider-container"
      :loop="true"
      :autoplayTimeout="3000"
      :perPage="device.isMobile ? 1 : 3"
      :autoplayHoverPause="true"
      :navigationEnabled="true"
      navigationNextLabel="<svg aria-hidden='true' data-fa-processed='' data-prefix='fas' data-icon='angle-right' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' class='svg-inline--fa fa-angle-right fa-w-8'><path fill='currentColor' d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'></path></svg>"
      navigationPrevLabel="<svg aria-hidden='true' data-fa-processed='' data-prefix='fas' data-icon='angle-left' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' class='svg-inline--fa fa-angle-left fa-w-8'><path fill='currentColor' d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z' class=''></path></svg>">
        <slide v-for="(post, i) in post.data" :key="i" v-if="device.isMobile ? i < 5 : i <= 6">
          <div class="slider" @click="$router.push(`/culture/post/${post._id}`)">
            <img v-if="post.meta.image" :src="post.meta.image" :alt="post.meta.imageAlt ? post.meta.imageAlt : post.title">
            <iframe v-if="post.meta.video" :src="post.meta.video" frameborder="0"></iframe>
            <div class="content">
              <h2>{{ post.title }}</h2>          
              <p>{{ `${post.content.substring(0, 100)}...` }}</p>
              <router-link :to="`/culture/post/${post._id}`" class="button" alt="點一下來閱讀全文">
                <span>閱讀全文</span>
                <font-awesome-icon icon="angle-right" />
              </router-link>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <div class="spotlight bg-light">
      <div class="traffic">
        <div class="contants">
          <div class="container">
            <div class="header">
              <h1 v-show="language === 'zh'">交通資訊</h1>
              <h1 v-show="language === 'en'">Traffic</h1>
              <h1 v-show="language === 'ja'">交通信息</h1>
              <h1 v-show="language === 'ko'">교통안내</h1>
              <div class="bar">
                <a class="item" v-for="(item, i) in map.bar" :alt="item[language]" :class="{ 'active': i === map.choosed }" @click="map.choosed = i" :key="i">
                  <div class="icon">
                    <font-awesome-icon :icon="item.icon" />
                  </div>
                  <span>{{ item[language] }}</span>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="block" v-for="(info, i) in map.data[map.choosed][language]" :key="i">
                <div class="syb">{{ i+1 }}</div><p>{{ info }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0443806157864!2d121.37067131500416!3d24.93055798402082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681bec4aab9289%3A0x19406de61e70b2d4!2z5p2O5qKF5qi557SA5b-16aSo!5e0!3m2!1szh!2stw!4v1516105422004" frameborder="0" allowfullscreen></iframe>
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
      map: {
        bar: [
          {
            'en': 'HSR&TRA',
            'zh': '高鐵/火車',
            'ja': '高鉄/鉄道',
            'ko': '고속철도와 기차',
            icon: ['fas', 'train']
          },
          {
            'en': 'MRT',
            'zh': '捷運',
            'ja': 'MRT',
            'ko': '타이베이MRT',
            icon: ['fas', 'subway']
          },
          {
            'en': 'Bus',
            'zh': '公車',
            'ja': '路線バス',
            'ko': '버스',
            icon: ['fas', 'bus']
          },
          {
            'en': 'Drive',
            'zh': '自行開車',
            'ja': '自家用車',
            'ko': '자가용이용시',
            icon: ['fas', 'car']
          }
        ],
        data: [
          {
            'zh': [
              '搭乘臺鐵或高鐵至板橋火車站',
              '循站內指標前往板橋公車站',
              '搭乘公車（台北客運 910 ）至安溪國小站（李梅樹紀念館）下車',
              '下車後步行約2分鐘內可到達李梅樹紀念館'
            ],
            'en': [
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
            ],
            'ko': [
              '기차 혹은 고속철도를 타고, 반차오(板橋)역에서 내리시면 됩니다.',
              '역내 안내도를 따라 반차오(板橋)역으로 이동',
              '910번 버스를 타고 안시(安溪)초등학교정류장에서 하차',
              '하차한 후 도보로 약 3분후 리메이수 (李梅樹)기념관에 도착'
            ]
          },
          {
            'zh': [
              '乘坐臺北捷運BL藍線（板南線）。',
              '於新埔站、板橋站、永寧站及頂埔站皆可下車，循站內指標前往公車站。',
              '搭乘公車至李梅樹紀念館（參考「公車」路線標籤）。'
            ],
            'en': [
              'Take Taipei MRT BL Blue Line (Bannan Line).',
              'Get off the bus from Xinpu Stop, Banqiao Stop, Yongning Stop, and Dingpu Stop. Follow the sign for proceeding to bus stop.',
              'Take the bus to get to Li Mei-shi Memorial Gallery (refer to “Bus” Route Label).'
            ],
            'ja': [
              '台北MRT（捷運）の青いライン（板南線）に乗車',
              '新埔駅、板橋駅、永寧駅、頂埔駅のいずれかにて下車、駅内の表示に従いバス停へ',
              '路線バスで李梅樹記念館へ（「路線バス」での交通案内を参照）'
            ],
            'ko': [
              '타이베이MRT(지하철) BL라인 (반난라인)（板南線）',
              '신푸(新埔)역, 반차오(板橋)역, 용닝(永寧)역, 딩푸(頂埔)역에서 내리신후에 지하철 역내 안내도를 따라 버스정류장으로 이동',
              '버스를 타고 리메이수 (李梅樹)기념관에 도착할수 있습니다. 버스노선 안내도를 참고하세요.'
            ]
          },
          {
            'zh': [
              '板橋、新埔的朋友，你可以搭乘 910、940 路線公車到安溪國小（李梅樹紀念館）站下車，再步行約 3 分鐘就可到達',
              '土城、頂埔，可搭乘 705、706 公車到礁溪里站步行約 10 分鐘；或搭 916 公車到三峽老街站步行約 10 分鐘',
              '台北市東區，可搭 939 公車到台北大學三峽校區站，步行約 20 分鐘',
              '樹林、新莊，可搭 885、802 公車，到三峽老街站，再步行約 10 分',
              '中、永和，可搭 908 公車到三峽國小站，再步行約 15 分'
            ],
            'en': [
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
            ],
            'ko': [
              '신푸(新埔)역, 반차오(板橋)역에서  910번과 940번버스를 타고, 안시(安溪)초등학교정류장에서 내리신후 도보약3분',
              '투청(土城),딩푸(頂埔)에서 705 번, 706 번 버스를 타고 지아오시리(礁溪里)에서 하차 도보10분, 혹은 916번버스를 타고 ,싼샤옛거리(三峽老街)정류장에서 하차 도보 약10분',
              '타이베이시똥취(台北市東區)에서 939 번버스를  타고, 타이베이대학교싼샤캠퍼스(台北大學三峽校區)에서 하차 도보 약20분',
              '수린(樹林),신좡(新莊)에서 885 번,802 번버스를 타고, 싼샤옛거리(三峽老街)정류장에서 내려 도보 10분',
              '융허(永和), 중허(中和)에서 908번을 타고 ,싼샤초등학교(三峽國小)정류장에서 하차 도보약15분후 도착'
            ]
          },
          {
            'zh': [
              '行駛國道三號並於三峽交流道離開高速公路。',
              '下交流道後轉 110 縣道（復興路）並沿路直行。',
              '右轉中華路直行後在安溪國小前路口右轉。',
              '於長福停車場停車（長福停車場位於光明路右測）。'
            ],
            'en': [
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
            ],
            'ko': [
              '3번고속도로에서 싼샤나들목( IC)에서 일반도로 진입',
              '싼샤나들목( IC)에서 110번국도로 진입 푸싱로(復興路)방향으로 직진',
              '중화로(中華路)에서 우회전하고, 직진 한 후 안시(安溪)초등학교 앞에서 우회전',
              '창푸(長福) 주차장에 주차, 창푸(長福) 주차장은 광밍로(光明路)우측에 위치'
            ]
          }
        ],
        choosed: 0
      }
    }
  },
  computed: {
    ...mapGetters(['language', 'device', 'news', 'post'])
  },
  mounted () {
    this.getNews()
    this.getPost()
    document.querySelector('.VueCarousel-navigation-prev').setAttribute('alt', '上一頁最新消息')
    document.querySelector('.VueCarousel-navigation-next').setAttribute('alt', '下一頁最新消息')
  },
  methods: {
    ...mapActions({ getNews: 'getAllNews' }),
    ...mapActions({ getPost: 'getAllPost' }),
    next () {
      this.$refs.flickity.next()
    },
    previous () {
      this.$refs.flickity.previous()
    }
  }
}
</script>
