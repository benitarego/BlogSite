import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
import listBlogs from './components/listBlogs.vue'
import singleBlog from './components/singleBlog.vue'
import adminLogin from './components/adminLogin.vue'

export default [
    {path: '/', component: showBlog},
    {path: '/add', component: addBlog},
    {path: '/list', component: listBlogs},
    {path: '/blog/:id', component: singleBlog},
    {path: '/login', component: adminLogin},
]