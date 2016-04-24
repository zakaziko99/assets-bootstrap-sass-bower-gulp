var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var serverPath  = 'web-demo';
var configPaths = {
        sass: {
            src:  'assets/sass',
            dest: serverPath + '/css'
        }
    };

gulp.task('sass', function() {
    gulp.src(configPaths.sass.src + '/main.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer(
            [
                'last 15 versions',
                '> 1%',
                'ie 8',
                'ie 7'
            ],
            {cascade: true}
        ))
        .pipe(gulp.dest(configPaths.sass.dest))
        .pipe(browserSync.reload({stream: true}))
        .pipe($.size({title: 'Compiling SASS'}))
        .pipe($.sourcemaps.write('./maps'));
});

// Watch Files For Changes & Reload
gulp.task('serve', ['sass'], function() {
    browserSync({
        port: 5000,
        notify: false,
        logPrefix: 'SASS_Project',
        snippetOptions: {
            rule: {
                match: '<span id="browser-sync-binding"></span>',
                fn: function(snippet) {
                    return snippet;
                }
            }
        },
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        server: {
            baseDir: serverPath,
            index: 'index.html'
        }
    });

    gulp.watch(serverPath + '/index.html', browserSync.reload);
    gulp.watch(configPaths.sass.src + '/**/{*.sass, *.scss}', ['sass']);
});

// Default Task
gulp.task('default', ['serve']);
