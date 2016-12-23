<template>
    <md-list-item>
      <md-avatar>
        <img :src="item.data" alt="People">
      </md-avatar>

      <div class="md-list-text-container">
        <span>{{ item.title.rendered }}</span>
        <span>Brunch this weekend?</span>
        <p>{{ item.excerpt.rendered }}</p>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon class="md-primary">star</md-icon>
      </md-button>

      <md-divider class="md-inset"></md-divider>
      <!-- <div class="post">
        <a   :href="item.data.url" :style="getImageBackgroundCSS()" 
             target="_blank" class="thumbnail">
               <img :src="item.data.thumbnail">
             </a>

        <div class="details">
            <a :href="item.data.url" :title="item.data.title" target="_blank" class="title">
                {{ item.data.title | truncate}}
            </a>          
            
            <div class="action-buttons">
                <a href="http://reddit.com" title="Vote">
                    <b>{{ item.data.permalink }}</b>
                    <i class="material-icons">thumbs_up_down</i>
                    {{item.data.score}}
                </a>

                <a href="http://reddit.com" title="Go to discussion">
                    <b>{{ item.data.permalink }}</b>
                    <i class="material-icons">forum</i>
                    {{item.data.num_comments}}
                </a>
            </div>
        </div>
    </div> -->
    </md-list-item>
</template>
<script >

  export default {
    props: ['item'],
    methods: {
        getImageBackgroundCSS: function(img) {
            if(img && img!='self' && img!='nsfw') {
                return 'background-image: url(' + img + ')';    
            }
            else {
                return 'background-image: url(assets/img/placeholder.png)'; 
            }
        }       
    }
  }
</script>