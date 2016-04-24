var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var serverPath  = 'web-demo';
var configPaths = {
        sass: {
            src: 'assets/sass',
            dest: serverPath + '/css'
        }
    };

// Watch Files For Changes & Reload
gulp.task('serve', [], function() {
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
});
