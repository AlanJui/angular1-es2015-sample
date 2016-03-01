import gulp from 'gulp';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import babel from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourceMaps from 'gulp-sourcemaps';
import clean from 'rimraf';
import gulpPlugins from 'gulp-load-plugins';

let plugins = gulpPlugins();

let build = '_build';
let mainFileName = 'app.js';
let minifiedMainFileName = 'app.min.js';
let srcClientRoot = './app';
let outClientRoot = './app';

let src = {
  html: './app/**/*.html',
  client: {
    root: './app',
    scripts: {
      libs: `${srcClientRoot}/bower_components`,
      main: `${srcClientRoot}/app.js`,
      all: [
        `${srcClientRoot}/**/*.js`,
        `${srcClientRoot}/bower_components`,
        `${srcClientRoot}/${build}/**/*.js`
      ]
    }
  },
  server: {}
};

let out = {
  client: {
    scripts: {
      root: `${outClientRoot}/${build}`,
      libs: `${srcClientRoot}/bower_components`,
      main: `${outClientRoot}/${build}/${minifiedMainFileName}`
    }
  },
  server: {
    scripts: {
      folder: ``,
      libs: ``,
      main: ``
    }
  }
};

gulp.task('transpile', () => {
  let bundler = browserify({
    entries: `${src.client.scripts.main}`,
    debug: true,
    extensions: ['js', 'jsx']
  })
    .transform(babel.configure({presets: ['es2015']}));

  bundler.bundle()
    .on('error', function(error) {
        console.error(`\nError: ${error.message}\n`);
        this.emit('end');
    })

    .pipe(source(`${mainFileName}`))
    .pipe(buffer())

    .pipe(sourceMaps.init({loadMaps: true}))
      //.pipe(uglify())
      //.pipe(rename(out.scripts.main))
    .pipe(sourceMaps.write('./', {sourceRoot: `${srcClientRoot}`}))

    .pipe(gulp.dest(`${outClientRoot}/${build}`));
});

gulp.task('clean', function (cb) {
  clean(`${out.client.scripts.main}`, cb);
});

gulp.task('dev-build', ['clean', 'transpile']);

gulp.task('watch', function () {
  gulp.watch(src.client.scripts.all, ['transpile']);
});

gulp.task('serve', ['dev-build', 'watch'], function () {
  plugins.connect.server({
    root: `${outClientRoot}`,
    port: 4242,
    livereload: true,
    fallback: `${outClientRoot}/index.html`
  });
});

//gulp.task('default', () => {
//    console.log('Start Gulp......');
//});
gulp.task('default', ['serve']);
