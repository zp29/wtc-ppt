title: Git.
speakey: 29~
[slide]

## 第一课
# Git

[slide]

# 安装
[前戏][git]
[git]: ./hello.md#3

[slide]

# 作品备份放在哪儿

[github][github]
> 国外，使用人多，速度慢

[coding][coding]
> 国内，使用人少，速度快

[github]: http://github.com
[coding]: http://coding.com



[slide]

# 本节课需要记的关键字

- `git`
<!-- > 所有命令开头 -->

- `clone`
<!-- > 克隆或是下载 -->

- `add`
<!-- > 添加 -->

- `commit`
<!-- > 作出保证 -->

- `push`
<!-- > 上传 -->

[slide]

# 本节课要求

1. 在github上创建一个项目
2. 将项目下载到本地
3. 在本地修改文件
4. 然后将文件上传至github


[slide]
> 什么？你没有账号？

## [注册][lg]
[github][github]
[coding][coding]

[github]: http://github.com
[coding]: http://coding.net
[lg]: https://jingyan.baidu.com/article/455a9950abe0ada167277864.html

[slide]

# 新建项目

[slide]

# 克隆Github仓库到本地

```
$ git clone ...@git.com
```

[slide]

# 添加index.html，将其上传至本地仓库

```
$ git add index.html
# git commit -m "add index.html"
```

> git config --global user.name "你的名字"

> git config --global user.email "你的邮箱"

[slide]

# 将本地仓库内容上传至github

```
$ git push origin master
```

[slide]
# 回顾

> 补齐关键字

`git` 所有命令的开头

`clone` 下载(克隆)远程仓库到本地

`add` `commit` 添加到本地仓库

`push` 将本地仓库内容上传至Github

[slide]

# 重重复复做`n+1`遍

[slide]

# 写错了传上去了怎么办

> 有后悔药!


[slide]

# 后悔药关键字

`checkout`

[slide]

# 找到版本号 ...

![img1](http://oxqv64sd9.bkt.clouddn.com/wtc-ptt-git-checkout.jpg)

```
$ git checkout 版本号
```

> git为了防止版本冲突，使用了哈希算法

[slide]

# 分支多人协作

> 多人多条线工作

```
$ git branch -b "分支名字"
// 许多企业都是使用自己的名字字母为分支名称
```


[slide]

## 以上

# 常用git命令

> 多多练习，不要停，github就是你以后找工作(IT行业)的关键
