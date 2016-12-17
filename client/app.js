import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueResource from 'vue-resource'

sync(store, router)

Vue.use(VueResource);
Vue.use(VueMaterial);

Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'blue'
})


const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}

router.beforeEach((to, from, next) => {
	Vue.nextTick(function () {
	  // DOM updated
	  console.log(router.app) // prints a Vue$2 object
	  app.closeSidenav();
	  next();
	})
})

