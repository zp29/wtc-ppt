

let gulp = require('gulp');
let less = require('gulp-less');
let cssmin = require('gulp-clean-css');
let autoprefixer = require('gulp-autoprefixer');
let rename = require('gulp-rename');
let connect = require('gulp-connect');

gulp.task('connect', () => {
  connect.server({
    root: 'dist/',
    livereload: true
  });
});

gulp.task('html', () => {
  gulp.src('src/index.html')
  	.pipe(gulp.dest('dist/'))
    .pipe(connect.reload())
});
gulp.task('watchHtml', () => {
	gulp.watch('src/**/*.html',['html'])
})

gulp.task('less', () => {
	gulp.src('src/less/app.less')
			.pipe(less())
			.pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true
    	}))
    	.pipe(cssmin())
			.pipe(gulp.dest('dist/css'))
			.pipe(connect.reload())
})
gulp.task('normalize', () => {
	gulp.src('./node_modules/normalize.css/normalize.css')
			.pipe(rename('normalize.less'))
			.pipe(gulp.dest('src/less/'))
})
gulp.task('watchLess', () => {
	gulp.watch('src/less/**/*.*',['less']);
})

gulp.task('default',[
	'connect', 'html', 'less', 'normalize',
	'watchHtml', 'watchLess'
])






