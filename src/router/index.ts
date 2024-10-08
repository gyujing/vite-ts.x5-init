import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes/index';

// app router
// 创建一个可以被 Vue 应用程序使用的路由实例
const router = createRouter({
  // 创建一个 hash 历史记录。
  history: createWebHashHistory(),
  // 应该添加到路由的初始路由列表。
  routes,
});

export default router;
