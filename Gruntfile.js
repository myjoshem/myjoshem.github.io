module.exports = function(grunt) {
 let num = 9;

  grunt.initConfig({
    concat: {
        js: {
          src: ['assignments/lesson-' + num + '/js/currentdate.js', 'js/navigation.js', 'assignments/lesson-' + num + '/js/hamburger.js', 'assignments/lesson-' + num + '/js/windchill.js'],
          dest: 'assignments/lesson-' + num + '/js/build/all.scripts.js'
        },
        css: {
          src: ['assignments/lesson-' + num + '/css/normalize5.0.0.min.css', 'assignments/lesson-' + num + '/css/small-' + num + '.css', 'assignments/lesson-' + num + '/css/medium-' + num + '.css', 'assignments/lesson-' + num + '/css/large-' + num + '.css'],
          dest: 'assignments/lesson-' + num + '/css/build/all.styles.css',
      },
    },
    copy: {
      main: {
      files: [
        {expand: true, src: ['assignments/lesson-' + num + '/js/build/all.scripts.js', 'assignments/lesson-' + num + '/css/build/all.styles.css'],
        dest: 'build/', flatten: true, filter: 'isFile',
      },
    ]
    },
  },
    watch: {
      js: {
        files: ['assignments/lesson-' + num + '/js/*.js'],
        tasks: ['concat:js', 'copy:main'],
      },
      css: {
        files: ['assignments/lesson-' + num + '/css/*.css'],
        tasks: ['concat:css', 'copy:main'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'copy', 'watch',]);
};

