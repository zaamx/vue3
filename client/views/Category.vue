<template>
  <div class="page">
    <p>
      Vista categorias {{ greeting }}
    </p>
    <lastPosts name="food"></lastPosts>
  </div>
</template>

<script>
import lastPosts from '../components/lastPosts'

export default {
	data() {
		return{
			greeting: 'Hello'
		}
	}
	,components: {
	    lastPosts
	}
}
</script>
