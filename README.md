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
│  LICENSE
│  package.json
│  README.md
│  yarn.lock
│  
├─build   //打包文件夹
│  │  asset-manifest.json
│  │  favicon.ico
│  │  index.html
│  │  manifest.json
│  │  service-worker.js
│  │  
│  ├─static
│  │  ├─css
│  │  │      main.b74a6baa.css
│  │  │      
│  │  ├─js
│  │  │      main.4aebfc49.js
│  │  │      
│  │  └─media
│  │          logo.5d5d9eef.svg
│  │          
│  └─test
│      └─mock  
│              chartData.json
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
├
│                  
├─public   //静态公共资源
│  │  favicon.ico
│  │  index.html
│  │  manifest.json
│  │  
│  └─test
│      └─mock   //测试数据
│              chartData.json
│              tableData.json
│              
├─scripts   //npm脚本
│      build.js
│      build_map.js
│      start.js
│      test.js
│      
├─src     //工程源文件
│  │  App.css
│  │  App.js    //入口组件
│  │  App.test.js
│  │  index.css
│  │  index.js   //入口文件
│  │  logo.svg
│  │  normalize.css
│  │  registerServiceWorker.js    //pwa缓存设置
│  │  
│  ├─api    //接口统一管理
│  │      readme.txt
│  │      
│  ├─assets     //静态资源
│  │  │  readme.txt
│  │  │  
│  │  ├─images
│  │  │      readme.txt
│  │  │      
│  │  └─less
│  │      │  font.less
│  │      │  
│  │      └─lib
│  │              readme.txt
│  │              
│  ├─components   //组件
│  │  │  readme.txt
│  │  │  
│  │  └─layout
│  │          Hbheader.js
│  │          Hbheader.less
│  │          
│  ├─css    //全局css
│  │      hp_reset.css
│  │      
│  ├─pages    //页面
│  │  ├─FlowAnalysis
│  │  │      FlowAnalysis.js
│  │  │      FlowAnalysis.less
│  │  │      
│  │  ├─IndexHome
│  │  │      IndexHome.css
│  │  │      IndexHome.js
│  │  │      
│  │  └─ReportSheet
│  │          chartOption.js
│  │          ReportSheet.js
│  │          ReportSheet.less
│  │          
│  ├─redux    //全局数据仓库
│  │  │  action-creators.js
│  │  │  create-store.js
│  │  │  promise-middleware.js
│  │  │  reducers.js
│  │  │  
│  │  └─modules
│  │          readme.txt
│  │          
│  ├─router   //路由配置
│  │      readme.txt
│  │      
│  └─utils   //公有函数或方法
│          readme.txt
│          
└─static   //其他一些静态资源
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