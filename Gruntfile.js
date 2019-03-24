module.exports = function(grunt) {
 let num = 9;

  grunt.initConfig({
    concat: {
        js: {
          src: ['assignments/weathersite/js/currentdate.js', 'assignments/weathersite/js/hamburger.js', 'assignments/weathersite/js/windchill.js'],
          dest: 'assignments/weathersite/js/build/all.scripts.js'
        },
        css: {
          src: ['assignments/weathersite/css/normalize5.0.0.min.css', 'assignments/weathersite/css/small.css', 'assignments/weathersite/css/medium.css', 'assignments/weathersite/css/large.css'],
          dest: 'assignments/weathersite/css/build/all.styles.css'
      },
    },
    copy: {
      main: {
      files: [
        {expand: true, src: ['assignments/weathersite/js/build/all.scripts.js', 'assignments/weathersite/css/build/all.styles.css'],
        dest: 'build/', flatten: true, filter: 'isFile',
      },
    ]
    },
  },
    watch: {
      js: {
        files: ['assignments/weathersite/js/*.js', 'js/*.js'],
        tasks: ['concat:js', 'copy:main'],
      },
      css: {
        files: ['assignments/weathersite/css/*.css'],
        tasks: ['concat:css', 'copy:main'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'copy', 'watch',]);
};

