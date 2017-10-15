
title: gulp
speaker: 29~

[slide]
# gulp


[slide]

## 理论
# 说在前面

[slide]

# gulp

前端自动化构建工具

> 压缩图片，压缩css,压缩js,解析Less...

[slide]

# less

Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。

> css的高端写法

[slide]

# 快速上手


[slide]

## 了解目录结构

- dist/
>gulp静态文件目录

- src/
>源文件目录

[slide]

# 搭建gulp环境

```
npm i gulp -g
// 安装gulp
npm i gulp --save-dev
```

[slide]

## 业务需求

# 将src中的html css js 文件复制到dist目录下

[slide]

## 新建`gulpfile.js`

```
var gulp = require('gulp')
// 引用gulp模块

gulp.task('cphtml', () => {
  gulp.src('src/*.hyml')
      .pipe(gulp.dest('dist/'))
  })
```


[slide]

# 启动任务
```
// 进入到根目录下
gulp cphtml
```

[slide]

# 编译less

```
var less = require('gulp-less');

gulp.task('less', () => {
  gulp.src('src/css/app.less')
      .pipe(less())
      .pipe(gulp.dest('dist/css/'))
  })
```

[slide]

## 打开命令行
```
$ gulp autoless
```

[slide]

配置虽繁琐，但每次项目使用的功能都差不多，只需配置`一次`，后面可`多次使用`
> 提前，你需要会看懂gulpfile.js文件


[slide]

# [gulp](https://github.com/nimojs/gulp-book)

## 我的配置文件 [gulpfile](https://github.com/zp29/wtc-ppt)
