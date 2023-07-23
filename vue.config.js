module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    port: 8080
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/index.scss";`
      }
    }
  },
  configureWebpack: config => {
    // 浏览器：web, electron : electron-renderer
    config.target = 'web';
  }
};
