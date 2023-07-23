## 种子工程打包
#### 工程打包
* 在系统根目录下新建vue.config.js文件，它会被@vue/cli-service 自动加载

``` js

module.exports = {
  baseUrl:  './' ,                                                         -- 应用运行路径
  productionSourceMap: false,                                              -- 打包时是否需要map文件
  devServer: {
    port: 8080                                                             -- 运行端口
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/helpers/mixin.scss";`              -- 将样式编译时webpack导入到全局vue文件中
      }
    }
  },
  configureWebpack: config =>{

    // 浏览器：web, electron : electron-renderer
    config.target = 'web'                                                  -- 配置工程运行环境，影响require对象加载问题。
  }
};


```
