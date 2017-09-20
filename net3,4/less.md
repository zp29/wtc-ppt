
title: 3. Less
speaker:zp~

[slide]

#[Less](http://www.bootcss.com/p/lesscss/)

## 高大上的CSS

## <img src="http://ots3ze24j.bkt.clouddn.com/dage.jpg" style="width:300px;margin:auto" >

[slide]

#安装Less环境

```bash
$ npm i less -g
```

## 编译工具

### [Koala](http://koala-app.com/index-zh.html)

### [gulp](http://gulp.org)


[slide]

# 三分钟学会less

## 常用语法

[slide]

# 变量

```css

@width:100px;
// 定义变量
.box{ width:@w; }
// 使用变量

```

[slide]
# 嵌套

```css
ul{
	>li{}
	ul>li{}
	a{
		&:hover{}
	}
}
```

[slide]
# 函数

```css
.Pos ( @left:50%,@top:50% ) {
	position:absulute;
	left:@left; top:@top;
}
pre { .PosCenter( 30%,30% ); }
```

[slide]

# 引入less文件

```css
@import "lib.less";

@import "lib";
```

[slide]
# 趁热打铁
## 写个小例子

[slide]

# 最后

- [Less教程](http://www.bootcss.com/p/lesscss/)
- [Less视频](http://www.imooc.com/learn/61)
- [Sass](http://www.imooc.com/learn/364)和Less相仿，更强大<br>
	- [Compass](http://www.imooc.com/learn/364)和Sass配合使用，更强大
