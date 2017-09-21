

let gulp = require('gulp')
let connect = require('gulp-connect')
let less = require('gulp-less')
let cssmin = require('gulp-clean-css')
let imgmin = require('imagemin')



gulp.task('server', () => {
	connect.server({
		root: 'dist/',
		livereload: true
	})
})


gulp.task('html', () => {
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist/'))
		.pipe(connect.reload())
})
gulp.task('watchhtml', () => {
	gulp.watch('src/*.html',['html'])
})

gulp.task('less', () => {
	gulp.src('src/less/app.less')
		.pipe(less())
		.pipe(cssmin())
		.pipe(gulp.dest('dist/css'))
		.pipe(connect.reload())
})
gulp.task('watchless', () => {
	gulp.watch('src/less/**/*.*', ['less'])
})

gulp.task('img', () => {
	gulp.src('src/img/**/*.*')
		.pipe(gulp.dest('dist/img'))
})


gulp.task('default',[
	// 本地服务器
	'server',
	// 立即执行
	'html', 'less', 'img',
	// 暗中观察
	'watchhtml', 'watchless'
])

