module.exports = function(grunt) {
  var es6ify = require('es6ify');

  grunt.registerTask('require-math', "Requires the built file.", function() {
    require('./dist/math');
  });

  grunt.initConfig({
    browserify: {
      dist: {
        src: 'lib/index.js',
        dest: 'tmp/math.es5.js',
        options: {
          standalone: 'Math',
          transform: [es6ify]
        }
      }
    },

    concat: {
      dist: {
        src: [es6ify.runtime, 'tmp/math.es5.js'],
        dest: 'dist/math.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['browserify', 'concat', 'require-math']);
};
