<template>
  <div>
    <div class="paragraph" v-show="language === 'zh-TW'">
      <h1>與我們合作</h1>
      <p>本館歡迎各式館際交流，也歡迎跨界合作</p>
      <h2>藝術，日常</h2>
      <p>藝術，不該只存在美術館或博物館裡，也不該只存在收藏家的客廳裡，或是在學校的美術科系裡。藝術應該要走出來，走到人群裡，走到大街小巷裡，走到日常生活裡。</p>
      <p>無牆美術館是本館主要推動的精神之一，歡迎大小公司行號、各級大專院校亦或是各式非營利團體，想要用藝術妝點周邊的環境，讓藝術走進生活之中，本館能夠提供作品輸出品做出借展覽、提供全套藝術行程規劃，也可以進一步合辦特展。</p>
      <h2>文史，創作</h2>
      <p>文史資料不應該被塵封在檔案庫裡，是時候拿出來清清上面的灰，看看創作的契機。</p>
      <p>李梅樹，不僅對台灣藝術有不凡的貢獻，對於海山、三峽地方的政治、農業、教育也都可見其成就，本館藏有李梅樹的相關史料，倘若各文史工作者、文字創作者、影像紀錄者與新聞媒體，需要製作相關研究、創作與報導，歡迎與本館聯絡！</p>
      <h2>文化，扎根</h2>
      <p>李梅樹，親手一筆一筆的畫下三峽，親身一步一步的建出祖師廟，而這樣的精神與其欲傳承的文化，應該被繼續傳承下去，歡迎各級大專院校與本館合作，本館可以提供文化、歷史、藝術三種不同面向的教學課程，也能提供長期的導覽實習計畫。</p>
      <p>私人美術館走的辛苦，但是，現實是殘酷的，在政府對藝術品的保存及典藏制度未能有明確法案依循，美術館管理事權統一的法案也仍在排隊，文建會現在的管轄範圍只有國立台灣美術館，加上補助私人美術館政府經費實在有限，期許各界愛好藝術的人士，歡迎捐助李梅樹文教基金會。</p>
      <p>小論文、網界博覽會等學生競賽活動，也可以與館方合作，本館可以提供相關資料內容的第一方授權，在網界博覽會的部分也能提供技術支援與指導。</p>
      <h2>在地，連結</h2>
      <p>在地三峽的文化，更需要在地人的協助，與三峽串起連結。</p>
      <p>本館內設有梅樹志工隊，除了在本館進行志工導覽活動外，本館也備有全套的志工訓練課程，只要是對地方願意付出心力的朋友，歡迎加入我們！</p>
      <a href="mailto:limeishu@gmail.com" class="button"><span>聯絡紀念館</span><font-awesome-icon icon="angle-right" /></a>
      <a href="tel:0226730677" class="button"><span>致電紀念館</span><font-awesome-icon icon="angle-right" /></a>
    </div>
    <div class="paragraph" v-show="language === 'ja'">
      <h1>ご協力</h1>
      <p>本館は他館との交流、他業界との協力を積極的に推進しております。</p>
      <h2>芸術・日常</h2>
      <p>芸術は美術館や博物館、コレクター、学校の美術科のなかにのみ存在するものではありません。芸術は人々のなかに入り、都市や裏道を通って、私たちの日常生活に溶け込むものでもあります。</p>
      <p>壁の無い美術館は、本館が推進する重要なコンセプトのひとつです。大小の企業、各種学校、また団体など、周辺環境を芸術で彩り、芸術を生活のなかに取り入れたいと願う方々に、本館は複製品貸出による展覧会、芸術コースの計画、また特別展の共催といった様々な試みに協力いたします。</p>
      <h2>文史・創作</h2>
      <p>李梅樹は台湾芸術に大きな貢献をなしただけでなく、海山・三峡の地方政治、農業、教育にもその成果を見ることが出来ます。本館は李梅樹の関係史料を所蔵しており、文化・歴史研究関係者、文筆家、映像制作者、新聞媒体といった各分野の皆様が、関連研究や創作、報道等に必要であれば、本館へのご連絡を歓迎いたします。</p>
      <h2>文化・根付き</h2>
      <p>李梅樹が自ら一筆一筆描いた三峡、その身で一歩一歩作り上げた祖師廟、このような精神と李梅樹が伝承を望んだ文化は、さらに引き続き伝え、発展させていかなければなりません。本館は各種大学・専門学校と協力し、文化・歴史・芸術の三つの異なる側面から授業課程や長期的なガイド実習計画を提供いたします。</p>
      <p>各界の心あるみなさまからの李梅樹基金会へのご寄付をお待ちしております。</p>
      <p>論文、インターネット博覧会等の学生コンテストの活動にも、本館は協力いたします。関係資料の版権を提供するほか、インターネット博覧会でも技術支援や指導への協力が可能です。</p>
      <h2>地元・連結</h2>
      <p>三峡の地元文化には、多くの地元の方々の協力と結びつきが必要です。</p>
      <p>本館は梅樹ボランティア隊を設置して、館内ボランティアガイドとして活動しているほか、ボランティア訓練課程を実施しています。皆様の参加をお待ちしております！</p>
      <a href="mailto:limeishu@gmail.com" class="button"><span>ご連絡方法</span><font-awesome-icon icon="angle-right" /></a>
      <a href="tel:0226730677" class="button"><span>記念館へのお電話</span><font-awesome-icon icon="angle-right" /></a>
    </div>
    <div class="paragraph" v-show="language === 'en-US'">
      <h1>Cooperation</h1>
      <p>The gallery encourages exchange with other galleries and interdisciplinary cooperation.</p>
      <h2>Arts &amp; Daily</h2>
      <p>Arts should not only exist in gallery or museum nor the hands of collectors, or the department of arts in universities. Arts should be introduced to people, walk into the people and blend in the daily life of civilians.</p>
      <p>Wall-free gallery is one of the major concepts promoted by the gallery. We encourage companies, regardless of the size, colleges and universities or groups intending embellish the environment with arts and blend arts with life to borrow exhibits from us. Our gallery offers articles, provide packaged artistic itinerary plan and joint exhibition.</p>
      <h2>Cultural History &amp; Creation</h2>
      <p>Li Mei-Shu not only makes extraordinary contribution to the arts of Taiwan but also achievement in the politics, agriculture and education in Haishan and Sanxia regions. The Gallery collects relevant historic materials of Li Mei-Shu and in case any cultural and historic workers, writers, image documentary, and news media require the production of relevant research, creation and report, please contact with the gallery.</p>
      <h2>Culture &amp; Foundation</h2>
      <p>Li Mei-Shu drew Sanxia in person and built the Zushi Temple in person step by step. Such philosophy and the culture of heritage should be sustained for legacy and elaboration. We encourage colleges and universities to cooperate with the Gallery as we offer three dimensions of instructional courses and long-term tour internship programs in culture, history and arts.</p>
      <p>Anyone with the intent may make conation to the Li Mei-Shu Cultural and Educational Foundation.</p>
      <p>Papers, CYBERFAIR and other student competitions can also collaborate with the Gallery. The Gallery offers first-party licensing for relevant information as well as the technical support and guidance on CYBERFAIR.</p>
      <h2>Local &amp; Connection</h2>
      <p>Local Sanxia Culture requires assistance from local people to establish connections with Sanxia.</p>
      <p>The Gallery offers a Mei-Shu Volunteer team in charge of volunteer tour of the gallery and the full volunteer training courses. We encourage you to join our volunteer models.</p>
      <a href="mailto:limeishu@gmail.com" class="button"><span>Contant Us</span><font-awesome-icon icon="angle-right" /></a>
      <a href="tel:0226730677" class="button"><span>Call the Memorial Gallery</span><font-awesome-icon icon="angle-right" /></a>
    </div>
    <div class = "paragraph" v-show="language === 'ko'">
      <h1>제휴협력</h1>
      <p>본 기념관은 다양한 종류의 박물관과 교류하고 있고 , 타 업계와의 협력을 환영합니다.</p>
      <h2>예술, 일상</h2>
      <p>예술은 미술관이나 박물관안에 있거나 수집가의 손안 혹은 미술관련학과에만 있는것이 아니라, 예술은 사람들 속에 들어가 도시와 뒷길을 통해서 우리의 일상 생활에 녹아 있습니다.</p>
      <p>벽이없는 미술관은 본 기념관이 추구하는 정신중의 하나입니다. 크고 작은 기업, 각종 학교단체 및 여러 단체들 주변 환경을 예술품으로 장식하여, 예술을 생활 속에 도입하고 싶어하시는분들에게, 본관은 복제품을 대여하고 있고, 또한 특별전 공동주최 등 다양한 시도에 협력하고 있습니다.</p>
      <h2>문화역사, 창작</h2>
      <p>리메이수(李梅樹)는 대만 예술에 큰 공헌을했을뿐만 아니라, 해산(海山)・싼샤(三峽)의 지방 정치, 농업, 교육에도 성과를 이루었습니다.  본 기념관에는 리메이수(李梅樹)의 관련사료를 소장하고 있습니다. 문화 · 역사 연구 관계자, 작가, 영상 제작자, 신문 매체등 각 분야에 종사하시는분이 이와 관련된 연구 및 창작 보도 등에 필요한 경우, 본관에 연락에 연락주시기바랍니다.</p>
      <h2>문화, 뿌리</h2>
      <p>리메이수(李梅樹)는 한획 한획 싼샤(三峽)를 그렸고, 천천히 조금씩 싼샤주스절(三峽祖師廟)을 완성하였습니다.  이와 같은 정신과 전통문화는 계승발전되어야 합니다. 본 기념관은 각계의 연구단체나 학교와의  협력을 환영합니다. 본 기념관은 문화,역사,예술 세 가지 측면에서의 강좌와 장기 가이드인턴과정을 제공하고 있습니다.</p>
      <p>리메이수(李梅樹)기금회는 각계의 뜻있는 여러분의 기부를 기다리고 있습니다.</p>
      <p>논문, 인터넷 박람회 등 학생경연대회에도 본 기념관은 협력할 수 있으며, 본 기념관은 관련자료의 저작권을 제공할 뿐만이나라, 인터넷박람회의 기술지원과 지도를 제공하겠습니다.</p>
      <h2>지역, 연결</h2>
      <p>싼샤지역의 문화는 지역주민들의 협조가 필요하며, 함께 협력해 나아가야 합니다.</p>
      <p>본 기념관은 자원봉사팀을 운영하고 있습니다. 본 기념관내 자원봉사 가이드로 활동 하고 있을 뿐아니라, 자원봉사훈련프로그램을 갖추고 있습니다. 여러분의 자원봉사참여를 기다리고 있습니다!</p>
      <a href="mailto:limeishu@gmail.com" class="button"> <span> 연락 방법 </span> <font-awesome-icon icon="angle-right"/> </a>
      <a href="tel:0226730677" class="button"> <span> 기념관에 전화 </span> <font-awesome-icon icon="angle-right"/> </a>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['language'])
    }
  }
</script>