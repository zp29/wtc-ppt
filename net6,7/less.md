
title: Less.
speaker: 29~

[slide]

# [Less][less]

> css高端写法,在css基础上添加了`变量`.`函数`.`嵌套`.`模块化`

[less]: http://www.bootcss.com/p/lesscss/


[slide]

## 变量.

```css

/* LESS */

@color: green;
h1{
  color: @color;
}

/* 生成的CSS */
h2{
  color: green;
}

```

[slide]

# 嵌套.

```css

/* Less */
header {
  background-color: green;
  h2 {
    color: orage;
  }
}

/* 生成的Css */
header {
  background-color: green;
}
header h2 {
  color: orage;
}

```


[slide]

## 函数.

```css

/* Less */
.container() {
  width: 1200px;
  margin: 0 auto;
  padding-left:15px; padding-right:15px;
}
header{
  .container();
  background-color: green;
}

/* 生成的Css */
header{
  width: 1200px;
  margin: 0 auto;
  background-color: green;
}

```

[slide]

## 模块化.

```css
/* Less */
@import "normalize.css";
/* 引入normalize.css; */
@import "var";
@import "header";
@import "content";
@import "footer";
/* 引入 var.less header.less footer.less; */
```

[slide]

# 做个小案例...

.....

[slide]

## 推荐

- [Less](http://www.bootcss.com/p/lesscss/)
>  十分钟入门教程,更多需要自己去练习.

- [Sass](http://www.w3cplus.com/sassguide/)
> 更加高端的css另种写法,可能比less更加强大.











