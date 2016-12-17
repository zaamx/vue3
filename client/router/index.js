import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Category from '../views/Category'

Vue.use(Router)



export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    }
    ,{
      path: '/category',
      component: Category
    }
  ]
})

