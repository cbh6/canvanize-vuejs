import Vue from 'vue'
import Router from 'vue-router'
import ProjectList from '@/components/ProjectList'
import ProjectDetail from '@/components/ProjectDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProjectList',
      component: ProjectList
    },{
      path: '/project-detail/:id',
      name: 'ProjectDetail',
      component: ProjectDetail,
      props: true
    }
  ]
})
