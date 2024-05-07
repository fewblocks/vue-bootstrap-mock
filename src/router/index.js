import { createRouter, createWebHistory } from 'vue-router'


/**
 * クイズ quiz
 * 名言石碑 aphorism
 * コレクション collection
 * ログイン、ログアウト login
 * 
 * のページの作成
 * 
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      // top画面
      path: '/',
      name: 'top',
      component: () => import('../components/pages/Top.vue'),
      meta: {
        layout: 'Default'
      }
    },
    {
      // サンプル画面1
      path: '/sample-page-one',
      name: 'sample-page-one',
      component: () => import('../components/pages/SamplePageOne.vue'),
      meta: {
        layout: 'Default'
      }
    },
    {
      // サンプル画面2
      path: '/sample-page-two',
      name: 'sample-page-two',
      component: () => import('../components/pages/SamplePageTwo.vue'),
      meta: {
        layout: 'Default'
      }
    },
  ]
})


export default router
