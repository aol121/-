

import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/pages/Login'

import Home from '@/components/common/home'
import DataView from '@/components/pages/data-view'
import WorkOrder from '@/components/pages/work-order'
import Polling from '@/components/pages/polling'
import Mine from '@/components/pages/mine'



Vue.use(Router)




export default new Router({
//base:'/shishang/',//修改
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      component: Home,
      children:[
        {
          path:'/',//数据页
          component:DataView,
        },
        {
          path:'/work-order',//工单页面
          component:WorkOrder,
        },
        {
          path:'/polling',//巡检页面
          component:Polling,
        },
        {
          path:'/mine',//我的页面
          component:Mine,
        },
      ]
    },
    {
      path: '/login',
      component: Login
    },
    
  ]
})