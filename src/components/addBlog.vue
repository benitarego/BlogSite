<template>
  <div id="add-blog">

    <form v-if="!submitted">
    <h2>Add a New Blog Post</h2>
      <label>Blog Title: </label>
      <input type="text" v-model.lazy="blog.title" required><br>
      <label>Blog Content: </label>
      <textarea v-model.lazy="blog.content"></textarea>
      <label>Blog Content Type: </label>
      <div id="checkboxes"> 
        <label>Music</label>
        <input type="checkbox" value="music" v-model="blog.categories"/>
        <label>Food</label>
        <input type="checkbox" value="food" v-model="blog.categories"/>
        <label>Travel</label>
        <input type="checkbox" value="travel" v-model="blog.categories"/>
        <label>Living</label>
        <input type="checkbox" value="living" v-model="blog.categories"/>
        <label>Technology</label>
        <input type="checkbox" value="technology" v-model="blog.categories"/>
      </div>
      <label>Author's Name: </label>
      <input type="text" v-model.lazy="blog.author" required><br><br><br>
      <center><button type="post" v-on:click.prevent="post">Add Blog</button></center>
    </form>

    <div id="preview">
      <center><h3>Preview Blog</h3></center>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content: </p>
      <p> {{ blog.content }} </p>
      <p>Blog Content Type:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category"> {{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      submitted: false,
    }
  },
  methods: {
    post: function() {
      this.$http.post('https://blogsite-73c10.firebaseio.com/posts.json', this.blog).then(function(data) {
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>


<style>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"], textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}

button[type="post"] {
    background-color: white;
    border: 2px solid black;
    color:black;
    padding: 10px;
    width: 100px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
}
</style>
