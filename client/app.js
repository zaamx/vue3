import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
sync(store, router)

Vue.use(VueMaterial);

Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'pink'
})
const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}
