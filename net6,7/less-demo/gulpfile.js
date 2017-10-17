

let gulp = require('gulp');
// 引入gulp
let less = require('gulp-less');
// 解析LESS模块
let cssmin = require('gulp-clean-css');
// css压缩
let autoprefixer = require('gulp-autoprefixer');
// css添加后缀
let rename = require('gulp-rename');
// 文件名更改
let connect = require('gulp-connect');
// 服务器 

gulp.task('connect', () => {
// 开启服务器
  connect.server({
    root: 'dist/',
    // 服务器目录
    livereload: true
    // 热更新
  });
});

gulp.task('html', () => {
// 处理html事件
  gulp.src('src/index.html')
  // 找到index.html
  	.pipe(gulp.dest('dist/'))
  	// 文件另为到dist/
    .pipe(connect.reload())
    // 浏览器刷新
});
gulp.task('watchHtml', () => {
// 监听html
	gulp.watch('src/**/*.html',['html'])
	// html发生变化,执行html
})

gulp.task('less', () => {
// less 事件
	gulp.src('src/less/app.less')
	// 找到less文件 
			.pipe(less())
			// 解析less -> css
			.pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            // 浏览器兼容
            cascade: true
            // 添加兼容
    	}))
    	// 添加后缀
    	.pipe(cssmin())
    	// CSS解压
			.pipe(gulp.dest('dist/css'))
			// 另存为
			.pipe(connect.reload())
			// 浏览器刷新
})
gulp.task('normalize', () => {
	// 复制normalize.css
	gulp.src('./node_modules/normalize.css/normalize.css')
			.pipe(rename('normalize.less'))
			.pipe(gulp.dest('src/less/'))
})
gulp.task('watchLess', () => {
//  监听less
	gulp.watch('src/less/**/*.*',['less']);
	// less发生变化 执行 less事件 
})

gulp.task('default',[
// 默认事件
	'connect', 'html', 'less', 'normalize',
	// 开启服务器 复制html  解析less 复制normalize
	'watchHtml', 'watchLess'
	// 监听 html  less
])






