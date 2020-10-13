import Vue from "vue";
import VueRouter from "vue-router";
// 去除重复点击时的警告
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path:"/",
        redirect:"/index"
      },
      {
        path:"/index",
        component:()=>import("@/views/Index.vue")
      },{
        path:"/news",
        component:()=>import("@/views/News.vue")
      },{
        path:"/voiceRoom",
        component:()=>import("@/views/VoiceRoom.vue"),
        children:[
          {
            path:"/voiceRoom",
            redirect:"/voiceRoom/room"
          },{
            path:"room",
            component:()=>import("@/components/voiceRoom/Room.vue")
          },{
            path:"broadcast",
            component:()=>import("@/components/voiceRoom/Broadcast.vue")
          },{
            path:"attention",
            component:()=>import("@/components/voiceRoom/Attention.vue")
          },{
            path:"party",
            component:()=>import("@/components/voiceRoom/Party.vue")
          },
        ]
      },{
        path:"/discover",
        component:()=>import("@/views/Discover.vue")
      },{
        path:"/me",
        component:()=>import("@/views/Me.vue")
      },
    ],
  },{
    path: '*',
    component: () => import('@/views/NotFound.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
