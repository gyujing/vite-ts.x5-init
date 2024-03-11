import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    name: "index",
    path: '/index',
    component: () => import("../../views/Index/index.vue"),
    meta: {
      title: '首页',
    },
  }
];
