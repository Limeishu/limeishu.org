<template>
  <div class="error">
    <div class="msg" @click="$router.go(-1)">
      <h1>{{ $route.params.status }}<span>{{ warnMsg[$route.params.status][language][0] }}</span></h1>
      <p>{{ warnMsg[$route.params.status][language][1] }} <font-awesome-icon icon="angle-right" /></p>
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
            'zh-TW': ['頁面不存在', '迷路了？要不小憩之女我帶你去別的地方看看吧'],
            'en-US': ['頁面不存在', '迷路了？要不小憩之女我帶你去別的地方看看吧'],
            'ja': ['頁面不存在', '迷路了？要不小憩之女我帶你去別的地方看看吧']
          },
          '-1': {
            'zh-TW': ['頁面維護中或未建立', '迷路了？要不小憩之女我帶你去別的地方看看吧'],
            'en-US': ['頁面維護中或未建立', '迷路了？要不小憩之女我帶你去別的地方看看吧'],
            'ja': ['頁面維護中或未建立', '迷路了？要不小憩之女我帶你去別的地方看看吧']
          }
        }
      }
    },
    computed: {
      ...mapGetters(['language'])
    }
  }
</script>
