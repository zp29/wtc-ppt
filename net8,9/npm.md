
title : npm.
speaker : 29~


[slide]

# `Node`之**npm**包管理

[slide]

# 使用**命令行**下载`jquery`

## 还有`Bootstrap`...

> 还有`更多`

[slide]

# 安装[NodeJs](http://nodejs.org)

## 打开命令行

```bash
node -v
// 显示版本号 v x.x.x
npm -v
// 显示版本号 x.x.x
```
> 出现以上信息表示安装完成
> linux环境下，npm需要单独安装

[slide]

## 试着安装jquery && bootstrap

> 进入一个项目文件夹，打开命令行


[slide]

## 新建项目

# 项目初始化

```
npm init -y
```
> 此时你的项目目录下会有的packge.json文件

[slide]

# 安装jquery && bootstrap

```
npm i jquery --save-dev
npm i bootstrap --save-dev
```

> 此时目录下会有 node_modules/
> 查看packge.json文件


[slide]

# 优势
## 可以移植性高
## 版本控制方便


[slide]

## 介绍两个实用的npm包

[nodeppt](https://github.com/ksky521/nodeppt)
> 文本PPT

[http-server](https://www.npmjs.com/package/http-server)
> 局域网服务器