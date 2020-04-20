<template>
  <div id="show-blog">
    <h1>List Blog Titles</h1>
    <input id="search" type="text" v-model="search" placeholder="Search Blogs">
    <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">
        <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title | to-uppercase }}</h2></router-link>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
    data() {
        return {
            blogs: [],
            search: '',
        }
    },
    methods: {

    },
    created() {
        this.$http.get('https://blogsite-73c10.firebaseio.com/posts.json').then(function(data) {
            return data.json();
        }).then(function(data){
            var blogsArray = [];
            for(let key in data) {
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
        })
    },
    computed: {
        filteredBlogs: function() {
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            });
        }
    },
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        }
    },
    // directives: {
    //     'rainbow': {
    //         bind(el) {
    //             el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    //         }
    //     }
    // },
    mixins: [searchMixin]
}
</script>

<style>
#show-blog {
    max-width: 800px;
    margin: 0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

#search {
    width: 800px;
    height:30px;
}
</style>
