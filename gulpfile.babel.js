import gulp from 'gulp'
import concat from 'gulp-concat'
import babel from 'gulp-babel'
import annotate from 'gulp-ng-annotate'
import uglify from 'gulp-uglify'
import sass from 'gulp-sass'
import prefix from 'gulp-autoprefixer'
import optimise from 'gulp-csso'
import imgmin from 'gulp-imagemin'
import imgcache from 'gulp-cache'
import tplcache from 'gulp-angular-templatecache'
import bower from 'main-bower-files'
import filter from 'gulp-filter'
import bsync from 'browser-sync'
import {Server} from 'karma'

/*  html  */
gulp.task('html', () => {
  return gulp.src([ '_source/**/*.html', '!_source/**/*.tpl.html' ])
    .pipe(gulp.dest('_build'))
})

/*  javascript  */
gulp.task('javascript', () => {
  return gulp.src([ '_source/**.module.js', '_source/**/*.js' ])
    .pipe(concat('app.js'))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(annotate())
    .pipe(uglify())
    .pipe(gulp.dest('_build'))
})

/*  stylesheets  */
gulp.task('stylesheets', () => {
  return gulp.src(['_source/stylesheets/**/*.scss', '!_source/**/_*'])
    .pipe(sass())
    .pipe(prefix({ browsers: ['> 5%'] }))
    .pipe(optimise())
    .pipe(gulp.dest('_build'))
})

/*  image resources  */
gulp.task('images', () => {
  return gulp.src('_source/resources/images/**/*')
    .pipe(imgcache(imgmin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('_build/resources/images'))
})

/*  static resources  */
gulp.task('static', () => {
  return gulp.src(['_source/resources/**/*'])
    .pipe(gulp.dest('_build/resources'))
})

/*  templates  */
gulp.task('templates', () => {
  return gulp.src('_source/**/*.tpl.html')
      .pipe(tplcache())
      .pipe(uglify())
      .pipe(gulp.dest('_build'))
})

/*  bower frameworks  */
gulp.task('bower', () => {
  const jsFilter = filter('**/*.js', {restore: true})
  const cssFilter = filter('**/*.css', {restore: true})

  return gulp.src(bower())
    .pipe(jsFilter)
    .pipe(concat('frameworks.js')).pipe(uglify())
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(concat('frameworks.css')).pipe(optimise())
    .pipe(cssFilter.restore)
    .pipe(gulp.dest('_build'))
})

/*  test  */
gulp.task('test', (done) => {
  return new Server({
    configFile: `${__dirname}/karma.conf.js`,
    autoWatch: false,
    singleRun: true
  }, done).start()
})

/*  build  */
gulp.task('build', ['build:tasks'], () => {
  bsync.reload()
  gulp.start('test')
})
gulp.task('build:tasks', [
  'html', 'javascript', 'stylesheets',
  'templates', 'images', 'static', 'bower'
])

/*  default  */
gulp.task('default', () => {
  bsync({ server: '_build/' })

  gulp.watch([ '_source/**/*', 'bower_modules/**/*' ], ['build'])
})
