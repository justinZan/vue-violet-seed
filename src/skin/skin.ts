export const Skin = {
  // 切换主题
  changeTheme(themeValue: any) {
    // 需要移到单独的文件存放
    const itemPath = './themes/' + themeValue.toLowerCase() + '/themes.css';
    this.loadCss(itemPath);
    localStorage.setItem('themeValue', themeValue);
  },
  loadCss(path: string) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.setAttribute('class', 'skinCss');
    link.href = path;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);
  }
};

