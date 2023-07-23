import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/fonts/iconfont';
import '@/assets/icons/iconfont.css';
import config from '@/utils/appconfig';
import { Skin } from '@/skin/skin';
import i18n from '@/i18n';
import { DirectiveOptions } from 'vue/types/umd';
import * as directives from '@/common/directives';
import '@/common/filters';
// import { initLog } from './utils/logger';

// 初始化日志
// initLog();
// 加载用户主题
if (localStorage.getItem('themeValue')) {
  Skin.changeTheme(localStorage.getItem('themeValue'));
  document.body.className = localStorage.getItem('themeValue') + '-theme';
} else {
  Skin.changeTheme('white');
  document.body.className = 'white-theme';
}

Object.keys(directives).forEach((key: any) => {
  Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key]);
});

config(store).then(() => {
  Vue.config.productionTip = false;
  Vue.use(ElementUI);
  const whiteList = ['/login'];
  router.beforeEach(async (to: any, from: any, next: any) => {
    if (store.getters.token) {
      if (to.path === '/login') {
        next({ path: '/' });
      } else {
        next();
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        next('/login');
      }
    }
  });

  router.afterEach(() => {});

  new Vue({
    router,
    store,
    i18n,
    render: (h: any) => h(App)
  }).$mount('#app');
});
