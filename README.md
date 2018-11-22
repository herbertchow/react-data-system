# react-data-system

#### 项目介绍
1、react, redux, react-router, echarts, antd从零打造数据系统
2、采用create-react-app并结合个人偏好建立项目

#### 在线地址
<a href="http://www.herbertc.tech/pro/react-data-system/index.html" target="_blank">http://www.herbertc.tech/pro/react-data-system/index.html</a>

#### 安装教程
package.json已经限定好版本

1. yarn 安装
2. npm run dev  (or  npm run start)   本地运行
3. npm run build  打包


#### 目录架构
*以下 readme.txt 为占位符，可直接删除

```
│  .gitignore
│  ga.txt
│  LICENSE
│  package.json
│  README.md
│  run_copy _自动复制打包文件.bat
│  yarn.lock
│  
├─build  //打包文件夹
│  │  asset-manifest.json
│  │  favicon.ico
│  │  index.html
│  │  manifest.json
│  │  service-worker.js
│  │  
│  ├─static
│  │  ├─css
│  │  │      main.cd5652e3.css
│  │  │      
│  │  ├─js
│  │  │      main.0e24866d.js
│  │  │      
│  │  └─media
│  │          logo.5d5d9eef.svg
│  │          
│  └─test
│      └─mock
│              chartData.json
│              registerData.json
│              tableData.json
│              
├─config  //webpack配置
│  │  env.js
│  │  paths.js
│  │  polyfills.js
│  │  webpack.config.dev.js
│  │  webpack.config.prod.js
│  │  webpackDevServer.config.js
│  │  
│  └─jest
│          cssTransform.js
│          fileTransform.js
│          
├─public   //静态公共资源
│  │  favicon.ico
│  │  index.html
│  │  manifest.json
│  │  
│  └─test
│      └─mock   //测试数据
│              chartData.json
│              registerData.json
│              tableData.json
│              
├─scripts   //npm脚本
│      build.js
│      build_map.js
│      start.js
│      test.js
│      
├─src    //工程源文件夹
│  │  Entry.js  //根组件
│  │  index.js  //入口文件
│  │  logo.svg
│  │  registerServiceWorker.js   //pwa缓存设置
│  │  
│  ├─api   //接口统一管理
│  │      api.js
│  │      index.js
│  │      
│  ├─assets    //静态资源
│  │  ├─images
│  │  │      readme.txt
│  │  │      
│  │  ├─less
│  │  │  │  hp_reset.less
│  │  │  │  index.less
│  │  │  │  
│  │  │  └─lib
│  │  │          normalize.css
│  │  │          
│  │  └─text
│  │          global-text.js
│  │          
│  ├─components    //组件
│  │  │  index.js
│  │  │  
│  │  └─layout
│  │          Hbheader.js
│  │          Hbheader.less
│  │          Hbmenu.js
│  │          Hbmenu.less
│  │          
│  ├─pages    //页面
│  │  ├─App
│  │  │      App.js
│  │  │      App.less
│  │  │      App.test.js
│  │  │      
│  │  ├─Common
│  │  │      Common404.js
│  │  │      
│  │  ├─FlowAnalysis
│  │  │      FlowAnalysis.js
│  │  │      FlowAnalysis.less
│  │  │      
│  │  ├─IndexHome
│  │  │      IndexHome.js
│  │  │      IndexHome.less
│  │  │      
│  │  ├─Login
│  │  │      Login.js
│  │  │      Login.less
│  │  │      
│  │  ├─Register
│  │  │      Register.js
│  │  │      Register.less
│  │  │      
│  │  └─ReportSheet
│  │          chartOption.js
│  │          ReportSheet.js
│  │          ReportSheet.less
│  │          
│  ├─redux   //全局数据仓库
│  │  │  action-creators.js
│  │  │  create-store.js
│  │  │  promise-middleware.js
│  │  │  reducers.js
│  │  │  
│  │  └─modules
│  │          readme.txt
│  │          
│  ├─router   //路由配置
│  │      config.js
│  │      index.js
│  │      menu.js
│  │      
│  └─utils    //公用工具函数
│          index.js
│          
└─static    //其他一些静态资源
    │  readme.txt
    │  
    ├─img
    │      readme.txt
    │      
    └─lib
            readme.txt
```

#### 其他


如果觉得这对你有用，欢迎赞赏，十分感谢^_^!

<img src="https://note.youdao.com/yws/public/resource/44d039a6b5a80a951a6b91c1ec68edc8/xmlnote/WEBRESOURCE8eedffa282631eac107e518740c03d3c/786" width="300" alt="赞赏码">
<img src="https://note.youdao.com/yws/public/resource/44d039a6b5a80a951a6b91c1ec68edc8/xmlnote/WEBRESOURCE52aad7fb56944972d96a60a02bc1fdf4/788" width="300" alt="赞赏码">