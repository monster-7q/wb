import Vue from 'vue'
import VueRouter from 'vue-router'
//去除重复点击时的警告
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push=function push(location){
  return originalPush.call(this,location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
          {
            path: '/',
            redirect: '/play'
          },
          {
            path: '/play',
            component: () => import('../views/Play.vue')
          },
          {
            path: '/message',
            component: () => import('../views/Message.vue')
          },
          {
            path: '/voice',
            component: () => import('../views/Voice.vue')
          },
          {
            path: '/find',
            component: () => import('../views/Find.vue'),
            children: [
              {
                path: '/friends',
                component: () => import('../views/Friends.vue')
              },
              {
                path: '/recommend',
                component: () => import('../views/Recommend.vue')
              },
              {
                path: '/attention',
                component: () => import('../views/Attention.vue')
              }
            ]
          },
          {
            path: '/mine',
            component: () => import('../views/Mine.vue')
          }
    ]
  }

  
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if( to.path === '/find' ) {
    if (sessionStorage.getItem('url')) {
      next(sessionStorage.getItem('url'))
    } else {
      next('/friends')
    }
  } else {
    next()
  }
})

export default router


// {
//   path: '/',
//   redirect: '../views/Friends.vue'
// },
// {
//   path: '/friends',
//   component: () => import('../views/Friends.vue')
// },
// {
//   path: '/recommend',
//   component: () => import('../views/Recommend.vue')
// },
// {
//   path: '/attention',
//   component: () => import('../views/Attention.vue')
// }

