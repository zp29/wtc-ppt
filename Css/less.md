
title:Less
speaker:zp~

[slide]

#[Less](http://www.bootcss.com/p/lesscss/)

## 高大上的CSS

## <img src="http://ots3ze24j.bkt.clouddn.com/dage.jpg" style="width:300px;margin:auto" >

[slide]

#安装Less

```bash
$ npm i less -g
```

## 编译工具

### 下载安装[Koala](http://koala-app.com/index-zh.html)


[slide]

# 三分钟学会less

## <img src="http://ots3ze24j.bkt.clouddn.com/bang.png" style="width:300px;margin:auto" >

## 常用语法

[slide]

# 常用语法

- 变量

```css
@w:100px;
.box{ width:@w; }
```

- 嵌套

```css
ul{
	>li{}
	ul>li{}
	a{
		&:hover{}
	}
}
```

- 函数

```css
.Pos ( @left:50%,@top:50% ) {
	position:absulute;
	left:@left; top:@top;
}
pre { .PosCenter( 30%,30% ); }
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













