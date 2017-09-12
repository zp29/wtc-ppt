
title: gulp+less
speaker: 29~

[slide]
## 小小案例学习
# gulp less



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
npm i gulp gulp-less --save-dev
// 安装gulp-less模块，解析less文件 -> css文件
```

[slide]

## 新建`gulpfile.js`

```
var gulp = require('gulp')
var less = require('gulp-less')
// 引用gulp和less模块

gulp.task('less',function() {
  gulp.src('/src/less/**.**')
  // 找到less目录下所有文件
      .pipe(less())
      // 将less转为css
      .pipe(gulp.dest('/dist/css'))
      // 转换后的css文件保存到dist/css目录下
  })
```


[slide]

# 启动任务
```
// 进入到根目录下
gulp less
```

[slide]

# 当文件发生改变的时候，自动执行less

```
gulp.task('autoless', function() {
  gulp.watch('src/less/**.**', ['less'])
  })
gulp.task('default', ['less','autoless'])
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
