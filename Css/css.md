title:HTML+CSS
speaker:zp

[slide]
## 回顾
# HTML+CSS

[slide]
# HTML5
```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<title>HTML5</title>
</head>
<body>
	<h1>H5</h1>
</body>
</html>
```
## HTML4
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Document</title>
</head>
<body>
     <h1>HTML</h1>
</body>
</html>
```

[slide]
#HTML标签分类
	- 块状
	```
	 <h1>~<h6>
	 <p>
	 <ul><li>
	 <div>
	 <table>
	……
	```
	- 内联
	```
		<strong>  <em>  <a>  <span>  <i>……
	```
	- 内联块
	``
		<img>
	``
	- 其他 ... ```<hr> <br>```

[slide]
# 特点
	- 块状
		* 独占一行,width`100%`
		* 自定义width和height
	- 内联
		* 一行放多个
		* 可置宽高
	- 内联块状
		* 一行放多个
		* 自定义高宽

[slide]
#几个重要的标签及属性
	- html -> lang
		* ```
		<html lang="zh-CN">
		```
	- meta -> charset
		* ```
		<meta charset="UTF-8">
		```
	- a -> target
		* ```
		<a href="zp-29.com" target=“_blank”>zp-29</a>
		```
	- img -> title+alt
		* ```
		<img src="##" title="划上图片文本" alt="图片丢失文本">
		```
	- h1 ~ h6
		* _h4 ~ h6 可忽略_
---
	___<i class="seox">主要从SEO的角度思考</i><style>.seox{ font-size:14px; }</style>___

[slide]
# CSS
	## 结构与样式相分离
	
[slide]
# [CSS中一些规范](http://codeguide.bootcss.com/)
	- 用两个空格代替一个制表符
	- 相类似属性可放一行
		* ```
			height: 100px; width: 100px;
		```
		* _尽量一行一条属性_
			- ```
		background-color: #fff;
		color: #fff;
		```
	- 省略小于 1 的小数前面的 0 ,0px 去掉 px
		* ```
		.5 代替 0.5
		.5px 代替 -0.5px
		```
		* ```
		margin: 0; 代替 margin: 0px;
		```
	- 使用简写
		* ```
		margin: 10px 5px;
		padding: 10px 5px;
		```
[slide]
# CSS居中问题
### 大一时一个重大难题

[slide]
# 回望 HTML标签分类
	## 块状
	## 内联
	## 内联块状

[slide]
# 块状居中
	- margin
		* ```
		marging:auto;
		```
	- position
		* ```
		left: 50%;top: 50%;
		margin: -(height/2) 0 0 -(width/2);
		```
		* ```
		left: 50%;top: 50%;
		transform: translate(-50%,-50%);
		```
		* ```
		更多……
		```
	- 更多...

[slide]
# 内联居中 | 内联块状居中
	- ```
	parent{
		text-align: center;
	}
	child{
		display: inline; || display: inline-block;
	}
	```
	___ display: inline-block; ___ 间隙bug
	```
	parent{
		font-size:0;
	}
	child{
		display: inline-block;
		font-size:15px;
	}
	```

[slide]
#CSS中常见的bug

[slide]
#Bug
- Float-丢失高度
	```
.clearfix{
	display:table;
	clear:both;
}
	```
- margin-影响父级
	```
parent{
	overflow: hidden;
}
	```
- 各浏览器默认样式不同
	* normalize.css
	* reset.css
	```
*{
		padding: 0;margin: 0;
		list-style: none;
		color: #000;
		border: none;
		/* 极不推荐 */
}
	```
[slide]
## 更强大的CSS
# [LESS](http://www.bootcss.com/p/lesscss/)