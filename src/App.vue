<template>
  <div>
  <app-header></app-header>
  <router-view>
  <list-blogs></list-blogs>
  <add-blog></add-blog>
  <show-blog></show-blog>
  <admin-login></admin-login>
  </router-view>
  <app-footer></app-footer>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
import listBlogs from './components/listBlogs.vue'
import header from './components/header.vue'
import footer from './components/footer.vue'
import adminLogin from './components/adminLogin.vue'

export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blogs': listBlogs,
    'app-header': header,
    'app-footer': footer,
    'admin-login': adminLogin,
  },
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
