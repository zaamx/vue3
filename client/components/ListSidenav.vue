<template>
  <md-list>
    <md-list-item >
      <router-link to="/">
        <md-icon>move_to_inbox</md-icon> <span>Home</span>
      </router-link>
    </md-list-item>
    <md-list-item >
      <router-link to="/category">
        <md-icon>move_to_inbox</md-icon> <span>Category</span>
      </router-link>
    </md-list-item>

    <md-list-item >
      test de link
    </md-list-item>
  </md-list>
</template>
<script >
export default {
  data() {
    return{
      contenido: 'Hello'
    }
  }
}
</script>