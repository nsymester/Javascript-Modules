const { src, dest } = require('gulp');
const pkg = require('../package.json');

function scripts(cb) {
  src(pkg.paths.scripts.src).pipe(dest('build/js'));
  cb();
}

/**
 * @desc bundles js into multiple files and watches for changes
 */
function es_scripts(cb) {
  let files = [pkg.paths.es_scripts.src];

  // start fresh
  $.del.sync(['/js/ES6/app.bundle.js']);

  const tasks = files.map(function(entry) {
    let bundler = $.browserify({
      entries: entry, // Entry point
      debug: true // Output source maps
    }).transform($.babelify, {
      presets: ['@babel/preset-env']
    });
    // .transform($.uglifyify, { global: true });

    const bundle = function() {
      return (
        bundler
          .bundle() // Start bundle
          .on('error', function(err) {
            // print the error (can replace with gulp-util)
            $.log.error(err.message);
            // end this stream
            this.emit('end');
          })
          .pipe($.source(entry))
          .pipe($.buffer())
          // rename them to have "bundle as postfix"
          .pipe(
            $.rename({
              dirname: '', // don't include full path
              extname: '.bundle.js' // Output file
            })
          )
          .pipe(dest('scripts')) // Output path
          .pipe(
            reload({
              stream: true,
              once: true
            })
          )
      );
    };

    if (isWatching) {
      bundler = $.watchify(bundler);
      bundler.on('update', bundle);
    }

    return bundle();
  });

  //create a merged stream
  $.es.merge(tasks).on('end', cb);
}

exports.scripts = scripts;
exports.es_scripts = es_scripts;
