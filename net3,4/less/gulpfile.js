let gulp = require("gulp")
let less = require("gulp-less")
// 编译less
let cssmin = require("gulp-clean-css")
// 压缩css
let autofixer = require('gulp-autoprefixer')
// 自动添加后缀
let babel = require("gulp-babel")
let plumber = require('gulp-plumber');
let jsmin = require("gulp-uglify")
// 压缩js
let imgmin = require("gulp-imagemin")
// 压缩img
let template = require('gulp-template')
// 模板文件 

let connect = require('gulp-connect')
// 服务器

gulp.task('connect', () => {
	connect.server({
        root: 'dist/',
        // 服务器目录 
		livereload: true
	})
})
// 开启服务器

gulp.task('html', () => {
    gulp.src('src/index.html')
        .pipe(template({style:'css/index.css'}))
        .pipe(template({script:'js/main.js'}))
        // 替换HTML中 <%=>
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload())
})
gulp.task('watchhtml', () => {
    gulp.watch('src/*.html',['html'])
})

gulp.task('less', () => {
    gulp.src('src/css/main.less')
        .pipe(less())
        // 解析less -> css
        .pipe(cssmin())
        // 压缩 css文件
        .pipe(gulp.dest('dist/css'))
        // 将压缩后的css文件保存至dist/css文件夹下
        .pipe(connect.reload())
        // 刷新浏览器
})


gulp.task('watchless', () => {
    gulp.watch('src/css/**/*.*',['less']);
    // 当css下的 所有文件 有修改时 执行less
})

gulp.task('js', () => {
    gulp.src('src/js/main.js')
        .pipe(plumber({}, true, function(err){
            console.log('ERROR!!!!');
            console.log(err);
        }))
        // es6语法报错 继续bash
        .pipe(babel({
            presets: ['es2015']
        }))
        // ES6 -> ES5
        .pipe(jsmin())
        // 压缩js
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload())
})
gulp.task('watchjs', () => {
    gulp.watch('src/js/**/*.*',['js'])
    // 监听js下的所有文件 
})

gulp.task('img', () => {
    gulp.src('src/img/**.**')
        .pipe(imgmin())
        // 压缩图片
        .pipe(gulp.dest('/dist/img'))
})

gulp.task('default',[
    // task
    'connect','html','less', 'js', 'img',
    // watch
    'watchhtml','watchless', 'watchjs'
]);



