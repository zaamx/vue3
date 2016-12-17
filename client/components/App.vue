<template>
  <div id="app" v-md-theme="'default'">
    <md-toolbar class="md-warn">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Vue Material</h2>

      <md-button>Add</md-button>
      <md-button>Remove</md-button>
    </md-toolbar>

    <router-view></router-view>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <!-- Top del sidebar nav -->
      <topSidenav></topSidenav>

      <!-- Lista de items -->
      <listSidenav></listSidenav>

    </md-sidenav>
  </div>
</template>
<script>

import topSidenav from './topSidenav' 
import listSidenav from './listSidenav' 

export default {
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  }
  , components: {
    topSidenav
    ,listSidenav
  }

};
</script>

<style>

.page {
  text-align: center;
}
</style>
