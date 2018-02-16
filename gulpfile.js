'use strict';
var
gulp = require( 'gulp' ),
sass = require( 'gulp-sass' ),
concat = require( 'gulp-concat' ),
uglifyjs = require( 'gulp-uglifyjs' ),
cssnano = require( 'gulp-cssnano' ),
rename = require( 'gulp-rename' );


gulp
.task( 'libs-js',()=>{
	return gulp.src( [
			'src/libs/OwlCarousel2-2.2.1/dist/owl.carousel.min.js',
			'node_modules/izimodal/js/iziModal.min.js',
		] )
		.pipe( concat( 'libs.min.js') )
		.pipe( uglifyjs() )
		.pipe( gulp.dest( 'app/js' ) );
})



.task( 'libs-css',()=>{
	return gulp.src([
			'src/libs/OwlCarousel2-2.2.1/dist/assets/owl.carousel.min.css',
			'src/libs/OwlCarousel2-2.2.1/dist/assets/owl.theme.default.css',
			'node_modules/izimodal/css/iziModal.min.css',
		])
		.pipe( concat( 'libs.min.css' ) )
		.pipe( cssnano() )
		.pipe( gulp.dest( 'app/css') );
})


.task( 'libs-fonts',()=>{
	return gulp.src([
		])
		.pipe( gulp.dest( 'app/fonts' ) );
})

.task( 'libs-img',()=>{
	return gulp.src([
			'src/libs/OwlCarousel2-2.2.1/dist/assets/**/*.+(png|jpg)'
		])
		.pipe( gulp.dest( 'app/css' ) );
})



.task( 'libs',[ 'libs-css','libs-js'/*,'libs-fonts'*/,'libs-img' ])



gulp.task( 'default',['libs']);