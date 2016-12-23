<template>
  <div class="subreddit">
    <h2>{{ name }}</h2>

    <div class="phone-viewport">
      <md-list class="custom-list md-triple-line" v-for="obj in posts">
        <listPost :item="obj"></listPost>
      </md-list>
    </div>
  </div>
</template>
<script >
  import listPost from './listPost' 

  export default {
    props: ['name'],
    data: function () {
      return { posts: [] }
    },

    created: function(){
      // this.$http.get("https://www.reddit.com/r/"+ this.name +"/top.json?limit=5")
      this.$http.get("http://hispanoclub.com/wp-json/wp/v2/posts")
      .then(function(resp){
        console.log(resp.data)
        this.posts=resp.data;
        // this.posts=resp.data.data.children;
      });
    }
    ,components: {
        listPost
    }
  }
</script>
