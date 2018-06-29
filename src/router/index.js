import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'layout',
      component: resolve => require(['@/components/layout'],resolve),
      children: [
        {
          path: '/',
          name: 'menu',
          component: resolve => require(['@/components/menu'],resolve),
          children: [
            {
              path: '/menu1',
              name: 'menu1',
              component: resolve => require(['@/components/menu-1'],resolve),
            },
            {
              path: '/menu2',
              name: 'menu2',
              component: resolve => require(['@/components/menu-2'],resolve),
            },
            {
              path: '/menu3',
              name: 'menu3',
              component: resolve => require(['@/components/menu-3'],resolve),
            },
          ]
        }
      ]
    },
    {
      path: '/notfond',
      name: 'notfond',
      component: resolve=>require(['@/components/404'],resolve)
    },
    {
      path: '*',
      redirect: '/notfond'
    }
  ]
})
