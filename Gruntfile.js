module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
        js: {
          src: ['assignments/lesson-7/js/currentdate.js', 'assignments/lesson-7/js/hamburger.js', 'assignments/lesson-7/js/windchill.js'],
          dest: 'assignments/lesson-7/js/build/all.scripts.js'
        },
        css: {
          src: ['assignments/lesson-7/css/normalize5.0.0.min.css', 'assignments/lesson-7/css/small-7.css', 'assignments/lesson-7/css/medium-7.css', 'assignments/lesson-7/css/large-7.css'],
          dest: 'assignments/lesson-7/css/build/all.styles.css',
      },
    },
    watch: {
      js: {
        files: ['assignments/lesson-7/js/*.js'],
        tasks: ['concat:js'],
      },
      css: {
        files: ['assignments/lesson-7/css/*.css'],
        tasks: ['concat:css'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'watch']);
};

