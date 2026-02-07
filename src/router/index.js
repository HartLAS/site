import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'BlogView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/BlogView.vue')
    }
  },
  {
    path: '/blog/view/:name',
    name: 'BlogViewArticle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ArticleView.vue')
    }
  },
  {
    path: '/instructions',
    name: 'instructionsView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/InstructionsView.vue')
    }
  },
  {
    path: '/instructions/group_view/:group_name',
    name: 'instructionsGroupView',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/GroupView.vue')
    },
    props: (route) => ({
      group_name: route.params.group_name,
    })
  },
  {
    path: '/instructions/group_view/:group_name/article/:article_name',
    name: 'instructionsGroupArticleView',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ArticleView.vue')
    },
    props: (route) => ({
      group_name: route.params.group_name,
      article_name: route.params.article_name
    })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
