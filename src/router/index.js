import Vue from 'vue'
import Router from 'vue-router'
import index1 from '@/components/index1'
import editorcon from '@/components/index2'
import content1 from '@/components/indexs/content1'
import content2 from '@/components/indexs/content2'
import content3 from '@/components/indexs/content3'
import preview from '@/components/emerge/preview'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index1',
      component: index1,
      children: [
        {
          path: '',
          component: content1
        },
        {
          path: 'content2',
          component: content2
        },
        {
          path: 'content3',
          component: content3
        }
      ]
    },
    {
      path: '/editorcon',
      name: 'editorcon',
      component: editorcon,
    },
    {
      path: '/preview',
      name: 'preview',
      component: preview,
    },
  ]
})
