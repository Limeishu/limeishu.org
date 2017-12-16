<template>
  <div id="footer">
    <ul class="icon">
      <li v-for="link in socialLink"><a :href="link.href"><font-awesome-icon :icon="link.icon" /></a></li>
    </ul>
    <div class="copyright">
      <p v-for="text in copyright">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      socialLink: [
        {
          icon: ['fab', 'facebook-f'],
          name: 'Facebook 粉絲專頁',
          href: 'https://fb.com/limeishu.org'
        },
        {
          icon: ['fas', 'phone'],
          name: '電話',
          href: 'tel:0226732333'
        },
        {
          icon: ['fas', 'fax'],
          name: '傳真',
          href: 'tel:0226736077'
        },
        {
          icon: ['fas', 'envelope'],
          name: '電子郵件',
          href: 'mailto:limeishu@gmail.com'
        },
        {
          icon: ['fab', 'github'],
          name: 'GitHub',
          href: 'https://github.com/Limeishu'
        },
        {
          icon: ['fab', 'youtube'],
          name: 'YouTube',
          href: 'https://www.youtube.com/channel/UCJNhAJ83HO8rTeJHdoMtZJQ'
        }
      ],
      copyright: {
        text: `© ${new Date().getFullYear()}. 李梅樹紀念館 Li Mei-shu Memorial Gallery.`,
        design: 'Design: LIT Team',
        license: 'This work is licensed under the Creative Commons License, CC BY-NC-ND 4.0 ISO'
      }
    }
  }
}
</script>
