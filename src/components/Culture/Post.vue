<template>
  <div class="paragraph">
    <h1>{{ $route.meta.label[language] }}</h1>
    <div class="card-container">
      <div class="card" v-for="(post, i) in post.data" :key="i" @click="$router.push(`/culture/post/${post._id}`)">
        <iframe v-if="post.meta.video" :src="post.meta.video" frameborder="0"></iframe>
        <div v-else class="image" :style="{ 'background-image': `url(${post.meta.image})` }"></div>
        <div class="content">
          <h1>{{ post.title }}</h1>
          <span class="date">{{ new Date(post.date).toLocaleDateString() }}</span>
          <p>{{ `${post.content.substring(0, 50)}...` }}</p>
          <router-link :to="`/culture/post/${post._id}`" class="button" alt="點一下來閱讀全文">
            <span>閱讀全文</span>
            <font-awesome-icon icon="angle-right" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['post', 'language'])
    },
    mounted () {
      if (!this.post.data) {
        this.getAllPost()
      }
    },
    methods: {
      ...mapActions(['getAllPost'])
    }
  }
</script>