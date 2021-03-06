# node-echarts-demo
使用echarts在node.js中生成雷达图

## 准备环境
该工具主要依赖canvas来生成图片,所以需要预装一些环境,
参考:https://github.com/Automattic/node-canvas <br/>

OS | Command
----- | -----
OS X | `brew install pkg-config cairo pango libpng jpeg giflib`
Ubuntu | `sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++`
Fedora | `sudo yum install cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel`
Solaris | `pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto`
Windows | [Instructions on our wiki](https://github.com/Automattic/node-canvas/wiki/Installation---Windows)

### 运行
```sh
yarn && yarn start
```

生成效果如下:

![image](test.jpg)