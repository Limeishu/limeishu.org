<template>
  <div class="error">
    <div class="msg" @click="$router.push('/')">
      <h1>{{ warnMsg[$route.params.status] ? $route.params.status : '!' }}<span>{{ warnMsg[$route.params.status] ? warnMsg[$route.params.status][language][0] : warnMsg['!'][language][0] }}</span></h1>
      <p>{{ warnMsg[$route.params.status] ? warnMsg[$route.params.status][language][1] : warnMsg['!'][language][1] }} <font-awesome-icon icon="angle-right" /></p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        warnMsg: {
          '404': {
            'zh': ['頁面不存在', '迷路了？要不小憩之女我帶你去別的地方看看吧'],
            'en': ['Not Found', 'Sorry, that page does not exist. Go Back'],
            'ja': ['Not Found', '이 페이지를 찾을 수 없습니다. 돌아 가기'],
            'ko': ['Not Found', '']
          },
          '403': {
            'zh': ['你沒有權限', '迷路了？要不小憩之女我帶你去別的地方看看吧'],
            'en': ['Forbidden', 'Sorry, that page does not exist. Go Back'],
            'ja': ['禁じられた', 'このページは見つかりませんでした。戻る'],
            'ko': ['금지 된', '이 페이지를 찾을 수 없습니다. 돌아 가기']
          },
          '-1': {
            'zh': ['頁面維護中或未建立', '迷路了？要不小憩之女我帶你去別的地方看看吧'],
            'en': ['Site Maintenance', 'This page is under maintenance. Go Back'],
            'ja': ['サイトのメンテナンス', 'このページはメンテナンス中です。 戻る'],
            'ko': ['사이트 관리', '이 페이지는 공사중입니다. 돌아 가기']
          },
          '!': {
            'zh': ['大黑黑母湯喔', '太閒了？要不要加入李梅樹紀念館資訊組？'],
            'en': ['Hacking Us?', 'Good luck and have fun!'],
            'ja': ['ハッキング?', 'アハハハハハハ'],
            'ko': ['해킹?', '아하하하하하하']
          }
        }
      }
    },
    computed: {
      ...mapGetters(['language'])
    }
  }
</script>
