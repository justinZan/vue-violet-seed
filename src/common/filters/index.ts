import Vue from 'vue';

Vue.filter('status-icon', (status: any) => {
  if (status) {
    return `iconfont icon-succeed`;
  } else {
    return `iconfont icon-defeated`;
  }
});
