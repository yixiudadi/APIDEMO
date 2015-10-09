var gulp = require('gulp');
var server = require('gulp-develop-server');
var livereload = require('gulp-livereload');
var nodeInspector = require('gulp-node-inspector');

var options = {
    path: './bin/www',
    execArgv:[ '--debug' ]
};
 
var serverFiles = [
    './app.js',
    './routes/*.js'
];
 
gulp.task( 'server:start', function() {
    server.listen( options, livereload.listen );
});

gulp.task('debug', function() {
 
  gulp.src([])
    .pipe(nodeInspector());
});

// If server scripts change, restart the server and then livereload. 
gulp.task( 'default', [ 'server:start','debug' ], function() {
    
    function restart( file ) {
        server.changed( function( error ) {
            if( ! error ) livereload.changed( file.path );
        });
        
    }
 
    gulp.watch( serverFiles ).on( 'change', restart );
});