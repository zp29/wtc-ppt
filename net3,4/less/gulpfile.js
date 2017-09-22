

let gulp = require('gulp')
// 引入gulp模块
let connect = require('gulp-connect')
// gulp服务模块
let less = require('gulp-less')
// LESS
let cssmin = require('gulp-clean-css')
// css压缩
let imgmin = require('imagemin')
// 图片压缩
let jsmin = require('gulp-uglify')
// Js压缩

gulp.task('server', () => {
	connect.server({
		// 创建服务器
		root: 'dist/',
		// 服务器根目录
		livereload: true
	})
})


gulp.task('html', () => {
	// 创建 html事件
	gulp.src('src/*.html')
	// 找到src下的所有html
		.pipe(gulp.dest('dist/'))
		// 另存为dtst目录下
		.pipe(connect.reload())
		// 刷新浏览器
})
gulp.task('watchhtml', () => {
	gulp.watch('src/*.html',['html'])
	// 当src下的html文件发生改变的时候，再执行 html事件
})

gulp.task('less', () => {
	// 创建 less事件
	gulp.src('src/less/app.less')
	// 找到src/less/app.less文件
		.pipe(less())
		// 解析成css
		.pipe(cssmin())
		// 将css压缩
		.pipe(gulp.dest('dist/css'))
		// 将css文件另存到dst/css
		.pipe(connect.reload())
		// 刷新浏览器
})
gulp.task('watchless', () => {
	gulp.watch('src/less/**/*.*', ['less'])
	// 监听 less目录所有文件 有所改变 执行 事件less
})

gulp.task('img', () => {
	gulp.src('src/img/**/*.*')
	// 找图img下的所有图片
		.pipe(gulp.dest('dist/img'))
		// 另存为到dist/img下
})


gulp.task('default',[
	// 本地服务器
	'server',
	// 立即执行
	'html', 'less', 'img',
	// 暗中观察
	'watchhtml', 'watchless'
])

