<template>
  <div>
    <div class="paragraph" v-show="language === 'zh-TW'">
      <h1>三峽祖師廟</h1>
      <h2>緣起</h2>
      <p>三峽祖師廟創建於清乾隆三十四年（西元1769年），歷經三度重建。第一次因大地震原廟被毀，經於清道光十三年（西元1833年）重建。第二次因甲午戰爭失敗，清廷締約馬關，將台灣割讓給日本，三峽鎮民不願異族統治，以本廟為反抗大本營；事敗，廟堂遭日軍焚毀，至光緒二十五年（西元1899年）再度重建。</p>
      <p>今祖師廟為第三次重建，始於民國三十六年（西元1947 年）農曆七月，由本籍畫壇耆宿名藝術家李梅樹（西元1902-1983年）親主其事；自四十六歲起至八十二歲止，以半生之歲月為弘揚傳統藝術文化與繁榮桑梓，并追念清水祖師公之豐功偉績，而規劃重建，其結構純以我國傳統式古法建造，建築彫刻之美聞名遐邇，故有「東方藝術殿堂」之美譽。</p>
      <p>全廟建築均以精彫細琢，歷經四十九年尚未完成；殿內之木雕、石刻、浮彫或銅鑄，無一不是匠心獨運鬼斧神工之傑作。三峽祖師廟實為一座代表傳統文化的藝術館，亦可稱為雕刻博物館，常年吸引無數中外遊客，藝術專家學者及友邦貴賓蒞臨觀賞，歎為觀止。</p>
      <h2>大事記</h2>
    </div>
    <div class="paragraph" v-show="language === 'en-US'">
      <h1>Sanxia Zushi Temple</h1>
      <h2>Origin</h2>
      <p>Sanxia Zushi Temple was initially built in 1769 and underwent three reconstructions. The first reconstruction was because of the demolition of original temple from a great earthquake and was reconstructed in 1833. The second reconstruction took place in 1899 after the temple was burned down by the Japanese army when Taiwan was ceded to Japan in the Treaty of Shimonoseki due to the loss by Qing Dynasty in the first Sino-Japanese War while Sanxia Township people were refused ruling by foreign country and using Zushi Temple as the anti-Japanese camp.</p>
      <p>Today Zushi Temple underwent third reconstruction since 1947, where local Taiwanese artist Li Mei-Shu (1902-1983) hosted in person and elaborated the traditional arts, culture and prosperity over half of his life time from 46 years old to 82 years old. Li Mei-shu also commemorated the merits and great achievement of Zushiye by designing the reconstruction. The structure was based on Taiwan’s traditional ancient techniques and renowned for the aesthetics of building sculpture, which is hence known as the “Oriental Art Palace.”</p>
      <p>The entire temple building was carefully crafted with sophistication and has not been completed after 49 years. The wooden sculpture, stone carving, relief or copper casting inside the palace were all masterpieces of exceptional craftsmanship. Sanxia Zushi Temple is indeed an art gallery that represents traditional culture, which is also known as the carving museum, attracting numerous Taiwanese and foreign tourists all year round while art experts, scholars and diplomatic guests visit and appreciate with great admiration.</p>
      <h2>Chronicles</h2>
    </div>
    <div class="paragraph" v-show="language === 'ja'">
      <h1>三峡祖師廟</h1>
      <h2>縁起</h2>
      <p>三峡祖師は、清朝期の乾隆34年（1769）に創建され、これまで三度の再建を経ています。一度目は大地震によって廟が倒壊し、道光13年（1833）に再建されました。二度目の再建は、日清戦争の敗北により清朝が下関条約を結んで台湾を日本に割譲した際、三峡の郷民は異民族による支配を嫌って本廟を抵抗の本営としましたが、これに敗れて廟堂は日本軍によって燃やされ、その後光緒25年（1899）になって再び建造されたものです。</p>
      <p>現在の祖師廟は三度目の再建で、民国36年（1947）旧暦7月より、台湾画壇の長老である著名な芸術家・李梅樹（1902-1983）自らが手がけました。李梅樹の46歳から82歳の時のことで、その半生をかけて伝統芸術文化の振興と繁栄、また清水祖師公の功績を追慕して再建が計画されたものです。その建造には台湾伝統の古式の方法が用いられ、建築彫刻の美しさで広く知られており、「東方芸術の殿堂」の名で讃えられています。</p>
      <p>廟の建築全体が精巧な彫刻によって彩られ、49年を経てもまだ未完成のままです。堂内の木彫・石彫・浮彫・銅製鋳造は、どれも独特な工夫が凝らされた超絶技巧の傑作です。伝統文化を代表する美術館、また彫刻博物館とも呼べるこの三峡祖師廟には、年中多くの国内外からの観光客、美術関係者や研究者、各国の貴賓らが鑑賞に訪れ、賞賛を送っています。</p>
      <h2>主要事項年表</h2>
    </div>
    <div class="timeline-container">
      <div class="timeline" v-for="(item, i) in docs[language]" :key="i">
        <div class="date"><span>{{ item.date }}</span></div>
        <div class="content">
          <p v-for="(item, j) in item.content" :key="j">{{ item }}</p>
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
        docs: {}
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
        this.docs = await this.getDocsByType('temple-chronicles')
      }
    }
  }
</script>