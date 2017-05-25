import Vue from 'vue'
import Router from 'vue-router'
import Velocity from 'velocity-animate'
import Hello from '@/components/Hello'
import index0 from '@/components/index0'
import index1 from '@/components/index1'
import index2 from '@/components/index2'
import index3 from '@/components/index3'
import index4 from '@/components/index4'



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components:{
         default:Hello,
         left:index0,
         right:index1
      }
    },
    {
      path:"/index2",
      name:"index2",
      component:index2
    },
    {
      path:"/index3",
      name:"index3",
      component:index3
    },
    {
      path:"/index4",
      name:"index4",
      component:index4
    }
  ]
})
