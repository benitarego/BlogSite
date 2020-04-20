<template>
<center><div id="admin-login">
    <h1>Admin Login</h1>
    <input id="adminemail" type="email" v-model="search" placeholder="Email-id"><br>
    <input id="adminpassword" type="password" v-model="search" placeholder="Password"><br>
    <button type="submit" v-on:click.prevent="login">Login</button>
  </div></center>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
    data() {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {

    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
            this.blogs = data.body.slice(0, 10);
        })
    },
    computed: {
        
    },
    mixins: [searchMixin]
}
</script>

<style>
#admin-login {
    box-sizing: border-box;
    border: 10px black;
    width: 400px;
    padding: 50px;
    margin: 20px;
    border-style: solid ;
}

input[type="email"],[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px ridge;
  border-radius: 4px ;
}

button[type="submit"] {
    background-color: white;
    border: 2px solid black;
    color:black;
    padding: 10px;
    width: 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
}
</style>
